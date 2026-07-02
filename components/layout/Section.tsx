import { cn } from "@/lib/cn";

type Tone = "default" | "cream" | "linen" | "offwhite" | "dark";

type Divider = "none" | "top" | "bottom" | "both";

/**
 * Section — page-level rhythm primitive.
 *
 * Every homepage row is a Section. Two levers create the visual rhythm
 * between adjacent sections:
 *
 * 1. `tone` — alternates surface colour (cream ↔ linen ↔ card white). Adjacent
 *    sections should pick different tones so the eye knows where one ends and
 *    the next begins.
 *
 * 2. `divider` — an optional short foil-gold hairline (Pinemont-Brand.md §7,
 *    "dotted rule / gold line" motif). Kept subtle: 64px wide, 1px, 45% opacity
 *    so it registers as breath, not decoration.
 *
 * Padding is deliberately generous (py-20 → py-36) — luxury hotels breathe.
 * Do not tighten this without discussing the change first.
 */
export function Section({
  tone = "default",
  divider = "top",
  spacious = true,
  className,
  children,
  id,
  ...rest
}: React.HTMLAttributes<HTMLElement> & {
  tone?: Tone;
  divider?: Divider;
  /** When false, uses compact padding — reserved for BookingBar / IntroBand. */
  spacious?: boolean;
}) {
  const toneClass: Record<Tone, string> = {
    default:  "bg-card text-foreground",
    cream:    "bg-hsq-cream text-foreground",
    linen:    "bg-hsq-linen text-foreground",
    offwhite: "bg-background text-foreground",
    dark:     "bg-gradient-dark text-white",
  };

  const paddingClass = spacious
    ? "py-20 sm:py-28 lg:py-36"
    : "py-10 sm:py-14 lg:py-16";

  const showTop = divider === "top" || divider === "both";
  const showBottom = divider === "bottom" || divider === "both";

  return (
    <section
      id={id}
      className={cn(
        "relative",
        paddingClass,
        toneClass[tone],
        className
      )}
      {...rest}
    >
      {showTop && <SectionRule position="top" tone={tone} />}
      {children}
      {showBottom && <SectionRule position="bottom" tone={tone} />}
    </section>
  );
}

/** Short foil-gold hairline centred at the top or bottom edge. */
function SectionRule({
  position,
  tone,
}: {
  position: "top" | "bottom";
  tone: Tone;
}) {
  const isDark = tone === "dark";
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-1/2 -translate-x-1/2",
        "block h-px w-16",
        isDark ? "bg-hsq-gold-soft/60" : "bg-hsq-gold/45",
        position === "top" ? "top-8 sm:top-12" : "bottom-8 sm:bottom-12"
      )}
    />
  );
}
