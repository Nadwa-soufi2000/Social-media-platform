"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
    {
        id: "free",
        title: "مجاني",
        price: "$0",
        description: "دورة تجريبية دائمة",
        features: ["عدد محدود من المنشورات", "قوالب أساسية", "دعم عبر البريد الإلكتروني"],
        button: "ابدأ مجاناً",
    },
    {
        id: "pro",
        title: "Pro",
        price: "",
        description: "الخيار الأفضل للنمو السريع",
        features: ["منشورات غير محدودة", "قوالب متقدمة", "تحليلات ومقاييس", "دعم أسرع"],
        button: "اختر خطة Pro",
    },
    {
        id: "business",
        title: "Business",
        price: "",
        description: "للفِرق واحتياجات الأعمال",
        features: ["كل مميزات Pro", "حسابات متعددة", "أولوية في الدعم"],
        button: "اتصل بالمبيعات",
    },
];

const checkIcon = (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-violet-500">
        <circle cx="10" cy="10" r="9" fill="#F5F3FF" />
        <path d="M6.5 10.5l2 2 5-6" stroke="#7C3AED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function Pricing() {
    const [annual, setAnnual] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("pro");

    return (
        <main className="min-h-screen bg-slate-50 py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <motion.header
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">خطط مرنة لكل مستوى</p>
                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">الأسعار</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
                        اختر الخطة المناسبة لنشاطك وابدأ بإنشاء محتوى احترافي لمنصات التواصل الاجتماعي بكل سهولة.
                    </p>

                    <div className="mt-8 inline-flex overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
                        <button
                            onClick={() => setAnnual(false)}
                            aria-pressed={!annual}
                            className={`px-4 py-2 text-sm font-medium transition ${annual ? 'text-slate-600 hover:text-slate-900' : 'bg-slate-100 text-slate-900 shadow-sm'}`}
                        >
                            شهري
                        </button>
                        <button
                            onClick={() => setAnnual(true)}
                            aria-pressed={annual}
                            className={`px-4 py-2 text-sm font-medium transition ${annual ? 'bg-slate-100 text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                        >
                            سنوي
                        </button>
                    </div>
                </motion.header>

                <motion.section
                    initial="hidden"
                    animate="show"
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
                    className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {plans.map((plan) => {
                        const isActive = selectedPlan === plan.id;
                        const isPro = plan.id === "pro";
                        const price = plan.id === "free" ? "$0" : plan.id === "pro" ? `${annual ? "$90" : "$9"}` : `${annual ? "$290" : "$29"}`;

                        return (
                            <motion.div
                                key={plan.id}
                                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
                                whileHover={{ y: -6 }}
                                onClick={() => setSelectedPlan(plan.id)}
                                className={`group relative cursor-pointer rounded-[1.75rem] border p-6 transition-all duration-300 ${isActive ? 'border-violet-500 bg-violet-50 shadow-[0_20px_60px_-35px_rgba(124,58,237,0.4)]' : 'border-slate-200 bg-white shadow-sm hover:border-violet-300 hover:shadow-[0_20px_50px_-45px_rgba(124,58,237,0.18)]'}`}
                            >
                                {isPro && (
                                    <div className="absolute right-6 top-6 rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-violet-500/20">
                                        الأفضل
                                    </div>
                                )}
                                <span className={`text-sm font-semibold uppercase tracking-[0.28em] ${isActive ? 'text-violet-700' : 'text-slate-500'}`}>{plan.title}</span>
                                <div className="mt-6">
                                    <div className="text-4xl font-extrabold text-slate-900">{price}</div>
                                    <div className="mt-2 text-sm text-slate-500">{plan.description}</div>
                                </div>
                                <ul className="mt-8 space-y-3 text-sm text-slate-600">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center justify-center gap-2 text-slate-700">
                                            {checkIcon}
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <Button
                                        variant={isActive ? 'default' : 'outline'}
                                        className={`w-full rounded-full py-3 text-sm ${isActive ? 'bg-violet-600 text-white' : ''}`}
                                    >
                                        {plan.button}
                                    </Button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.section>
            </div>
        </main>
    );
}

