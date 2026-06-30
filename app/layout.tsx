import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

// Script font is loaded via @font-face in globals.css from /public/fonts/TuesdayNight.woff2
// so it doesn't go through next/font. The CSS variable is set inline on <html>.
const scriptVar = { "--font-script": "Tuesday" } as React.CSSProperties;

export const metadata: Metadata = {
  title: "Pinemont — Mountain Retreat Hotel",
  description:
    "Placeholder description for the Pinemont hotel landing page. Replace once final copy is supplied.",
  // TODO: og image, twitter card, canonical, structured data once brand approves.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} style={scriptVar}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
