export interface AuditFinding {
  id: string;
  category: "SEGURANÇA" | "FINOPS" | "CONFIABILIDADE" | "PERFORMANCE";
  severity: "CRÍTICO" | "ALTO" | "MÉDIO";
  resource: string;
  finding: string;
  impact: string;
  actionTaken: string;
}

export const sampleFindings: AuditFinding[] = [
  {
    id: "FND-01",
    category: "CONFIABILIDADE",
    severity: "CRÍTICO",
    resource: "PostgreSQL (RDS / Supabase)",
    finding: "Rotina de snapshot ativa, porém sem teste de restore documentado há 14 meses e sem réplica cross-region.",
    impact: "Risco de perda irreversível de dados em caso de corrupção ou indisponibilidade regional.",
    actionTaken: "Implementação de Point-in-Time Recovery (PITR) e script automatizado de teste de restauração mensal.",
  },
  {
    id: "FND-02",
    category: "FINOPS",
    severity: "ALTO",
    resource: "AWS EC2 / NAT Gateway / CloudWatch",
    finding: "R$ 3.840/mês em tráfego roteado incorretamente por NAT Gateway e retenção infinita de logs de debug.",
    impact: "Desperdício recorrente de 34% da fatura total de nuvem sem nenhum ganho de entrega.",
    actionTaken: "Criação de VPC Endpoints diretos para S3/DynamoDB e política de expiração de logs em 14 dias.",
  },
  {
    id: "FND-03",
    category: "SEGURANÇA",
    severity: "CRÍTICO",
    resource: "IAM / AWS Access Keys",
    finding: "Chave de acesso com política AdministratorAccess embutida no repositório de backend.",
    impact: "Vulnerabilidade severa de tomada total da conta e vazamento de dados de clientes.",
    actionTaken: "Revogação imediata da credencial, migração para IAM Roles com permissões mínimas e auditoria de logs no CloudTrail.",
  },
  {
    id: "FND-04",
    category: "PERFORMANCE",
    severity: "ALTO",
    resource: "Vercel Serverless + Pooler",
    finding: "Conexões diretas de Edge Functions saturando o limite max_connections do banco em picos de tráfego.",
    impact: "Erros 500 intermitentes e lentidão na finalização de checkout para usuários finais.",
    actionTaken: "Reconfiguração do connection pooler (porta transacional 6543) e otimização de índices de consultas frequentes.",
  },
];
