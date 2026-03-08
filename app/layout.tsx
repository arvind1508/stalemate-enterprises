import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stalemate-enterprises.com"),
  icons: {
    icon: [],
    shortcut: [],
    apple: []
  },
  title: {
    default: "Stalemate Enterprises | Interior Design & Turnkey Contracting",
    template: "%s | Stalemate Enterprises"
  },
  description:
    "Stalemate Enterprises delivers premium interior design and turnkey contracting solutions for corporate, residential, and commercial spaces in Mumbai.",
  keywords: [
    "Stalemate Enterprises",
    "Interior Design Mumbai",
    "Turnkey Contracting",
    "Office Interior Solutions",
    "Residential Interior Design",
    "Commercial Interiors"
  ],
  openGraph: {
    title: "Stalemate Enterprises",
    description:
      "From concept to reality with precision, quality, and care. Premium interior design and turnkey execution based in Mumbai.",
    type: "website",
    locale: "en_IN"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-body text-brand-text antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
