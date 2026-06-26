"use client";

import { useState, useCallback, useEffect } from "react";
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
      className={`h-full w-full object-cover ${className}`}
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
          className="fixed left-3 top-1/2 z-[60] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-xl backdrop-blur-md transition-all hover:scale-110 sm:left-6"
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
          className="fixed right-3 top-1/2 z-[60] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-xl backdrop-blur-md transition-all hover:scale-110 sm:right-6"
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
  const displayImages = images.length > 0 ? images.slice(0, 5) : [];
  const total = displayImages.length;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

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
      <div className="relative hidden w-full sm:block">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#EAEAEA] bg-white px-6 py-7 shadow-sm lg:rounded-[3rem] lg:px-10 lg:py-9">
          <motion.div
            animate={{
              opacity: activeIndex !== null ? 0.25 : 1,
              filter: activeIndex !== null ? "blur(3px)" : "blur(0px)",
            }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            {/* Row atas: 3 image */}
            <div className="grid grid-cols-3 gap-5">
              {displayImages.slice(0, 3).map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="relative aspect-[16/10] cursor-zoom-in overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300 hover:scale-[1.015]"
                  aria-label={`Open ${projectName} preview ${i + 1}`}
                >
                  <GalleryImageTile
                    src={src}
                    alt={`${projectName} preview ${i + 1}`}
                    className="absolute inset-0"
                  />
                </button>
              ))}
            </div>

            {/* Row bawah: 2 image di tengah */}
            {displayImages.length > 3 && (
              <div className="grid grid-cols-6 gap-5">
                {displayImages.slice(3, 5).map((src, index) => {
                  const imageIndex = index + 3;

                  return (
                    <button
                      key={imageIndex}
                      type="button"
                      onClick={() => setActiveIndex(imageIndex)}
                      className={`relative aspect-[16/10] cursor-zoom-in overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300 hover:scale-[1.015] ${
                        index === 0
                          ? "col-span-2 col-start-2"
                          : "col-span-2 col-start-4"
                      }`}
                      aria-label={`Open ${projectName} preview ${imageIndex + 1}`}
                    >
                      <GalleryImageTile
                        src={src}
                        alt={`${projectName} preview ${imageIndex + 1}`}
                        className="absolute inset-0"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>

        <p className="mt-5 text-center text-base font-medium text-[#999999] sm:text-lg">
          {total} screens — click to preview
        </p>
      </div>

      {/* Mobile Gallery */}
      <div className="relative w-full sm:hidden">
        <div className="relative overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white p-3 shadow-sm">
          <div className="grid grid-cols-2 gap-2">
            {displayImages.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setModalIndex(i);
                  setModalOpen(true);
                }}
                className={`relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-gray-100 transition-transform duration-150 active:scale-95 ${
                  i === 0 ? "col-span-2" : ""
                }`}
                aria-label={`Open ${projectName} preview ${i + 1}`}
              >
                <GalleryImageTile
                  src={src}
                  alt={`${projectName} preview ${i + 1}`}
                  className="absolute inset-0"
                />
              </button>
            ))}
          </div>
        </div>

        <p className="mt-2 text-center text-[10px] font-medium text-[#999999]">
          {total} screens — tap to view
        </p>
      </div>

      {/* Desktop Modal */}
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
              className="relative z-10 flex max-h-[90vh] max-w-[92vw] flex-col overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl"
            >
              <div className="relative flex max-h-[82vh] min-h-[220px] items-center justify-center bg-gray-50">
                <img
                  src={displayImages[activeIndex]}
                  alt={`${projectName} preview ${activeIndex + 1}`}
                  className="relative z-10 block max-h-[82vh] max-w-[92vw] object-contain"
                />

                <button
                  type="button"
                  onClick={closePreview}
                  className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
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
              className="flex items-center justify-between px-4 py-3"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-sm font-medium text-white/70">
                {projectName}
              </span>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            <div
              className="flex flex-1 flex-col items-center justify-center px-4"
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
                  className="block max-h-[68vh] max-w-[92vw] rounded-2xl object-contain"
                />
              </AnimatePresence>

              {total > 1 && (
                <div className="mt-5 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-xl"
                  >
                    <ChevronLeft className="h-5 w-5 text-[#111111]" />
                  </button>

                  <div className="rounded-full bg-white/15 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md">
                    {modalIndex + 1} / {total}
                  </div>

                  <button
                    type="button"
                    onClick={goNext}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-xl"
                  >
                    <ChevronRight className="h-5 w-5 text-[#111111]" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
