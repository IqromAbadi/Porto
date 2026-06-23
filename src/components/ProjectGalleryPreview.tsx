"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ImageIcon } from "lucide-react";

interface ProjectGalleryPreviewProps {
  images: string[];
  projectName: string;
}

function GalleryImageTile({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className}`}
      >
        <ImageIcon className="h-8 w-8 text-gray-300" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={`object-cover ${className}`}
    />
  );
}

function GalleryNavigation({
  onPrev,
  onNext,
  canPrev,
  canNext,
}: {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}) {
  return (
    <>
      {canPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
          className="fixed left-3 top-1/2 z-[60] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-white sm:left-6"
        >
          <ChevronLeft className="h-5 w-5 text-[#111111]" />
        </button>
      )}

      {canNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          className="fixed right-3 top-1/2 z-[60] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-white sm:right-6"
        >
          <ChevronRight className="h-5 w-5 text-[#111111]" />
        </button>
      )}
    </>
  );
}

export default function ProjectGalleryPreview({
  images,
  projectName,
}: ProjectGalleryPreviewProps) {
  const displayImages = images.length > 0 ? images.slice(0, 6) : [];
  const total = displayImages.length;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const goNext = useCallback(() => {
    if (activeIndex !== null) {
      setActiveIndex((prev) =>
        prev === null ? 0 : prev + 1 >= total ? 0 : prev + 1,
      );
      return;
    }

    setModalIndex((prev) => (prev + 1 >= total ? 0 : prev + 1));
  }, [activeIndex, total]);

  const goPrev = useCallback(() => {
    if (activeIndex !== null) {
      setActiveIndex((prev) =>
        prev === null ? total - 1 : prev - 1 < 0 ? total - 1 : prev - 1,
      );
      return;
    }

    setModalIndex((prev) => (prev - 1 < 0 ? total - 1 : prev - 1));
  }, [activeIndex, total]);

  const closePreview = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    const isPreviewOpen = activeIndex !== null || modalOpen;
    if (!isPreviewOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePreview();
        setModalOpen(false);
      }

      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, modalOpen, closePreview, goNext, goPrev]);

  useEffect(() => {
    const shouldLock = modalOpen || activeIndex !== null;
    document.body.style.overflow = shouldLock ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen, activeIndex]);

  if (total === 0) {
    return (
      <div className="relative flex aspect-[4/3] w-full items-center justify-center rounded-xl border border-[#EAEAEA] bg-gray-50 sm:rounded-[1.5rem] lg:rounded-[2rem]">
        <span className="text-sm text-[#999999]">No previews</span>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Gallery */}
      <div ref={containerRef} className="relative hidden w-full sm:block">
        <div className="relative overflow-hidden rounded-xl border border-[#EAEAEA] bg-white p-3 shadow-sm sm:rounded-[1.5rem] sm:p-4 lg:rounded-[2rem]">
          <motion.div
            animate={{
              opacity: activeIndex !== null ? 0.25 : 1,
              filter: activeIndex !== null ? "blur(3px)" : "blur(0px)",
            }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-3 gap-1.5 sm:gap-2"
          >
            {displayImages.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 sm:rounded-2xl ${
                  activeIndex === i
                    ? "scale-[1.03] ring-2 ring-[#FF6B00] ring-offset-1"
                    : "hover:scale-[1.02]"
                }`}
                aria-label={`Open ${projectName} preview ${i + 1}`}
              >
                <GalleryImageTile
                  src={src}
                  alt={`${projectName} preview ${i + 1}`}
                  className="absolute inset-0 h-full w-full"
                />
              </button>
            ))}
          </motion.div>

          <AnimatePresence>
            {activeIndex !== null && (
              <motion.div
                key="desktop-preview-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-8"
                onClick={closePreview}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-10 flex max-h-[90vh] w-auto max-w-[92vw] flex-col overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl shadow-black/30 sm:rounded-3xl"
                >
                  <div className="relative flex max-h-[82vh] items-center justify-center bg-gray-50 min-h-[200px]">
                    {/* Fallback placeholder saat gambar 404 */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300">
                      <ImageIcon className="h-12 w-12 sm:h-16 sm:w-16 mb-2 opacity-40" />
                      <span className="text-xs sm:text-sm text-gray-400">
                        {projectName} — {activeIndex + 1}/{total}
                      </span>
                    </div>
                    <img
                      src={displayImages[activeIndex]}
                      alt={`${projectName} preview ${activeIndex + 1}`}
                      className="relative z-10 block max-h-[82vh] max-w-[92vw] object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    <button
                      type="button"
                      onClick={closePreview}
                      className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                      aria-label="Close preview"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                      {activeIndex + 1} / {total}
                    </div>
                  </div>

                  <div className="flex items-center justify-center border-t border-[#EAEAEA] bg-white px-4 py-3">
                    <span className="text-sm font-semibold text-[#111111]">
                      {projectName}
                    </span>
                  </div>
                </motion.div>

                <GalleryNavigation
                  onPrev={goPrev}
                  onNext={goNext}
                  canPrev={total > 1}
                  canNext={total > 1}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-2 text-center text-[10px] font-medium text-[#999999] sm:mt-3 sm:text-xs">
          {total} screens — click to preview
        </p>
      </div>

      {/* Mobile Gallery */}
      <div className="relative w-full sm:hidden">
        <div className="relative overflow-hidden rounded-xl border border-[#EAEAEA] bg-white p-3 shadow-sm">
          <div className="grid grid-cols-3 gap-1.5">
            {displayImages.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setModalIndex(i);
                  setModalOpen(true);
                }}
                className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-gray-100 transition-transform duration-150 active:scale-95"
                aria-label={`Open ${projectName} preview ${i + 1}`}
              >
                <GalleryImageTile
                  src={src}
                  alt={`${projectName} preview ${i + 1}`}
                  className="absolute inset-0 h-full w-full"
                />
              </button>
            ))}
          </div>
        </div>

        <p className="mt-2 text-center text-[10px] font-medium text-[#999999]">
          {total} screens — tap to view
        </p>
      </div>

      {/* Mobile Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            key="mobile-preview-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-md"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="safe-top flex items-center justify-between px-4 py-3"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-sm font-medium text-white/70">
                {projectName}
              </span>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
                aria-label="Close gallery"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            <div
              className="relative flex flex-1 items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={modalIndex}
                  src={displayImages[modalIndex]}
                  alt={`${projectName} preview ${modalIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.22 }}
                  className="block max-h-[80vh] max-w-[92vw] rounded-2xl object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </AnimatePresence>
            </div>

            <GalleryNavigation
              onPrev={goPrev}
              onNext={goNext}
              canPrev={total > 1}
              canNext={total > 1}
            />

            <div
              className="safe-bottom flex items-center justify-center gap-2 pb-6 pt-4"
              onClick={(e) => e.stopPropagation()}
            >
              {displayImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setModalIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === modalIndex ? "w-6 bg-white" : "w-1.5 bg-white/30"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
