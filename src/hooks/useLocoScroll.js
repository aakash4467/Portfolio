"use client";
import { useEffect } from "react";

export const useLocoScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let instance;
    let cancelled = false;
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!cancelled) instance = new LocomotiveScroll();
    })();
    return () => {
      cancelled = true;
      instance?.destroy?.();
    };
  }, []);
};
