export const PROJECTS = [
  {
    num: "01",
    title: "Lead capture & follow-up",
    status: "done",
    desc: "A form submission becomes a logged lead, a welcome email, and a real-time alert — with zero manual steps.",
    videoSrc: "/videos/project-01.mp4",
    flow: [
      { label: "Tally form", type: "trigger", caption: "Customer submits a lead form" },
      { label: "Google Sheets", caption: "Lead is logged as a new row" },
      { label: "Gmail", caption: "Welcome email sent automatically" },
      { label: "Telegram", caption: "Team gets an instant alert" },
    ],
    tags: ["Webhook trigger", "Email automation", "Notifications"],
  },
  {
    num: "02",
    title: "Email summarizer & notifier",
    status: "done",
    desc: "Watches an inbox and only acts on what matters — if a subject line contains 'urgent' or 'invoice', the details get summarized and pushed straight to chat.",
    videoSrc: "/videos/project-02.mp4",
    flow: [
      { label: "Gmail watch", type: "trigger", caption: "New email lands in the inbox" },
      { label: "Filter: subject", caption: "Checks if subject contains 'urgent' or 'invoice'" },
      { label: "Text parser", caption: "Key content is extracted" },
      { label: "Telegram", caption: "Summary delivered to chat" },
    ],
    tags: ["Text parsing", "Filters", "Real-time alerts"],
  },
  {
    num: "03",
    title: "Social content planner",
    status: "done",
    desc: "Turns a content-idea form into a structured calendar row, with a notification the moment it's added.",
    videoSrc: "/videos/project-03.mp4",
    flow: [
      { label: "Tally form", type: "trigger", caption: "Content idea is submitted" },
      { label: "Google Sheets", caption: "Added to the content calendar" },
      { label: "Telegram", caption: "Planner gets notified" },
    ],
    tags: ["Content calendar", "Field mapping"],
  },
  {
    num: "04",
    title: "Invoice & payment follow-up",
    status: "done",
    desc: "A new row in a sheet triggers a formatted invoice email and an internal notification — no spreadsheet babysitting.",
    videoSrc: "/videos/project-04.mp4",
    flow: [
      { label: "Google Sheets", type: "trigger", caption: "New order row detected" },
      { label: "Gmail (HTML)", caption: "Formatted invoice email sent" },
      { label: "Telegram", caption: "Internal team notified" },
    ],
    tags: ["HTML email", "Billing workflow"],
  },
  {
    num: "05",
    title: "End-to-end order management",
    status: "pending",
    desc: "Order intake through to confirmation and internal alert — the full customer order lifecycle in one flow.",
    videoSrc: "/videos/project-05.mp4",
    flow: [
      { label: "Tally form", type: "trigger", caption: "Customer places an order" },
      { label: "Google Sheets", caption: "Order logged with all details" },
      { label: "Gmail", caption: "Confirmation email sent" },
      { label: "Telegram", caption: "Team alerted to fulfil it" },
    ],
    tags: ["Order intake", "Multi-field form"],
  },
  {
    num: "06",
    title: "AI customer inquiry router",
    status: "pending",
    desc: "An incoming inquiry is read and classified by an AI model, then routed to the right response — billing, technical, or general.",
    videoSrc: "/videos/project-06.mp4",
    flow: [
      { label: "Webhook", type: "trigger", caption: "Inquiry comes in from a form" },
      { label: "Gemini AI", type: "ai", caption: "AI reads and classifies the message" },
      { label: "Router", caption: "Flow branches by category" },
      { label: "Gmail / Telegram", caption: "Right response goes out" },
    ],
    tags: ["Webhooks", "AI classification", "Conditional routing"],
  },
];

export const SKILLS = [
  { name: "Workflow design", pct: 90 },
  { name: "Webhooks & APIs", pct: 75 },
  { name: "AI integration", pct: 70 },
  { name: "Form & data tools", pct: 88 },
  { name: "Debugging automations", pct: 82 },
];

export const STACK = ["Make.com", "Tally", "Google Sheets", "Gmail", "Telegram", "Gemini API", "Webhooks", "HTTP modules"];
