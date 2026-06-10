"use client";

import React from "react";
import {
  MessageCircle,
  Send,
  Mail,
  FileSpreadsheet,
  Database,
  Workflow,
  Brain,
} from "lucide-react";
import IntegrationCard from "./IntegrationCard";
import ScrollReveal from "./ScrollReveal";

const integrations = [
  {
    icon: MessageCircle,
    name: "واتساب",
    description: "ردود تلقائية",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    rotation: -8,
    animationDelay: 0,
  },
  {
    icon: Send,
    name: "تيليجرام",
    description: "بوت ذكي",
    color: "text-sky-500",
    bgColor: "bg-sky-50",
    rotation: 5,
    animationDelay: 0.5,
  },
  {
    icon: Mail,
    name: "إيميل",
    description: "ردود مخصصة",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    rotation: -4,
    animationDelay: 1,
  },
  {
    icon: FileSpreadsheet,
    name: "Google Sheets",
    description: "تسجيل البيانات",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    rotation: 6,
    animationDelay: 1.5,
  },
  {
    icon: Database,
    name: "CRM",
    description: "إدارة العملاء",
    color: "text-violet-500",
    bgColor: "bg-violet-50",
    rotation: -6,
    animationDelay: 2,
  },
  {
    icon: Workflow,
    name: "n8n",
    description: "أتمتة متقدمة",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    rotation: 4,
    animationDelay: 2.5,
  },
];

export default function IntegrationsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 px-6 py-12 md:px-12 md:py-16">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                يشتغل مع أدواتك الحالية
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                لا تحتاج تغيير برامجك. موظف AI يرتبط مباشرة مع الأدوات اللي تستخدمها كل يوم
              </p>
            </div>

            {/* Center Hero Icon */}
            <div className="flex justify-center mb-10">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-500 text-white shadow-lg animate-float">
                <Brain size={36} />
              </div>
            </div>

            {/* Integration Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-start">
              {integrations.map((integration, index) => (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <IntegrationCard {...integration} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
