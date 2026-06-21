export const PROJECTS = [
  {
    num: "01",
    title: "Lead capture & follow-up",
    status: "done",
    desc: "A form submission becomes a logged lead, a welcome email, and a real-time alert — with zero manual steps.",
    videoSrc: "/videos/project-01.mp4",
    videoDescription:
      "This automation watches for new form submissions on Tally. When a lead fills the form, their details are automatically saved to Google Sheets, a welcome email is sent to them via Gmail and I get an instant Telegram notification. Zero manual work needed.",
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
    videoDescription:
      "This automation watches my Gmail inbox for new emails. When one arrives with \"urgent\" or \"invoice\" in the subject line, it extracts the key content using Text Parser and sends a clean summary straight to my Telegram. I never have to open Gmail to know what's inside an important email.",
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
    videoDescription:
      "This automation watches for new content ideas submitted via a Tally form. Each idea is automatically logged into a Google Sheets content calendar with the platform, content type and posting date, and I get notified instantly on Telegram.",
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
    videoDescription:
      "This automation watches for new invoice entries added to Google Sheets. Once a row is added, a professional invoice email is automatically sent to the client via Gmail with all the invoice details, and I receive a Telegram notification confirming it was sent.",
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
    videoDescription: "",
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
    videoDescription: "",
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
