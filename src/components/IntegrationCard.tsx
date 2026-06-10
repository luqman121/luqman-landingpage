"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface IntegrationCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  color: string;
  bgColor: string;
}

export default function IntegrationCard({
  icon: Icon,
  name,
  description,
  color,
  bgColor,
}: IntegrationCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-2 p-4 md:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-default`}
    >
      <div
        className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl ${bgColor}`}
      >
        <Icon size={24} className={color} />
      </div>
      <span className="font-semibold text-sm text-slate-900">{name}</span>
      <span className="text-xs text-slate-500 text-center">{description}</span>
    </div>
  );
}
