import { useState, useRef, useEffect } from "react";

export const useReducedMotion = () => {
  const [state, setState] = useState(false);

  const { current: mediaQuery } = useRef(
    window ? window.matchMedia("(prefers-reduced-motion: reduce)") : null
  );

  useEffect(() => {
    const listener = () => {
      setState(!!mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", listener);
    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, [mediaQuery]);

  return state;
};
