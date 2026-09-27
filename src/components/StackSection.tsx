import React from "react";

/**
 * Ferramentas agrupadas por área.
 *
 * O valor aqui não é a lista em si — é o fato de tudo já ter rodado em
 * produção. Por isso a linha de fecho embaixo: sem ela, vira vitrine de
 * logotipo, que qualquer um monta.
 *
 * `destaque` marca o núcleo do serviço, não o que é mais bonito.
 */

type Grupo = { label: string; itens: string[] };

const GRUPOS: Grupo[] = [
  {
    label: "Nuvem",
    itens: [
      "AWS",
      "Lambda",
      "RDS",
      "API Gateway",
      "Cognito",
      "S3",
      "Vercel",
      "Supabase",
      "Cloudflare",
    ],
  },
  {
    label: "Infra como código & entrega",
    itens: ["Terraform", "Docker", "GitHub Actions"],
  },
  {
    label: "Banco & dados",
    itens: [
      "PostgreSQL",
      "Multi-tenancy",
      "RLS",
      "Migrações",
      "SQL",
      "Python",
      "dbt",
    ],
  },
  {
    label: "Observabilidade & continuidade",
    itens: [
      "Grafana",
      "Alertas",
      "Backups testados",
      "Runbooks",
      "Gestão de acessos",
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

          <p className="stack-note">
            Tudo nesta lista já foi provisionado, quebrado e consertado em
            produção.
          </p>
        </div>
      </div>
    </section>
  );
}
