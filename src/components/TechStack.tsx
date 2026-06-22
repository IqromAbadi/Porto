"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { techCategories } from "@/data/portfolio";
import { Smartphone, Layers, Cloud, Cpu } from "lucide-react";

const iconComponents: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Smartphone,
  Layers,
  Cloud,
  Cpu,
};

const levelColors: Record<string, string> = {
  expert: "bg-[#FF6B00]",
  advanced: "bg-[#111111]",
  proficient: "bg-[#666666]",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TechStack() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="tech-stack" className="relative bg-white py-32 lg:py-40">
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
            Expertise
          </span>
          <h2 className="mt-4 text-display-lg text-[#111111]">
            Technology Stack
          </h2>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {techCategories.map((category) => {
            const Icon = iconComponents[category.icon] || Cpu;
            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group rounded-3xl border border-[#EAEAEA] bg-white p-8 transition-all duration-500 hover:border-[#111111]/20 hover:shadow-xl hover:shadow-black/[0.02]"
              >
                {/* Category Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F8F8] transition-colors group-hover:bg-[#FF6B00]/5">
                  <Icon className="h-6 w-6 text-[#111111] transition-colors group-hover:text-[#FF6B00]" />
                </div>

                {/* Category Name */}
                <h3 className="mb-6 text-lg font-semibold text-[#111111]">
                  {category.name}
                </h3>

                {/* Tech Items */}
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-[#666666] transition-colors group-hover:text-[#111111]">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-1.5 w-1.5 rounded-full ${levelColors[item.level]}`}
                        />
                        <span className="text-[10px] font-medium uppercase tracking-wider text-[#999999]">
                          {item.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-[#999999]">
            Built with Clean Architecture principles for maintainable, scalable
            enterprise applications
          </p>
        </motion.div>
      </div>
    </section>
  );
}
