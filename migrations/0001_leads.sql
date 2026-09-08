-- Base de leads do formulário (binding DB -> felix-digital-lp-leads).
--
-- Aplicar:
--   npx wrangler d1 execute felix-digital-lp-leads --remote --file=migrations/0001_leads.sql
--   npx wrangler d1 execute felix-digital-lp-leads --local  --file=migrations/0001_leads.sql
--
-- sincronizado_crm = 0 significa "ainda não foi para o DGFlow". Enquanto
-- DGFLOW_API_URL e DGFLOW_TOKEN não existirem, toda linha nasce e permanece
-- nesse estado — é a fila de repasse pendente, não um erro.

CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  criado_em TEXT NOT NULL,
  origem TEXT NOT NULL,              -- 'diagnostico' | 'projeto'
  objetivo TEXT,                     -- present | offer | sell | schedule
  funcionalidade TEXT,               -- contact | checkout | booking | quote | unsure
  prazo TEXT,                        -- soon | month | later | research
  indicacao TEXT,                    -- formato sugerido pelo quiz
  nome TEXT NOT NULL,
  telefone TEXT NOT NULL,
  negocio TEXT,
  email TEXT,
  observacoes TEXT,
  whatsapp_aberto INTEGER NOT NULL DEFAULT 0,
  sincronizado_crm INTEGER NOT NULL DEFAULT 0,
  crm_lead_id TEXT,
  tentativas_crm INTEGER NOT NULL DEFAULT 0,
  ultimo_erro_crm TEXT
);

CREATE INDEX IF NOT EXISTS idx_leads_pendentes_crm ON leads (sincronizado_crm, criado_em);
CREATE INDEX IF NOT EXISTS idx_leads_criado_em ON leads (criado_em DESC);
CREATE INDEX IF NOT EXISTS idx_leads_prazo ON leads (prazo);
