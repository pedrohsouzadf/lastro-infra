import React from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 hero-section__inner w-full">
        {/* Coluna Esquerda: Texto e Ações */}
        <div className="hero-copy reveal-up">
          <div className="eyebrow">
            <span className="eyebrow__line" /> INFRAESTRUTURA CLOUD
          </div>

          <h1>
            Sua aplicação cresceu.
            <br />
            <em>Sua infraestrutura</em> acompanhou?
          </h1>

          <p className="hero-copy__intro">
            <strong>Infraestrutura que sustenta o crescimento.</strong> A LASTRO
            cuida de custo, segurança, backup e performance da infraestrutura de
            empresas que têm sistema em produção e não têm um time de DevOps.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#raio-x">
              Fazer um Raio-X <ArrowRight size={17} />
            </a>
            <a className="text-link" href="#metodo">
              Conheça o método <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="hero-note">
            <span className="hero-note__mark">
              <Check size={12} />
            </span>
            Diagnóstico técnico, sem apresentação comercial genérica.
          </div>
        </div>

        {/* Coluna Direita: cena isométrica da marca */}
        <div className="hero-visual reveal-up reveal-up--delay">
          <HeroVisual />
          <div className="hero-visual__caption">
            <span>uma base que não vira gargalo</span>
            <span className="caption-arrow">↗</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll hidden sm:flex">
        <span className="hero-scroll__line" /> role para explorar
      </div>
    </section>
  );
}
