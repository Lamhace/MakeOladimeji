import { useEffect, useRef, useState } from "react";

export function useReveal() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setShow(true);
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, show];
}

export default function Reveal({ children, as: Tag = "div", className = "", ...props }) {
  const [ref, show] = useReveal();
  return (
    <Tag ref={ref} className={"reveal " + className + (show ? " in" : "")} {...props}>
      {children}
    </Tag>
  );
}
