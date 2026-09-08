import React from "react";

export default function ServicesHierarchy() {
  return (
    <section id="servicos" className="py-20 sm:py-28 border-b border-border bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Pós-Diagnóstico
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-text tracking-tight">
            Serviços de sustentação e evolução
          </h2>
          <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed">
            Depois de entender exatamente o estado da infraestrutura no Raio-X,
            atuamos em três frentes com escopos objetivos.
          </p>
        </div>

        {/* Hierarquia Visual Diferenciada */}
        <div className="space-y-6">
          {/* Frente 1: Estruturação (Destaque Principal / Core Project) */}
          <div className="bg-bg-elevated border border-border p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="space-y-3 lg:max-w-md">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-text px-2 py-0.5 bg-[#1F2933]">
                    CORE PROJECT
                  </span>
                  <span className="font-mono text-xs text-text-muted">
                    Escopo Fechado
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-text">
                  Estruturação & Correção
                </h3>
                <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                  Execução direta das correções mapeadas no Raio-X para blindar a
                  operação e eliminar gargalos técnicos.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-text-muted lg:max-w-xl">
                <div className="p-3 border border-border bg-bg">
                  • Reorganização de arquitetura e VPCs
                </div>
                <div className="p-3 border border-border bg-bg">
                  • Blindagem de IAM e rotação de credenciais
                </div>
                <div className="p-3 border border-border bg-bg">
                  • Automação de backups com PITR
                </div>
                <div className="p-3 border border-border bg-bg">
                  • Pipelines de CI/CD e ambientes isolados
                </div>
                <div className="p-3 border border-border bg-bg sm:col-span-2">
                  • Infraestrutura como Código (Terraform) e documentação
                </div>
              </div>
            </div>
          </div>

          {/* Grid secundário para Frente 2 e 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Frente 2: Acompanhamento Contínuo */}
            <div className="bg-bg-elevated border border-border p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-text px-2 py-0.5 bg-[#1F2933]">
                    RECORRÊNCIA
                  </span>
                  <span className="font-mono text-xs text-text-muted">
                    Sustentação Preventiva
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-text">
                  Acompanhamento Contínuo
                </h3>
                <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                  Monitoramento contínuo, revisão mensal de custos de nuvem,
                  aplicação de patches e plantão técnico em horário acordado para
                  quando incidentes ocorrerem.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border font-mono text-xs text-text-muted">
                Observabilidade ativa com alertas integrados ao Slack/Discord.
              </div>
            </div>

            {/* Frente 3: Performance e Dados */}
            <div className="bg-bg-elevated border border-border p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-text px-2 py-0.5 bg-[#1F2933]">
                    ESPECIALIZADO
                  </span>
                  <span className="font-mono text-xs text-text-muted">
                    Sprints de Otimização
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-text">
                  Performance & Dados
                </h3>
                <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                  Identificação e eliminação do gargalo real da operação:
                  otimização de consultas e índices no PostgreSQL, gestão de pool
                  de conexões e dimensionamento correto de banco.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border font-mono text-xs text-text-muted">
                Análise com pg_stat_statements, índices compostos e redução de latência.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
