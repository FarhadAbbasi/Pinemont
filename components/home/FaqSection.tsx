import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { EyebrowHeading } from "@/components/ui/EyebrowHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FAQS } from "@/lib/content";

/** FAQ — §C.9 + §D.1 row 12. */
export function FaqSection() {
  return (
    <Section id="faqs" tone="offwhite">
      <Container>
        <EyebrowHeading
          eyebrow="Frequently Asked"
          title="Common Questions From Our Guests"
          intro="Placeholder Q&A — replace with the property's actual policies."
        />
        <FaqAccordion items={FAQS} />
      </Container>
    </Section>
  );
}
