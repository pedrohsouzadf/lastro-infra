import React from "react";

const steps = [
  {
    step: "01",
    title: "Conversa inicial",
    duration: "30 minutos",
    description:
      "Alinhamento objetivo para entender a arquitetura atual, stack tecnológico e o momento de crescimento da empresa.",
  },
  {
    step: "02",
    title: "Acesso somente leitura",
    duration: "Dia 01",
    description:
      "Configuração de permissões estritamente read-only ou auditoria assistida. Nenhuma alteração é feita no seu ambiente.",
  },
  {
    step: "03",
    title: "Análise técnica",
    duration: "Dias 02–04",
    description:
      "Auditoria profunda de infraestrutura, custos, segurança de credenciais, rotinas de backup, performance e gargalos de banco.",
  },
  {
    step: "04",
    title: "Relatório e devolutiva",
    duration: "Dia 05 (45 min call)",
    description:
      "Entrega do laudo técnico com scorecard, lista de riscos priorizados e reunião executiva com seu time técnico/liderança.",
  },
  {
    step: "05",
    title: "Decisão sua",
    duration: "Próximos passos",
    description:
      "Você decide se executa as correções com a LASTRO, com o seu time interno de desenvolvimento ou se apenas arquiva o plano.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28 border-b border-border bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Processo
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-text tracking-tight">
            Como funciona o processo de diagnóstico
          </h2>
          <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed">
            Um fluxo linear em 5 etapas, desenhado para exigir o mínimo de tempo da sua equipe.
          </p>
        </div>

        {/* Linha do tempo sequencial sóbria */}
        <div className="space-y-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-bg-elevated border border-border p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline"
            >
              <div className="sm:col-span-2 flex items-baseline gap-3">
                <span className="font-mono text-base font-bold text-text">
                  {item.step}
                </span>
                <span className="font-mono text-xs text-text-muted">
                  {item.duration}
                </span>
              </div>
              <div className="sm:col-span-4">
                <h3 className="font-heading font-medium text-lg text-text">
                  {item.title}
                </h3>
              </div>
              <div className="sm:col-span-6">
                <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
