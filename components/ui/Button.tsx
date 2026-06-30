import { cn } from "@/lib/cn";
import Link from "next/link";
import { forwardRef } from "react";

/**
 * Buttons map 1:1 to Design-System.md §C.1.
 *
 *  primary    → gold pill, white label, gold shadow on hover.
 *  secondary  → the signature `.bookbtn` (white pill, black outline, gold on hover).
 *  ghost      → text-only link with hover→gold color.
 *  dark       → black pill, white label.
 *  outlineGold→ transparent with gold border, gold→solid on hover.
 *  outlineLight → transparent on dark sections, white border, white→gold fill on hover.
 */
type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "dark"
  | "outlineGold"
  | "outlineLight";

type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap " +
  "transition-[color,background-color,border-color,transform,box-shadow] duration-smooth ease-smooth " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-background disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-body-sm rounded-pill",
  md: "h-11 px-6 text-body-sm rounded-pill",
  lg: "h-12 px-8 text-body rounded-pill",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-hsq-gold-hover hover:shadow-gold active:translate-y-[1px]",
  secondary:
    "bg-white text-hsq-black border border-hsq-black hover:bg-primary hover:text-white hover:border-transparent",
  ghost:
    "bg-transparent text-foreground hover:text-hsq-gold px-3",
  dark:
    "bg-hsq-black text-white hover:bg-hsq-graphite hover:shadow-luxury",
  outlineGold:
    "bg-transparent text-hsq-gold border border-hsq-gold hover:bg-primary hover:text-white hover:border-transparent",
  outlineLight:
    "bg-transparent text-white border border-white/80 hover:bg-primary hover:text-white hover:border-transparent",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = Common &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type LinkProps = Common & {
  href: string;
  external?: boolean;
};

export type AnyButtonProps = ButtonProps | LinkProps;

export const Button = forwardRef<HTMLButtonElement, AnyButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, ...rest },
  ref
) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in rest && rest.href) {
    const { href, external, ...linkRest } = rest as LinkProps;
    if (external) {
      return (
        <a
          {...(linkRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        {...(linkRest as Omit<React.ComponentProps<typeof Link>, "href" | "className">)}
        href={href}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref} className={classes} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
});
