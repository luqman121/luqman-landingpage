"use client";

import React from "react";
import { Brain } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

const solutionPoints = [
  "يرد على العملاء تلقائياً في واتساب وتيليجرام وإيميل",
  "يجمع الليدز ويرتبها في Google Sheets أو CRM",
  "يرتبط مع n8n وينفذ سير عمل مخصص لبزنسك",
  "يذكرك بمتابعة العملاء وإرسال العروض",
  "يشتغل 24 ساعة بدون تعب أو إجازات",
];

export default function SolutionSection() {
  return (
    <section id="how-it-works" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 px-6 py-12 md:px-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Icon + Title */}
            <ScrollReveal>
              <div className="text-center lg:text-right">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 mb-6">
                  <Brain size={32} />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  Hermes AI يصير موظفك الذكي
                </h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  موظف AI يتم تركيبه خصيصاً لبزنسك. يتعلم طريقة عملك، يرد بلهجتك، ويشتغل مع أدواتك الحالية
                </p>
                <WhatsAppButton
                  text="احجز استشارة مجانية"
                  variant="primary"
                  size="md"
                />
              </div>
            </ScrollReveal>

            {/* Right: Points List */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                {solutionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
