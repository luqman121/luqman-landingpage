"use client";

import React from "react";
import TestimonialCard from "./TestimonialCard";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "[اسم العميل]",
    role: "صاحب شركة",
    company: "[اسم الشركة]",
    quote: "[رأي العميل عن خدمة Hermes AI — placeholder]",
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: "[اسم العميل]",
    role: "مدير العمليات",
    company: "[اسم الشركة]",
    quote: "[رأي العميل عن كيفية توفير الوقت والمتابعة]",
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: "[اسم العميل]",
    role: "مستشار",
    company: "[اسم الشركة]",
    quote: "[رأي العميل عن الردود التلقائية وترتيب الليدز]",
    rating: 5,
    isPlaceholder: true,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              أعمال تثق بـ Hermes AI
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              شركات ووكالات وأعمال حرة استفادت من موظف AI الذكي
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <TestimonialCard {...testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
