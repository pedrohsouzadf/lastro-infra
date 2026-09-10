import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Gatilhos de urgência — faixa entre "O problema" e "Método".
 *
 * Fica aqui de propósito: a seção anterior faz o visitante concordar de
 * forma abstrata; esta converte a concordância em reconhecimento pessoal,
 * antes da oferta.
 *
 * Sem card, sem número e sem ícone: os sinais são paralelos, não têm
 * hierarquia nem sequência.
 */

const GATILHOS = [
  "A fatura da nuvem subiu sem explicação",
  "Quem montou a infra saiu da empresa",
  "Um cliente grande pediu questionário de segurança",
  "O sistema caiu em horário de pico",
  "Due diligence de investidor",
  "O time gasta mais tempo apagando incêndio que entregando feature",
];

export default function UrgencySection() {
  return (
    <section className="section section--urgency" id="urgente">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-heading reveal-up">
          <div className="eyebrow">
            <span className="eyebrow__line" /> QUANDO ISSO VIRA URGENTE
          </div>
        </div>

        <ul className="urgency__list reveal-up">
          {GATILHOS.map((gatilho) => (
            <li className="urgency__item" key={gatilho}>
              {gatilho}
            </li>
          ))}
        </ul>

        <div className="urgency__footer reveal-up">
          <h2 className="urgency__close">
            Se você reconheceu algum desses, não espere o próximo acontecer.
          </h2>
          <a className="text-link" href="#contato">
            Conversar sobre o seu cenário <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
