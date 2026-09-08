export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Meu desenvolvedor já cuida disso. Por que contratar a LASTRO?",
    answer:
      "A ideia não é substituir seu desenvolvedor — ele conhece as regras de negócio e o produto melhor do que ninguém. O objetivo é liberar o tempo dele. Enquanto ele constrói as features que trazem receita, a LASTRO analisa e blinda especificamente custos, segurança de credenciais, rotinas de backup, resiliência e escalabilidade da nuvem.",
  },
  {
    question: "Não temos problemas aparentes hoje. Por que fazer o Raio-X agora?",
    answer:
      "Esse é justamente o melhor momento para avaliar. Quando a infraestrutura quebra ou a fatura da nuvem triplica no meio de um lançamento, a correção vira emergência e custa muito mais caro. O Raio-X identifica gargalos, vulnerabilidades e desperdícios silenciosos antes que eles virem indisponibilidade.",
  },
  {
    question: "A AWS/provedor já não mostra essas informações no console?",
    answer:
      "O console entrega dados brutos e centenas de métricas sem prioridade de negócio, além de só enxergar o que está dentro do próprio provedor. O Raio-X cobre a stack completa (AWS, Vercel, Supabase, Cloudflare), separa o que é urgente do que é ruído e entrega um plano de ação executivo com prazo, esforço e responsável.",
  },
  {
    question: "Vocês precisam de acesso de administrador à nossa nuvem?",
    answer:
      "Não. Toda a auditoria do Raio-X é executada exclusivamente com permissões de acesso somente leitura (Read-Only) ou através de sessão técnica compartilhada. Nenhuma alteração de código ou modificação de recursos é feita no seu ambiente durante o diagnóstico.",
  },
  {
    question: "O Raio-X me obriga a contratar a implementação ou a recorrência depois?",
    answer:
      "Não há nenhuma obrigação. O Raio-X é um produto fechado e independente de R$ 1.497. Você recebe o relatório completo e decide se executa as melhorias com a LASTRO, com seu próprio time de desenvolvimento interno ou se apenas arquiva as recomendações.",
  },
];
