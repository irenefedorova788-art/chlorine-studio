"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Variant = { src: string; position: string };

const HOME: Variant = { src: "/bg-home.jpg", position: "50% 35%" };
const BLUE: Variant = { src: "/bg-blue.jpg", position: "50% 30%" };
const PURPLE: Variant = { src: "/bg-purple.jpg", position: "50% 25%" };

function variantForPath(pathname: string): Variant {
  const section = pathname.split("/").filter(Boolean)[1] ?? "";
  if (section === "services" || section === "process") return BLUE;
  if (section === "work") return PURPLE;
  return HOME;
}

type Layer = Variant & { id: number; visible: boolean };

let nextLayerId = 0;

/**
 * Fixed, page-wide backdrop rendered once in the root layout. The image
 * swaps per section (home keeps the portrait photo; Services/Process use
 * the blue reference, Work uses the purple one) and crossfades between
 * them on navigation instead of cutting.
 */
export function PageBackdrop() {
  const pathname = usePathname();
  const variant = variantForPath(pathname);
  const currentSrc = useRef(variant.src);
  const [layers, setLayers] = useState<Layer[]>(() => [
    { id: nextLayerId++, ...variant, visible: true },
  ]);

  useEffect(() => {
    if (variant.src === currentSrc.current) return;
    currentSrc.current = variant.src;
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
  }, [variant.src]);

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {layers.map((layer, i) => (
        <div
          key={layer.id}
          className="absolute inset-0 transition-opacity duration-[1000ms] ease-out"
          style={{ opacity: layer.visible ? 1 : 0, zIndex: i }}
        >
          <Image
            src={layer.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: layer.position }}
          />
        </div>
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,7,10,0.7) 0%, rgba(8,7,10,0.5) 28%, rgba(8,7,10,0.62) 65%, rgba(8,7,10,0.85) 100%)",
        }}
      />
    </div>
  );
}
