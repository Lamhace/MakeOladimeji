import { useEffect, useRef, useState } from "react";

export default function FlowLine() {
  const pathRef = useRef(null);
  const [len, setLen] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setLen(pathRef.current.getTotalLength());
    }
  }, []);

  // Coordinates live inside a fixed 100 x 100 viewBox so the line scales
  // proportionally with the page instead of using raw, fragile pixel values.
  const d = "M 6 0 L 6 28 Q 6 30 8 30 L 92 30 Q 94 30 94 32 L 94 55 Q 94 57 92 57 L 6 57 L 6 100";

  return (
    <svg
      id="flowline-svg"
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path ref={pathRef} className="flow-path" d={d} vectorEffect="non-scaling-stroke" />
      {len > 0 && (
        <path
          className="flow-pulse"
          d={d}
          vectorEffect="non-scaling-stroke"
          style={{ strokeDasharray: `2 ${len}`, animation: "flowmove 7s linear infinite" }}
        />
      )}
      <style>{`
        @keyframes flowmove {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -${len + 2}; }
        }
        @media (prefers-reduced-motion: reduce) {
          .flow-pulse { animation: none !important; opacity: 0.3; }
        }
      `}</style>
    </svg>
  );
}
