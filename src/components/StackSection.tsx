import React from "react";

const stack = [
  "Amazon Web Services",
  "Vercel",
  "Supabase",
  "Terraform",
  "Docker",
  "GitHub Actions",
  "Cloudflare",
  "Grafana",
  "PostgreSQL",
];

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

        <div className="stack-cloud reveal-up reveal-up--delay-short">
          {stack.map((item, i) => (
            <span
              className={
                i === 0 || i === 2
                  ? "stack-chip stack-chip--active"
                  : "stack-chip"
              }
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
