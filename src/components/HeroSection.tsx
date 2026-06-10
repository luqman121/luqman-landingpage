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
import ConnectorLine from "./ConnectorLine";
import WhatsAppButton from "./WhatsAppButton";

export default function HeroSection() {
  const floatingIcons = [
    {
      icon: MessageCircle,
      position: "absolute top-6 right-[6%] md:top-8 md:right-[8%]",
      animation: "animate-float",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      size: 22,
      opacity: "opacity-80",
      mobile: true,
    },
    {
      icon: Send,
      position: "absolute top-16 left-[8%] md:top-20 md:left-[10%]",
      animation: "animate-float-slow",
      color: "text-sky-500",
      bgColor: "bg-sky-50",
      size: 22,
      opacity: "opacity-80",
      mobile: true,
    },
    {
      icon: Mail,
      position: "absolute bottom-20 right-[4%] md:bottom-24 md:right-[5%]",
      animation: "animate-float-delayed",
      color: "text-rose-500",
      bgColor: "bg-rose-50",
      size: 22,
      opacity: "opacity-60 md:opacity-80",
      mobile: false,
    },
    {
      icon: FileSpreadsheet,
      position: "absolute bottom-12 left-[6%] md:bottom-16 md:left-[8%]",
      animation: "animate-float",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      size: 22,
      opacity: "opacity-60 md:opacity-80",
      mobile: false,
    },
    {
      icon: Brain,
      position: "absolute top-10 right-[22%] md:top-12 md:right-[25%]",
      animation: "animate-float-delayed",
      color: "text-violet-500",
      bgColor: "bg-violet-50",
      size: 22,
      opacity: "opacity-70",
      mobile: true,
    },
    {
      icon: Zap,
      position: "absolute top-24 left-[22%] md:top-28 md:left-[25%]",
      animation: "animate-float-slow",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      size: 22,
      opacity: "opacity-70",
      mobile: true,
    },
  ];

  return (
    <section className="relative pt-24 md:pt-28 pb-10 md:pb-16 px-4 overflow-hidden">
      {/* Main White Card */}
      <div className="relative mx-auto max-w-5xl bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-100 px-5 py-12 md:px-12 md:py-24">
        {/* Floating Icons — fewer on mobile */}
        {floatingIcons.map((item, index) => (
          <div key={index} className={`${item.mobile ? 'block' : 'hidden lg:block'} ${item.position}`}>
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

        {/* Connector Lines — desktop only, softer */}
        <div className="hidden lg:block">
          <div className="absolute top-16 right-[15%] w-16 opacity-40">
            <ConnectorLine direction="horizontal" length="64px" />
          </div>
          <div className="absolute top-28 left-[18%] w-12 opacity-40">
            <ConnectorLine direction="horizontal" length="48px" />
          </div>
          <div className="absolute bottom-32 right-[12%] w-14 opacity-40">
            <ConnectorLine direction="horizontal" length="56px" />
          </div>
          <div className="absolute bottom-24 left-[15%] w-10 opacity-40">
            <ConnectorLine direction="horizontal" length="40px" />
          </div>
          <div className="absolute top-20 right-[28%] w-8 opacity-30">
            <ConnectorLine direction="horizontal" length="32px" />
          </div>
          <div className="absolute top-32 left-[28%] w-8 opacity-30">
            <ConnectorLine direction="horizontal" length="32px" />
          </div>
        </div>

        {/* Center Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-6 animate-fade-in">
            <Zap size={16} />
            <span>خدمة AI عملية للأعمال</span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-5 animate-fade-in-up">
            موظف AI يرد على عملائك ويتابع الليدز 24 ساعة
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
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
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold px-6 py-3.5 rounded-full border-2 border-slate-200 hover:border-slate-300 transition-all duration-200 cursor-pointer group"
            >
              شاهد كيف يعمل
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
