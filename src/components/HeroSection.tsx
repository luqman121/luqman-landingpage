"use client";

import React from "react";
import {
  MessageCircle,
  Send,
  Mail,
  FileSpreadsheet,
  Brain,
  Zap,
  ArrowLeft,
} from "lucide-react";
import FloatingIcon from "./FloatingIcon";
import WhatsAppButton from "./WhatsAppButton";
import ThemeToggle from "./ThemeToggle";

export default function HeroSection() {
  const floatingIcons = [
    {
      icon: MessageCircle,
      position: "absolute top-[12%] left-[8%]",
      animation: "animate-float-slow",
      color: "text-emerald-500 dark:text-emerald-300",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/30",
      size: 22,
      opacity: "opacity-85",
      mobile: false,
    },
    {
      icon: Send,
      position: "absolute top-[18%] right-[10%]",
      animation: "animate-float",
      color: "text-sky-500 dark:text-sky-300",
      bgColor: "bg-sky-50 dark:bg-sky-900/30",
      size: 22,
      opacity: "opacity-85",
      mobile: false,
    },
    {
      icon: Mail,
      position: "absolute top-[42%] right-[6%]",
      animation: "animate-float-delayed",
      color: "text-rose-500 dark:text-rose-300",
      bgColor: "bg-rose-50 dark:bg-rose-900/30",
      size: 22,
      opacity: "opacity-85",
      mobile: false,
    },
    {
      icon: FileSpreadsheet,
      position: "absolute top-[38%] left-[5%]",
      animation: "animate-float-slow",
      color: "text-amber-500 dark:text-amber-300",
      bgColor: "bg-amber-50 dark:bg-amber-900/30",
      size: 22,
      opacity: "opacity-85",
      mobile: false,
    },
    {
      icon: Brain,
      position: "absolute bottom-[18%] left-[12%]",
      animation: "animate-float-delayed",
      color: "text-violet-500 dark:text-violet-300",
      bgColor: "bg-violet-50 dark:bg-violet-900/30",
      size: 22,
      opacity: "opacity-85",
      mobile: false,
    },
    {
      icon: Zap,
      position: "absolute bottom-[20%] right-[11%]",
      animation: "animate-float",
      color: "text-orange-500 dark:text-orange-300",
      bgColor: "bg-orange-50 dark:bg-orange-900/30",
      size: 22,
      opacity: "opacity-85",
      mobile: false,
    },
  ];

  return (
    <section className="relative pt-24 md:pt-28 pb-10 md:pb-16 px-4 overflow-hidden">
      {/* Main White Card */}
      <div className="relative mx-auto max-w-5xl bg-white dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 px-5 py-12 md:px-12 md:py-24">
        {/* Floating Icons — desktop only, positioned around edges */}
        {floatingIcons.map((item, index) => (
          <div key={index} className={`hidden lg:block z-10 ${item.position}`}>
            <FloatingIcon
              icon={item.icon}
              animationClass={item.animation}
              color={item.color}
              bgColor={item.bgColor}
              size={item.size}
              className={item.opacity}
            />
          </div>
        ))}

        {/* Center Content */}
        <div className="relative z-20 text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium mb-6 animate-fade-in">
            <Zap size={16} />
            <span>خدمة AI عملية للأعمال</span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-5 animate-fade-in-up">
            موظف AI يرد على عملائك ويتابع الليدز 24 ساعة
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            ردّ آلي، جمع ليدز، وتذكير — يشتغل مع أدواتك الحالية
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <WhatsAppButton
              text="احجز استشارة مجانية"
              variant="primary"
              size="lg"
            />
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-semibold px-6 py-3.5 rounded-full border-2 border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-200 cursor-pointer group"
            >
              شاهد كيف يعمل
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            </a>
          </div>

          {/* Theme Toggle */}
          <div className="flex justify-center mt-6 md:mt-8">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </section>
  );
}
