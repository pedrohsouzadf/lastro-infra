import React from "react";
import { sampleFindings } from "@/data/sampleFindings";

export default function AuditFindingsSample() {
  return (
    <section className="py-20 sm:py-28 border-b border-border bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Casos Anonimizados
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-text tracking-tight">
            O que sai de um Raio-X
          </h2>
          <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed">
            Exemplos reais de achados técnicos identificados em diagnósticos de
            empresas em crescimento. Dados e identificadores sensíveis foram
            completamente descaracterizados.
          </p>
        </div>

        {/* Tabela / Lista técnica de achados */}
        <div className="border-t border-border space-y-0">
          {sampleFindings.map((finding) => (
            <div
              key={finding.id}
              className="py-6 sm:py-8 border-b border-border grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start"
            >
              {/* Metadados: ID, Categoria, Severidade */}
              <div className="lg:col-span-3 space-y-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase ${
                      finding.severity === "CRÍTICO"
                        ? "text-[#F7F7F5] bg-alert"
                        : "text-text bg-[#243141]"
                    }`}
                  >
                    {finding.severity}
                  </span>
                  <span className="font-mono text-xs text-text-muted">
                    {finding.id}
                  </span>
                </div>
                <div className="font-mono text-xs text-text-muted">
                  {finding.resource}
                </div>
              </div>

              {/* O Achado Técnico */}
              <div className="lg:col-span-5 space-y-1">
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  Achado
                </div>
                <p className="font-body text-sm sm:text-base text-text leading-snug">
                  {finding.finding}
                </p>
              </div>

              {/* O Impacto de Negócio e Ação */}
              <div className="lg:col-span-4 space-y-1">
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  Impacto & Resolução
                </div>
                <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                  <strong className="text-text font-medium">Impacto:</strong>{" "}
                  {finding.impact}
                </p>
                <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed pt-1">
                  <strong className="text-text font-medium">Ação:</strong>{" "}
                  {finding.actionTaken}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
