import { useState, useCallback, useEffect } from "react";

const REDUCE_MOTION_MEDIA = "(prefers-reduced-motion: reduce)";

const mediaQuery = window && window.matchMedia(REDUCE_MOTION_MEDIA);

export const useReduceMotion = () => {
  const [state, setState] = useState(false);

  const listener = useCallback(() => {
    setState(!!mediaQuery.matches);
  }, []);

  useEffect(() => {
    setState(!!mediaQuery.matches);
    mediaQuery.addEventListener("change", listener);
    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return state;
};
