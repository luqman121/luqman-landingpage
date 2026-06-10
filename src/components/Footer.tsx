"use client";

import React from "react";
import { Instagram, Twitter, Music2 } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "المنتج",
      links: [
        { label: "الرد الآلي", href: "#features" },
        { label: "جمع الليدز", href: "#features" },
        { label: "إدارة المهام", href: "#features" },
      ],
    },
    {
      title: "المميزات",
      links: [
        { label: "واتساب", href: "#features" },
        { label: "تيليجرام", href: "#features" },
        { label: "Google Sheets", href: "#features" },
      ],
    },
    {
      title: "التواصل",
      links: [
        { label: "استشارة مجانية", href: "#" },
        { label: "كيف يعمل", href: "#how-it-works" },
        { label: "الأسئلة", href: "#faq" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, label: "إنستجرام", href: "#" },
    { icon: Twitter, label: "X", href: "#" },
    { icon: Music2, label: "تيك توك", href: "#" },
  ];

  return (
    <footer id="faq" className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Main Footer Card */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 px-6 py-12 md:px-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 font-bold text-lg text-slate-900 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white text-sm font-bold">
                  H
                </span>
                Hermes AI
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Hermes AI يبني لك نظام أتمتة ذكي يخدم عملائك ويوفر وقتك. موظف AI عملي يركب خصيصاً لبزنسك.
              </p>
            </div>

            {/* Links Columns */}
            {footerLinks.map((column, index) => (
              <div key={index}>
                <h4 className="font-bold text-slate-900 mb-4">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © 2026 Hermes AI. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500 ml-2">تابعنا</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant Watermark */}
        <div className="mt-8 text-center overflow-hidden">
          <span
            className="inline-block font-heading font-bold text-7xl md:text-9xl text-red-500/20 select-none pointer-events-none blur-sm"
            style={{ filter: "blur(8px)" }}
          >
            HERMES AI
          </span>
        </div>
      </div>
    </footer>
  );
}
