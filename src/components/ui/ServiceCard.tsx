"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  index?: number;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={href} className="block h-full">
        <div className="relative h-full p-8 bg-white rounded-sm border border-gray-100 hover:border-gold-400/30 transition-all duration-500 hover:shadow-luxury">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>

          {/* Content */}
          <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
            {title}
          </h3>
          <p className="text-charcoal/70 leading-relaxed mb-6">{description}</p>

          {/* Link */}
          <div className="flex items-center gap-2 text-gold-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
            <span>En savoir plus</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>

          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gold-400/10 to-transparent transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
