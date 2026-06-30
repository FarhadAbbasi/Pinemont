import { cn } from "@/lib/cn";

type Tone = "default" | "cream" | "offwhite" | "dark";

export function Section({
  tone = "default",
  className,
  children,
  id,
  ...rest
}: React.HTMLAttributes<HTMLElement> & { tone?: Tone }) {
  const toneClass: Record<Tone, string> = {
    default: "bg-card text-foreground",
    cream: "bg-hsq-cream text-foreground",
    offwhite: "bg-background text-foreground",
    dark: "bg-gradient-dark text-white",
  };
  return (
    <section
      id={id}
      className={cn(
        "py-12 sm:py-16 lg:py-24",
        toneClass[tone],
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
