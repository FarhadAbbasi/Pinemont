import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { pickOneByRole } from "@/lib/assets";

/** "Where Every Detail Meets Luxury" intro band — §D.1 row 4.
 *  Two columns desktop, image-below-text on mobile. */
export function IntroBand() {
  return (
    <Section tone="cream" className="overflow-hidden">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Mountain Hotels At Their Best</p>
          <h2 className="mt-3 text-h2 text-hsq-black">
            Every Room Is Designed To Make Your Mountain Stay Truly Memorable
          </h2>
          <p className="mt-5 text-body-lg text-muted-foreground">
            Placeholder paragraph &mdash; swap with the final brand intro.
            A two- to three-sentence pitch that anchors the property in
            location, scale, and hospitality tone fits nicely here.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {["Panoramic peaks", "Year-round comfort", "Locally sourced kitchen", "Family suites"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-body-sm text-hsq-black">
                <span className="inline-block h-1.5 w-1.5 rounded-pill bg-hsq-gold" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="outlineGold" href="#rooms">Explore Rooms</Button>
            <Button variant="ghost" href="#location">Get Directions →</Button>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-luxury">
          <Image
            src={pickOneByRole("intro", 7, { orientation: "portrait", includeBranded: true })}
            alt="Pinemont mountain retreat"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-slow ease-smooth hover:scale-[1.04]"
          />
        </div>
      </Container>
    </Section>
  );
}
