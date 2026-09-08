import React from "react";
import { Check } from "lucide-react";

export default function ProofSection() {
  return (
    <section className="section section--proof" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 proof-layout">
        {/* Quote Block */}
        <div className="proof-quote reveal-up">
          <span className="quote-mark">“</span>
          <blockquote>
            Infraestrutura não é o que aparece na demo. É o que permite a próxima
            demo existir.
          </blockquote>
          <div className="proof-quote__author">
            <span className="author-mark">l</span>
            <span>
              <b>LASTRO</b>
              <small>infraestrutura para crescer</small>
            </span>
          </div>
        </div>

        {/* Aside Content */}
        <div className="proof-aside reveal-up reveal-up--delay-short">
          <div className="eyebrow">
            <span className="eyebrow__line" /> POR QUE A LASTRO
          </div>
          <h2>
            Profundidade técnica.
            <br />
            <em>Conversa de negócio.</em>
          </h2>
          <p>
            Não somos uma fábrica de tickets nem uma consultoria que entrega um
            diagrama e desaparece. Somos a LASTRO, a parceira técnica entre o
            produto e a operação.
          </p>
          <div className="proof-points">
            <span>
              <Check size={14} /> documentação viva que seu time realmente usa
            </span>
            <span>
              <Check size={14} /> recomendações pragmáticas sem overengineering
            </span>
            <span>
              <Check size={14} /> decisões explicadas em português claro
            </span>
            <span>
              <Check size={14} /> acesso somente leitura durante auditorias
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
