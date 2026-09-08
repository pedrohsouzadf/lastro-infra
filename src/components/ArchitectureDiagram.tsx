"use client";

import React from "react";
import {
  Code2,
  Terminal,
  Layers3,
  Cloud,
  Database,
  ArrowUpRight,
} from "lucide-react";

export default function ArchitectureDiagram() {
  return (
    <div
      className="architecture-card"
      aria-label="Mapa da arquitetura de nuvem resiliente e distribuída"
    >
      <div className="architecture-card__topline">
        <span className="mono-label">
          <span className="live-dot" /> LIVE SYSTEM MAP
        </span>
        <span className="mono-label">LASTRO / CONTROL-PLANE</span>
      </div>

      <div className="architecture-card__body">
        {/* SVG Pipeline Lines */}
        <svg
          className="architecture-card__lines"
          viewBox="0 0 520 390"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M62 86 C148 86, 145 184, 232 184 S325 282, 425 282" />
          <path d="M62 282 C150 282, 148 184, 232 184 S324 86, 425 86" />
          <path d="M232 184 H425" />
          <path d="M232 184 V86" />
          <path d="M232 184 V282" />
          <circle cx="62" cy="86" r="5" />
          <circle cx="62" cy="282" r="5" />
          <circle cx="232" cy="184" r="6" />
          <circle cx="425" cy="86" r="5" />
          <circle cx="425" cy="282" r="5" />
        </svg>

        {/* Source: Product Web/API */}
        <div className="diagram-node diagram-node--source">
          <span className="diagram-node__icon">
            <Code2 size={16} />
          </span>
          <span>
            <b>product</b>
            <small>web / api</small>
          </span>
        </div>

        {/* Source: Deploy Pipeline */}
        <div className="diagram-node diagram-node--source diagram-node--lower">
          <span className="diagram-node__icon">
            <Terminal size={16} />
          </span>
          <span>
            <b>deploy</b>
            <small>pipeline / ci</small>
          </span>
        </div>

        {/* Core Center: LASTRO Sustentação */}
        <div className="diagram-core">
          <span className="diagram-core__ring">
            <Layers3 size={24} />
          </span>
          <b>LASTRO</b>
          <small>control plane</small>
        </div>

        {/* Edge: Global Cloud / CDN */}
        <div className="diagram-node diagram-node--edge diagram-node--edge-top">
          <span className="diagram-node__icon">
            <Cloud size={16} />
          </span>
          <span>
            <b>edge</b>
            <small>aws / vercel</small>
          </span>
        </div>

        {/* Data: Postgres / Supabase */}
        <div className="diagram-node diagram-node--edge diagram-node--edge-bottom">
          <span className="diagram-node__icon">
            <Database size={16} />
          </span>
          <span>
            <b>data</b>
            <small>postgresql / pitr</small>
          </span>
        </div>

        {/* System Health Readout */}
        <div className="architecture-card__readout">
          <span className="mono-label">SYSTEM HEALTH</span>
          <span className="readout-trend">
            <ArrowUpRight size={13} /> stable / scaling
          </span>
        </div>
      </div>

      <div className="architecture-card__footer">
        <span>
          <i className="status-pip" /> 05 nodes online
        </span>
        <span>
          latency <b>42ms</b>
        </span>
        <span>
          region <b>sa-east-1</b>
        </span>
      </div>
    </div>
  );
}
