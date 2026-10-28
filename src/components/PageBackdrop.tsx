"use client";

import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

const BRAND_COLORS = ["#eef5fb", "#c3daf0", "#5b93d3", "#a9c9ea", "#eef5fb", "#c3daf0", "#e8a393"];

/**
 * Fixed, page-wide backdrop rendered once in the root layout — a slow
 * drifting mesh gradient in brand colors (same light blues as before, plus
 * a touch of brand red bleeding in), replacing the two static blurred
 * circles. Freezes to a single frame under prefers-reduced-motion.
 */
export function PageBackdrop() {
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <MeshGradient
        colors={BRAND_COLORS}
        distortion={0.75}
        swirl={0.25}
        speed={reducedMotion ? 0 : 0.3}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
