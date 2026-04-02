"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.05,
      syncTouch: true,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
