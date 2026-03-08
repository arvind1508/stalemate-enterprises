import type { Metadata } from "next";
import ProcessTimeline from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Our five-step process covers consultation, concept design, material selection, turnkey execution, and final delivery."
};

export default function ProcessPage() {
  return (
    <>
      <section className="px-6 pb-10 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Process</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl text-white md:text-6xl">A disciplined five-step path from consultation to delivery.</h1>
        </div>
      </section>
      <ProcessTimeline showHeading={false} />
    </>
  );
}
