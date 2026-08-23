"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type PhotoVariant = { kind: "photo"; key: string; src: string; position: string };
type GradientVariant = { kind: "gradient"; key: string };
type Variant = PhotoVariant | GradientVariant;

const HOME_GRADIENT_CSS = "linear-gradient(160deg, #eef5fb 0%, #dbe9f6 55%, #c3daf0 100%)";

const HOME: Variant = { kind: "gradient", key: "home-gradient" };
const BLUE: Variant = { kind: "photo", key: "/bg-blue.jpg", src: "/bg-blue.jpg", position: "50% 30%" };
const PURPLE: Variant = { kind: "photo", key: "/bg-purple.jpg", src: "/bg-purple.jpg", position: "50% 25%" };

function variantForPath(pathname: string): Variant {
  const section = pathname.split("/").filter(Boolean)[1] ?? "";
  if (section === "services" || section === "process") return BLUE;
  if (section === "work") return PURPLE;
  return HOME;
}

type Layer = Variant & { id: number; visible: boolean };

let nextLayerId = 0;

function BackdropLayer({ variant, priority }: { variant: Variant; priority: boolean }) {
  if (variant.kind === "photo") {
    return (
      <>
        <Image
          src={variant.src}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: variant.position }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,7,10,0.7) 0%, rgba(8,7,10,0.5) 28%, rgba(8,7,10,0.62) 65%, rgba(8,7,10,0.85) 100%)",
          }}
        />
      </>
    );
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ background: HOME_GRADIENT_CSS }}
    >
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

/**
 * Fixed, page-wide backdrop rendered once in the root layout. The visual
 * swaps per section — home uses a light gradient, Services/Process use the
 * blue reference photo, Work uses the purple one — and crossfades between
 * them on navigation instead of cutting.
 */
export function PageBackdrop() {
  const pathname = usePathname();
  const variant = variantForPath(pathname);
  const currentKey = useRef(variant.key);
  const [layers, setLayers] = useState<Layer[]>(() => [
    { id: nextLayerId++, ...variant, visible: true },
  ]);

  // Keeps the actual body background in sync with the current section, so
  // iOS Safari's rubber-band overscroll (which briefly exposes the body,
  // not this fixed layer) doesn't flash the wrong color underneath.
  useEffect(() => {
    document.body.style.background = variant.kind === "gradient" ? HOME_GRADIENT_CSS : "";
  }, [variant.kind]);

  useEffect(() => {
    if (variant.key === currentKey.current) return;
    currentKey.current = variant.key;
    const id = nextLayerId++;
    setLayers((prev) => [...prev, { id, ...variant, visible: false }]);

    const raf = requestAnimationFrame(() => {
      setLayers((prev) => prev.map((l) => (l.id === id ? { ...l, visible: true } : l)));
    });
    const timeout = setTimeout(() => {
      setLayers((prev) => prev.filter((l) => l.id === id));
    }, 1200);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant.key]);

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {layers.map((layer, i) => (
        <div
          key={layer.id}
          className="absolute inset-0 transition-opacity duration-[1000ms] ease-out"
          style={{ opacity: layer.visible ? 1 : 0, zIndex: i }}
        >
          <BackdropLayer variant={layer} priority={i === 0} />
        </div>
      ))}
    </div>
  );
}
