import { useState, useRef, useEffect } from "react";

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const { current: mediaQuery } = useRef(
    window ? window.matchMedia("(prefers-reduced-motion: reduce)") : null
  );

  useEffect(() => {
    const listener = () => {
      setPrefersReducedMotion(!!mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", listener);
    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, [mediaQuery]);

  return prefersReducedMotion;
}
