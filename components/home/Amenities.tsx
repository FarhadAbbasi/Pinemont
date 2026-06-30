import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { EyebrowHeading } from "@/components/ui/EyebrowHeading";
import { AMENITIES } from "@/lib/content";

/** Amenities grid — §C.5 + §D.1 row 5.
 *  2 cols (mobile) → 3 (md) → 4 (lg). */
export function Amenities() {
  return (
    <Section id="amenities" tone="default">
      <Container>
        <EyebrowHeading
          eyebrow="Amenities"
          title="Hotel Guest Facilities"
          intro="Discover the comforts that make every stay unforgettable."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {AMENITIES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="surface-card group flex flex-col items-center p-5 text-center sm:p-6"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-pill bg-hsq-gold/12 text-hsq-gold transition-colors duration-smooth ease-smooth group-hover:bg-hsq-gold/22 sm:h-16 sm:w-16">
                <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-4 text-base font-semibold text-hsq-black sm:text-lg">
                {title}
              </h3>
              <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
