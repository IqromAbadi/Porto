"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import HeroOrbit from "./HeroOrbit";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-start lg:items-center overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-orange-50 opacity-60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gray-50 opacity-40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 lg:px-12 pt-16 sm:pt-20 lg:pt-0">
        <div className="grid items-start lg:items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Content */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 sm:gap-5 lg:gap-6"
            >
              {/* Name tag */}
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#EAEAEA] bg-white px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] animate-pulse-soft" />
                <span className="text-xs lg:text-sm font-medium text-[#666666]">
                  Iqrom Abadi
                </span>
              </div>

              {/* Main headline */}
              <h1 className="text-display-xl tracking-tight text-[#111111]">
                BUILDING
                <br />
                SCALABLE
                <br />
                <span className="gradient-text">MOBILE PRODUCTS</span>
              </h1>

              {/* Subheadline */}
              <p className="max-w-lg text-base lg:text-lg leading-relaxed text-[#666666]">
                Mobile Engineer focused on Flutter, Real-Time Applications,
                Enterprise Platforms, IoT Integration, and User-Centered Product
                Development.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 lg:gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-6 lg:px-7 py-3 lg:py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#FF6B00] hover:shadow-lg hover:shadow-orange-500/20"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#EAEAEA] bg-white px-6 lg:px-7 py-3 lg:py-3.5 text-sm font-semibold text-[#111111] transition-all duration-300 hover:border-[#111111] hover:bg-[#F8F8F8]"
              >
                Contact Me
                <ArrowDown className="h-4 w-4 text-[#666666] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </motion.div>

            {/* Stats preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap gap-6 xs:gap-12 border-t border-[#EAEAEA] pt-6 lg:pt-8"
            >
              {[
                { value: "12+", label: "Apps Built" },
                { value: "249+", label: "Devices Deployed" },
                { value: "268", label: "Monthly Active Users" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-[#111111]">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 lg:mt-1 text-[10px] sm:text-xs lg:text-sm text-[#666666]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Orbiting Project Phones (hidden on mobile) */}
          <div className="relative hidden lg:flex items-center justify-center lg:justify-end">
            <HeroOrbit />
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[11px] font-medium uppercase tracking-widest text-[#999999]">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-[#999999] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
