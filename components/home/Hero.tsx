"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/content";
import { HERO_IMAGES } from "@/lib/assets";

/** Hero — §C.3.
 *  Sharp horizontal slider: incoming slide enters from the right, outgoing
 *  slides off to the left. No cross-fade — the transition is crisp and
 *  decisive. Both animations run for 900ms in lock-step so the two slides
 *  pass each other cleanly at the halfway mark.
 *
 *  Slide cadence: 6s dwell. Text stack (accent → h1 → subline → CTAs) is
 *  static; only the background photo changes. Users can jump slides via
 *  the gold indicator dots below the CTAs. */
const SLIDE_MS = 6000;
const TRANSITION_MS = 900;

export function Hero() {
  const [active, setActive] = useState(0);
  // Previous slide index during a transition (null when idle).
  // Kept mounted for TRANSITION_MS so we can animate it out to the left.
  const [previous, setPrevious] = useState<number | null>(null);

  // Ref mirrors `active` so setInterval can read the latest index without
  // becoming a stale closure over the initial 0.
  const activeRef = useRef(0);

  const goTo = useCallback((next: number) => {
    const cur = activeRef.current;
    if (next === cur) return;
    setPrevious(cur);
    setActive(next);
    activeRef.current = next;
    window.setTimeout(() => setPrevious((p) => (p === cur ? null : p)), TRANSITION_MS);
  }, []);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;
    const id = window.setInterval(() => {
      goTo((activeRef.current + 1) % HERO_IMAGES.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [goTo]);

  return (
    <section className="relative isolate min-h-[70vh] w-full overflow-hidden sm:min-h-[80vh] lg:min-h-[92vh]">
      {/* Slider stage — outgoing (previous) slides left, incoming (active) slides in from right. */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {previous !== null && previous !== active && (
          <div
            key={`out-${previous}-${active}`}
            aria-hidden
            className="absolute inset-0 animate-hero-out"
          >
            <Image
              src={HERO_IMAGES[previous]}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}
        <div
          key={`in-${active}`}
          className="absolute inset-0 animate-hero-in"
        >
          <Image
            src={HERO_IMAGES[active]}
            alt="Pinemont hotel"
            fill
            priority={active === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Luxury scrim stack — same four layers. */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-hsq-black/70 via-hsq-black/30 to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_50%_72%,rgba(200,164,94,0.24)_0%,transparent_70%)]"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-hsq-black/95 via-hsq-black/55 to-transparent" />

      <div className="relative mx-auto flex h-full min-h-[70vh] w-full max-w-screen-xl flex-col items-center justify-end px-4 pb-20 pt-32 text-center sm:min-h-[80vh] sm:px-6 sm:pb-24 sm:pt-40 lg:min-h-[92vh] lg:px-8 lg:pb-32">
        <p className="font-luxe italic font-light tracking-[0.04em] text-hsq-gold text-5xl sm:text-6xl lg:text-7xl leading-none">
          {BRAND.scriptAccent}
        </p>
        <h1 className="mt-4 text-h1 text-white">
          {BRAND.name}
        </h1>
        <p className="mt-6 max-w-xl text-body-lg text-white/85 sm:mt-8">
          {BRAND.tagline}.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
          <Button variant="primary" size="lg" href="#booking">
            Book Now
          </Button>
          <Button variant="outlineLight" size="lg" href="#rooms">
            Explore Rooms
          </Button>
        </div>

        {/* Slide indicators — narrow white pills, gold pill on active. Click to jump. */}
        {HERO_IMAGES.length > 1 && (
          <div className="mt-14 flex items-center gap-2.5" role="tablist" aria-label="Hero slides">
            {HERO_IMAGES.map((_, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={
                    "h-[3px] rounded-full transition-all duration-500 ease-out " +
                    (isActive
                      ? "w-10 bg-hsq-gold"
                      : "w-5 bg-white/40 hover:bg-white/70")
                  }
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
