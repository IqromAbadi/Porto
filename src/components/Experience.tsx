"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { experiences } from "@/data/portfolio";

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="experience" className="relative bg-[#F8F8F8] py-32 lg:py-40">
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
            Career
          </span>
          <h2 className="mt-4 text-display-lg text-[#111111]">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 h-full w-px bg-[#EAEAEA] lg:left-1/2 lg:-translate-x-px" />

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.period}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`relative grid gap-8 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:text-right" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 flex h-2.5 w-2.5 -translate-x-[5px] items-center justify-center lg:left-1/2 lg:-translate-x-[5px]">
                  <div className="h-2.5 w-2.5 rounded-full border-2 border-[#FF6B00] bg-white ring-4 ring-orange-50" />
                </div>

                {/* Left column (period on even, content on odd) */}
                <div
                  className={`pl-10 lg:pl-0 ${index % 2 === 0 ? "" : "lg:order-2 lg:pl-0"}`}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                    }`}
                  >
                    {/* Period badge */}
                    <span className="inline-block rounded-full border border-[#EAEAEA] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF6B00]">
                      {exp.period}
                    </span>

                    <h3 className="mt-5 text-display-sm text-[#111111]">
                      {exp.role}
                    </h3>
                    <p className="mt-2 text-base font-medium text-[#666666]">
                      {exp.company}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-[#999999]">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul
                      className={`mt-6 space-y-3 ${
                        index % 2 === 0 ? "lg:text-right" : ""
                      }`}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-3 text-sm text-[#666666] ${
                            index % 2 === 0 ? "lg:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-[#FF6B00]" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right column (empty on even for spacing, period on odd) */}
                <div
                  className={`hidden lg:block ${index % 2 === 0 ? "lg:order-2" : ""}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
