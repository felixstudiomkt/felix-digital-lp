// Bindings do Worker, consumidos via `import { env } from 'cloudflare:workers'`.
// O binding D1 é declarado em vite.config.ts (que gera o wrangler.json do deploy).
// As duas variáveis do DGFlow são opcionais de propósito: enquanto não existirem,
// o repasse ao CRM fica inerte e os leads seguem acumulando com sincronizado_crm = 0.
declare namespace Cloudflare {
  interface Env {
    DB: D1Database;
    /** Notificação de lead novo. Travado em felixstudio.mkt@gmail.com pelo binding. */
    EMAIL: {
      send(mensagem: {
        to: string; from: string; subject: string;
        text?: string; html?: string;
      }): Promise<void>;
    };
    /** Endpoint HTTP de criação de lead no DGFlow. */
    DGFLOW_API_URL?: string;
    /** Token do DGFlow. Instalado como secret: `wrangler secret put DGFLOW_TOKEN`. */
    DGFLOW_TOKEN?: string;
  }
}
