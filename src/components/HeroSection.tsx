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
      position: "absolute top-8 right-[8%]",
      animation: "animate-float",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      size: 22,
    },
    {
      icon: Send,
      position: "absolute top-20 left-[10%]",
      animation: "animate-float-slow",
      color: "text-sky-500",
      bgColor: "bg-sky-50",
      size: 22,
    },
    {
      icon: Mail,
      position: "absolute bottom-24 right-[5%]",
      animation: "animate-float-delayed",
      color: "text-rose-500",
      bgColor: "bg-rose-50",
      size: 22,
    },
    {
      icon: FileSpreadsheet,
      position: "absolute bottom-16 left-[8%]",
      animation: "animate-float",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      size: 22,
    },
    {
      icon: Brain,
      position: "absolute top-12 right-[25%]",
      animation: "animate-float-delayed",
      color: "text-violet-500",
      bgColor: "bg-violet-50",
      size: 22,
    },
    {
      icon: Zap,
      position: "absolute top-28 left-[25%]",
      animation: "animate-float-slow",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      size: 22,
    },
  ];

  return (
    <section className="relative pt-28 pb-16 px-4 overflow-hidden">
      {/* Main White Card */}
      <div className="relative mx-auto max-w-5xl bg-white rounded-[2rem] shadow-xl border border-slate-100 px-6 py-16 md:px-12 md:py-24">
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <div key={index} className={`hidden lg:block ${item.position}`}>
            <FloatingIcon
              icon={item.icon}
              animationClass={item.animation}
              color={item.color}
              bgColor={item.bgColor}
              size={item.size}
            />
          </div>
        ))}

        {/* Connector Lines (decorative, horizontal only) */}
        <div className="hidden lg:block">
          <div className="absolute top-16 right-[15%] w-16">
            <ConnectorLine direction="horizontal" length="64px" />
          </div>
          <div className="absolute top-28 left-[18%] w-12">
            <ConnectorLine direction="horizontal" length="48px" />
          </div>
          <div className="absolute bottom-32 right-[12%] w-14">
            <ConnectorLine direction="horizontal" length="56px" />
          </div>
          <div className="absolute bottom-24 left-[15%] w-10">
            <ConnectorLine direction="horizontal" length="40px" />
          </div>
        </div>

        {/* Center Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-8 animate-fade-in">
            <Zap size={16} />
            <span>خدمة AI عملية للأعمال</span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 animate-fade-in-up">
            موظف AI ذكي يشتغل لك 24 ساعة
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            ردّ آلي على عملائك، جمع وترتيب الليدز، إدارة المهام، ومتابعة العملاء — وكل هذا يشتغل مع أدواتك الحالية مثل واتساب، تيليجرام، وCRM
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <WhatsAppButton
              text="احجز استشارة مجانية"
              variant="primary"
              size="lg"
            />
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold px-6 py-4 rounded-full border-2 border-slate-200 hover:border-slate-300 transition-all duration-200 cursor-pointer group"
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
