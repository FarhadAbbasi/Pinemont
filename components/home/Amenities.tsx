import Image from "next/image";
import {
  Coffee,
  ParkingCircle,
  Wifi,
  Users,
  WashingMachine,
  Shirt,
  Utensils,
  Mountain,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/content";
import type { LucideIcon } from "lucide-react";

/**
 * Amenities band — Design-System §C.5 / §D.1 row 5.
 *
 * Hero-style rounded card (replicates the hsqtowers.com layout the user
 * pasted in): full-bleed background image with a dark scrim, two halves
 * — brand + CTA on the left, glassmorphic facility tiles on the right.
 * Stacks to a single column on mobile.
 */

type Facility = {
  Icon: LucideIcon;
  label: string;
  badge?: string;
};

const FACILITIES: readonly Facility[] = [
  { Icon: Coffee,         label: "Breakfast",  badge: "Free" },
  { Icon: ParkingCircle,  label: "Parking" },
  { Icon: Wifi,           label: "Free Wi-Fi" },
  { Icon: Users,          label: "Conference" },
  { Icon: WashingMachine, label: "Laundry" },
  { Icon: Shirt,          label: "Iron" },
  { Icon: Utensils,       label: "Restaurant" },
  { Icon: Mountain,       label: "Mountain View" },
];

// Atmospheric exterior — swap freely; matches the "evocative wide shot"
// the HSQ original used.
const AMENITIES_BG = "/assets/14a39e71.webp";

export function Amenities() {
  return (
    <section id="amenities" className="w-full py-10 sm:py-14 lg:py-20">
      <Container className="px-0 sm:px-4 lg:px-6">
        <div className="relative isolate mx-auto w-[94%] overflow-hidden rounded-3xl shadow-luxury sm:w-full lg:w-[90%]">
          {/* Background image */}
          <Image
            src={AMENITIES_BG}
            alt=""
            fill
            sizes="(min-width: 1024px) 90vw, 94vw"
            className="-z-20 object-cover"
            priority={false}
          />
          {/* Dark scrim */}
          <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />

          <div className="relative flex flex-col items-center gap-8 px-5 py-12 sm:px-10 sm:py-16 lg:flex-row lg:items-center lg:gap-12 lg:px-16 lg:py-20">
            {/* Left: brand + heading + CTA */}
            <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:order-1">
              <span className="tuesday-script text-5xl text-hsq-gold sm:text-6xl">P</span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Hotel Guest Facilities
              </h2>
              <p className="mt-3 max-w-md text-body-sm text-white/80 sm:text-body">
                {BRAND.tagline}.
              </p>
              <Button
                variant="primary"
                size="md"
                href="#rooms"
                className="mt-6 shadow-gold"
              >
                Book Now
              </Button>
            </div>

            {/* Right: glassy facility tiles */}
            <div className="flex w-full flex-wrap justify-center gap-3 sm:gap-4 lg:order-2 lg:w-1/2">
              {FACILITIES.map((f) => (
                <FacilityTile key={f.label} {...f} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FacilityTile({ Icon, label, badge }: Facility) {
  return (
    <div
      className={
        "relative flex h-24 w-24 flex-col items-center justify-center " +
        "rounded-2xl border border-white/20 bg-white/5 shadow-lg backdrop-blur-md " +
        "transition-all duration-smooth ease-smooth hover:scale-110 hover:cursor-pointer hover:shadow-xl " +
        "sm:h-28 sm:w-28 lg:h-32 lg:w-32"
      }
    >
      {badge && (
        <span className="absolute -right-2 -top-2 z-10 rounded-pill border border-white/20 bg-hsq-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md lg:text-xs">
          {badge}
        </span>
      )}
      <Icon
        className="h-9 w-9 text-hsq-gold sm:h-10 sm:w-10 lg:h-12 lg:w-12"
        strokeWidth={1.6}
        aria-hidden
      />
      <p className="mt-2 text-[11px] font-semibold text-white sm:text-xs lg:text-sm">
        {label}
      </p>
    </div>
  );
}
