import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { EyebrowHeading } from "@/components/ui/EyebrowHeading";
import { Button } from "@/components/ui/Button";
import { pickByRole } from "@/lib/assets";

/** Gallery teaser — §C.14 + §D.1 row 8.
 *  2 cols (mobile) → 3 (md) → 4 (lg). 8 tiles, mix of 1:1 and 4:5. */
export function GalleryTeaser() {
  // 8 clean (non-branded) mixed shots for the teaser grid.
  const photos = pickByRole("gallery", 8, { seed: 50, includeBranded: false });
  const variants = ["aspect-square", "aspect-[4/5]", "aspect-square", "aspect-[4/5]",
                    "aspect-[4/5]", "aspect-square", "aspect-[4/5]", "aspect-square"];
  return (
    <Section id="gallery" tone="offwhite">
      <Container>
        <EyebrowHeading
          eyebrow="Photo Gallery Of Our Premium Hotel"
          title="Warm Welcome To Our Photo Gallery"
          intro="A curated look at the property — placeholder imagery until brand-shot library is dropped in."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((src, i) => (
            <figure
              key={src}
              className={`group relative overflow-hidden rounded-2xl ${variants[i]} bg-muted`}
            >
              <Image
                src={src}
                alt={`Pinemont gallery ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-all duration-slow ease-smooth group-hover:scale-105 group-hover:brightness-95"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-scrim-card opacity-0 transition-opacity duration-smooth ease-smooth group-hover:opacity-100"
              />
            </figure>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="outlineGold" href="#gallery">View Full Gallery</Button>
        </div>
      </Container>
    </Section>
  );
}
