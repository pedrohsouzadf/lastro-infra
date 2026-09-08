import React from "react";
import { Server, LockKeyhole, Activity, Zap } from "lucide-react";

export default function SignalBar() {
  return (
    <section className="signal-bar" aria-label="Especialidades técnicas da LASTRO">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 signal-bar__inner">
        <span className="signal-bar__label">FOUNDERS + CTOS</span>
        <span className="signal-bar__divider" />
        <span className="signal-item">
          <Server size={14} /> cloud & aws
        </span>
        <span className="signal-item">
          <LockKeyhole size={14} /> segurança & iam
        </span>
        <span className="signal-item">
          <Activity size={14} /> observabilidade
        </span>
        <span className="signal-item">
          <Zap size={14} /> finops & custos
        </span>
      </div>
    </section>
  );
}
