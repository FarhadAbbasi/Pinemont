import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Container } from "./Container";
import { NewsletterForm } from "./NewsletterForm";
import { BRAND, NAV_ITEMS } from "@/lib/content";

/** Footer — §C.12. Dark gradient, 4-col on lg, single-col stacked on mobile. */
export function Footer() {
  return (
    <footer className="relative bg-gradient-dark text-white">
      <Container className="grid gap-12 py-16 sm:gap-10 sm:py-20 md:grid-cols-2 lg:grid-cols-4">
        {/* Col 1 — brand */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="tuesday-script text-4xl text-hsq-gold">P</span>
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              {BRAND.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-body-sm text-white/70">
            {BRAND.tagline}. Placeholder hospitality copy &mdash; replace with
            final brand voice.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={BRAND.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors duration-smooth ease-smooth hover:border-hsq-gold hover:text-hsq-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={BRAND.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors duration-smooth ease-smooth hover:border-hsq-gold hover:text-hsq-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Col 2 — quick links */}
        <div>
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="mt-5 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-body-sm text-white/70 transition-colors duration-smooth ease-smooth hover:text-hsq-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — contact */}
        <div>
          <FooterHeading>Contact</FooterHeading>
          <ul className="mt-5 space-y-4 text-body-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-hsq-gold" />
              <span>{BRAND.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-hsq-gold" />
              <a href={`tel:${BRAND.phone}`} className="hover:text-hsq-gold">
                {BRAND.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-hsq-gold" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-hsq-gold">
                {BRAND.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4 — legal / newsletter */}
        <div>
          <FooterHeading>Stay In Touch</FooterHeading>
          <p className="mt-5 text-body-sm text-white/70">
            Get seasonal offers and updates directly in your inbox.
          </p>
          <NewsletterForm />
          <div className="mt-8 flex flex-wrap gap-4 text-caption text-white/50">
            <Link href="#" className="hover:text-hsq-gold">Privacy Policy</Link>
            <Link href="#" className="hover:text-hsq-gold">Terms &amp; Conditions</Link>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-caption text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Built faithfully against the HSQ Towers design system.</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="relative inline-flex flex-col text-body font-semibold uppercase tracking-[0.18em] text-white">
      {children}
      <span aria-hidden className="mt-2 h-[2px] w-8 bg-hsq-gold" />
    </h4>
  );
}
