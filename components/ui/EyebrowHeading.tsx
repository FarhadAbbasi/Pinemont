import { cn } from "@/lib/cn";

/** Eyebrow + H2 + (optional) intro paragraph — §C.4 */
export function EyebrowHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  invert = false,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-12 lg:mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={cn(
          "mt-3 text-h2 max-w-3xl",
          align === "center" && "mx-auto",
          invert ? "text-white" : "text-hsq-black"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-body-lg max-w-2xl",
            align === "center" && "mx-auto",
            invert ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
