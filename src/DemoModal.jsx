import { useEffect, useRef, useState } from "react";

export default function DemoModal({ project, onClose }) {
  const [step, setStep] = useState(-1);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const closeBtnRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Try to autoplay the moment the modal opens. Most browsers allow
  // autoplay only when muted, so we start muted and let the user unmute
  // with the native video controls if they want sound.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
  }, [project.videoSrc]);

  // Drive the simulation steps off real video playback time, so the
  // "simulated flow" panel advances in step with what's happening on
  // screen instead of running on its own separate timer.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || videoError) return;

    function tick() {
      if (v.duration && !isNaN(v.duration)) {
        const progress = v.currentTime / v.duration;
        const total = project.flow.length;
        const idx = Math.min(total - 1, Math.floor(progress * total));
        setStep(idx);
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [project.flow.length, videoError]);

  function replaySimulation() {
    const v = videoRef.current;
    if (v && !videoError) {
      v.currentTime = 0;
      v.muted = true;
      v.play().catch(() => {});
    } else {
      // No video available — just step through manually on a timer.
      setStep(0);
      let i = 0;
      const id = setInterval(() => {
        i += 1;
        if (i >= project.flow.length) {
          clearInterval(id);
        } else {
          setStep(i);
        }
      }, 1300);
    }
  }

  const finished = step === project.flow.length - 1;

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
            <div className="modal-sub">Demo recording + live flow simulation</div>
          </div>
          <button className="modal-close" onClick={onClose} ref={closeBtnRef} aria-label="Close demo">
            &#x2715;
          </button>
        </div>

        {/* ---- Plain-words description, read before watching ---- */}
        {project.videoDescription && (
          <p className="demo-description">{project.videoDescription}</p>
        )}

        {/* ---- Real video demo ---- */}
        <div className="demo-section-label">Recorded demo</div>
        <div className="video-frame">
          {!videoError && project.videoSrc ? (
            <video
              key={project.videoSrc}
              ref={videoRef}
              controls
              autoPlay
              muted
              playsInline
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

        {/* ---- Simulated flow run, synced to video progress ---- */}
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
            {step === -1 && "The flow lights up automatically as the video plays."}
            {step >= 0 && project.flow[step]?.caption}
          </div>
        </div>

        <div className="demo-controls">
          <button className="btn btn-ghost" onClick={replaySimulation}>
            &#8635; Replay from start
          </button>
          <button className="btn btn-ghost" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
