"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-orange-50 opacity-60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gray-50 opacity-40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 lg:px-12 pt-24 lg:pt-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Content */}
          <div className="flex flex-col gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5 lg:gap-6"
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
                { value: "100+", label: "Active Devices" },
                { value: "130+", label: "Monthly Users" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl lg:text-2xl font-bold tracking-tight text-[#111111]">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 lg:mt-1 text-xs lg:text-sm text-[#666666]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - iPhone Mockup (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex items-center justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* iPhone Frame */}
              <div className="relative h-[500px] xl:h-[580px] w-[240px] xl:w-[280px] rounded-[3rem] border-[3px] border-[#111111] bg-[#111111] p-2 shadow-2xl shadow-black/10">
                {/* Dynamic Island */}
                <div className="absolute left-1/2 top-2.5 z-10 h-[22px] w-[100px] -translate-x-1/2 rounded-full bg-[#111111]" />

                {/* Screen */}
                <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FF6B00] via-[#FF8C3D] to-[#FFB380]">
                  {/* App content mockup */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Status bar area */}
                    <div className="flex items-center justify-between px-6 pt-8 text-[10px] font-medium text-white/80">
                      <span>9:41</span>
                      <span>📶 🔋</span>
                    </div>

                    {/* App header */}
                    <div className="px-5 pt-4">
                      <h3 className="text-lg font-bold text-white">ITMS</h3>
                      <p className="mt-0.5 text-[11px] text-white/70">
                        Airport Monitoring
                      </p>
                    </div>

                    {/* Stats cards */}
                    <div className="mt-4 flex gap-2 px-4">
                      <div className="flex-1 rounded-2xl bg-white/15 p-3 backdrop-blur-sm">
                        <div className="text-[10px] font-medium text-white/70">
                          Available
                        </div>
                        <div className="mt-0.5 text-xl font-bold text-white">
                          18
                        </div>
                      </div>
                      <div className="flex-1 rounded-2xl bg-white/15 p-3 backdrop-blur-sm">
                        <div className="text-[10px] font-medium text-white/70">
                          In Use
                        </div>
                        <div className="mt-0.5 text-xl font-bold text-white">
                          6
                        </div>
                      </div>
                    </div>

                    {/* Facility monitoring preview */}
                    <div className="mx-4 mt-3 flex-1 rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                      <div className="flex h-full flex-col justify-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-400" />
                          <span className="text-[11px] text-white/80">
                            Terminal 1 — Normal
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-orange-400" />
                          <span className="text-[11px] text-white/80">
                            Terminal 2 — Busy
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-400" />
                          <span className="text-[11px] text-white/80">
                            Terminal 3 — Normal
                          </span>
                        </div>
                        <div className="mt-1 rounded-lg bg-white/10 px-2 py-1.5">
                          <span className="text-[10px] text-white/60">
                            📡 IoT Sensors • 24/7 Uptime
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom nav */}
                    <div className="flex items-center justify-around px-8 pb-5 pt-2">
                      {["📍", "📊", "⚡", "👤"].map((icon, i) => (
                        <span
                          key={i}
                          className={i === 1 ? "text-white" : "text-white/40"}
                        >
                          {icon}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Glass reflection */}
                  <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
                </div>

                {/* Side button */}
                <div className="absolute -right-[3px] top-24 h-8 w-[3px] rounded-r bg-[#2a2a2a]" />
                <div className="absolute -right-[3px] top-36 h-12 w-[3px] rounded-r bg-[#2a2a2a]" />
                <div className="absolute -left-[3px] top-28 h-10 w-[3px] rounded-l bg-[#2a2a2a]" />
              </div>

              {/* Glow effect behind iPhone */}
              <div className="absolute -inset-8 -z-10 rounded-full bg-orange-100/50 blur-3xl" />
            </motion.div>
          </motion.div>
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
