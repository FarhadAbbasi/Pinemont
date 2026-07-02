import type { Config } from "tailwindcss";

// All values below mirror Design-System.md tokens (sections A & E) one-to-one.
// Never hardcode a raw hex/px in a component — reach for a token here instead.
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: { "2xl": "1280px" },
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        hsq: {
          // Legacy `hsq-*` names — retained so existing components keep working.
          // Values now point to the Pinemont v3 palette; see globals.css and
          // Pinemont-Brand.md §3 for the audit-ratified mapping.
          gold: "hsl(var(--hsq-gold))",             // Foil Gold #C8A45E
          "gold-hover": "hsl(var(--hsq-gold-hover))", // Deep Gold #C77E1F
          "gold-soft": "hsl(var(--hsq-gold-soft))",   // Foil Highlight #E9D8AE
          "gold-deep": "hsl(var(--hsq-gold-deep))",   // Bronze Warm #8E6F30
          black: "hsl(var(--hsq-black))",             // Warm Ink #1A1512
          graphite: "hsl(var(--hsq-graphite))",       // aliased to Warm Ink
          white: "hsl(var(--hsq-white))",
          offwhite: "hsl(var(--hsq-offwhite))",       // Linen #F5EEDD
          cream: "hsl(var(--hsq-cream))",             // Warm Cream #EFE7D2
          "cream-soft": "hsl(var(--hsq-cream-soft))", // Linen
          // v3 additions — new semantic names.
          pine: "hsl(var(--hsq-pine))",               // #173A2C
          linen: "hsl(var(--hsq-linen))",             // #F5EEDD
          signal: "hsl(var(--hsq-signal))",           // Signal Gold #E89A2C — CTAs only
          "signal-bronze": "hsl(var(--hsq-signal-bronze))", // #A66A1B
          "forest-mist": "hsl(var(--hsq-forest-mist))",     // #2E5742
          slate: "hsl(var(--hsq-slate))",             // #4A4A4F
          mute: "hsl(var(--hsq-mute))",               // #8A8780
          amber: "hsl(var(--hsq-amber))",             // Lamplight Amber #D89A5B
          success: "hsl(var(--hsq-success))",         // #2E7D4F
          danger: "hsl(var(--hsq-danger))",           // #C0392B
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "'Great Vibes'", "cursive"],
        luxe: ["var(--font-luxe)", "'Cormorant Garamond'", "Georgia", "serif"],
      },
      fontSize: {
        // Pinemont v3 — see Pinemont-Brand.md §4.
        // Display headings (h1-h3) render in Cormorant Garamond upright via
        // the base rule in globals.css. Weight 500 is the luxury-hospitality
        // register (Aman / Le Bristol) — do not raise to 700+.
        eyebrow: ["0.875rem", { lineHeight: "1.2", letterSpacing: "0.18em", fontWeight: "600" }],
        h1: ["clamp(3rem, 6vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.005em", fontWeight: "500" }],
        h2: ["clamp(2.25rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.005em", fontWeight: "500" }],
        h3: ["clamp(1.5rem, 2.4vw, 1.875rem)", { lineHeight: "1.2", letterSpacing: "-0.005em", fontWeight: "500" }],
        h4: ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55", fontWeight: "400" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "400" }],
      },
      borderRadius: {
        none: "0",
        xs: "0.125rem",
        sm: "calc(var(--radius) - 8px)",
        md: "calc(var(--radius) - 4px)",
        DEFAULT: "0.75rem",
        lg: "var(--radius)",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3rem",
        "5xl": "4rem",
        pill: "9999px",
        bookbtn: "20px",
      },
      boxShadow: {
        luxury: "var(--shadow-luxury)",
        gold: "var(--shadow-gold)",
        card: "0 4px 12px -4px rgba(10,10,12,0.10), 0 2px 6px rgba(10,10,12,0.04)",
        "card-hover": "0 18px 40px -10px rgba(10,10,12,0.18)",
        ring: "0 0 0 2px hsl(var(--ring))",
      },
      backgroundImage: {
        // `gradient-gold` = FOIL gradient (default decorative luxury).
        // `gradient-signal` = SATURATED gradient — CTAs and links only.
        // See Pinemont-Brand.md §3.2.
        "gradient-gold": "var(--gradient-gold)",
        "gradient-signal": "var(--gradient-signal)",
        "gradient-dark": "var(--gradient-dark)",
        "scrim-b":
          "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%)",
        "scrim-card":
          "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "ease-out-soft": "cubic-bezier(0, 0, 0.2, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        smooth: "400ms",
        slow: "600ms",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.05)" },
        },
        // Hero slider — sharp horizontal slide, no cross-fade.
        // Incoming slide enters from the right, outgoing slides off to the left.
        // Sharper easing curve (starts fast, decelerates) so the motion reads
        // as decisive rather than soft.
        "hero-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "hero-out": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 200ms ease-out",
        "accordion-up": "accordion-up 200ms ease-out",
        "fade-up": "fade-up 600ms cubic-bezier(0.4, 0, 0.2, 1) both",
        kenburns: "kenburns 12s ease-out both",
        "hero-in": "hero-in 900ms cubic-bezier(0.72, 0, 0.16, 1) both",
        "hero-out": "hero-out 900ms cubic-bezier(0.72, 0, 0.16, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
