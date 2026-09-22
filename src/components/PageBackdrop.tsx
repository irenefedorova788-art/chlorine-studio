"use client";

const HOME_GRADIENT_CSS = "linear-gradient(160deg, #eef5fb 0%, #dbe9f6 55%, #c3daf0 100%)";

/**
 * Fixed, page-wide backdrop rendered once in the root layout — the same
 * light gradient on every page.
 */
export function PageBackdrop() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true" style={{ background: HOME_GRADIENT_CSS }}>
      <div
        className="absolute w-[65vmax] h-[65vmax] rounded-full opacity-90"
        style={{
          right: "5%",
          top: "18%",
          background: "radial-gradient(circle, #5b93d3 0%, transparent 72%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute w-[45vmax] h-[45vmax] rounded-full opacity-60"
        style={{
          left: "-10%",
          bottom: "-15%",
          background: "radial-gradient(circle, #a9c9ea 0%, transparent 72%)",
          filter: "blur(90px)",
        }}
      />
    </div>
  );
}
