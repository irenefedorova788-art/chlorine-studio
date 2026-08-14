import Image from "next/image";

/**
 * Fixed, page-wide photographic backdrop. Rendered once in the root layout
 * so every section on every route is a transparent panel over the same
 * image, rather than each section carrying its own solid background.
 */
export function PageBackdrop() {
  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      <Image
        src="/hero-photo.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[38%_35%]"
      />
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
