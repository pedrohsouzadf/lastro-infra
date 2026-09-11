import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade — LASTRO",
  description:
    "Como a LASTRO coleta, usa e protege os dados enviados pelo formulário do site, nos termos da LGPD.",
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
};

const ATUALIZADO_EM = "11 de setembro de 2026";

export default function Privacidade() {
  return (
    <div className="site-shell">
      <main className="legal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="legal__back">
            ← Voltar para o site
          </Link>

          <div className="eyebrow legal__eyebrow">
            <span className="eyebrow__line" /> LGPD
          </div>
          <h1>Política de Privacidade</h1>
          <p className="legal__meta">Última atualização: {ATUALIZADO_EM}</p>

          <p className="legal__lead">
            Esta política explica quais dados a LASTRO coleta pelo site, para que
            usa e como você pode pedir que sejam corrigidos ou apagados. Ela vale
            para o formulário de solicitação do Raio-X de Infraestrutura e para o
            contato por e-mail ou WhatsApp.
          </p>

          <h2>Quem é o controlador</h2>
          <p>
            LASTRO Infraestrutura Cloud, responsável pelas decisões sobre o
            tratamento dos dados descritos aqui. Contato do encarregado:{" "}
            <a href="mailto:contato@lastro.cloud">contato@lastro.cloud</a>.
          </p>

          <h2>Quais dados coletamos</h2>
          <p>
            Apenas o que você digita no formulário, e nada além disso:
          </p>
          <ul>
            <li>Nome</li>
            <li>Nome da empresa</li>
            <li>E-mail corporativo</li>
            <li>Provedor de nuvem em uso (AWS, Vercel, Supabase ou outro)</li>
            <li>Faixa de gasto mensal com nuvem e infraestrutura</li>
          </ul>
          <p>
            Não pedimos CPF, CNPJ, dados de cartão, credenciais de acesso nem
            qualquer informação sensível. Se você enviar credenciais por engano,
            avise que apagamos e pedimos a rotação das chaves.
          </p>
          <p>
            O site não usa cookies de rastreamento, pixel de anúncio nem
            ferramenta de analytics de terceiros.
          </p>

          <h2>Por que tratamos esses dados</h2>
          <p>
            Para responder ao seu pedido e avaliar o cenário de infraestrutura
            antes de propor um diagnóstico. A base legal é a do art. 7º, V da
            LGPD — procedimentos preliminares relacionados a um contrato, a
            pedido do titular.
          </p>
          <p>
            Os dados sobre provedor e faixa de gasto servem para dimensionar o
            trabalho antes da conversa. Não usamos essas informações para montar
            perfil comercial nem para qualquer decisão automatizada.
          </p>

          <h2>Com quem compartilhamos</h2>
          <p>
            Não vendemos, alugamos nem cedemos seus dados. Eles passam apenas
            pelos serviços necessários para o site funcionar:
          </p>
          <ul>
            <li>
              <strong>Vercel</strong> — hospedagem do site e processamento do
              envio do formulário.
            </li>
            <li>
              <strong>Google (Sheets e Gmail)</strong> — onde o pedido é
              registrado e de onde sai o aviso interno de novo contato.
            </li>
          </ul>
          <p>
            Esses fornecedores atuam como operadores e podem processar os dados
            fora do Brasil, conforme as políticas de privacidade deles.
          </p>

          <h2>Por quanto tempo guardamos</h2>
          <p>
            Pedidos que não viram proposta são apagados em até 12 meses. Se você
            virar cliente, os dados de contato ficam pelo prazo da relação
            comercial e pelos prazos legais que a exijam. Você pode pedir a
            exclusão antes disso a qualquer momento.
          </p>

          <h2>Seus direitos</h2>
          <p>
            O art. 18 da LGPD garante que você peça, sem custo: confirmação de
            que tratamos seus dados, acesso a eles, correção do que estiver
            incompleto ou desatualizado, anonimização ou eliminação, portabilidade,
            informação sobre com quem compartilhamos, e revogação do
            consentimento.
          </p>
          <p>
            Escreva para{" "}
            <a href="mailto:contato@lastro.cloud">contato@lastro.cloud</a> e
            respondemos em até 15 dias. Se a resposta não resolver, você pode
            registrar reclamação na{" "}
            <a
              href="https://www.gov.br/anpd/pt-br"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANPD <ArrowUpRight size={13} />
            </a>
            .
          </p>

          <h2>Segurança</h2>
          <p>
            O envio do formulário trafega por HTTPS e a planilha onde os pedidos
            ficam registrados é restrita a quem opera a LASTRO. Nenhum sistema é
            imune a incidentes; se algum afetar seus dados de forma relevante,
            avisamos você e a ANPD nos prazos da lei.
          </p>

          <h2>Mudanças nesta política</h2>
          <p>
            Se algo mudar, atualizamos esta página e a data no topo. Alterações
            relevantes para quem já enviou dados são comunicadas por e-mail.
          </p>

          <Link href="/#contato" className="text-link legal__cta">
            Voltar para o formulário <ArrowUpRight size={16} />
          </Link>
        </div>
      </main>
    </div>
  );
}
