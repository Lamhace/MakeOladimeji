import { useEffect, useRef, useState } from "react";

export default function DemoModal({ project, onClose }) {
  const [step, setStep] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const timerRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  function play() {
    setPlaying(true);
    setStep(0);
    advance(0);
  }

  function advance(i) {
    timerRef.current = setTimeout(() => {
      if (i + 1 < project.flow.length) {
        setStep(i + 1);
        advance(i + 1);
      } else {
        setPlaying(false);
      }
    }, 1400);
  }

  function replay() {
    clearTimeout(timerRef.current);
    play();
  }

  const finished = !playing && step === project.flow.length - 1;

  return (
    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="demo-title">
        <div className="modal-head">
          <div>
            <div id="demo-title" className="modal-title">
              {project.title}
            </div>
            <div className="modal-sub">Demo recording + simulated flow</div>
          </div>
          <button className="modal-close" onClick={onClose} ref={closeBtnRef} aria-label="Close demo">
            &#x2715;
          </button>
        </div>

        {/* ---- Real video demo ---- */}
        <div className="demo-section-label">Recorded demo</div>
        <div className="video-frame">
          {!videoError && project.videoSrc ? (
            <video
              key={project.videoSrc}
              controls
              preload="metadata"
              className="video-el"
              onError={() => setVideoError(true)}
            >
              <source src={project.videoSrc} type="video/mp4" />
            </video>
          ) : (
            <div className="video-placeholder">
              <span className="video-placeholder-icon">&#127909;</span>
              <span>Demo video coming soon</span>
            </div>
          )}
        </div>

        {/* ---- Simulated flow run ---- */}
        <div className="demo-section-label">Simulated flow</div>
        <div className="demo-stage">
          <div className="demo-flow">
            {project.flow.map((node, i) => (
              <span key={i} className="demo-node-wrap">
                <span
                  className={
                    "demo-node " + (i === step ? "active" : i < step || finished ? "complete" : "")
                  }
                >
                  {node.label}
                </span>
                {i < project.flow.length - 1 && (
                  <span className={"demo-arrow-mini " + (i < step ? "lit" : "")}>&#8594;</span>
                )}
              </span>
            ))}
          </div>
          <div className="demo-caption">
            {step === -1 && "Press play to watch the flow run, step by step."}
            {step >= 0 && project.flow[step]?.caption}
          </div>
        </div>

        <div className="demo-controls">
          {step === -1 && (
            <button className="btn btn-primary" onClick={play}>
              &#9654; Play simulation
            </button>
          )}
          {step !== -1 && (
            <button className="btn btn-ghost" onClick={replay}>
              &#8635; Replay
            </button>
          )}
          <button className="btn btn-ghost" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
