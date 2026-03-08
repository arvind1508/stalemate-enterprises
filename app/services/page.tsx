import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore interior design, space planning, turnkey execution, office interiors, residential projects, and custom furniture solutions."
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-10 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Services</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl text-white md:text-6xl">Premium interior services built around performance and aesthetics.</h1>
        </div>
      </section>
      <ServicesGrid showHeading={false} />
    </>
  );
}
