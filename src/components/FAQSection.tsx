"use client";

import React, { useState } from "react";
import { faqItems } from "@/data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section section--faq py-24 border-t border-[rgba(210,232,216,0.13)] bg-[#0c1110]" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-heading reveal-up mb-12">
          <div className="eyebrow">
            <span className="eyebrow__line" /> DÚVIDAS FREQUENTES
          </div>
          <h2>
            Perguntas comuns sobre o
            <br />
            <em>Raio-X e a sustentação.</em>
          </h2>
          <p>
            Tudo o que você precisa saber sobre o processo de diagnóstico,
            segurança dos acessos e modelo de trabalho.
          </p>
        </div>

        <div className="max-w-4xl border-t border-[rgba(210,232,216,0.15)]">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            const headingId = `faq-heading-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={item.question}
                className="border-b border-[rgba(210,232,216,0.15)] transition-colors duration-200"
              >
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left font-display font-medium text-base sm:text-lg text-paper hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-none"
                  >
                    <span>{item.question}</span>
                    <span
                      className="font-mono text-xs sm:text-sm text-[#798e80] flex-shrink-0"
                      aria-hidden="true"
                    >
                      {isOpen ? "[ − ]" : "[ + ]"}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-body text-sm sm:text-base text-[#9ba9a1] leading-relaxed max-w-[70ch]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
