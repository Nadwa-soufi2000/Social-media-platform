"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.15),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),transparent_28%),linear-gradient(180deg,#f5f3ff_0%,#eef6ff_100%)] px-4 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <motion.section
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-2xl shadow-violet-200/20 backdrop-blur-xl h-full"
        >
          <motion.div
            animate={{ opacity: [0.85, 1, 0.85], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 h-44 w-44 rounded-full bg-violet-200/30 blur-3xl"
          />
          <motion.div
            animate={{ opacity: [0.8, 1, 0.8], y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-12 right-8 h-36 w-36 rounded-full bg-cyan-200/20 blur-3xl"
          />
          <div className="relative z-10 flex h-full flex-col justify-between gap-8">
            <div>
              <span className="inline-flex rounded-full bg-gradient-to-r from-violet-100 to-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-700">
                منصة محتوى سوشال
              </span>
              <h1 className="mt-6 text-3xl font-extrabold text-slate-900 sm:text-4xl">واجهة تسجيل أنيقة وسريعة</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                ادخل إلى حسابك بسرعة وابدأ إنشاء محتوى اجتماعي بواجهة أنيقة، أدوات ذكية ومظهر محدث يتماشى مع تجربة تسجيل الدخول.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 170 }}
                className="rounded-[1.75rem] border border-violet-100 bg-violet-50/80 p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">أكثر من</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">40k+</p>
                <p className="mt-2 text-sm text-slate-500">مستخدمين نشطين حول العالم</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 170 }}
                className="rounded-[1.75rem] border border-cyan-100 bg-cyan-50/80 p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">أفكار جاهزة</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">سريع وجذاب</p>
                <p className="mt-2 text-sm text-slate-500">منشورات، هاشتاغات ونسخ نصية بنقرة واحدة</p>
              </motion.div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50/85 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">لماذا تختارنا؟</p>
              <div className="mt-4 space-y-3 text-slate-600">
                <div className="flex items-center gap-3 rounded-3xl bg-white p-3 shadow-sm">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-violet-700">✓</span>
                  <span>واجهة واضحة وسهلة الاستخدام</span>
                </div>
                <div className="flex items-center gap-3 rounded-3xl bg-white p-3 shadow-sm">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">✓</span>
                  <span>تجربة مهنية متكاملة مع تصميم موحد</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <motion.form
            variants={container}
            initial="hidden"
            animate="show"
            onSubmit={(e) => e.preventDefault()}
            className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-2xl shadow-slate-200/20 h-full"
          >
            <motion.div variants={item} className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-700">مرحبا بك</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">سجل الدخول إلى حسابك</h2>
              <p className="mt-2 text-slate-500">ادخل بياناتك للمتابعة إلى لوحة التحكم والمنصة.</p>
            </motion.div>

            <motion.div variants={item} className="grid gap-4">
              <label className="text-sm text-slate-700">البريد الإلكتروني</label>
              <input
                dir="rtl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-right text-slate-700 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100"
              />
            </motion.div>

            <motion.div variants={item} className="mt-4 grid gap-4">
              <label className="text-sm text-slate-700">كلمة المرور</label>
              <input
                dir="rtl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-right text-slate-700 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100"
              />
            </motion.div>

            <motion.div variants={item} className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500" />
                تذكرني
              </label>
              <a className="text-violet-600 hover:underline">نسيت كلمة المرور؟</a>
            </motion.div>

            <motion.div variants={item} className="mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-200/40 transition"
              >
                تسجيل الدخول
              </motion.button>
            </motion.div>

            <motion.div variants={item} className="mt-6 text-center text-sm text-slate-500">
              أو تابع عبر
            </motion.div>

            <motion.div variants={item} className="mt-4 grid gap-3 sm:grid-cols-2">
              <motion.button
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white"
              >
                تسجيل عبر Google
              </motion.button>
              <motion.button
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white"
              >
                تسجيل عبر Apple
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
