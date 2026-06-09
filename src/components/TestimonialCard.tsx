"use client";

import React from "react";
import { Star, User } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  isPlaceholder?: boolean;
}

export default function TestimonialCard({
  name,
  role,
  company,
  quote,
  rating,
  isPlaceholder = false,
}: TestimonialCardProps) {
  return (
    <div className="relative">
      {/* Envelope Background */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-gradient-to-t from-purple-500 to-violet-400 rounded-b-2xl" />

      {/* Card */}
      <div className="relative bg-white rounded-2xl border border-slate-200 shadow-lg p-6 text-center">
        {isPlaceholder && (
          <div className="absolute top-3 right-3 text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
            placeholder
          </div>
        )}

        {/* Avatar */}
        <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-200">
          <User size={28} className="text-slate-400" />
        </div>

        {/* Name & Role */}
        <h4 className="font-bold text-slate-900 mb-1">{name}</h4>
        <p className="text-sm text-slate-500 mb-3">
          {role} في {company}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < rating ? "text-amber-400 fill-amber-400" : "text-slate-200"
              }
            />
          ))}
          <span className="text-sm text-slate-600 mr-1">{rating}.0</span>
        </div>

        {/* Quote */}
        <p className="text-sm text-slate-500 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      </div>
    </div>
  );
}
