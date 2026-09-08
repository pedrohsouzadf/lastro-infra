import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 border-b border-border bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Liderança Técnica
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-text tracking-tight">
            Quem responde por isso
          </h2>
        </div>

        <div className="bg-bg-elevated border border-border p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coluna de Princípios e Perfil */}
          <div className="lg:col-span-8 space-y-6">
            <p className="font-body text-base sm:text-lg text-text leading-relaxed">
              A LASTRO é liderada por engenheiros com experiência prática em
              sustentação de sistemas em produção, arquitetura de dados, automação e
              nuvem.
            </p>

            <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
              Nosso trabalho é baseado em três princípios inegociáveis:
            </p>

            <div className="space-y-4 pt-2">
              <div className="border-l-2 border-border pl-4 space-y-1">
                <div className="font-heading font-medium text-sm text-text">
                  1. Acesso Mínimo Necessário (Least Privilege)
                </div>
                <p className="font-body text-xs sm:text-sm text-text-muted">
                  Auditorias são conduzidas com credenciais somente leitura ou
                  sessões supervisionadas. Nunca solicitamos permissões além do
                  estritamente necessário.
                </p>
              </div>

              <div className="border-l-2 border-border pl-4 space-y-1">
                <div className="font-heading font-medium text-sm text-text">
                  2. Nada é alterado sem aprovação prévia
                </div>
                <p className="font-body text-xs sm:text-sm text-text-muted">
                  Nenhum script, migração ou modificação em ambiente de produção é
                  executado sem alinhamento, janela de manutenção e plano de
                  rollback documentado.
                </p>
              </div>

              <div className="border-l-2 border-border pl-4 space-y-1">
                <div className="font-heading font-medium text-sm text-text">
                  3. Tradução para Linguagem de Negócio
                </div>
                <p className="font-body text-xs sm:text-sm text-text-muted">
                  Não entregamos relatórios técnicos indecifráveis. Todo achado é
                  explicado pelo impacto financeiro, risco operacional e tempo de
                  recuperação para a diretoria.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Lateral: Resumo de Governança */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8 space-y-4 font-mono text-xs text-text-muted">
            <div className="space-y-1">
              <span className="text-text font-medium block">
                Operação 100% no Brasil
              </span>
              <span>Atendimento em português, alinhado com fuso horário e requisitos de LGPD.</span>
            </div>
            <div className="space-y-1 pt-3 border-t border-border">
              <span className="text-text font-medium block">
                Acordo de Confidencialidade (NDA)
              </span>
              <span>Disponível e assinado antes de qualquer análise técnica.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
