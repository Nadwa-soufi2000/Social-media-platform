"use client";

import { motion } from "framer-motion";

export default function Register() {
  const container = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.16),transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.14),transparent_22%),linear-gradient(180deg,#eef2ff_0%,#f8fafc_100%)] px-4 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <motion.section
          initial="hidden"
          animate="show"
          variants={container}
          className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-2xl shadow-slate-200/30 backdrop-blur-xl h-full"
        >
          <motion.div
            variants={item}
            className="absolute -top-10 -left-10 h-44 w-44 rounded-full bg-violet-200/30 blur-3xl"
            animate={{ opacity: [0.75, 1, 0.75], scale: [0.98, 1.05, 0.98] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            variants={item}
            className="absolute -bottom-12 right-8 h-36 w-36 rounded-full bg-cyan-200/20 blur-3xl"
            animate={{ opacity: [0.8, 1, 0.8], y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative z-10 flex h-full flex-col justify-between gap-8">
            <div>
              <motion.span
                variants={item}
                className="inline-flex rounded-full bg-gradient-to-r from-violet-100 to-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-700"
              >
                انضم إلى منصة سوشال
              </motion.span>
              <motion.h1 variants={item} className="mt-6 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                سجل الآن وابدأ تصميم محتوى متميز
              </motion.h1>
              <motion.p variants={item} className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                احصل على واجهة تسجيل متناسقة وسلسة، أدوات جاهزة لإنشاء منشورات جذابة، ودعم ذكي يساعدك على بناء حضور قوي في السوشيال ميديا.
              </motion.p>
            </div>

            <motion.div variants={item} className="grid gap-4 sm:grid-cols-2">
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 170 }}
                className="rounded-[1.75rem] border border-violet-100 bg-violet-50/80 p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">نمو سريع</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">100+ قالب</p>
                <p className="mt-2 text-sm text-slate-500">ابدأ بنماذج مصممة خصيصاً لمحتوى شبكات التواصل الاجتماعي.</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 170 }}
                className="rounded-[1.75rem] border border-cyan-100 bg-cyan-50/80 p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">تجربة ذكية</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">واجهة سلسة</p>
                <p className="mt-2 text-sm text-slate-500">تصميم حديث يساعدك على التركيز في خطوات التسجيل.</p>
              </motion.div>
            </motion.div>

            <motion.div variants={item} className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50/90 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">ميزات المزامنة</p>
              <div className="mt-4 space-y-3 text-slate-600">
                <div className="flex items-center gap-3 rounded-3xl bg-white p-3 shadow-sm">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-violet-700">✓</span>
                  <span>تصميم متناسق بين التسجيل وتسجيل الدخول.</span>
                </div>
                <div className="flex items-center gap-3 rounded-3xl bg-white p-3 shadow-sm">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">✓</span>
                  <span>تجربة احترافية مع بطاقات معلومات واضحة.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <motion.form
            variants={container}
            initial="hidden"
            animate="show"
            className="flex h-full flex-col justify-between rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-2xl shadow-slate-200/20"
          >
            <motion.div variants={item} className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">إنشاء حساب جديد</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">ابدأ الآن</h2>
              <p className="mt-2 text-slate-500">املأ البيانات لتسجيل حسابك والوصول إلى جميع الميزات.</p>
            </motion.div>

            <motion.div variants={item} className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">الاسم الكامل</label>
                <input
                  type="text"
                  placeholder="أحمد محمد"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-right text-slate-700 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">اسم المستخدم</label>
                <input
                  type="text"
                  placeholder="@socialuser"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-right text-slate-700 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-100"
                />
              </div>
            </motion.div>

            <motion.div variants={item} className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">البريد الإلكتروني</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-right text-slate-700 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">رقم الجوال</label>
                <input
                  type="tel"
                  placeholder="00962 7xx xxx xxx"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-right text-slate-700 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-100"
                />
              </div>
            </motion.div>

            <motion.div variants={item} className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">كلمة المرور</label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-right text-slate-700 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">تأكيد كلمة المرور</label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-right text-slate-700 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-100"
                />
              </div>
            </motion.div>

            <motion.div variants={item} className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500" />
                أوافق على الشروط وسياسة الخصوصية
              </label>
              <span className="text-slate-400">لديك حساب؟ <a href="/login" className="text-violet-600 hover:underline">تسجيل الدخول</a></span>
            </motion.div>

            <motion.div variants={item} className="mt-8">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-200/30 transition"
              >
                إنشاء حساب جديد
              </motion.button>
            </motion.div>

            <motion.div variants={item} className="mt-6 text-center text-sm text-slate-500">
              أو قم بالتسجيل باستخدام
            </motion.div>

            <motion.div variants={item} className="mt-4 grid gap-3 sm:grid-cols-2">
              <motion.button
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white"
              >     
                Google
              </motion.button>
              <motion.button
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white"
              >
                Apple
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </main>
  );
}
