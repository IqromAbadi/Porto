"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#EAEAEA] bg-white">
      <div className="mx-auto max-w-screen-2xl px-6 py-12 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg font-bold tracking-tight text-[#111111] transition-colors hover:text-[#FF6B00]"
          >
            Iqrom<span className="text-[#FF6B00]">.</span>
          </motion.a>

          {/* Links */}
          {/* <div className="flex items-center gap-8">
            {['Work', 'Case Studies', 'Stack', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-[#666666] transition-colors hover:text-[#111111]"
              >
                {link}
              </a>
            ))}
          </div> */}

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-[#999999]"
          >
            &copy; {currentYear} Iqrom Abadi. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
