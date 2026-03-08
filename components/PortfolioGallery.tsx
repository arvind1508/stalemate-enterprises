"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";

type PortfolioGalleryProps = {
  id?: string;
  showHeading?: boolean;
  limit?: number;
};

export default function PortfolioGallery({ id = "projects", showHeading = true, limit }: PortfolioGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = "";
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section id={id} className="section-padding px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        {showHeading ? (
          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Portfolio</p>
            <h2 className="mt-4 font-heading text-3xl text-white md:text-5xl">Large-format projects with crafted details</h2>
            <p className="mt-5 text-brand-muted">Explore recent work delivered across corporate, residential, and commercial environments.</p>
          </div>
        ) : null}

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-sm"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="relative block h-full w-full text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition group-hover:opacity-95" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">{project.category}</p>
                  <h3 className="mt-2 font-heading text-2xl text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-brand-muted">{project.location}</p>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 px-4 py-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-6xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-3 top-3 z-10 rounded-full border border-white/25 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white"
              >
                Close
              </button>

              <div className="relative h-[72vh] overflow-hidden rounded-sm border border-white/15 bg-brand-deep">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-heading text-3xl text-white">{selectedProject.title}</h3>
                <p className="text-sm tracking-[0.14em] text-brand-gold">
                  {selectedProject.location} | {selectedProject.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
