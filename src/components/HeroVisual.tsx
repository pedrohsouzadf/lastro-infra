import React from "react";
import { LogoSymbol } from "./Logo";

/**
 * Cena isométrica do hero — recriada em SVG vetorial a partir do brand board.
 * Vetor (e não bitmap) porque escala em retina, pesa ~6kb e usa as cores da marca
 * direto das variáveis CSS, então acompanha qualquer ajuste de paleta.
 */

const CX = 250;

/** Rombo isométrico: face superior + extrusão lateral */
function Slab({
  cy,
  w,
  h,
  depth,
  top,
  side,
  edge,
  opacity = 1,
}: {
  cy: number;
  w: number;
  h: number;
  depth: number;
  top: string;
  side: string;
  edge?: string;
  opacity?: number;
}) {
  const face = `${CX - w},${cy} ${CX},${cy - h} ${CX + w},${cy} ${CX},${cy + h}`;
  const body = `M${CX - w},${cy} L${CX},${cy + h} L${CX + w},${cy} L${CX + w},${
    cy + depth
  } L${CX},${cy + h + depth} L${CX - w},${cy + depth} Z`;
  return (
    <g opacity={opacity}>
      <path d={body} fill={side} />
      <polygon points={face} fill={top} />
      {edge && (
        <polygon points={face} fill="none" stroke={edge} strokeWidth="1.1" />
      )}
    </g>
  );
}

/** Linhas do piso isométrico */
function IsoFloor() {
  const lines = [];
  const W = 215;
  const H = 112;
  const steps = 9;
  for (let i = 1; i < steps; i++) {
    const t = i / steps;
    // direção "esquerda -> topo"
    lines.push(
      <line
        key={`a${i}`}
        x1={CX - W + W * t}
        y1={312 + H * t}
        x2={CX + W * t}
        y2={312 - H + H * t}
      />
    );
    // direção "direita -> topo"
    lines.push(
      <line
        key={`b${i}`}
        x1={CX + W - W * t}
        y1={312 + H * t}
        x2={CX - W * t}
        y2={312 - H + H * t}
      />
    );
  }
  return (
    <g stroke="#39D353" strokeWidth="0.6" opacity="0.13">
      {lines}
    </g>
  );
}

/** Cubinhos soltos ao redor da base */
function MiniCube({ x, y, s = 15 }: { x: number; y: number; s?: number }) {
  const h = s * 0.55;
  const d = s * 0.5;
  return (
    <g transform={`translate(${x - CX}, ${y})`}>
      <path
        d={`M${CX - s},0 L${CX},${h} L${CX + s},0 L${CX + s},${d} L${CX},${h + d} L${CX - s},${d} Z`}
        fill="#1A2430"
      />
      <polygon
        points={`${CX - s},0 ${CX},${-h} ${CX + s},0 ${CX},${h}`}
        fill="#232F3D"
        stroke="rgba(57,211,83,0.22)"
        strokeWidth="0.8"
      />
    </g>
  );
}

export default function HeroVisual() {
  return (
    <div className="hero-visual__stage">
      <svg
        viewBox="0 0 560 430"
        className="hero-visual__scene"
        role="img"
        aria-label="Camadas de infraestrutura sustentando a camada de crescimento: segurança, custos e performance."
      >
        <defs>
          <linearGradient id="hv-green" x1="168" y1="106" x2="332" y2="190" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6BFF7D" />
            <stop offset="1" stopColor="#28B441" />
          </linearGradient>
          <linearGradient id="hv-mid" x1="150" y1="170" x2="350" y2="270" gradientUnits="userSpaceOnUse">
            <stop stopColor="#26323F" />
            <stop offset="1" stopColor="#141B24" />
          </linearGradient>
          <linearGradient id="hv-base" x1="135" y1="228" x2="365" y2="330" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A222D" />
            <stop offset="1" stopColor="#0E141B" />
          </linearGradient>
          <linearGradient id="hv-beam" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#39D353" stopOpacity="0.5" />
            <stop offset="1" stopColor="#39D353" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="hv-halo">
            <stop stopColor="#39D353" stopOpacity="0.42" />
            <stop offset="1" stopColor="#39D353" stopOpacity="0" />
          </radialGradient>
          <filter id="hv-soft" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="11" />
          </filter>
        </defs>

        <IsoFloor />

        {/* halo do núcleo */}
        <ellipse cx={CX} cy="185" rx="205" ry="128" fill="url(#hv-halo)" opacity="0.5" />

        <MiniCube x={95} y={330} s={16} />
        <MiniCube x={152} y={368} s={13} />
        <MiniCube x={412} y={338} s={14} />

        {/* pilha: base -> topo */}
        <Slab cy={282} w={136} h={71} depth={15} top="url(#hv-base)" side="#080C11" edge="rgba(57,211,83,0.15)" />
        <Slab cy={222} w={112} h={59} depth={13} top="url(#hv-mid)" side="#0C1219" edge="rgba(57,211,83,0.26)" />

        {/* luz da camada verde projetada sobre a pilha */}
        <polygon
          points={`${CX - 70},222 ${CX},185 ${CX + 70},222 ${CX},259`}
          fill="url(#hv-beam)"
          opacity="0.75"
          filter="url(#hv-soft)"
        />

        {/* camada de crescimento, flutuando */}
        <g className="hv-core">
          <polygon points={`${CX - 88},150 ${CX},104 ${CX + 88},150 ${CX},196`} fill="#39D353" opacity="0.5" filter="url(#hv-soft)" />
          <Slab cy={150} w={88} h={46} depth={11} top="url(#hv-green)" side="#1B8A31" edge="rgba(255,255,255,0.4)" />
        </g>

        {/* conectores até os chips */}
        <g className="hv-links" fill="none" stroke="#39D353" strokeWidth="1.1" strokeDasharray="4 5" opacity="0.5">
          <path d={`M150,116 L196,116 L${CX - 42},140`} />
          <path d={`M470,176 L412,176 L${CX + 58},160`} />
          <path d={`M452,286 L404,286 L${CX + 84},234`} />
        </g>
        <g fill="#39D353" className="hv-nodes">
          <circle cx={CX - 42} cy="140" r="2.6" />
          <circle cx={CX + 58} cy="160" r="2.6" />
          <circle cx={CX + 84} cy="234" r="2.6" />
        </g>
      </svg>

      <span className="hv-chip hv-chip--security">
        <LogoSymbol className="hv-chip__icon" id="hv-sec" />
        <span>
          <strong>Segurança</strong>
          <em>Controle de acesso</em>
        </span>
      </span>

      <span className="hv-chip hv-chip--cost">
        <LogoSymbol className="hv-chip__icon" id="hv-cost" />
        <span>
          <strong>Custos</strong>
          <em>Otimização</em>
        </span>
      </span>

      <span className="hv-chip hv-chip--perf">
        <LogoSymbol className="hv-chip__icon" id="hv-perf" />
        <span>
          <strong>Performance</strong>
          <em>Escala</em>
        </span>
      </span>
    </div>
  );
}
