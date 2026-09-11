"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const WHATSAPP_NUMBER = "5561982600220";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    currentCloud: "",
    monthlySpend: "",
  });
  const [status, setStatus] = useState<"idle" | "enviando" | "ok" | "erro">(
    "idle"
  );
  // honeypot: bots preenchem tudo, inclusive campos que humanos não veem
  const [website, setWebsite] = useState("");

  const submitted = status === "ok";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "enviando") return;
    setStatus("enviando");

    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.name,
          empresa: formData.company,
          email: formData.email,
          provedor: formData.currentCloud,
          gasto: formData.monthlySpend,
          website,
        }),
      });
      setStatus(r.ok ? "ok" : "erro");
    } catch {
      setStatus("erro");
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Gostaria de agendar um Raio-X de Infraestrutura para a empresa ${formData.company || "[Nome da Empresa]"}.`
  )}`;

  const whatsappDirectUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Vim pelo site da LASTRO e gostaria de conversar sobre a infraestrutura."
  )}`;

  return (
    <section className="contact-section" id="contato">
      <div className="contact-section__grid" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 contact-section__inner">
        {/* Coluna Esquerda: Chamada Direta */}
        <div className="contact-copy reveal-up">
          <div className="eyebrow">
            <span className="eyebrow__line" /> PRÓXIMO PASSO
          </div>
          <h2>
            Seu produto já cresceu.
            <br />
            <em>Faça a base acompanhar.</em>
          </h2>
          <p>
            Conte onde a infraestrutura está hoje. A primeira conversa é técnica,
            direta e sem compromisso.
          </p>

          <div className="pt-8">
            <a
              className="button button--primary button--large"
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar mensagem <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Coluna Direita: Formulário Rápido de Contato */}
        <div className="contact-card reveal-up reveal-up--delay-short">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#153e2b] text-accent">
                <Check size={20} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-paper">
                Solicitação Recebida
              </h3>
              <p className="font-body text-xs text-[#84928a]">
                Entraremos em contato em até 4 horas úteis.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:underline pt-2"
              >
                Falar pelo WhatsApp agora ↗
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 relative">
              <div className="font-mono text-[11px] text-accent uppercase tracking-wider">
                Solicitar Raio-X de Infraestrutura
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-[#0b1110] border border-[rgba(210,232,216,0.15)] text-paper text-xs placeholder:text-[#526359] focus:outline-none focus:border-accent"
                />

                <input
                  type="text"
                  required
                  placeholder="Sua empresa"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-[#0b1110] border border-[rgba(210,232,216,0.15)] text-paper text-xs placeholder:text-[#526359] focus:outline-none focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder="E-mail corporativo"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-[#0b1110] border border-[rgba(210,232,216,0.15)] text-paper text-xs placeholder:text-[#526359] focus:outline-none focus:border-accent"
                />

                <select
                  required
                  value={formData.currentCloud}
                  onChange={(e) =>
                    setFormData({ ...formData, currentCloud: e.target.value })
                  }
                  className={`w-full px-3.5 py-2.5 bg-[#0b1110] border border-[rgba(210,232,216,0.15)] text-xs focus:outline-none focus:border-accent ${
                    formData.currentCloud === "" ? "text-[#526359]" : "text-paper"
                  }`}
                >
                  <option value="" disabled>
                    Onde roda hoje?
                  </option>
                  <option value="AWS">AWS</option>
                  <option value="Vercel">Vercel</option>
                  <option value="Supabase">Supabase</option>
                  <option value="Híbrido (AWS + Vercel/Supabase)">
                    Híbrido (AWS + Vercel/Supabase)
                  </option>
                  <option value="Outro / Não sei">Outro / Não sei</option>
                </select>
              </div>

              <select
                required
                value={formData.monthlySpend}
                onChange={(e) =>
                  setFormData({ ...formData, monthlySpend: e.target.value })
                }
                className={`w-full px-3.5 py-2.5 bg-[#0b1110] border border-[rgba(210,232,216,0.15)] text-xs focus:outline-none focus:border-accent ${
                  formData.monthlySpend === "" ? "text-[#526359]" : "text-paper"
                }`}
              >
                <option value="" disabled>
                  Gasto mensal em nuvem e infraestrutura
                </option>
                <option value="Até R$ 2 mil">Até R$ 2 mil</option>
                <option value="R$ 2–10 mil">R$ 2–10 mil</option>
                <option value="R$ 10–30 mil">R$ 10–30 mil</option>
                <option value="Acima de R$ 30 mil">Acima de R$ 30 mil</option>
                <option value="Não sei">Não sei</option>
              </select>

              {/* honeypot — invisível para humanos, irresistível para bots */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="absolute left-[-9999px] w-px h-px opacity-0"
              />

              <button
                type="submit"
                disabled={status === "enviando"}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#09110a] bg-accent hover:bg-[#4ce066] transition-colors cursor-pointer font-mono disabled:opacity-60 disabled:cursor-wait"
              >
                {status === "enviando" ? "Enviando…" : "Agendar Raio-X"}
              </button>

              {status === "erro" && (
                <div
                  role="alert"
                  className="text-center font-mono text-[10px] text-[#e0745f] leading-relaxed"
                >
                  Não consegui registrar seu pedido.{" "}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline"
                  >
                    Fale pelo WhatsApp
                  </a>{" "}
                  que eu respondo direto.
                </div>
              )}

              <div className="text-center font-mono text-[10px] text-[#6c7b73]">
                Sem cobrança no envio · Diagnóstico em 7 dias
              </div>

              <p className="form-consent">
                Ao enviar, você autoriza a LASTRO a usar estes dados para entrar
                em contato sobre o diagnóstico. Não compartilhamos com terceiros
                e você pode pedir a exclusão a qualquer momento.{" "}
                <a href="/privacidade">Política de privacidade</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
