import React from "react";

/**
 * Marca LASTRO — camadas isométricas empilhadas.
 * Leitura: uma base sólida (cinza) sustentando a camada de crescimento (verde).
 *
 * `id` é obrigatório porque cada instância precisa de gradientes com IDs únicos —
 * SVGs inline compartilham o mesmo namespace de <defs> no documento.
 */

type LayerProps = {
  cy: number;
  top: string;
  side: string;
  edge?: string;
};

const HALF_W = 21;
const HALF_H = 11.5;
const DEPTH = 4.5;

function Layer({ cy, top, side, edge }: LayerProps) {
  const face = `${32 - HALF_W},${cy} ${32},${cy - HALF_H} ${32 + HALF_W},${cy} ${32},${cy + HALF_H}`;
  const body = `M${32 - HALF_W},${cy} L${32},${cy + HALF_H} L${32 + HALF_W},${cy} L${
    32 + HALF_W
  },${cy + DEPTH} L${32},${cy + HALF_H + DEPTH} L${32 - HALF_W},${cy + DEPTH} Z`;

  return (
    <g>
      <path d={body} fill={side} />
      <polygon points={face} fill={top} />
      {edge && (
        <polyline
          points={`${32 - HALF_W},${cy} ${32},${cy - HALF_H} ${32 + HALF_W},${cy}`}
          fill="none"
          stroke={edge}
          strokeWidth="1"
          strokeLinejoin="round"
        />
      )}
    </g>
  );
}

export function LogoSymbol({
  className = "w-7 h-7",
  id = "lastro",
  glow = false,
}: {
  className?: string;
  id?: string;
  glow?: boolean;
}) {
  const g = (n: string) => `${id}-${n}`;

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="LASTRO"
    >
      <defs>
        <linearGradient id={g("green")} x1="11" y1="8" x2="53" y2="31" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5CF06F" />
          <stop offset="1" stopColor="#2BB544" />
        </linearGradient>
        <linearGradient id={g("mid")} x1="11" y1="26" x2="53" y2="49" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2F5F8" />
          <stop offset="1" stopColor="#A8B2BE" />
        </linearGradient>
        <linearGradient id={g("base")} x1="11" y1="38" x2="53" y2="61" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B9C2CC" />
          <stop offset="1" stopColor="#6B7280" />
        </linearGradient>
        {glow && (
          <filter id={g("blur")} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        )}
      </defs>

      {/* base -> topo, para o empilhamento sobrepor na ordem certa */}
      <Layer cy={45} top={`url(#${g("base")})`} side="#3C4653" />
      <Layer cy={32} top={`url(#${g("mid")})`} side="#5D6874" />
      {glow && (
        <polygon
          points="11,17 32,5.5 53,17 32,28.5"
          fill="#39D353"
          opacity="0.45"
          filter={`url(#${g("blur")})`}
        />
      )}
      <Layer cy={17} top={`url(#${g("green")})`} side="#1F8F35" edge="rgba(255,255,255,0.35)" />
    </svg>
  );
}

export function Wordmark({
  className = "",
  descriptor = true,
}: {
  className?: string;
  descriptor?: boolean;
}) {
  return (
    <span className={`lastro-wordmark ${className}`}>
      <span className="lastro-wordmark__name">LASTRO</span>
      {descriptor && (
        <span className="lastro-wordmark__descriptor">Infraestrutura Cloud</span>
      )}
    </span>
  );
}

export default function Logo({
  className = "",
  showWordmark = true,
  descriptor = false,
  size = "md",
}: {
  className?: string;
  showWordmark?: boolean;
  descriptor?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const symbol =
    size === "sm" ? "w-6 h-6" : size === "lg" ? "w-11 h-11" : "w-8 h-8";

  return (
    <span className={`lastro-logo lastro-logo--${size} ${className}`}>
      <LogoSymbol className={symbol} id={`logo-${size}`} />
      {showWordmark && <Wordmark descriptor={descriptor} />}
    </span>
  );
}
