"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden px-6 py-14 md:px-10" id="top">
      <Image
        src={withBasePath("/project-images/3ce60c9b-840b-41cf-9fc2-98a585710363.jpg")}
        alt="Luxury interior project"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-bg/75 to-brand-bg/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-brand-gold md:text-sm">
          Mumbai | Interior Design + Turnkey Contracting
        </p>
        <h1 className="max-w-4xl font-heading text-4xl leading-tight text-white md:text-6xl lg:text-7xl">
          We build spaces that elevate brands and lives.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-brand-muted md:text-lg">
          From concept to reality — with precision, quality, and care.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="rounded-sm border border-brand-gold bg-brand-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-deep transition hover:bg-transparent hover:text-brand-gold"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="rounded-sm border border-brand-gold/70 bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-text transition hover:border-brand-gold hover:text-brand-gold"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
