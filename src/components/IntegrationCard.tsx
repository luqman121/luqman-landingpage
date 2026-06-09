"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface IntegrationCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  color: string;
  bgColor: string;
  rotation?: number;
  animationDelay?: number;
}

export default function IntegrationCard({
  icon: Icon,
  name,
  description,
  color,
  bgColor,
  rotation = 0,
  animationDelay = 0,
}: IntegrationCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-2 p-5 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-float cursor-default`}
      style={{
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      <div
        className={`flex items-center justify-center w-14 h-14 rounded-xl ${bgColor}`}
      >
        <Icon size={28} className={color} />
      </div>
      <span className="font-semibold text-sm text-slate-900">{name}</span>
      <span className="text-xs text-slate-500 text-center">{description}</span>
    </div>
  );
}
