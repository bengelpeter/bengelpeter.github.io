import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Peter Bengel | Lead Software Developer",
  description:
    "Professional portfolio homepage for Peter Bengel, a lead software developer specializing in .NET, Azure, React, and offline-first applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
