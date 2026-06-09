"use client";

import React from "react";
import {
  MessageCircle,
  Filter,
  Link,
  ListChecks,
  Send,
} from "lucide-react";
import FeatureCard from "./FeatureCard";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: MessageCircle,
    title: "الرد الآلي على العملاء",
    description:
      "يرد على رسائل واتساب وتيليجرام وإيميل بشكل ذكي. يتعلم طريقة كلامك ويقدم إجابات دقيقة ومناسبة لكل عميل",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Filter,
    title: "جمع وترتيب الليدز",
    description:
      "يجمع بيانات العملاء المهتمين من كل القنوات، يرتبها في Google Sheets أو CRM، ويصنفها حسب الأولوية",
    color: "text-brand-500",
    bgColor: "bg-brand-50",
  },
  {
    icon: Link,
    title: "ربط مع الأدوات الموجودة",
    description:
      "يرتبط مع CRM، Google Sheets، n8n، وغيرها من الأدوات. يصير جزء من سير عملك الحالي بدون تغييرات كبيرة",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: ListChecks,
    title: "إدارة المهام والتذكيرات",
    description:
      "يذكرك بمتابعة العملاء، إرسال العروض، وإنجاز المهام اليومية. يصير مساعد شخصي ينظم يومك",
    color: "text-violet-500",
    bgColor: "bg-violet-50",
  },
  {
    icon: Send,
    title: "متابعة العملاء تلقائياً",
    description:
      "يرسل رسائل متابعة للعملاء الذين لم يردوا، يذكرهم بالمواعيد، ويساعد في إغلاق المبيعات بشكل أسرع",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              بناءً لاحتياجك، نركب له التكاملات
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              كل بزنس مختلف، وموظف AI يتكيف مع طريقة شغلك. هذه بعض الأمور اللي يقدر يسويها
            </p>
          </div>
        </ScrollReveal>

        {/* 3-2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <FeatureCard {...feature} />
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {features.slice(3, 5).map((feature, index) => (
            <ScrollReveal key={index + 3} delay={(index + 3) * 0.1}>
              <FeatureCard {...feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
