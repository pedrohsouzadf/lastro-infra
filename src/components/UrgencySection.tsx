import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Gatilhos de urgência — faixa entre "O problema" e "Método".
 *
 * Fica aqui de propósito: a seção anterior faz o visitante concordar de
 * forma abstrata; esta converte a concordância em reconhecimento pessoal,
 * antes da oferta.
 *
 * Os gatilhos são a lista, não o protagonista — quem carrega o peso
 * visual é o título, como nas outras seções. Sem card, sem número e sem
 * ícone: os sinais são paralelos, não têm hierarquia nem sequência.
 * No máximo cinco palavras cada, para a grade ser escaneável de relance.
 */

const GATILHOS = [
  "A fatura subiu sem explicação",
  "Quem montou a infra saiu",
  "Questionário de segurança de cliente",
  "Queda em horário de pico",
  "Due diligence de investidor",
  "Mais incêndio que feature",
];

export default function UrgencySection() {
  return (
    <section className="section section--urgency" id="urgente">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-heading section-heading--split reveal-up">
          <div>
            <div className="eyebrow">
              <span className="eyebrow__line" /> QUANDO ISSO VIRA URGENTE
            </div>
            <h2>
              Ninguém acorda pensando
              <br />
              <em>em infraestrutura.</em>
            </h2>
          </div>
          <p>
            Até que um destes acontece — e aí vira a prioridade número um da
            semana.
          </p>
        </div>

        <ul className="urgency__list reveal-up">
          {GATILHOS.map((gatilho) => (
            <li className="urgency__item" key={gatilho}>
              {gatilho}
            </li>
          ))}
        </ul>

        <a className="text-link urgency__link reveal-up" href="#contato">
          Conversar sobre o seu cenário <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
