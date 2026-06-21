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
          <a href="#projects">Projects</a>
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
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero wrap">
      <div className="eyebrow">AI automation builder</div>
      <h1>
        I connect the tools that <span className="accent">used to need</span> a{" "}
        <span className="strike">human</span> in between.
      </h1>
      <p className="hero-sub">
        Oladimeji — building practical, working automations with Make.com: forms that
        route themselves, inboxes that summarize themselves, and AI that reads a
        message before a person has to.
      </p>
      <div className="hero-meta">
        <span>
          <b>6</b> automations built
        </span>
        <span>
          <b>8</b> tools integrated
        </span>
        <span>
          <b>0</b> manual handoffs
        </span>
      </div>
      <div className="btn-row">
        <a href="#projects" className="btn btn-primary">
          View projects
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
        <div className="eyebrow">About</div>
        <h2>Automation that actually ships.</h2>
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-text" as="div">
          <p>
            I build automations the way a careful operator thinks about a process:{" "}
            <strong>where does this break, and what happens next.</strong> Every
            project here started as a real workflow problem — a lead that needed
            following up, an inbox that needed summarizing, an order that needed
            tracking — and ended as a working pipeline.
          </p>
          <p>
            I trained through Make's automation course, then pushed past the
            curriculum into webhooks, AI classification, and conditional routing —
            the layer where automations stop being simple triggers and start making
            decisions.
          </p>
          <p>
            I'm looking for freelance automation work or an entry-level role where I
            can keep building things that remove repetitive work from someone's day.
          </p>
        </Reveal>
        <Reveal className="stack-list" as="div">
          <div className="stack-label">Tools in the stack</div>
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
        <div className="eyebrow">Skills</div>
        <h2>What I bring to a build.</h2>
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
          {project.status === "done" ? "Shipped" : "In progress"}
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
          &#9654; Watch demo
        </button>
      </div>
    </Reveal>
  );
}

function Projects({ onDemo }) {
  return (
    <section id="projects" className="wrap">
      <Reveal className="section-head">
        <div className="eyebrow">Projects</div>
        <h2>Six builds, six different jobs automated.</h2>
        <p>
          Each card traces the actual flow of data — trigger to action — the way it's
          wired in Make. Click "watch demo" to see it run.
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
        <h2>Have a process that needs automating?</h2>
        <p>
          I'll take a look at the workflow and tell you honestly whether automation is
          the right fix — then build it if it is.
        </p>
        <div className="contact-links">
          <a href="mailto:oladimeji.automation@gmail.com" className="btn btn-primary">
            Email me
          </a>
          <a href="https://linkedin.com" className="btn btn-ghost">
            LinkedIn
          </a>
          <a href="https://x.com/Oladmeji_i" className="btn btn-ghost">
            X / Twitter
          </a>
          {/* gvghvcgvkhvhvbbhjbjhfdbyuldfgbyulfbluffblfbgylbgubgbg */}
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="wrap">
      <div className="footer-inner">
        <span>&copy; 2026 Oladimeji — built with Make.com, debugged with patience.</span>
        <span>Lagos, Nigeria</span>
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
