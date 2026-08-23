"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale, WorkItem } from "@/lib/content";

export function WorkGrid({
  items,
  allLabel,
  soonLabel,
  viewLabel,
  locale,
  light = false,
}: {
  items: WorkItem[];
  allLabel: string;
  soonLabel: string;
  viewLabel: string;
  locale: Locale;
  /** Homepage teaser sits on the light gradient backdrop: neutral dark title, frosted-glass card instead of the dark tile used on /work's photo backdrop. */
  light?: boolean;
}) {
  const categories = [allLabel, ...Array.from(new Set(items.map((i) => i.category)))];
  const [active, setActive] = useState(allLabel);

  const visible =
    active === allLabel ? items : items.filter((i) => i.category === active);

  return (
    <div className="grid lg:grid-cols-[12rem_1fr] gap-8 lg:gap-12">
      <div className="flex lg:flex-col gap-x-6 gap-y-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 border-l border-line pl-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-left whitespace-nowrap font-mono text-[11px] tracking-[0.16em] transition-colors ${
              active === cat ? "text-red" : "text-red/50 hover:text-red"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {visible.map((item) => {
          const card = (
            <div
              className={`group relative aspect-[4/3] overflow-hidden border backdrop-blur-sm ${
                light ? "border-black/10 bg-white/40" : "border-line bg-bg/45"
              }`}
            >
              {!light && (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(165,103,95,0.16) 0px, rgba(165,103,95,0.16) 1px, transparent 1px, transparent 14px)",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(120% 100% at 50% 100%, rgba(165,103,95,0.3), transparent 70%)",
                    }}
                  />
                </>
              )}
              <div className="relative h-full flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-red">
                    {item.year}
                  </span>
                  <span
                    className={`font-mono text-[10px] tracking-[0.18em] border px-2 py-1 text-red transition-colors ${
                      light ? "border-black/10" : "border-line"
                    }`}
                  >
                    {item.slug ? viewLabel : soonLabel}
                  </span>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-red mb-2">
                    {item.category.toUpperCase()}
                  </p>
                  <h3
                    className={`font-display font-semibold text-xl sm:text-2xl leading-tight ${
                      light ? "text-red" : ""
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          );

          return item.slug ? (
            <Link key={item.title} href={`/${locale}/work/${item.slug}`}>
              {card}
            </Link>
          ) : (
            <div key={item.title}>{card}</div>
          );
        })}
      </div>
    </div>
  );
}
