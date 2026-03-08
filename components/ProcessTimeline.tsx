"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/site";

type ProcessTimelineProps = {
  id?: string;
  showHeading?: boolean;
};

export default function ProcessTimeline({ id = "process", showHeading = true }: ProcessTimelineProps) {
  return (
    <section id={id} className="section-padding px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        {showHeading ? (
          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Process</p>
            <h2 className="mt-4 font-heading text-3xl text-white md:text-5xl">A structured timeline from vision to handover</h2>
          </div>
        ) : null}

        <div className="relative">
          <div className="absolute left-[19px] top-4 h-[calc(100%-40px)] w-px bg-brand-gold/25 md:left-0 md:right-0 md:top-10 md:h-px md:w-full" />
          <div className="grid gap-8 md:grid-cols-5 md:gap-5">
            {processSteps.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.42, delay: index * 0.08 }}
                className="relative pl-14 md:pl-0 md:pt-10"
              >
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold bg-brand-deep text-sm font-semibold text-brand-gold md:left-1/2 md:-translate-x-1/2">
                  {item.step}
                </div>
                <div className="luxury-panel rounded-sm p-5 md:min-h-[220px]">
                  <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
