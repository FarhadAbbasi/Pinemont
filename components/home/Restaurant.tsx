import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CUISINES } from "@/lib/content";
import { pickByRole } from "@/lib/assets";

/** Restaurant showcase — §C.7 + §D.1 row 7.
 *  Dark tone with gold accents. 2-col on desktop: copy left, cuisine grid right. */
export function Restaurant() {
  // Restaurant pool is small but representative — allow branded shots here so
  // we can fill all four cuisine cards.
  const cuisinePhotos = pickByRole("restaurant", CUISINES.length, {
    seed: 30,
    includeBranded: true,
  });
  return (
    <Section id="restaurant" tone="dark">
      <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Our Restaurant</p>
          <h2 className="mt-3 text-h2 text-white">
            A Rooftop Kitchen That Travels The World
          </h2>
          <p className="mt-5 text-body-lg text-white/75">
            Placeholder restaurant copy. Hot tandoori, hand-rolled pasta,
            steamed dim sum &mdash; our chefs cook across four cuisines so
            every guest finds their comfort plate.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-md">
            <RestaurantStat label="Cuisines" value="4" />
            <RestaurantStat label="Daily Service" value="24h" />
            <RestaurantStat label="Seats" value="120" />
            <RestaurantStat label="Rooftop" value="Yes" />
          </div>
          <div className="mt-8">
            <Button variant="primary" href="#booking">Reserve A Table</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {CUISINES.map((cuisine, i) => (
            <article
              key={cuisine.name}
              className="group overflow-hidden rounded-xl bg-hsq-cream text-hsq-black shadow-luxury"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cuisinePhotos[i] ?? cuisinePhotos[0]}
                  alt={cuisine.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-slow ease-smooth group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold">{cuisine.name}</h3>
                <p className="mt-1 line-clamp-2 text-body-sm text-muted-foreground">{cuisine.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function RestaurantStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
      <p className="text-2xl font-bold text-hsq-gold">{value}</p>
      <p className="mt-0.5 text-caption uppercase tracking-[0.14em] text-white/60">{label}</p>
    </div>
  );
}
