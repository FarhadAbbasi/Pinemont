import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/content";

/** Location / Map — §D.1 row 11.
 *  Left: H2 + address + CTA. Right: map iframe (OSM placeholder). */
export function LocationMap() {
  return (
    <Section id="location" tone="default">
      <Container className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center">
          <p className="eyebrow">Find Us</p>
          <h2 className="mt-3 text-h2 text-hsq-black">{BRAND.name} Location</h2>
          <p className="mt-4 text-body-lg text-muted-foreground">
            Placeholder address copy. Drop your final map embed link and reach
            details into this block.
          </p>
          <ul className="mt-6 space-y-4 text-body text-hsq-black">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-hsq-gold" />
              <span>{BRAND.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-hsq-gold" />
              <a href={`tel:${BRAND.phone}`} className="hover:text-hsq-gold">{BRAND.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-hsq-gold" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-hsq-gold">{BRAND.email}</a>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" href="https://maps.google.com" external>
              Get Directions
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outlineGold" href={`tel:${BRAND.phone}`}>Call Front Desk</Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border shadow-luxury">
          <iframe
            title="Map placeholder"
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.5%2C30.5%2C75.5%2C34.5&amp;layer=mapnik"
            className="block h-full min-h-[320px] w-full sm:min-h-[400px]"
            loading="lazy"
          />
        </div>
      </Container>
    </Section>
  );
}
