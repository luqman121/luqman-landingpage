"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface FloatingIconProps {
  icon: LucideIcon;
  className?: string;
  animationClass?: string;
  size?: number;
  color?: string;
  bgColor?: string;
}

export default function FloatingIcon({
  icon: Icon,
  className = "",
  animationClass = "animate-float",
  size = 24,
  color = "text-slate-700",
  bgColor = "bg-white",
}: FloatingIconProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl shadow-md border border-slate-200 ${bgColor} ${animationClass} ${className}`}
      style={{ width: 56, height: 56 }}
    >
      <Icon size={size} className={color} />
    </div>
  );
}
