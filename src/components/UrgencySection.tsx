import React from "react";

/**
 * Gatilhos de urgência — faixa entre "O problema" e "Método".
 *
 * Fica aqui de propósito: a seção anterior faz o visitante concordar de
 * forma abstrata; esta converte a concordância em reconhecimento pessoal,
 * antes da oferta. Depois do CTA viraria lembrete para quem já decidiu.
 *
 * Sem card, sem número e sem ícone: os sinais são paralelos, não têm
 * hierarquia nem sequência — numerar inventaria uma ordem que não existe.
 */

const GATILHOS = [
  "A fatura da nuvem subiu sem explicação",
  "Quem montou a infra saiu da empresa",
  "Um cliente grande pediu questionário de segurança",
  "O sistema caiu em horário de pico",
  "Entrou investidor e apareceu due diligence",
  "O time gasta mais tempo apagando incêndio que entregando feature",
];

export default function UrgencySection() {
  return (
    <section className="urgency" id="urgente">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="urgency__title reveal-up">Quando isso vira urgente</h2>

        <ul className="urgency__list reveal-up">
          {GATILHOS.map((gatilho) => (
            <li className="urgency__item" key={gatilho}>
              {gatilho}
            </li>
          ))}
        </ul>

        <p className="urgency__close reveal-up">
          Se você reconheceu algum desses,{" "}
          <em>não é hora de esperar o próximo.</em>
        </p>
      </div>
    </section>
  );
}
