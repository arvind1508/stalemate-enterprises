import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Stalemate Enterprises, a Mumbai-based interior design and turnkey contracting company for residential and commercial spaces."
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-10 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">About</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl text-white md:text-6xl">
            A professional interior team focused on elegant design and dependable execution.
          </h1>
        </div>
      </section>
      <AboutSection showHeading={false} />
    </>
  );
}
