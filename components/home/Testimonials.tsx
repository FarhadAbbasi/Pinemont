import { Star, Quote } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { EyebrowHeading } from "@/components/ui/EyebrowHeading";
import { Button } from "@/components/ui/Button";
import { TESTIMONIALS } from "@/lib/content";

/** Testimonials — §C.13 + §D.1 row 10.
 *  Spec uses Swiper; here we ship the same look as a CSS scroll-snap rail
 *  on mobile and a 3-up grid on lg+ (zero JS, fully accessible). */
export function Testimonials() {
  return (
    <Section tone="cream">
      <Container>
        <EyebrowHeading
          eyebrow="Guest Voices"
          title="What Our Guests Are Really Saying"
          intro="Reviews shown here are placeholders — wire to live Google reviews when ready."
        />
        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:p-0 lg:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name + i}
              className="surface-card flex w-[85%] shrink-0 snap-start flex-col p-6 sm:w-auto"
            >
              <Quote className="h-6 w-6 text-hsq-gold opacity-80" aria-hidden />
              <p className="mt-3 text-body text-hsq-black/85 leading-relaxed">{t.body}</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="text-body-sm font-semibold text-hsq-black">{t.name}</p>
                  <p className="text-caption uppercase tracking-[0.12em] text-muted-foreground">
                    Verified guest
                  </p>
                </div>
                <div className="flex items-center gap-0.5" aria-label={`${t.stars} stars`}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={
                        idx < t.stars
                          ? "h-4 w-4 fill-hsq-gold stroke-hsq-gold"
                          : "h-4 w-4 stroke-border"
                      }
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="outlineGold" href="#" external>Write A Review</Button>
        </div>
      </Container>
    </Section>
  );
}
