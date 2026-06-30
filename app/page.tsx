import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { BookingBar } from "@/components/home/BookingBar";
import { IntroBand } from "@/components/home/IntroBand";
import { Amenities } from "@/components/home/Amenities";
import { Rooms } from "@/components/home/Rooms";
import { Restaurant } from "@/components/home/Restaurant";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { DecorPackages } from "@/components/home/DecorPackages";
import { Testimonials } from "@/components/home/Testimonials";
import { LocationMap } from "@/components/home/LocationMap";
import { FaqSection } from "@/components/home/FaqSection";
import { SeoText } from "@/components/home/SeoText";
import { FinalCta } from "@/components/home/FinalCta";

// Homepage section order follows Design-System.md §D.1 verbatim.
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BookingBar />
        <IntroBand />
        <Amenities />
        <Rooms />
        <Restaurant />
        <GalleryTeaser />
        <DecorPackages />
        <Testimonials />
        <LocationMap />
        <FaqSection />
        <SeoText />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
