"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  index?: number;
}

export function TestimonialCard({
  name,
  location,
  rating,
  text,
  date,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-sm shadow-luxury"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-gold-400" : "text-gray-200"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-charcoal/80 leading-relaxed mb-6">
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="font-display font-semibold text-navy-900">{name}</p>
          <p className="text-sm text-charcoal/60">{location}</p>
        </div>
        <span className="text-xs text-charcoal/40">{date}</span>
      </div>
    </motion.article>
  );
}
