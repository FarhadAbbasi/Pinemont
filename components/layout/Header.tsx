"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { cn } from "@/lib/cn";
import { BRAND, NAV_ITEMS } from "@/lib/content";

/** Sticky header — §C.2.
 *  - Transparent + white text over hero.
 *  - White surface + dark text once scrollY > 40 (small bump shadow). */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Lock body scroll while mobile menu is open.
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkColor = scrolled
    ? "text-hsq-black hover:text-hsq-gold"
    : "text-white hover:text-hsq-gold";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,border-color] duration-smooth ease-smooth",
        scrolled
          ? "bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-[72px]">
        {/* Brand */}
        <Link
          href="/"
          aria-label={`${BRAND.name} — home`}
          className="flex items-center"
        >
          <Image
            src="/brand/Logo-Pinemont-Transparent.png"
            alt={`${BRAND.name} Hotel Murree`}
            width={720}
            height={200}
            priority
            className={cn(
              "h-10 w-auto transition-[filter] duration-smooth ease-smooth lg:h-12",
              // Small white drop-shadow lifts the green letters when the
              // logo sits over the dark hero image; drops away on scroll.
              !scrolled && "drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
            )}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[0.9375rem] font-medium leading-none transition-colors duration-smooth ease-smooth",
                linkColor
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="#booking"
            className={cn("bookbtn hidden sm:inline-flex", !scrolled && "bookbtn--inverse")}
          >
            Book Now
          </Link>
          <button
            type="button"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-smooth ease-smooth",
              scrolled
                ? "border-border text-hsq-black hover:border-hsq-gold hover:text-hsq-gold"
                : "border-white/40 text-white hover:border-hsq-gold hover:text-hsq-gold"
            )}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 lg:hidden transition-opacity duration-smooth ease-smooth",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/55"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[80%] max-w-sm bg-card shadow-luxury",
            "transition-transform duration-smooth ease-smooth",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col gap-1 p-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-body font-medium text-hsq-black hover:bg-muted hover:text-hsq-gold"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={() => setMobileOpen(false)}
              className="bookbtn mt-4 self-start"
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
