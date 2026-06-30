import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { pickOneByRole } from "@/lib/assets";

/** Final CTA band — §D.1 row 14. Dark hero-mini with primary CTA. */
export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28">
      <Image
        src={pickOneByRole("finalCta", 99, { orientation: "landscape", includeBranded: true })}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(10,10,12,0.85),rgba(27,27,29,0.75))]"
      />
      <Container className="text-center text-white">
        <p className="font-luxe italic font-light tracking-[0.04em] text-hsq-gold text-4xl sm:text-5xl lg:text-6xl leading-none">
          Plan your escape
        </p>
        <h2 className="mx-auto mt-2 max-w-2xl text-h2 text-white">
          Begin Your Next Mountain Stay With Pinemont
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-body-lg text-white/80">
          Placeholder closing copy. Anchor with a strong invitation and a single
          decisive call to action.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="primary" size="lg" href="#booking">Book Now</Button>
          <Button variant="outlineLight" size="lg" href="#location">Contact Concierge</Button>
        </div>
      </Container>
    </section>
  );
}
