"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  bgColor,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-default ${className}`}
    >
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${bgColor} mb-5`}
      >
        <Icon size={24} className={color} />
      </div>
      <h3 className="font-bold text-lg text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
