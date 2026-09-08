"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 site-header__inner w-full">
          <BrandMark />

          <nav
            className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
            aria-label="Navegação principal"
          >
            <a href="#problema" onClick={closeMenu}>
              O problema
            </a>
            <a href="#metodo" onClick={closeMenu}>
              Método
            </a>
            <a href="#servicos" onClick={closeMenu}>
              Serviços
            </a>
            <a href="#raio-x" onClick={closeMenu}>
              O Raio-X
            </a>
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>
            <a
              href="#contato"
              className="site-nav__mobile-cta"
              onClick={closeMenu}
            >
              Falar com especialista <ArrowUpRight size={15} />
            </a>
          </nav>

          <a
            className="button button--small button--outline header-cta"
            href="#contato"
          >
            Agendar diagnóstico <ArrowUpRight size={15} />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Floating Bottom Mobile CTA */}
      <div className="mobile-bottom-cta">
        <a href="#contato">
          Agendar diagnóstico <ArrowUpRight size={15} />
        </a>
      </div>
    </>
  );
}
