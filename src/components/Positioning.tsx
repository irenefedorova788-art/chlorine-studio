import type { Dict } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Positioning({ dict }: { dict: Dict }) {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="max-w-3xl font-display font-medium text-2xl sm:text-4xl lg:text-5xl leading-[1.3] text-[#f1ece2]">
            {dict.positioning.lead}
            <span className="text-red">{dict.positioning.leadMark}</span>
            {dict.positioning.leadTail}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
