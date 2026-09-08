import React from "react";
import { Network, ShieldCheck, Gauge, Activity, ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Network,
    title: "Arquitetura cloud",
    description:
      "Desenhamos a fundação certa para seu produto hoje — e para os próximos milhões de requisições.",
    tags: ["AWS", "Vercel", "Supabase"],
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Segurança & resiliência",
    description:
      "Menos risco operacional com acesso bem definido, backups testados e recuperação que funciona.",
    tags: ["IAM", "Backups", "Disaster recovery"],
  },
  {
    number: "03",
    icon: Gauge,
    title: "Performance & escala",
    description:
      "Encontramos gargalos antes que eles apareçam para seus clientes — e preparamos a escala com método.",
    tags: ["Observabilidade", "SLOs", "PostgreSQL"],
  },
  {
    number: "04",
    icon: Activity,
    title: "FinOps & eficiência",
    description:
      "Visibilidade para transformar custo cloud em decisão de negócio, sem cortar o que sustenta o produto.",
    tags: ["Custos", "Alertas", "Otimização"],
  },
];

export default function ServicesSection() {
  return (
    <section className="section section--services" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-heading reveal-up">
          <div className="eyebrow">
            <span className="eyebrow__line" /> O QUE FAZEMOS
          </div>
          <h2>
            Infraestrutura que
            <br />
            <em>deixa o produto respirar.</em>
          </h2>
          <p>
            Especialidade técnica para times enxutos que não podem contratar uma
            infraestrutura inteira — mas precisam de uma base à altura do
            produto.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                className="service-card reveal-up"
                style={{ transitionDelay: `${index * 60}ms` }}
                key={service.number}
              >
                <div className="service-card__top">
                  <span className="service-card__number">{service.number}</span>
                  <Icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-card__tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <ArrowUpRight className="service-card__arrow" size={18} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
