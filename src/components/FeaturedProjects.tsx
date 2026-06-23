"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects, additionalProjects } from "@/data/portfolio";
import ProjectGalleryPreview from "./ProjectGalleryPreview";

const projectColors: Record<string, { bg: string }> = {
  itms: { bg: "bg-orange-50" },
  pressensi: { bg: "bg-gray-100" },
  tilikeen: { bg: "bg-orange-50" },
  mides: { bg: "bg-gray-100" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function FeaturedProjects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="relative bg-white py-32 lg:py-40">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            Portfolio
          </span>
          <h2 className="mt-4 text-display-lg text-[#111111]">
            Selected Works
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-6"
        >
          {projects.map((project) => {
            const colors = projectColors[project.id];
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl border border-[#EAEAEA] ${colors.bg} card-hover`}
              >
                <div className="grid items-center gap-6 lg:gap-16 p-5 lg:p-12 lg:grid-cols-2">
                  {/* Project Image Gallery */}
                  <div className="relative order-2 lg:order-1">
                    <ProjectGalleryPreview
                      images={project.galleryImages || [project.image]}
                      projectName={project.name}
                    />
                  </div>

                  {/* Project Details */}
                  <div className="order-1 flex flex-col gap-6 lg:order-2">
                    <div>
                      <h3 className="text-display-sm text-[#111111]">
                        {project.name}
                      </h3>
                      <p className="mt-3 lg:mt-4 max-w-md text-sm sm:text-base leading-relaxed text-[#666666] break-words">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#EAEAEA] bg-white px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-[#666666] transition-colors hover:border-[#111111] hover:text-[#111111] whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Impact */}
                    <div className="flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-[#EAEAEA] bg-white px-4 sm:px-5 py-2.5 sm:py-3">
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#111111] flex-shrink-0">
                        <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] sm:text-xs text-[#666666]">
                          Impact
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-[#111111] truncate">
                          {project.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <h3 className="mb-8 text-lg font-semibold text-[#111111]">
            More Projects
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {additionalProjects.map((name, i) => (
              <div
                key={i}
                className="rounded-xl sm:rounded-2xl border border-[#EAEAEA] bg-white px-4 sm:px-5 py-3 sm:py-4 transition-all duration-300 hover:border-[#111111]/20 hover:shadow-sm"
              >
                <span className="text-xs sm:text-sm font-medium text-[#666666] break-words">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
