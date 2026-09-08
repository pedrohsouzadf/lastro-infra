"use client";

import React, { useEffect, useState } from "react";

interface AuditLine {
  id: string;
  severity: "CRÍTICO" | "ALTO" | "MÉDIO";
  description: string;
}

const lines: AuditLine[] = [
  {
    id: "L1",
    severity: "CRÍTICO",
    description: "Backup do banco principal sem teste de restauração há 14 meses",
  },
  {
    id: "L2",
    severity: "CRÍTICO",
    description: "Credencial de acesso versionada no repositório [aws_secret_key: *******]",
  },
  {
    id: "L3",
    severity: "ALTO",
    description: "Ponto único de falha: aplicação inteira em uma instância sem réplica",
  },
  {
    id: "L4",
    severity: "ALTO",
    description: "R$ 3.180/mês em recursos provisionados e ociosos (NAT-GW / EBS não anexado)",
  },
  {
    id: "L5",
    severity: "MÉDIO",
    description: "Sem monitoramento de disponibilidade. Cliente avisa antes do sistema",
  },
];

export default function DiagnosticTerminal() {
  const [visibleCount, setVisibleCount] = useState(lines.length);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setVisibleCount(lines.length);
      return;
    }

    // Start with 0 lines and reveal sequentially
    setVisibleCount(0);
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < lines.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-bg-elevated border border-border rounded-none p-5 sm:p-6 font-mono text-xs sm:text-sm text-text-muted shadow-none select-text">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-[#8B98A5] rounded-full opacity-60" />
          <span className="text-text font-medium tracking-wider text-[11px] sm:text-xs uppercase">
            RAIO-X DE INFRAESTRUTURA · amostra
          </span>
        </div>
        <span className="text-[11px] text-text-muted hidden sm:inline">
          auditoria_v4.2.log
        </span>
      </div>

      {/* Terminal Findings List */}
      <div className="space-y-2.5 my-4 min-h-[160px] sm:min-h-[180px]" aria-live="polite">
        {lines.map((line, index) => {
          const isVisible = index < visibleCount;
          return (
            <div
              key={line.id}
              className={`flex items-start gap-3 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Severity Tag */}
              <span
                className={`flex-shrink-0 px-1.5 py-0.5 text-[10px] sm:text-[11px] font-bold tracking-wide uppercase ${
                  line.severity === "CRÍTICO"
                    ? "text-[#F7F7F5] bg-alert"
                    : line.severity === "ALTO"
                    ? "text-text bg-[#243141]"
                    : "text-text-muted bg-[#19232D]"
                }`}
              >
                {line.severity}
              </span>

              {/* Description */}
              <span className="text-text leading-snug break-words">
                {line.description}
              </span>
            </div>
          );
        })}
      </div>

      {/* Terminal Footer */}
      <div className="border-t border-border pt-3 mt-4 flex items-center justify-between text-[11px] sm:text-xs">
        <span className="text-accent font-medium tracking-wide">
          5 dias úteis · 27 verificações · plano priorizado
        </span>
        <span className="text-text-muted hidden sm:inline">
          status: pronto
        </span>
      </div>
    </div>
  );
}
