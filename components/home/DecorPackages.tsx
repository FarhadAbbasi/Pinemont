import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { EyebrowHeading } from "@/components/ui/EyebrowHeading";
import { Button } from "@/components/ui/Button";
import { DECOR_PACKAGES } from "@/lib/content";
import { pickByRole } from "@/lib/assets";

/** Decor packages — §D.1 row 9. 3-up card grid. */
export function DecorPackages() {
  // Decor pool includes the festively-lit exterior, the gilded presidential
  // suite, and a couple of garden seating shots — picks one per package card.
  const photos = pickByRole("decor", DECOR_PACKAGES.length, { seed: 70 });
  return (
    <Section id="decor" tone="default">
      <Container>
        <EyebrowHeading
          eyebrow="Room Decoration"
          title="In-Room Celebration Packages"
          intro="From anniversaries to birthdays — placeholder package details until final pricing is confirmed."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {DECOR_PACKAGES.map((pkg, i) => (
            <article
              key={pkg.name}
              className="surface-card group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photos[i] ?? photos[0]}
                  alt={pkg.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-slow ease-smooth group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-h4 text-hsq-black">{pkg.name}</h3>
                <p className="mt-2 flex-1 text-body-sm text-muted-foreground">{pkg.body}</p>
                <div className="mt-5">
                  <Button variant="primary" size="sm" href="#booking">
                    Reserve
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
