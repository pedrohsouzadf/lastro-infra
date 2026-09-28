import React from "react";

/**
 * Ferramentas agrupadas por área.
 *
 * A lista cobre só o que já foi usado em produção — nada entra aqui por
 * parecer bem numa vitrine.
 *
 * `DESTAQUE` marca o núcleo do serviço, não o que é mais bonito.
 */

type Grupo = { label: string; itens: string[] };

const GRUPOS: Grupo[] = [
  {
    label: "Nuvem & infraestrutura como código",
    itens: [
      "AWS",
      "Lambda",
      "RDS",
      "Cognito",
      "API Gateway",
      "Vercel",
      "Supabase",
      "Terraform",
    ],
  },
  {
    label: "Banco & controle de acesso",
    itens: [
      "PostgreSQL",
      "RLS",
      "Auth",
      "Service role",
      "Multi-tenancy",
      "Migração Supabase → RDS",
    ],
  },
  {
    label: "Aplicação & dados",
    itens: ["React", "Vite", "Next.js", "SQL", "Python", "dbt", "Power BI"],
  },
  {
    label: "Automação & IA",
    itens: [
      "Google Apps Script",
      "Sheets",
      "WhatsApp Cloud API",
      "Kommo",
      "Make",
      "GPTMaker",
      "API da Anthropic",
    ],
  },
];

const DESTAQUE = new Set([
  "AWS",
  "Vercel",
  "Supabase",
  "Terraform",
  "PostgreSQL",
]);

export default function StackSection() {
  return (
    <section className="section section--stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 stack-layout">
        <div className="stack-intro reveal-up">
          <div className="eyebrow">
            <span className="eyebrow__line" /> FERRAMENTAS
          </div>
          <h2>
            Trabalhamos com
            <br />
            <em>o que faz sentido.</em>
          </h2>
          <p>
            Conhecemos o ecossistema moderno. A escolha vem depois do contexto —
            nunca antes. Migração só quando faz sentido para o negócio.
          </p>
        </div>

        <div className="stack-groups reveal-up reveal-up--delay-short">
          {GRUPOS.map((grupo) => (
            <div className="stack-group" key={grupo.label}>
              <span className="stack-group__label">{grupo.label}</span>
              <div className="stack-cloud">
                {grupo.itens.map((item) => (
                  <span
                    className={`stack-chip${
                      DESTAQUE.has(item) ? " stack-chip--active" : ""
                    }`}
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
