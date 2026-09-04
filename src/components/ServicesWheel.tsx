"use client";

import { useRef, useState } from "react";
import type { Dict } from "@/lib/content";
import { Reveal } from "./Reveal";

export function ServicesWheel({ dict }: { dict: Dict }) {
  const items = dict.services.items;
  const [active, setActive] = useState(0);
  const locked = useRef(false);

  const go = (delta: number) => {
    setActive((i) => Math.min(items.length - 1, Math.max(0, i + delta)));
  };

  const onWheel = (e: React.WheelEvent) => {
    if (locked.current || Math.abs(e.deltaY) < 8) return;
    locked.current = true;
    go(e.deltaY > 0 ? 1 : -1);
    window.setTimeout(() => {
      locked.current = false;
    }, 400);
  };

  const current = items[active];

  return (
    <section className="px-5 sm:px-8 py-24 sm:py-32 border-y border-line">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[10rem_1fr_1fr] gap-10 lg:gap-16">
        <Reveal>
          <p className="font-accent italic text-3xl sm:text-4xl text-red">
            {dict.servicesPage.headingMark}
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div onWheel={onWheel} className="select-none">
            <ul className="space-y-4 sm:space-y-5">
              {items.map((item, i) => {
                const dist = Math.abs(i - active);
                const opacity = dist === 0 ? 1 : dist === 1 ? 0.5 : 0.25;
                return (
                  <li key={item.code}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      style={{ opacity }}
                      className="font-mono text-sm sm:text-base tracking-[0.1em] text-red text-left transition-opacity duration-300"
                    >
                      {i === active ? `[ ${item.title.toUpperCase()} ]` : item.title.toUpperCase()}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <div key={current.code} className="rise-in">
          <p className="text-sm sm:text-base text-red/70 leading-relaxed max-w-md">
            {current.long}
          </p>
          <ul className="mt-6 space-y-2">
            {current.includes.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-sm text-red leading-relaxed"
              >
                <span aria-hidden="true">—</span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
