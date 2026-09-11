import React from "react";
import { ArrowUpRight } from "lucide-react";
import BrandMark from "./BrandMark";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 site-footer__inner py-8 flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
        <BrandMark compact />

        <div className="site-footer__meta text-center sm:text-left">
          <span>infraestrutura para empresas em crescimento</span>
          <span className="text-[#3c4a42]">·</span>
          <span suppressHydrationWarning>
            © {new Date().getFullYear()} LASTRO Infraestrutura Cloud
          </span>
        </div>

        <div className="site-footer__links">
          <a href="#top">
            voltar ao topo <ArrowUpRight size={14} />
          </a>
          <a href="mailto:contato@lastro.cloud">
            e-mail <ArrowUpRight size={14} />
          </a>
          <a href="/privacidade">
            privacidade <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
