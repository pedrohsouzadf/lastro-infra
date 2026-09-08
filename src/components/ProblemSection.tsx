import React from "react";
import { Gauge, Activity, LockKeyhole } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="section section--problem" id="problema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-heading section-heading--split reveal-up">
          <div>
            <div className="eyebrow">
              <span className="eyebrow__line" /> O PROBLEMA
            </div>
            <h2>
              O produto funciona.
              <br />
              <em>A base não acompanhou.</em>
            </h2>
          </div>
          <p>
            Quase toda empresa que cresce rápido passa pelo mesmo caminho. O MVP
            sobe, os clientes chegam, e a infraestrutura vai sendo montada no
            improviso. Nada quebra — até quebrar.
          </p>
        </div>

        <div className="problem-grid">
          {/* Card 01: Custos */}
          <article className="problem-card reveal-up">
            <span className="problem-card__index">/ 01</span>
            <span className="problem-card__icon">
              <Gauge size={28} />
            </span>
            <h3>
              Custos que escalam
              <br />
              mais rápido que o produto
            </h3>
            <p>
              Você abre a fatura da AWS/nuvem e ninguém sabe explicar o que está
              pagando — ou o que pode ser otimizado.
            </p>
            <div className="problem-card__meter">
              <small>
                <span>
                  desperdício invisível <i>· média do mercado</i>
                </span>{" "}
                <b>~32%</b>
              </small>
            </div>
          </article>

          {/* Card 02: Observabilidade (Accent Deep Green) */}
          <article className="problem-card problem-card--accent reveal-up reveal-up--delay-short">
            <span className="problem-card__index">/ 02</span>
            <span className="problem-card__icon">
              <Activity size={28} />
            </span>
            <h3>
              Alertas que chegam
              <br />
              depois do cliente
            </h3>
            <p>
              Sem observabilidade ativa, o cliente avisa que o sistema caiu antes
              de qualquer monitoramento interno.
            </p>
            <div className="problem-card__wave" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </article>

          {/* Card 03: Risco e Homem-Chave */}
          <article className="problem-card reveal-up reveal-up--delay">
            <span className="problem-card__index">/ 03</span>
            <span className="problem-card__icon">
              <LockKeyhole size={28} />
            </span>
            <h3>
              Risco invisível
              <br />
              na operação diária
            </h3>
            <p>
              Chaves mestras soltas, backups que nunca foram restaurados para valer
              e infraestrutura que só uma pessoa entende.
            </p>
            <div className="problem-card__log">
              <span className="log-dot" />
              <span>teste real de restore:</span> <b>nunca feito</b>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
