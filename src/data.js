export const PROJECTS = [
  {
    num: "01",
    title: "Enterprise AI Support Triage & Auto-Resolution Engine",
    status: "done",
    desc: "Autonomous multi-model triage pipeline that ingests customer support tickets via real-time webhooks, runs zero-shot sentiment and intent classification with Gemini 3.5 Flash, dynamically routes VIP accounts to executive escalation, and auto-resolves Tier-1 requests with sub-second SLA.",
    videoSrc: "/videos/project-01.mp4",
    videoDescription:
      "This mission-critical enterprise pipeline ingests live customer support webhooks and dispatches the payload to Google Gemini 3.5 Flash with strict JSON schema constraints. Gemini analyzes intent, sentiment, and urgency score (1-5). An intelligent router evaluates churn risk and VIP tiers, instantly triggering high-priority Gmail escalation and real-time Telegram alerts for executive intervention while automatically resolving standard Tier-1 FAQ inquiries.",
    flow: [
      { label: "Webhook", type: "trigger", caption: "Real-time support ticket ingest" },
      { label: "Gemini 3.5 Flash", type: "ai", caption: "Zero-shot intent, sentiment & urgency classification" },
      { label: "JSON Parser", caption: "Strict schema validation & entity extraction" },
      { label: "Intelligent Router", caption: "Conditional 3-way SLA routing" },
      { label: "Gmail & Telegram", caption: "VIP churn alert & automated FAQ resolution" },
    ],
    tags: ["Make.com", "Gemini 3.5 Flash", "Structured JSON", "Webhooks", "SLA Protection", "VIP Escalation"],
  },
  {
    num: "02",
    title: "B2B Autonomous Lead Enrichment & ICP Scoring Engine",
    status: "done",
    desc: "High-velocity inbound lead qualification engine. Ingests form submissions, queries enrichment APIs for company firmographics, evaluates Ideal Customer Profile (ICP) fit using Gemini AI, and triggers high-touch sales Slack/Telegram notifications for Tier-1 enterprise buyers while routing nurture leads to automated sequences.",
    videoSrc: "/videos/project-02.mp4",
    videoDescription:
      "This revenue-operations pipeline eliminates manual lead qualification. Incoming leads from webhooks are cross-referenced with enrichment APIs to pull employee headcount, industry, and annual revenue. Gemini AI scores ICP fit (Tier 1, Tier 2, Unqualified). High-value enterprise prospects immediately trigger an Account Executive alert on Telegram and a CRM deal update in HubSpot.",
    flow: [
      { label: "Lead Ingest", type: "trigger", caption: "Inbound form submission webhook" },
      { label: "Clearbit / Apollo", caption: "Firmographic & revenue data enrichment" },
      { label: "Gemini AI", type: "ai", caption: "Automated ICP match & buying power score" },
      { label: "SDR Router", caption: "Tier-1 VIP route vs automated nurture" },
      { label: "HubSpot & Telegram", caption: "Instant AE alert & CRM deal creation" },
    ],
    tags: ["Make.com", "Revenue Operations", "Gemini AI", "Lead Enrichment", "HubSpot CRM", "Instant Alerts"],
  },
  {
    num: "03",
    title: "Autonomous Invoice Reconciliation & Fraud Audit Engine",
    status: "done",
    desc: "End-to-end accounts payable automation that intercepts vendor invoices from Gmail attachments, extracts line-item totals using multi-modal AI OCR, audits against purchase orders for pricing anomalies, and flags duplicate or fraudulent charges for financial controller review.",
    videoSrc: "/videos/project-03.mp4",
    videoDescription:
      "This financial workflow monitors vendor inboxes for PDF invoices, extracts line-item pricing, tax breakdowns, and bank details via OCR and AI reasoning. It automatically cross-references the invoice against approved purchase order databases, flags duplicate invoice numbers, detects pricing discrepancies, and logs clean records for automated ledger reconciliation.",
    flow: [
      { label: "Gmail Watch", type: "trigger", caption: "Vendor invoice PDF attachment detected" },
      { label: "Document AI OCR", type: "ai", caption: "Multi-modal line item & entity extraction" },
      { label: "2-Way Match Engine", caption: "PO database cross-check & fraud audit" },
      { label: "Audit Router", caption: "Auto-approve vs anomaly escalation" },
      { label: "Finance Alert", caption: "Controller Telegram notification & ERP sync" },
    ],
    tags: ["Make.com", "FinTech Automation", "Document AI", "Fraud Detection", "Accounts Payable", "ERP Sync"],
  },
  {
    num: "04",
    title: "Executive Email Intelligence & Action Item Extractor",
    status: "done",
    desc: "High-priority inbox guardian that monitors incoming communications, extracts critical action items, contracts, and deadlines using natural language processing, and delivers structured briefing digests directly to executive communication channels.",
    videoSrc: "/videos/project-04.mp4",
    videoDescription:
      "This automation guards executive communications by continuously filtering incoming emails. Rather than requiring manual inbox management, it leverages NLP and pattern filters to identify legal contracts, urgent escalations, and client deliverables, delivering actionable executive briefings directly into chat with zero manual friction.",
    flow: [
      { label: "Gmail Watch", type: "trigger", caption: "High-priority message arrives in inbox" },
      { label: "Text & Intent Filter", caption: "Filters urgent keywords and executive domains" },
      { label: "Gemini AI Summary", type: "ai", caption: "Extracts key action items & deadlines" },
      { label: "Telegram Dispatch", caption: "Clean executive digest delivered to mobile" },
    ],
    tags: ["Make.com", "Executive Intelligence", "NLP Text Parsing", "Real-Time Alerts", "Productivity"],
  },
];

export const SKILLS = [
  { name: "Enterprise Architecture & Workflow Design", pct: 95 },
  { name: "AI LLM Integration (Gemini, Claude, GPT)", pct: 92 },
  { name: "Webhooks, REST APIs & JSON Data Transformation", pct: 90 },
  { name: "Fault Tolerance, Error Handling & Break Directives", pct: 88 },
  { name: "CRM & SaaS Systems (HubSpot, Gmail, Sheets, Slack)", pct: 92 },
];

export const STACK = [
  "Make.com",
  "Google Gemini 3.5",
  "Webhooks & REST APIs",
  "JSON / Data Transformers",
  "Gmail API",
  "Telegram Bot API",
  "HubSpot CRM",
  "Google Sheets",
  "OpenAI / Anthropic",
  "Postman",
];
