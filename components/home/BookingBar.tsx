"use client";

import { Calendar, Users, Search } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

/** Quick booking bar — §D.1 row 3.
 *  Floating card overlapping the hero/intro boundary. */
export function BookingBar() {
  return (
    <div id="booking" className="relative z-10 -mt-12 sm:-mt-16 lg:-mt-20">
      <Container>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 gap-3 rounded-xl border border-border bg-card p-4 shadow-luxury sm:gap-4 sm:p-5 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end"
        >
          <BookingField label="Check-in" icon={<Calendar className="h-4 w-4 text-hsq-gold" />}>
            <input
              type="date"
              className="w-full border-0 bg-transparent text-body text-hsq-black focus:outline-none focus:ring-0"
            />
          </BookingField>
          <BookingField label="Check-out" icon={<Calendar className="h-4 w-4 text-hsq-gold" />}>
            <input
              type="date"
              className="w-full border-0 bg-transparent text-body text-hsq-black focus:outline-none focus:ring-0"
            />
          </BookingField>
          <BookingField label="Guests" icon={<Users className="h-4 w-4 text-hsq-gold" />}>
            <select className="w-full border-0 bg-transparent text-body text-hsq-black focus:outline-none focus:ring-0">
              <option>1 adult</option>
              <option>2 adults</option>
              <option>2 adults · 1 child</option>
              <option>3 adults</option>
              <option>4+ adults</option>
            </select>
          </BookingField>
          <Button variant="primary" size="lg" type="submit" className="w-full lg:w-auto">
            <Search className="h-4 w-4" />
            Check Availability
          </Button>
        </form>
      </Container>
    </div>
  );
}

function BookingField({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="group flex flex-col gap-1 rounded-md border border-border bg-card px-3 py-2 transition-colors duration-smooth ease-smooth focus-within:border-hsq-gold">
      <span className="flex items-center gap-2 text-caption font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {icon}
        {label}
      </span>
      {children}
    </label>
  );
}
