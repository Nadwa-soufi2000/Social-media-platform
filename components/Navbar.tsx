"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.06, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.36 } },
};


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const controls = useAnimation();

  const mobileVariants = {
    hidden: { opacity: 0, y: -12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.28 } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
  };

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  useEffect(() => {
    const onScroll = () => {
      const should = window.scrollY > 8;
      setElevated(should);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    controls.start({
      boxShadow: elevated ? "0 18px 50px rgba(15,23,42,0.12)" : "0 6px 18px rgba(15,23,42,0.06)",
      backgroundColor: elevated ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.80)",
      transition: { duration: 0.32, ease: "easeOut" },
    });
  }, [controls, elevated]);

  return (
    <motion.nav
      className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl font-arabic"
      variants={navVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <motion.div className="flex items-center gap-3" variants={itemVariants}>
          <motion.div whileHover={{ y: -4, scale: 1.03 }}>
            <Logo />
          </motion.div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-semibold text-gray-900">ContentAI</span>
            <span className="sm:text-xs text-[9px] text-gray-500">توليد موثوق للمحتوى بالذكاء الاصطناعي لمنصات التواصل الاجتماعي الخاصة بك.</span>
          </div>
        </motion.div>

        <div className="hidden items-center gap-8 lg:flex">
          <motion.a href="#home" className="text-md font-medium text-gray-600 transition hover:text-gray-900" variants={itemVariants} whileHover={{ y: -3, scale: 1.03 }}>
            الرئيسة
          </motion.a>
          <motion.a href="#pricing" className="text-md font-medium text-gray-600 transition hover:text-gray-900" variants={itemVariants} whileHover={{ y: -3, scale: 1.03 }}>
            تسجيل الدخول
          </motion.a>
          <motion.a href="#login" className="text-md font-medium text-gray-600 transition hover:text-gray-900" variants={itemVariants} whileHover={{ y: -3, scale: 1.03 }}>
             الأسعار
          </motion.a>
        </div>
        <div className="flex items-center gap-3">
          <div className="lg:hidden">
            <button
              aria-expanded={open}
              aria-label="فتح القائمة"
              onClick={() => setOpen((s) => !s)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/60 text-gray-700 shadow-sm hover:bg-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <motion.div className="lg:flex hidden" variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-500/15 hover:shadow-violet-500/30">
               إبدأ مجاناً
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={mobileVariants}
          >
            <div className="px-4 pb-6">
              <div className="mt-3 flex flex-col gap-3">
                <a href="#home" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">الرئيسة</a>
                <a href="#pricing" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">تسجيل الدخول</a>
                <a href="#login" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">الأسعار</a>
                <div className="pt-2">
                  <Button onClick={() => setOpen(false)} className="w-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md">إبدأ مجاناً</Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
