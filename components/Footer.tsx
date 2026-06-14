"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { src: "/google.png", alt: "Google" },
  { src: "/airbnb.png", alt: "Airbnb" },
  { src: "/amazon.png", alt: "Amazon" },
  { src: "/hub.png", alt: "HubSpot" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-[#fff9ff] via-[#f5efff] via-60% to-[#eef9ff] px-5 py-10 shadow-[0_30px_80px_-45px_rgba(124,58,237,0.28)] sm:px-8 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.22)_0%,rgba(236,72,153,0.06)_20%,rgba(56,189,248,0.12)_50%,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.08)_0%,rgba(124,58,237,0.06)_25%,rgba(236,72,153,0.04)_45%,transparent_80%)]" />
      <div className="mx-auto max-w-6xl relative">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-violet-700">
            شركاء النجاح
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            موثوقون من قبل أفضل العلامات التجارية
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
            أكثر من 40,000 مستخدم حول العالم يستخدمون منصتنا لبناء منشورات سوشال ميديا احترافية بخطوات بسيطة.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.alt}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="flex items-center justify-center rounded-3xl bg-white/90 p-5 shadow-2xl shadow-violet-200/25 transition duration-500 ease-out ring-1 ring-white/80 ring-slate-200/60 backdrop-blur-sm"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={210}
                height={60}
                className="h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
