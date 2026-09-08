"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    currentCloud: "AWS",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /**
   * FUNÇÃO DE ENVIO DE FORMULÁRIO (ISOLADA)
   *
   * Para plugar seu backend, Formspree, Resend ou webhook:
   * Substitua a simulação abaixo por uma chamada fetch('/api/lead', ...)
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Simulação de envio com fallback automático
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Se quiser disparar mailto diretamente em caso de ausência de backend:
      console.log("Lead recebido:", formData);

      setStatus("success");
      setStatusMessage(
        "Solicitação enviada com sucesso. Entraremos em contato em até 4 horas úteis."
      );
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMessage(
        "Não foi possível enviar automaticamente. Por favor, utilize o botão de WhatsApp ou envie um e-mail."
      );
    }
  };

  // Montagem dinâmica do link de WhatsApp para contingência
  const whatsappText = encodeURIComponent(
    `Olá! Gostaria de solicitar um Raio-X de Infraestrutura para a empresa ${
      formData.company || "[Nome da Empresa]"
    }. Rodamos em ${formData.currentCloud}.`
  );
  const whatsappUrl = `https://wa.me/5511999999999?text=${whatsappText}`;

  // Montagem do mailto de contingência
  const mailtoSubject = encodeURIComponent(
    `Solicitação de Raio-X de Infraestrutura - ${formData.company || "Novo Contato"}`
  );
  const mailtoBody = encodeURIComponent(
    `Nome: ${formData.name}\nEmpresa: ${formData.company}\nE-mail: ${formData.email}\nNuvem Atual: ${formData.currentCloud}\nMensagem: ${formData.notes}`
  );
  const mailtoUrl = `mailto:contato@lastro.cloud?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contato" className="py-20 sm:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Coluna Esquerda: Texto de Chamada e Fallback */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Solicitação Direta
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-text tracking-tight">
              Descubra o que está sustentando o seu sistema.
            </h2>
            <p className="font-body text-base text-text-muted leading-relaxed">
              Preencha o formulário ao lado para agendarmos a conversa inicial de
              30 minutos e iniciarmos o diagnóstico da sua infraestrutura.
            </p>

            <div className="pt-4 border-t border-border space-y-3">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
                Prefere contato imediato?
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-mono font-medium text-text bg-bg-elevated border border-border hover:border-text-muted transition-colors"
                >
                  WhatsApp Direto
                </a>
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-mono font-medium text-text bg-bg-elevated border border-border hover:border-text-muted transition-colors"
                >
                  Enviar por E-mail
                </a>
              </div>
            </div>
          </div>

          {/* Coluna Direita: O Formulário */}
          <div className="lg:col-span-7 bg-bg-elevated border border-border p-6 sm:p-8">
            {status === "success" ? (
              <div className="py-8 space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-[#1F2933] text-accent font-mono text-lg font-bold">
                  ✓
                </div>
                <h3 className="font-heading font-bold text-xl text-text">
                  Solicitação Recebida
                </h3>
                <p className="font-body text-sm text-text-muted max-w-md mx-auto">
                  {statusMessage}
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        currentCloud: "AWS",
                        notes: "",
                      });
                    }}
                    className="text-xs font-mono text-text-muted hover:text-text underline"
                  >
                    Enviar outra solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs text-text-muted uppercase tracking-wider"
                    >
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Pedro Souza"
                      className="w-full px-3.5 py-2.5 bg-bg border border-border text-text placeholder:text-[#525E6C] font-body text-sm focus:outline-none focus:border-text focus:ring-1 focus:ring-text rounded-none"
                    />
                  </div>

                  {/* Empresa */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="company"
                      className="block font-mono text-xs text-text-muted uppercase tracking-wider"
                    >
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ex: MinhaStartup SaaS"
                      className="w-full px-3.5 py-2.5 bg-bg border border-border text-text placeholder:text-[#525E6C] font-body text-sm focus:outline-none focus:border-text focus:ring-1 focus:ring-text rounded-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* E-mail Corporativo */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs text-text-muted uppercase tracking-wider"
                    >
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="voce@empresa.com.br"
                      className="w-full px-3.5 py-2.5 bg-bg border border-border text-text placeholder:text-[#525E6C] font-body text-sm focus:outline-none focus:border-text focus:ring-1 focus:ring-text rounded-none"
                    />
                  </div>

                  {/* Onde a aplicação roda hoje */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="currentCloud"
                      className="block font-mono text-xs text-text-muted uppercase tracking-wider"
                    >
                      Onde a aplicação roda hoje
                    </label>
                    <select
                      id="currentCloud"
                      name="currentCloud"
                      value={formData.currentCloud}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-bg border border-border text-text font-body text-sm focus:outline-none focus:border-text focus:ring-1 focus:ring-text rounded-none"
                    >
                      <option value="AWS">AWS</option>
                      <option value="Vercel">Vercel</option>
                      <option value="Supabase">Supabase</option>
                      <option value="Híbrido (AWS + Vercel/Supabase)">
                        Híbrido (AWS + Vercel/Supabase)
                      </option>
                      <option value="Google Cloud / GCP">Google Cloud (GCP)</option>
                      <option value="Railway / Fly.io / Outro">
                        Railway / Fly.io / Outro
                      </option>
                      <option value="Não sei exatamente">Não sei exatamente</option>
                    </select>
                  </div>
                </div>

                {/* Campo Livre / Observações */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="notes"
                    className="block font-mono text-xs text-text-muted uppercase tracking-wider"
                  >
                    Principal dor ou dúvida atual (opcional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Ex: Fatura da nuvem aumentando sem explicação, medo do banco travar ou backup desatualizado..."
                    className="w-full px-3.5 py-2.5 bg-bg border border-border text-text placeholder:text-[#525E6C] font-body text-sm focus:outline-none focus:border-text focus:ring-1 focus:ring-text rounded-none resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="p-3 bg-[#2D1515] border border-alert text-xs text-[#F7F7F5] font-mono">
                    {statusMessage}
                  </div>
                )}

                {/* Botão de Envio Principal */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-bg bg-accent hover:bg-[#45e662] transition-colors rounded-none font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting"
                      ? "Processando..."
                      : "Solicitar o Raio-X"}
                  </button>
                </div>

                <div className="font-mono text-[11px] text-text-muted text-center pt-2">
                  Sem cobrança no envio · Retorno garantido em até 4h úteis
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
