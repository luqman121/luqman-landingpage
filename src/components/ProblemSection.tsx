"use client";

import React from "react";
import { MessageSquare, Users, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    icon: MessageSquare,
    title: "ردود يدوية تستهلك الوقت",
    description: "العملاء يتواصلون في واتساب وتيليجرام وإيميل، وتحتاج ردود سريعة على مدار الساعة",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
  },
  {
    icon: Users,
    title: "الليدز تضيع وتُنسى",
    description: "عملاء مهتمين يتواصلون لكن ما يتم تسجيلهم أو متابعتهم بشكل منظم",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Clock,
    title: "مهام يومية تسحب طاقة الفريق",
    description: "تكرار نفس الأعمال يومياً: ترتيب بيانات، إرسال تذكيرات، متابعة العملاء",
    color: "text-slate-500",
    bgColor: "bg-slate-50",
  },
];

export default function ProblemSection() {
  return (
    <section id="product" className="py-10 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
              هل تضيع وقتك في الرد اليدوي؟
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              أصحاب الأعمال في الخليج يواجهون نفس التحديات — والحل أبسط مما تتخيل
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${problem.bgColor} mb-4`}
                >
                  <problem.icon size={24} className={problem.color} />
                </div>
                <h3 className="font-bold text-base md:text-lg text-slate-900 dark:text-slate-100 mb-2">
                  {problem.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
