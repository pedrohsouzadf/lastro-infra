import { NextResponse } from "next/server";

/**
 * Recebe o formulário do site e repassa para o Apps Script que grava no Sheets.
 *
 * O webhook nunca é chamado do browser: a URL e o token ficam só no servidor.
 * Se fossem para o cliente, qualquer pessoa poderia escrever na sua planilha.
 */

export const runtime = "nodejs";

type Lead = {
  nome?: string;
  empresa?: string;
  email?: string;
  provedor?: string;
  gasto?: string;
  mensagem?: string;
  website?: string; // honeypot
};

const LIMITE = 2000;

function limpa(v: unknown): string {
  return typeof v === "string" ? v.trim().slice(0, LIMITE) : "";
}

export async function POST(req: Request) {
  const url = process.env.SHEETS_WEBHOOK_URL;
  const token = process.env.SHEETS_TOKEN;

  // Sem config, falha explícita — melhor do que aceitar e perder o lead em silêncio
  if (!url || !token) {
    console.error("[lead] SHEETS_WEBHOOK_URL ou SHEETS_TOKEN ausente");
    return NextResponse.json(
      { ok: false, error: "indisponivel" },
      { status: 503 }
    );
  }

  let body: Lead;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "json" }, { status: 400 });
  }

  // honeypot: campo invisível preenchido = bot. Responde ok para o robô não insistir.
  if (limpa(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    nome: limpa(body.nome),
    empresa: limpa(body.empresa),
    email: limpa(body.email),
    provedor: limpa(body.provedor),
    gasto: limpa(body.gasto),
    mensagem: limpa(body.mensagem),
  };

  if (!lead.nome || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) {
    return NextResponse.json(
      { ok: false, error: "dados invalidos" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        token,
        origem: "site",
        recebidoEm: new Date().toISOString(),
      }),
      // Apps Script às vezes trava; sem timeout a função fica pendurada até o limite da Vercel
      signal: AbortSignal.timeout(10_000),
      redirect: "follow",
    });

    // O /exec redireciona para script.googleusercontent.com e pode devolver HTML
    // (página de erro do Google) em vez de JSON — por isso lê como texto primeiro.
    const texto = await res.text();
    let dados: { ok?: boolean } = {};
    try {
      dados = JSON.parse(texto);
    } catch {
      console.error("[lead] resposta não-JSON do Apps Script:", texto.slice(0, 300));
      return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
    }

    if (!res.ok || !dados.ok) {
      console.error("[lead] Apps Script recusou:", res.status, texto.slice(0, 300));
      return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Nunca deixa o lead sumir sem rastro: fica no log da Vercel para recuperação manual
    console.error("[lead] falha ao gravar", err, JSON.stringify(lead));
    return NextResponse.json({ ok: false, error: "falha" }, { status: 502 });
  }
}
