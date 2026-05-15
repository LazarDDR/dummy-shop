import { useState, useEffect } from "react";

const breakpoints = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
  "3xl": "(min-width: 1440px)",
} as const;

type Breakpoint = keyof typeof breakpoints;

function getMatches(): Record<Breakpoint, boolean> {
  return Object.fromEntries(
    Object.entries(breakpoints).map(([key, query]) => [
      key,
      window.matchMedia(query).matches,
    ]),
  ) as Record<Breakpoint, boolean>;
}

export function useBreakpoint() {
  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    const listeners = Object.entries(breakpoints).map(([key, query]) => {
      const mql = window.matchMedia(query);
      const handler = () =>
        setMatches((prev) => ({ ...prev, [key]: mql.matches }));
      mql.addEventListener("change", handler);
      return { mql, handler };
    });

    return () => {
      listeners.forEach(({ mql, handler }) =>
        mql.removeEventListener("change", handler),
      );
    };
  }, []);

  return matches;
}
