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

      {/* Scrim — top tint for header readability + heavy bottom for text */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.7)_100%)]"
      />

      <div className="relative mx-auto flex h-full min-h-[70vh] w-full max-w-screen-xl flex-col items-center justify-end px-4 pb-16 pt-32 text-center sm:min-h-[80vh] sm:px-6 sm:pb-20 sm:pt-40 lg:min-h-[92vh] lg:px-8 lg:pb-28">
        <p className="tuesday-script text-4xl text-hsq-gold sm:text-5xl lg:text-6xl">
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
