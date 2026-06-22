"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects, additionalProjects } from "@/data/portfolio";

const projectColors: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  itms: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
  },
  pressensi: {
    bg: "bg-gray-100",
    text: "text-gray-700",
    border: "border-gray-200",
  },
  tilikeen: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
  },
  mides: {
    bg: "bg-gray-100",
    text: "text-gray-700",
    border: "border-gray-200",
  },
  laundry: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
  },
  clinic: {
    bg: "bg-gray-100",
    text: "text-gray-700",
    border: "border-gray-200",
  },
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
                className={`group relative overflow-hidden rounded-3xl border border-[#EAEAEA] ${colors.bg} card-hover`}
              >
                <div className="grid items-center gap-8 p-8 lg:grid-cols-2 lg:gap-16 lg:p-12">
                  {/* Project Image / Mockup */}
                  <div className="relative order-2 lg:order-1">
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${colors.border} border bg-white`}
                    >
                      {/* Abstract project representation */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
                        {project.id === "itms" && (
                          <div className="space-y-3 p-6 w-full">
                            <div className="flex items-center gap-2">
                              <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse-soft" />
                              <span className="text-xs font-medium text-gray-400">
                                Live Monitoring
                              </span>
                            </div>
                            <div className="space-y-2">
                              {[
                                {
                                  name: "Toilet A-01",
                                  status: "Available",
                                  color: "bg-green-500",
                                  count: "0/6",
                                },
                                {
                                  name: "Toilet B-03",
                                  status: "In Use",
                                  color: "bg-orange-500",
                                  count: "3/6",
                                },
                                {
                                  name: "Toilet C-02",
                                  status: "Available",
                                  color: "bg-green-500",
                                  count: "1/6",
                                },
                              ].map((room, i) => (
                                <div
                                  key={i}
                                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-2.5"
                                >
                                  <span className="text-xs font-medium text-gray-700">
                                    {room.name}
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-gray-400">
                                      {room.count}
                                    </span>
                                    <div
                                      className={`h-1.5 w-1.5 rounded-full ${room.color}`}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="text-center text-[10px] text-gray-400 mt-1">
                              🏢 Soekarno-Hatta International Airport
                            </div>
                          </div>
                        )}
                        {project.id === "tilikeen" && (
                          <div className="space-y-3 p-6 w-full">
                            <div className="flex items-center gap-2">
                              <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse-soft" />
                              <span className="text-xs font-medium text-gray-400">
                                Available Rooms
                              </span>
                            </div>
                            <div className="space-y-2">
                              {[
                                {
                                  name: "Meeting Room A",
                                  status: "Available",
                                  color: "bg-green-500",
                                },
                                {
                                  name: "Board Room",
                                  status: "In Use",
                                  color: "bg-orange-500",
                                },
                                {
                                  name: "Conference Hall",
                                  status: "Available",
                                  color: "bg-green-500",
                                },
                              ].map((room, i) => (
                                <div
                                  key={i}
                                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-2.5"
                                >
                                  <span className="text-xs font-medium text-gray-700">
                                    {room.name}
                                  </span>
                                  <div className="flex items-center gap-1.5">
                                    <div
                                      className={`h-1.5 w-1.5 rounded-full ${room.color}`}
                                    />
                                    <span className="text-[10px] text-gray-400">
                                      {room.status}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {project.id === "pressensi" && (
                          <div className="flex flex-col items-center gap-3 p-6 w-full">
                            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 flex items-center justify-center">
                              <span className="text-xl">📍</span>
                            </div>
                            <div className="text-center">
                              <div className="text-sm font-semibold text-gray-700">
                                Check-in Verified
                              </div>
                              <div className="text-xs text-green-600">
                                GPS Geofencing ✓
                              </div>
                            </div>
                            <div className="flex gap-3 mt-1">
                              <div className="text-center">
                                <div className="text-lg font-bold text-gray-800">
                                  130+
                                </div>
                                <div className="text-[10px] text-gray-400">
                                  MAU
                                </div>
                              </div>
                              <div className="w-px bg-gray-200" />
                              <div className="text-center">
                                <div className="text-lg font-bold text-green-600">
                                  +49%
                                </div>
                                <div className="text-[10px] text-gray-400">
                                  Growth
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {project.id === "mides" && (
                          <div className="w-full p-6 space-y-2">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-medium text-gray-400">
                                📚 Learning Dashboard
                              </span>
                            </div>
                            {[
                              {
                                title: "Mobile Development",
                                progress: "85%",
                                color: "bg-blue-500",
                              },
                              {
                                title: "Database Systems",
                                progress: "60%",
                                color: "bg-orange-500",
                              },
                              {
                                title: "UI/UX Design",
                                progress: "92%",
                                color: "bg-green-500",
                              },
                            ].map((course, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-2.5"
                              >
                                <div className="flex-1">
                                  <span className="text-xs font-medium text-gray-700">
                                    {course.title}
                                  </span>
                                  <div className="mt-1 h-1 w-full rounded-full bg-gray-100">
                                    <div
                                      className={`h-1 rounded-full ${course.color}`}
                                      style={{ width: course.progress }}
                                    />
                                  </div>
                                </div>
                                <span className="text-[10px] text-gray-400">
                                  {course.progress}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                        {project.id === "laundry" && (
                          <div className="w-full p-6 space-y-2">
                            <div className="text-center mb-2">
                              <span className="text-2xl">🧺</span>
                            </div>
                            {[
                              {
                                step: "Order Received",
                                status: "done",
                                time: "10:30",
                              },
                              {
                                step: "In Progress",
                                status: "active",
                                time: "11:00",
                              },
                              {
                                step: "Ready for Pickup",
                                status: "pending",
                                time: "—",
                              },
                            ].map((item, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-2.5"
                              >
                                <div
                                  className={`h-2 w-2 rounded-full ${
                                    item.status === "done"
                                      ? "bg-green-500"
                                      : item.status === "active"
                                        ? "bg-orange-500 animate-pulse-soft"
                                        : "bg-gray-300"
                                  }`}
                                />
                                <span className="text-xs font-medium text-gray-700 flex-1">
                                  {item.step}
                                </span>
                                <span className="text-[10px] text-gray-400">
                                  {item.time}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                        {project.id === "clinic" && (
                          <div className="flex flex-col items-center gap-3 p-6 w-full">
                            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-300 flex items-center justify-center">
                              <span className="text-xl">🏥</span>
                            </div>
                            <div className="text-center">
                              <div className="text-sm font-semibold text-gray-700">
                                Dr. Viandini
                              </div>
                              <div className="text-xs text-green-600">
                                Online Consultation
                              </div>
                            </div>
                            <div className="w-full mt-1 space-y-1.5">
                              <div className="flex justify-between text-[10px] text-gray-400">
                                <span>Mon–Fri</span>
                                <span>09:00–17:00</span>
                              </div>
                              <div className="h-1 w-full rounded-full bg-gray-100">
                                <div className="h-1 w-3/5 rounded-full bg-gradient-to-r from-green-400 to-green-500" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="order-1 flex flex-col gap-6 lg:order-2">
                    <div>
                      <h3 className="text-display-sm text-[#111111]">
                        {project.name}
                      </h3>
                      <p className="mt-4 max-w-md text-base leading-relaxed text-[#666666]">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#EAEAEA] bg-white px-3.5 py-1.5 text-xs font-medium text-[#666666] transition-colors hover:border-[#111111] hover:text-[#111111]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Impact */}
                    <div className="flex items-center gap-3 rounded-2xl border border-[#EAEAEA] bg-white px-5 py-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111111]">
                        <ArrowUpRight className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-[#666666]">Impact</div>
                        <div className="text-sm font-semibold text-[#111111]">
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
                className="rounded-2xl border border-[#EAEAEA] bg-white px-5 py-4 transition-all duration-300 hover:border-[#111111]/20 hover:shadow-sm"
              >
                <span className="text-sm font-medium text-[#666666]">
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
