import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SEO_PARAGRAPHS } from "@/lib/content";

/** SEO long-text band — §D.1 row 13. Single column prose. */
export function SeoText() {
  return (
    <Section tone="default" className="py-10 sm:py-12 lg:py-16">
      <Container className="max-w-3xl">
        <h2 className="text-h3 text-hsq-black">
          One Of The Finest Mountain Retreats For Your Next Getaway
        </h2>
        {SEO_PARAGRAPHS.map((p, i) => (
          <p key={i} className="mt-4 text-body leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </Container>
    </Section>
  );
}
