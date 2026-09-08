import React from "react";
import { ArrowUpRight, Check } from "lucide-react";

const workflow = [
  {
    step: "01",
    title: "Mapear",
    text: "Entendemos o produto, o time e os pontos de tensão da operação atual com acesso somente leitura.",
  },
  {
    step: "02",
    title: "Priorizar",
    text: "Separamos risco real de ruído e montamos um plano com prazos e responsáveis por ordem de impacto.",
  },
  {
    step: "03",
    title: "Estruturar",
    text: "Implementamos a base, documentamos as decisões e deixamos seu time focado 100% no produto.",
  },
];

export default function MethodSection() {
  return (
    <section className="section section--method" id="metodo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 method-layout">
        {/* Sticky Left Column */}
        <div className="method-sticky reveal-up">
          <div className="eyebrow">
            <span className="eyebrow__line" /> COMO A LASTRO TRABALHA
          </div>
          <h2>
            Menos apagar
            <br />
            incêndios.
            <br />
            <em>Mais construir base.</em>
          </h2>
          <p>
            Entramos onde seu time precisa de clareza: entre o que a aplicação
            exige e o que a operação consegue sustentar com segurança.
          </p>
          <a className="text-link" href="#contato">
            Conversar sobre o seu cenário <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Right Column: Workflow Steps + Mini Terminal */}
        <div className="workflow-list">
          {workflow.map((item, index) => (
            <div
              className="workflow-item reveal-up"
              style={{ transitionDelay: `${index * 80}ms` }}
              key={item.step}
            >
              <span className="workflow-item__number">{item.step}</span>
              <div className="workflow-item__content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <ArrowUpRight className="workflow-item__arrow" size={19} />
            </div>
          ))}

          {/* Workflow Terminal Badge */}
          <div className="workflow-terminal reveal-up">
            <div className="workflow-terminal__top">
              <span>
                <i className="status-pip" /> LASTRO / plan
              </span>
              <span>bash</span>
            </div>
            <div className="workflow-terminal__body">
              <span className="terminal-prompt">$</span>
              <span>
                infra status <b>--ready-for-growth</b>
              </span>
              <span className="terminal-cursor" />
            </div>
            <div className="workflow-terminal__result">
              <Check size={13} /> architecture baseline established · 0 downtime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
