"use client";

import { motion } from "framer-motion";
import { companyDescription, expertise } from "@/lib/site";

type AboutSectionProps = {
  id?: string;
  showHeading?: boolean;
};

const icons = [
  <svg key="office" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 21h18M6 21V8l6-4 6 4v13M10 21v-5h4v5" />
  </svg>,
  <svg key="residential" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 11.5 12 4l9 7.5M6.5 10V21h11V10" />
    <path d="M10 21v-5h4v5" />
  </svg>,
  <svg key="retail" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 9h16M5 9l1.2-4h11.6L19 9M6 9v10h12V9" />
    <path d="M10 13h4" />
  </svg>,
  <svg key="infra" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 21h18M5 21V7h4v14M11 21V3h4v18M17 21v-9h4v9" />
  </svg>
];

export default function AboutSection({ id = "about", showHeading = true }: AboutSectionProps) {
  return (
    <section id={id} className="section-padding px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        {showHeading ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="mb-14 max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">About Stalemate Enterprises</p>
            <h2 className="mt-4 font-heading text-3xl text-white md:text-5xl">Crafting timeless interiors with disciplined execution</h2>
            <div className="gold-line mt-6" />
            <p className="mt-6 text-base leading-relaxed text-brand-muted md:text-lg">{companyDescription}</p>
          </motion.div>
        ) : null}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="luxury-panel rounded-sm p-6"
            >
              <span className="mb-4 inline-flex rounded-full border border-brand-gold/30 p-3 text-brand-gold">{icons[index]}</span>
              <h3 className="font-heading text-xl text-white">{item}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
