"use client";
import { useEffect } from "react";

export const useLocoScroll = (start) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotivescroll = new LocomotiveScroll();
    })();
  }, []);
};
