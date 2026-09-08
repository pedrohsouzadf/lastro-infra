import React from "react";
import { LogoSymbol } from "./Logo";

interface BrandMarkProps {
  compact?: boolean;
  /** Mostra o descritor "Infraestrutura Cloud" sob o wordmark */
  descriptor?: boolean;
}

export default function BrandMark({
  compact = false,
  descriptor = false,
}: BrandMarkProps) {
  return (
    <a
      href="#top"
      className={`brand-mark ${compact ? "brand-mark--compact" : ""}`}
      aria-label="LASTRO — Início"
    >
      <LogoSymbol
        className="brand-mark__symbol"
        id={compact ? "brand-compact" : "brand"}
      />
      <span className="brand-mark__text">
        <span className="brand-mark__name">LASTRO</span>
        {descriptor && (
          <span className="brand-mark__descriptor">Infraestrutura Cloud</span>
        )}
      </span>
    </a>
  );
}
