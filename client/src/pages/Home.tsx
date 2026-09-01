import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Database,
  Gauge,
  Layers3,
  LockKeyhole,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

const services = [
  {
    number: "01",
    icon: Network,
    title: "Arquitetura cloud",
    description: "Desenhamos a fundação certa para seu produto hoje — e para os próximos milhões de requisições.",
    tags: ["AWS", "Vercel", "Supabase"],
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Segurança & resiliência",
    description: "Menos risco operacional com acesso bem definido, backups testados e recuperação que funciona.",
    tags: ["IAM", "Backups", "Disaster recovery"],
  },
  {
    number: "03",
    icon: Gauge,
    title: "Performance & escala",
    description: "Encontramos gargalos antes que eles apareçam para seus clientes — e preparamos a escala com método.",
    tags: ["Observabilidade", "SLOs", "Load testing"],
  },
  {
    number: "04",
    icon: Activity,
    title: "FinOps & eficiência",
    description: "Visibilidade para transformar custo cloud em decisão de negócio, sem cortar o que sustenta o produto.",
    tags: ["Custos", "Alertas", "Otimização"],
  },
];

const workflow = [
  { step: "01", title: "Mapear", text: "Entendemos o produto, o time e os pontos de tensão da operação atual." },
  { step: "02", title: "Priorizar", text: "Separamos risco real de ruído e montamos um plano em ordem de impacto." },
  { step: "03", title: "Estruturar", text: "Implementamos a base, documentamos as decisões e deixamos o time no controle." },
];

const stack = ["Amazon Web Services", "Vercel", "Supabase", "Terraform", "Docker", "GitHub Actions", "Cloudflare", "Grafana"];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className={`brand-mark ${compact ? "brand-mark--compact" : ""}`} aria-label="Lastro — início">
      <span className="brand-mark__icon" aria-hidden="true">
        <span className="brand-mark__beam brand-mark__beam--one" />
        <span className="brand-mark__beam brand-mark__beam--two" />
        <span className="brand-mark__beam brand-mark__beam--three" />
      </span>
      {!compact && <span className="brand-mark__name">lastro<span>.</span></span>}
    </a>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="architecture-card" aria-label="Mapa abstrato de uma arquitetura resiliente">
      <div className="architecture-card__topline">
        <span className="mono-label"><span className="live-dot" /> LIVE SYSTEM MAP</span>
        <span className="mono-label">LASTRO / 001</span>
      </div>
      <div className="architecture-card__body">
        <svg className="architecture-card__lines" viewBox="0 0 520 390" preserveAspectRatio="none" aria-hidden="true">
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
        <div className="diagram-node diagram-node--source">
          <span className="diagram-node__icon"><Code2 size={16} /></span>
          <span><b>product</b><small>web / api</small></span>
        </div>
        <div className="diagram-node diagram-node--source diagram-node--lower">
          <span className="diagram-node__icon"><Terminal size={16} /></span>
          <span><b>deploy</b><small>pipeline</small></span>
        </div>
        <div className="diagram-core">
          <span className="diagram-core__ring"><Layers3 size={20} /></span>
          <b>lastro</b>
          <small>control plane</small>
        </div>
        <div className="diagram-node diagram-node--edge diagram-node--edge-top">
          <span className="diagram-node__icon"><Cloud size={16} /></span>
          <span><b>edge</b><small>global</small></span>
        </div>
        <div className="diagram-node diagram-node--edge diagram-node--edge-bottom">
          <span className="diagram-node__icon"><Database size={16} /></span>
          <span><b>data</b><small>durable</small></span>
        </div>
        <div className="architecture-card__readout">
          <span className="mono-label">SYSTEM HEALTH</span>
          <strong>99.98<span>%</span></strong>
          <span className="readout-trend"><ArrowUpRight size={13} /> stable / scaling</span>
        </div>
      </div>
      <div className="architecture-card__footer">
        <span><i className="status-pip" /> 05 nodes online</span>
        <span>latency <b>42ms</b></span>
        <span>region <b>sa-east-1</b></span>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal-up");
    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const showToast = () => {
    void navigator.clipboard?.writeText("hello@lastro.in");
    toast.success("Vamos falar sobre sua infraestrutura.", {
      description: "E-mail copiado: hello@lastro.in — respondemos em até 1 dia útil.",
    });
  };

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="container site-header__inner">
          <BrandMark />
          <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`} aria-label="Navegação principal">
            <a href="#problema" onClick={closeMenu}>O problema</a>
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#metodo" onClick={closeMenu}>Método</a>
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#contato" className="site-nav__mobile-cta" onClick={closeMenu}>Falar com especialista <ArrowUpRight size={15} /></a>
          </nav>
          <a className="button button--small button--outline header-cta" href="#contato">Agendar diagnóstico <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow--one" aria-hidden="true" />
          <div className="hero-glow hero-glow--two" aria-hidden="true" />
          <div className="container hero-section__inner">
            <div className="hero-copy reveal-up">
              <div className="eyebrow"><span className="eyebrow__line" /> INFRAESTRUTURA PARA EMPRESAS EM CRESCIMENTO</div>
              <h1>Sua aplicação cresceu.<br /><em>Sua infraestrutura</em> acompanhou?</h1>
              <p className="hero-copy__intro">O produto funciona. Os clientes chegaram. Agora, transforme o que foi improvisado em uma base pronta para o próximo estágio.</p>
              <div className="hero-actions">
                <a className="button button--primary" href="#contato">Fazer um raio-X <ArrowRight size={17} /></a>
                <a className="text-link" href="#metodo">Conheça o método <ArrowUpRight size={16} /></a>
              </div>
              <div className="hero-note"><span className="hero-note__mark"><Check size={12} /></span> Diagnóstico técnico, sem apresentação comercial genérica.</div>
            </div>
            <div className="hero-visual reveal-up reveal-up--delay">
              <ArchitectureDiagram />
              <div className="hero-visual__caption"><span>uma arquitetura que não vira gargalo</span><span className="caption-arrow">↗</span></div>
            </div>
          </div>
          <div className="hero-scroll"><span className="hero-scroll__line" /> role para explorar</div>
        </section>

        <section className="signal-bar" aria-label="Especialidades técnicas">
          <div className="container signal-bar__inner">
            <span className="signal-bar__label">FOUNDERS + CTOS</span>
            <span className="signal-bar__divider" />
            <span className="signal-item"><Server size={14} /> cloud</span>
            <span className="signal-item"><LockKeyhole size={14} /> segurança</span>
            <span className="signal-item"><Activity size={14} /> observabilidade</span>
            <span className="signal-item"><Zap size={14} /> finops</span>
          </div>
        </section>

        <section className="section section--problem" id="problema">
          <div className="container">
            <div className="section-heading section-heading--split reveal-up">
              <div>
                <div className="eyebrow"><span className="eyebrow__line" /> O MOMENTO DA VIRADA</div>
                <h2>O crescimento não<br /><em>espera</em> a arquitetura.</h2>
              </div>
              <p>É quando a velocidade do produto encontra o limite da infraestrutura. Nada quebra de uma vez — os sinais aparecem antes.</p>
            </div>
            <div className="problem-grid">
              <article className="problem-card reveal-up">
                <span className="problem-card__index">/ 01</span>
                <span className="problem-card__icon"><Gauge size={20} /></span>
                <h3>Custos que escalam<br />mais rápido que o produto</h3>
                <p>Você abre a fatura e não consegue explicar o que está pagando — ou o que pode otimizar.</p>
                <div className="problem-card__meter"><span style={{ width: "78%" }} /><small>visibilidade do custo <b>22%</b></small></div>
              </article>
              <article className="problem-card problem-card--accent reveal-up reveal-up--delay-short">
                <span className="problem-card__index">/ 02</span>
                <span className="problem-card__icon"><Activity size={20} /></span>
                <h3>Alertas que chegam<br />depois do cliente</h3>
                <p>Sem observabilidade, cada incidente vira investigação. O time perde foco e confiança.</p>
                <div className="problem-card__wave" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /></div>
              </article>
              <article className="problem-card reveal-up reveal-up--delay">
                <span className="problem-card__index">/ 03</span>
                <span className="problem-card__icon"><LockKeyhole size={20} /></span>
                <h3>Risco invisível<br />na operação diária</h3>
                <p>Acesso sem governança, backup nunca restaurado e decisões que só existem na cabeça de alguém.</p>
                <div className="problem-card__log"><span className="log-dot" /> last backup test <b>never</b></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--method" id="metodo">
          <div className="container method-layout">
            <div className="method-sticky reveal-up">
              <div className="eyebrow"><span className="eyebrow__line" /> COMO A LASTRO TRABALHA</div>
              <h2>Menos apagar<br />incêndios.<br /><em>Mais construir base.</em></h2>
              <p>Entramos onde seu time precisa de clareza: entre o que a aplicação exige e o que a operação consegue sustentar.</p>
              <a className="text-link" href="#contato">Conversar sobre o seu cenário <ArrowUpRight size={16} /></a>
            </div>
            <div className="workflow-list">
              {workflow.map((item, index) => (
                <div className="workflow-item reveal-up" style={{ transitionDelay: `${index * 80}ms` }} key={item.step}>
                  <span className="workflow-item__number">{item.step}</span>
                  <div className="workflow-item__content"><h3>{item.title}</h3><p>{item.text}</p></div>
                  <ArrowUpRight className="workflow-item__arrow" size={19} />
                </div>
              ))}
              <div className="workflow-terminal reveal-up">
                <div className="workflow-terminal__top"><span><i className="status-pip" /> lastro / plan</span><span>bash</span></div>
                <div className="workflow-terminal__body"><span className="terminal-prompt">$</span><span>infra status <b>--ready-for-growth</b></span><span className="terminal-cursor" /></div>
                <div className="workflow-terminal__result"><Check size={13} /> architecture baseline established</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--services" id="servicos">
          <div className="container">
            <div className="section-heading reveal-up">
              <div className="eyebrow"><span className="eyebrow__line" /> O QUE FAZEMOS</div>
              <h2>Infraestrutura que<br /><em>deixa o produto respirar.</em></h2>
              <p>Especialidade técnica para times enxutos que não podem contratar uma infraestrutura inteira — mas precisam de uma base à altura do produto.</p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article className="service-card reveal-up" style={{ transitionDelay: `${index * 60}ms` }} key={service.number}>
                    <div className="service-card__top"><span className="service-card__number">{service.number}</span><Icon size={19} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-card__tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <ArrowUpRight className="service-card__arrow" size={18} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="diagnostic-section" id="raio-x">
          <div className="diagnostic-grid" aria-hidden="true" />
          <div className="container diagnostic-section__inner">
            <div className="diagnostic-copy reveal-up">
              <div className="eyebrow eyebrow--dark"><span className="eyebrow__line" /> PRIMEIRO PASSO</div>
              <h2>Um Raio-X.<br /><em>Decisões melhores.</em></h2>
              <p>Em uma sessão objetiva, mapeamos a arquitetura atual, os riscos que merecem atenção e as alavancas que destravam o próximo estágio.</p>
              <a className="button button--dark" href="#contato">Agendar meu Raio-X <ArrowRight size={17} /></a>
            </div>
            <div className="diagnostic-list reveal-up reveal-up--delay-short">
              {[
                ["01", "Mapa da arquitetura atual", "o que existe, como se conecta, onde depende"],
                ["02", "Matriz de risco e impacto", "o que pode esperar — e o que não pode"],
                ["03", "Plano de ação priorizado", "próximos passos claros, sem overengineering"],
              ].map(([number, title, text]) => (
                <div className="diagnostic-item" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><Check size={17} /></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--stack">
          <div className="container stack-layout">
            <div className="stack-intro reveal-up"><div className="eyebrow"><span className="eyebrow__line" /> FERRAMENTAS, NÃO FETICHES</div><h2>Trabalhamos com<br /><em>o que faz sentido.</em></h2><p>Conhecemos o ecossistema moderno. A escolha vem depois do contexto — nunca antes.</p></div>
            <div className="stack-cloud reveal-up reveal-up--delay-short">{stack.map((item, i) => <span className={i === 0 || i === 2 ? "stack-chip stack-chip--active" : "stack-chip"} key={item}>{item}</span>)}</div>
          </div>
        </section>

        <section className="section section--proof" id="sobre">
          <div className="container proof-layout">
            <div className="proof-quote reveal-up"><span className="quote-mark">“</span><blockquote>Infraestrutura não é o que aparece na demo. É o que permite a próxima demo existir.</blockquote><div className="proof-quote__author"><span className="author-mark">L</span><span><b>Lastro</b><small>infraestrutura para crescer</small></span></div></div>
            <div className="proof-aside reveal-up reveal-up--delay-short"><div className="eyebrow"><span className="eyebrow__line" /> POR QUE LASTRO</div><h2>Profundidade técnica.<br /><em>Conversa de negócio.</em></h2><p>Não somos uma fábrica de tickets nem uma consultoria que entrega um diagrama e desaparece. Somos o parceiro técnico entre o produto e a operação.</p><div className="proof-points"><span><Check size={14} /> documentação que o time usa</span><span><Check size={14} /> recomendações sem overengineering</span><span><Check size={14} /> decisões explicadas em português claro</span></div></div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-section__grid" aria-hidden="true" />
          <div className="container contact-section__inner">
            <div className="contact-copy reveal-up"><div className="eyebrow"><span className="eyebrow__line" /> PRÓXIMO PASSO</div><h2>Seu produto já cresceu.<br /><em>Faça a base acompanhar.</em></h2><p>Conte onde a infraestrutura está hoje. A primeira conversa é técnica, direta e sem compromisso.</p></div>
            <div className="contact-action reveal-up reveal-up--delay-short"><a className="button button--primary button--large" href="mailto:hello@lastro.in?subject=Quero fazer um Raio-X da minha infraestrutura">hello@lastro.in <ArrowUpRight size={18} /></a><button className="contact-secondary" onClick={showToast}>Copiar e-mail <span>⌘ C</span></button></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container site-footer__inner"><BrandMark compact /><div className="site-footer__meta"><span>infraestrutura para empresas em crescimento</span><span>© 2026 Lastro</span></div><div className="site-footer__links"><a href="#top">voltar ao topo <ArrowUpRight size={14} /></a><a href="mailto:hello@lastro.in">e-mail <ArrowUpRight size={14} /></a></div></div></footer>
      <div className="mobile-bottom-cta"><a href="#contato">Agendar diagnóstico <ArrowUpRight size={15} /></a></div>
    </div>
  );
}
