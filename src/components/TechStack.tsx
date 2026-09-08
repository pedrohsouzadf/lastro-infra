import React from "react";

const technologies = [
  "AWS",
  "Vercel",
  "Supabase",
  "Terraform",
  "Docker",
  "PostgreSQL",
  "GitHub Actions",
  "Grafana",
  "Cloudflare",
];

export default function TechStack() {
  return (
    <section className="py-16 sm:py-20 border-b border-border bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-6 pb-6 border-b border-border">
          <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Tecnologias Suportadas
          </span>
          <p className="font-mono text-xs text-text-muted">
            Trabalhamos com o que já está no ar. Migração só quando faz sentido para o negócio.
          </p>
        </div>

        {/* Lista tipográfica sóbria, sem logos coloridos de marketing */}
        <div className="pt-8 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-4 font-mono text-sm sm:text-base text-text">
          {technologies.map((tech, idx) => (
            <span key={tech} className="inline-flex items-center gap-6 sm:gap-8">
              <span className="hover:text-accent transition-colors cursor-default">
                {tech}
              </span>
              {idx < technologies.length - 1 && (
                <span className="text-border select-none">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
