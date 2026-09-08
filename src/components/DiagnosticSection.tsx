import React from "react";
import { ArrowRight, Check } from "lucide-react";

export default function DiagnosticSection() {
  return (
    <section className="diagnostic-section" id="raio-x">
      <div className="diagnostic-grid" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 diagnostic-section__inner">
        {/* Coluna Esquerda: Texto e Oferta */}
        <div className="diagnostic-copy reveal-up">
          <div className="eyebrow eyebrow--dark">
            <span className="eyebrow__line" /> PRIMEIRO PASSO
          </div>
          <h2>
            Um Raio-X.
            <br />
            <em>Decisões melhores.</em>
          </h2>
          <p>
            Em 7 dias, mapeamos a arquitetura atual, os riscos que
            merecem atenção e quanto do seu gasto em nuvem é desperdício.
          </p>

          <div className="space-y-4">
            <a className="button button--dark" href="#contato">
              Agendar meu Raio-X <ArrowRight size={17} />
            </a>
          </div>
        </div>

        {/* Coluna Direita: As 3 Entregas */}
        <div className="diagnostic-list reveal-up reveal-up--delay-short">
          {[
            [
              "01",
              "Mapa da arquitetura e custos",
              "o que existe, quanto gasta, onde há desperdício e como cortar",
            ],
            [
              "02",
              "Matriz de risco e vulnerabilidades",
              "backups reais, credenciais, SPOF e o que vai quebrar antes de quebrar",
            ],
            [
              "03",
              "Plano de ação priorizado",
              "roadmap executivo com prazo, esforço e responsável para cada item",
            ],
          ].map(([number, title, text]) => (
            <div className="diagnostic-item" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <Check size={18} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
