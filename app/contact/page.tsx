import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Stalemate Enterprises for interior design and turnkey contracting services in Mumbai."
};

export default function ContactPage() {
  return (
    <>
      <section className="px-6 pb-10 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Contact</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl text-white md:text-6xl">Discuss your interior project with our team in Mumbai.</h1>
        </div>
      </section>
      <ContactForm showHeading={false} />
    </>
  );
}
