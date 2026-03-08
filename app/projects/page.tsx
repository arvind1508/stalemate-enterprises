import type { Metadata } from "next";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Stalemate Enterprises portfolio featuring corporate offices, luxury residences, and retail interior projects delivered across Mumbai."
};

export default function ProjectsPage() {
  return (
    <>
      <section className="px-6 pb-10 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Projects</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl text-white md:text-6xl">A portfolio of spaces shaped for brands, teams, and homes.</h1>
        </div>
      </section>
      <PortfolioGallery showHeading={false} />
    </>
  );
}
