"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ProjectGalleryPreviewProps {
  images: string[];
  projectName: string;
}

export default function ProjectGalleryPreview({
  images,
  projectName,
}: ProjectGalleryPreviewProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const displayImages = images.length > 0 ? images.slice(0, 6) : [];

  return (
    <div className="relative w-full" onMouseLeave={() => setHoveredIndex(null)}>
      {/* Gallery wrapper */}
      <div className="relative overflow-hidden rounded-xl sm:rounded-[1.5rem] lg:rounded-[2rem] border border-[#EAEAEA] bg-white p-3 sm:p-4 shadow-sm">
        {/* Grid */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {displayImages.map((img, i) => (
            <motion.div
              key={i}
              className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100"
              onMouseEnter={() => setHoveredIndex(i)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Fallback: gradient placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-gray-300">
                    {projectName.charAt(0)}
                  </div>
                  <div className="mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] text-gray-400">
                    Preview {i + 1}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hover overlay: dim background (desktop only via CSS hover) */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-none absolute inset-0 z-10 rounded-xl sm:rounded-[1.5rem] lg:rounded-[2rem] bg-white/60 backdrop-blur-[2px]"
            />
          )}
        </AnimatePresence>

        {/* Floating zoom preview */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.85, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.85, x: "-50%", y: "-50%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-1/2 top-1/2 z-20 w-[65%] sm:w-[55%] max-w-[280px] sm:max-w-[340px] -translate-x-1/2 -translate-y-1/2"
            >
              <div className="overflow-hidden rounded-2xl border-2 border-white shadow-2xl shadow-black/20">
                {/* Preview content */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold text-gray-300">
                      {projectName.charAt(0)}
                    </div>
                    <div className="mt-2 text-sm font-medium text-gray-400">
                      {projectName}
                    </div>
                    <div className="mt-1 text-xs text-gray-400">
                      Preview {hoveredIndex + 1} of {displayImages.length}
                    </div>
                  </div>
                </div>

                {/* Bottom bar with project name */}
                <div className="flex items-center justify-between bg-white/95 backdrop-blur-xl px-4 py-2.5">
                  <span className="text-xs font-semibold text-[#111111]">
                    {projectName}
                  </span>
                  <button
                    onClick={() => setHoveredIndex(null)}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
                  >
                    <X className="h-3 w-3 text-gray-500" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Screens label */}
      <p className="mt-2 sm:mt-3 text-center text-[10px] sm:text-xs font-medium text-[#999999]">
        {displayImages.length} screens
      </p>
    </div>
  );
}
