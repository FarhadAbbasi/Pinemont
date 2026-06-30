import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/content";
import { HERO_IMAGE } from "@/lib/assets";

/** Hero — §C.3.
 *  Full-bleed image bg + bottom scrim + bottom-aligned text stack:
 *  script accent → H1 → subline → CTA pair. */
export function Hero() {
  return (
    <section className="relative isolate min-h-[70vh] w-full overflow-hidden sm:min-h-[80vh] lg:min-h-[92vh]">
      {/* Background image with slow Ken-Burns */}
      <div className="absolute inset-0 -z-20 animate-kenburns">
        <Image
          src={HERO_IMAGE}
          alt="Pinemont hotel placeholder hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Luxury scrim — four stacked layers (back-to-front):
       *   1. Diagonal dim across the whole image for depth.
       *   2. Top dark fade so the header stays readable on bright shots.
       *   3. Soft warm-gold radial halo behind the headline (the luxe touch).
       *   4. Heavy bottom-up black so the H1/CTA always read sharply.
       */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-hsq-black/60 via-hsq-graphite/35 to-hsq-black/75" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-hsq-black/70 via-hsq-black/30 to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_50%_72%,rgba(215,171,78,0.22)_0%,transparent_70%)]"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-hsq-black/95 via-hsq-black/55 to-transparent" />

      <div className="relative mx-auto flex h-full min-h-[70vh] w-full max-w-screen-xl flex-col items-center justify-end px-4 pb-16 pt-32 text-center sm:min-h-[80vh] sm:px-6 sm:pb-20 sm:pt-40 lg:min-h-[92vh] lg:px-8 lg:pb-28">
        <p className="font-luxe italic font-light tracking-[0.04em] text-hsq-gold text-5xl sm:text-6xl lg:text-7xl leading-none">
          {BRAND.scriptAccent}
        </p>
        <h1 className="mt-2 text-h1 text-white">
          {BRAND.name}
        </h1>
        <p className="mt-4 max-w-xl text-body-lg text-white/85 sm:mt-6">
          {BRAND.tagline}. <span className="opacity-80">Placeholder hero copy &mdash; swap with final brand line.</span>
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button variant="primary" size="lg" href="#booking">
            Book Now
          </Button>
          <Button variant="outlineLight" size="lg" href="#rooms">
            Explore Rooms
          </Button>
        </div>
      </div>
    </section>
  );
}
