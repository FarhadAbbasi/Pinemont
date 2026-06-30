import Image from "next/image";
import { ArrowRight, Wifi, Wind, Coffee, BedDouble } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { EyebrowHeading } from "@/components/ui/EyebrowHeading";
import { Button } from "@/components/ui/Button";
import { ROOMS, type Room } from "@/lib/content";
import { pickByRole } from "@/lib/assets";

/** Rooms & Suites — §C.6 + §D.1 row 6.
 *  1 col mobile → 2 md → 3 lg. Horizontal scroll snap on mobile for swipe feel. */
export function Rooms() {
  // Pull six clean landscape room interiors. The catalog has enough variety
  // that each card gets a visually distinct shot.
  const roomPhotos = pickByRole("roomCard", ROOMS.length, {
    orientation: "landscape",
    seed: 11,
  });
  return (
    <Section id="rooms" tone="offwhite">
      <Container>
        <EyebrowHeading
          eyebrow="Rooms And Apartments"
          title="Our Rooms & Suites"
          intro="Explore our collection of furnished and stylish rooms."
        />
        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:p-0 lg:grid-cols-3 lg:gap-8">
          {ROOMS.map((room, i) => (
            <RoomCard key={room.name} room={room} src={roomPhotos[i] ?? roomPhotos[0]} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function RoomCard({
  room,
  src,
}: {
  room: Room;
  src: string;
}) {
  return (
    <article className="surface-card group relative w-[80%] shrink-0 snap-start overflow-hidden sm:w-auto">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={src}
          alt={room.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 80vw"
          className="object-cover transition-transform duration-slow ease-smooth group-hover:scale-105"
        />
        {room.featured && (
          <span className="absolute left-3 top-3 inline-flex items-center rounded-pill bg-gradient-gold px-3 py-1 text-caption font-semibold uppercase tracking-[0.12em] text-white shadow-gold">
            Preferred by Guests
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-h4 text-hsq-black">{room.name}</h3>
        <p className="line-clamp-2 text-body-sm text-muted-foreground">{room.desc}</p>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-hsq-gold">
          <RoomFeature icon={<BedDouble className="h-4 w-4" />} label="King bed" />
          <RoomFeature icon={<Wifi className="h-4 w-4" />} label="Wi-Fi" />
          <RoomFeature icon={<Wind className="h-4 w-4" />} label="A/C" />
          <RoomFeature icon={<Coffee className="h-4 w-4" />} label="Breakfast" />
        </ul>
        <div className="mt-2 flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-hsq-gold">{room.price}</span>
            <span className="text-caption text-muted-foreground">/ night</span>
          </div>
          <Button variant="ghost" size="sm" href="#booking" className="px-0 text-hsq-gold">
            View Details
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}

function RoomFeature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li className="flex items-center gap-1.5 text-body-sm text-muted-foreground">
      <span className="text-hsq-gold">{icon}</span>
      {label}
    </li>
  );
}
