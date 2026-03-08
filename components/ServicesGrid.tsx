"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/site";

type ServicesGridProps = {
  id?: string;
  showHeading?: boolean;
};

export default function ServicesGrid({ id = "services", showHeading = true }: ServicesGridProps) {
  return (
    <section id={id} className="section-padding px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        {showHeading ? (
          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Services</p>
            <h2 className="mt-4 font-heading text-3xl text-white md:text-5xl">End-to-end interior solutions for modern spaces</h2>
            <p className="mt-5 text-brand-muted">
              We handle every layer of design and execution so your project moves forward with clear timelines and quality standards.
            </p>
          </div>
        ) : null}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="luxury-panel group rounded-sm p-7 transition hover:border-brand-gold/45"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-brand-gold/80">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-heading text-2xl text-white group-hover:text-brand-gold">{service}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
