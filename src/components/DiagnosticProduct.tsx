import React from "react";

export default function DiagnosticProduct() {
  return (
    <section id="raio-x" className="py-20 sm:py-28 border-b border-border bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Produto de Entrada
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-text tracking-tight">
            Cinco dias para saber exatamente onde você está.
          </h2>
          <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed">
            Um diagnóstico completo da sua infraestrutura, entregue em relatório
            objetivo. Sem reunião de descoberta que não leva a lugar nenhum.
          </p>
        </div>

        {/* 3 Entregas com pesos visuais e estruturas distintas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Entrega 1: CUSTO (Ênfase FinOps) */}
          <div className="bg-bg-elevated border border-border p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  Entrega 01
                </span>
                <span className="font-mono text-xs text-text px-2 py-0.5 bg-[#1F2933]">
                  FINOPS
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-text">
                Custo
              </h3>
              <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                Quanto do seu gasto em nuvem é desperdício, item por item, e como
                cortar sem degradar estabilidade ou capacidade.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border font-mono text-xs text-text-muted">
              Mapeamento de instâncias ociosas, volumes desconectados e tráfego mal roteado.
            </div>
          </div>

          {/* Entrega 2: RISCO (Ênfase Segurança & Ponto Crítico) */}
          <div className="bg-bg-elevated border border-border p-6 sm:p-8 flex flex-col justify-between relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  Entrega 02
                </span>
                <span className="font-mono text-xs text-[#F7F7F5] px-2 py-0.5 bg-alert">
                  VULNERABILIDADE
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-text">
                Risco
              </h3>
              <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                O que vai quebrar antes de quebrar: integridade de backups,
                segurança de credenciais, ponto único de falha e acessos
                indevidos.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border font-mono text-xs text-text-muted">
              Auditoria de IAM, políticas de retenção, SPOF de banco e portas expostas.
            </div>
          </div>

          {/* Entrega 3: PLANO (Ênfase Roadmap de Execução) */}
          <div className="bg-bg-elevated border border-border p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  Entrega 03
                </span>
                <span className="font-mono text-xs text-text px-2 py-0.5 bg-[#1F2933]">
                  ROADMAP
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-text">
                Plano
              </h3>
              <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                O que fazer, em que ordem de prioridade, com estimativa de prazo e
                responsável para cada item técnico.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border font-mono text-xs text-text-muted">
              Classificação por impacto vs. esforço com diretrizes claras para o time de dev.
            </div>
          </div>
        </div>

        {/* Bloco de Preço, Prazo e Garantia */}
        <div className="border border-border bg-bg-elevated p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-1">
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
              Investimento Fechado
            </div>
            <div className="font-heading font-bold text-3xl sm:text-4xl text-text tracking-tight">
              R$ 1.497
            </div>
            <div className="font-mono text-xs text-text-muted">
              Prazo de entrega: 5 dias úteis a partir do acesso
            </div>
          </div>

          <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-border pt-4 lg:pt-0 lg:pl-8 space-y-2">
            <div className="font-heading font-semibold text-base text-text">
              Garantia de Relevância
            </div>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              Se o relatório final não apontar oportunidades de economia ou riscos
              críticos de segurança que justifiquem o valor investido, você não
              paga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
