import { useState } from "react";
import Reveal, { useReveal } from "./Reveal.jsx";
import FlowLine from "./FlowLine.jsx";
import DemoModal from "./DemoModal.jsx";
import { PROJECTS, SKILLS, STACK } from "./data.js";

function Nav() {
  const [open, setOpen] = useState(false);

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">
          <span className="dot"></span>oladimeji.dev
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Pipelines</a>
          <a href="#contact">Contact</a>
        </div>
        <button
          className={"hamburger" + (open ? " open" : "")}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={"mobile-menu" + (open ? " open" : "")}>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#skills" onClick={handleLinkClick}>Skills</a>
        <a href="#projects" onClick={handleLinkClick}>Pipelines</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero wrap">
      <div className="eyebrow">Enterprise AI Automation Engineer</div>
      <h1>
        I architect enterprise pipelines that <span className="accent">eliminate operational latency</span> and{" "}
        <span className="strike">manual bottlenecks</span>.
      </h1>
      <p className="hero-sub">
        Oladimeji — Building production-grade, fault-tolerant AI automations on Make.com:
        real-time webhook triage, Google Gemini 3.5 structured reasoning, multi-branch SLA routers, and autonomous SaaS workflows.
      </p>
      <div className="hero-meta">
        <span>
          <b>4</b> Enterprise Architectures
        </span>
        <span>
          <b>12+</b> APIs & SaaS Integrations
        </span>
        <span>
          <b>100%</b> Sub-Second AI Triage
        </span>
      </div>
      <div className="btn-row">
        <a href="#projects" className="btn btn-primary">
          Explore Production Pipelines
        </a>
        <a href="#contact" className="btn btn-ghost">
          Get in touch
        </a>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="wrap">
      <Reveal className="section-head">
        <div className="eyebrow">Engineering Philosophy</div>
        <h2>Enterprise automation built to fail gracefully.</h2>
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-text" as="div">
          <p>
            I build automations the way a senior reliability engineer designs systems:{" "}
            <strong>where does this edge case break, how do we enforce strict schema validation, and what happens next?</strong> Every
            pipeline here solves a high-stakes business problem — from mission-critical VIP customer churn risk and automated revenue qualification to financial invoice fraud audits.
          </p>
          <p>
            My architectures bridge modern LLMs (Google Gemini 3.5 Flash, OpenAI) with deterministic execution engines. Rather than simple linear triggers, I build multi-branch routers, strict JSON schema parsers, and automated error break/resume handlers that guarantee 99.9% pipeline uptime.
          </p>
          <p>
            Available for enterprise AI automation consulting, fractional automation engineering, and full-time workflow architecture roles.
          </p>
        </Reveal>
        <Reveal className="stack-list" as="div">
          <div className="stack-label">Core Production Stack</div>
          <div className="stack-pills">
            {STACK.map((t) => (
              <span className="pill" key={t}>
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SkillRow({ name, pct }) {
  const [ref, show] = useReveal();
  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-name">{name}</div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: show ? pct + "%" : "0%" }}></div>
      </div>
      <div className="skill-pct">{pct}%</div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="wrap">
      <Reveal className="section-head">
        <div className="eyebrow">Capabilities</div>
        <h2>Production engineering competencies.</h2>
      </Reveal>
      <div className="skill-rows">
        {SKILLS.map((s) => (
          <SkillRow key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, onDemo }) {
  return (
    <Reveal as="article" className={"project-card " + project.status}>
      <div className="project-top">
        <div className="project-title-row">
          <span className="project-num">{project.num}</span>
          <h3 className="project-title">{project.title}</h3>
        </div>
        <span
          className={"project-status " + (project.status === "done" ? "status-done" : "status-pending")}
        >
          {project.status === "done" ? "Production Live" : "In Review"}
        </span>
      </div>
      <p className="project-desc">{project.desc}</p>
      <div className="flow-strip" aria-label="Automation flow">
        {project.flow.map((node, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center" }}>
            <span className={"flow-node " + (node.type || "")}>{node.label}</span>
            {i < project.flow.length - 1 && <span className="flow-arrow">&#8594;</span>}
          </span>
        ))}
      </div>
      <div className="project-bottom">
        <div className="project-tags">
          {project.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <button className="btn-small" onClick={() => onDemo(project)}>
          &#9654; Architecture & Demo
        </button>
      </div>
    </Reveal>
  );
}

function Projects({ onDemo }) {
  return (
    <section id="projects" className="wrap">
      <Reveal className="section-head">
        <div className="eyebrow">Featured Work</div>
        <h2>Enterprise Architectures & Production Pipelines</h2>
        <p>
          Each pipeline demonstrates fault-tolerant design, real-time webhook ingestion, LLM reasoning with strict JSON validation, and conditional routing. Click "Architecture & Demo" to explore.
        </p>
      </Reveal>
      <div className="project-list">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.num} project={p} onDemo={onDemo} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="wrap">
      <Reveal className="contact-box">
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          Get in touch
        </div>
        <h2>Have mission-critical workflows that need automating?</h2>
        <p>
          Let's analyze your operational bottlenecks, eliminate repetitive manual toil, and build production-grade AI pipelines that scale.
        </p>
        <div className="contact-links">
          <a href="mailto:oladimeji.automation@gmail.com" className="btn btn-primary">
            Email me
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            LinkedIn
          </a>
          <a href="https://x.com/Oladmeji_i" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            X / Twitter
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="wrap">
      <div className="footer-inner">
        <span>&copy; 2026 Oladimeji — Enterprise AI Automations built with Make.com & Google Gemini.</span>
        <span>Lagos, Nigeria &bull; Available Worldwide</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [demoProject, setDemoProject] = useState(null);

  return (
    <>
      <FlowLine />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects onDemo={setDemoProject} />
      <Contact />
      <Footer />
      {demoProject && <DemoModal project={demoProject} onClose={() => setDemoProject(null)} />}
    </>
  );
}
