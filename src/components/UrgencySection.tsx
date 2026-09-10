import React from "react";

/**
 * Gatilhos de urgência — momentos concretos em que a infraestrutura
 * sai do "depois eu vejo" e vira prioridade da semana.
 *
 * Serve como qualificação: quem se reconhece em um destes já está
 * pronto para o Raio-X.
 */

const GATILHOS = [
  "A fatura da nuvem subiu sem explicação",
  "Quem montou a infra saiu da empresa",
  "Um cliente grande pediu requisitos de segurança",
  "O sistema caiu em horário de pico",
  "Entrou investidor e apareceu due diligence",
];

export default function UrgencySection() {
  return (
    <section className="section section--urgency" id="urgente">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-heading reveal-up">
          <div className="eyebrow">
            <span className="eyebrow__line" /> SINAIS
          </div>
          <h2>Quando isso vira urgente</h2>
        </div>

        <ul className="urgency-grid">
          {GATILHOS.map((gatilho, i) => (
            <li
              className={`urgency-card reveal-up${
                i % 3 === 1 ? " reveal-up--delay-short" : i % 3 === 2 ? " reveal-up--delay" : ""
              }`}
              key={gatilho}
            >
              <span className="urgency-card__pip" aria-hidden="true" />
              <span className="urgency-card__index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p>{gatilho}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
