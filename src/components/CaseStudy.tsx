"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { caseStudies } from "@/data/portfolio";
import { CheckCircle2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CaseStudy() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="case-studies" className="relative bg-[#F8F8F8] py-32 lg:py-40">
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
            Deep Dive
          </span>
          <h2 className="mt-4 text-display-lg text-[#111111]">Case Studies</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#666666]">
            An in-depth look at the architecture, challenges, and impact behind
            the most significant enterprise mobile applications I&apos;ve built.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-32">
          {caseStudies.map((study, studyIndex) => (
            <motion.div
              key={study.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="space-y-16"
            >
              {/* Problem & Challenge */}
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#EAEAEA] bg-white px-4 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#666666]">
                      The Problem
                    </span>
                  </div>
                  <h3 className="text-display-sm text-[#111111]">
                    {study.projectName}
                  </h3>
                  <div className="flex flex-wrap gap-6 text-sm text-[#666666]">
                    <span className="flex items-center gap-1.5">
                      <span className="font-semibold text-[#111111]">
                        Role:
                      </span>{" "}
                      {study.role}
                    </span>
                    {/* <span className="flex items-center gap-1.5">
                      <span className="font-semibold text-[#111111]">Duration:</span> {study.duration}
                    </span> */}
                  </div>
                  <p className="text-base leading-relaxed text-[#666666]">
                    {study.problem}
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#EAEAEA] bg-white px-4 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#666666]">
                      The Challenge
                    </span>
                  </div>
                  <p className="text-base leading-relaxed text-[#666666]">
                    {study.challenge}
                  </p>

                  {/* Architecture preview card */}
                  <div className="rounded-2xl border border-[#EAEAEA] bg-white p-6">
                    <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#999999]">
                      Architecture Overview
                    </div>
                    <div className="grid gap-2">
                      {study.architecture.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF6B00]" />
                          <span className="text-sm text-[#666666]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Solution & Result */}
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#EAEAEA] bg-white px-4 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#666666]">
                      The Solution
                    </span>
                  </div>
                  <p className="text-base leading-relaxed text-[#666666]">
                    {study.solution}
                  </p>

                  {/* Architecture diagram placeholder */}
                  <div
                    className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${study.gradient} p-0.5`}
                  >
                    <div className="rounded-2xl bg-white p-6">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#999999] mb-3">
                        Technology Stack
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.architecture.map((item, i) => {
                          const tech = item.split(" with ")[0].split(" ")[0];
                          return (
                            <span
                              key={i}
                              className="rounded-full bg-[#F8F8F8] px-3 py-1 text-xs font-medium text-[#666666]"
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#EAEAEA] bg-white px-4 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#666666]">
                      The Result
                    </span>
                  </div>
                  <p className="text-base leading-relaxed text-[#666666]">
                    {study.result}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {study.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-center rounded-2xl border border-[#EAEAEA] bg-white p-5 text-center"
                      >
                        <span className="text-2xl font-bold text-[#111111]">
                          {metric.value}
                        </span>
                        <span className="mt-1 text-[11px] font-medium text-[#999999] leading-tight">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Divider */}
              {studyIndex < caseStudies.length - 1 && (
                <div className="section-divider pt-16" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
