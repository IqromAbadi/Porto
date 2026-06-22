"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { contactInfo } from "@/data/portfolio";
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  ArrowUpRight,
  Send,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    color: "group-hover:text-[#FF6B00] group-hover:border-[#FF6B00]",
    bg: "group-hover:bg-orange-50",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: contactInfo.linkedin,
    color: "group-hover:text-[#0A66C2] group-hover:border-[#0A66C2]",
    bg: "group-hover:bg-blue-50",
  },
  // {
  //   icon: Github,
  //   label: "GitHub",
  //   value: "View my code",
  //   href: contactInfo.github,
  //   color: "group-hover:text-[#111111] group-hover:border-[#111111]",
  //   bg: "group-hover:bg-gray-100",
  // },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contactInfo.whatsapp,
    href: `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, "")}`,
    color: "group-hover:text-[#25D366] group-hover:border-[#25D366]",
    bg: "group-hover:bg-green-50",
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="relative bg-white py-32 lg:py-40">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left - Headline */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
              Contact
            </span>
            <h2 className="mt-6 text-display-lg text-[#111111] leading-[1.05]">
              Let&apos;s Build
              <br />
              Great Mobile
              <br />
              <span className="gradient-text">Products</span>
              <br />
              Together
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-[#666666]">
              Interested in building scalable mobile applications or
              collaborating on your next product? I&apos;d love to hear from
              you.
            </p>

            {/* Quick CTA */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-8 inline-flex items-center gap-3 self-start rounded-full bg-[#FF6B00] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#111111] hover:shadow-lg hover:shadow-black/10 group"
            >
              <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              Send Email
            </a>
          </motion.div>

          {/* Right - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group flex items-center gap-5 rounded-2xl border border-[#EAEAEA] bg-white p-6 transition-all duration-500 hover:shadow-lg hover:shadow-black/[0.03] ${method.color} ${method.bg}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F8F8] transition-colors group-hover:bg-white">
                    <Icon className="h-5 w-5 text-[#111111] transition-colors group-hover:inherit" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#999999] group-hover:text-inherit">
                      {method.label}
                    </div>
                    <div className="mt-0.5 text-sm font-medium text-[#111111]">
                      {method.value}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[#CCCCCC] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-inherit" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
