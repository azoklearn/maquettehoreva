"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface WatchCardProps {
  id: string;
  brand: string;
  model: string;
  reference?: string;
  price: number;
  originalPrice?: number;
  image: string;
  condition?: string;
  year?: number;
  featured?: boolean;
  details?: string;
}

export function WatchCard({
  id,
  brand,
  model,
  reference,
  price,
  originalPrice,
  image,
  condition,
  year,
  featured = false,
  details,
}: WatchCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={`/montres/${id}`} className="block">
        <div
          className={`card-premium overflow-hidden ${
            featured ? "bg-navy-900" : "bg-white"
          }`}
        >
          {/* Image Container */}
          <div className="relative aspect-watch overflow-hidden bg-gradient-to-b from-gray-100 to-gray-50">
            <Image
              src={image}
              alt={`${brand} ${model}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-500" />
            
            {/* Condition Badge */}
            {condition && (
              <span className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-0.5 md:px-3 md:py-1 bg-navy-900/90 text-cream text-[10px] md:text-xs tracking-wide">
                {condition}
              </span>
            )}
          </div>

          {/* Content */}
          <div className={`p-3 md:p-6 ${featured ? "text-cream" : ""}`}>
            {/* Brand */}
            <span
              className={`text-[10px] md:text-sm tracking-[0.1em] md:tracking-[0.15em] font-body ${
                featured ? "text-gold-400" : "text-gold-400"
              }`}
            >
              {brand}
            </span>

            {/* Model */}
            <h3
              className={`font-display text-sm md:text-xl font-semibold mt-0.5 md:mt-1 line-clamp-2 ${
                featured ? "text-cream" : "text-navy-900"
              }`}
            >
              {model}
            </h3>

            {/* Reference & Year - Hidden on mobile */}
            {(reference || year) && (
              <p
                className={`hidden md:block text-sm mt-2 ${
                  featured ? "text-cream/60" : "text-charcoal/60"
                }`}
              >
                {reference && <span>Réf. {reference}</span>}
                {reference && year && <span> • </span>}
                {year && <span>{year}</span>}
              </p>
            )}

            {/* Details - Hidden on mobile */}
            {details && (
              <p
                className={`hidden md:block text-xs mt-2 ${
                  featured ? "text-gold-400/80" : "text-gold-600"
                }`}
              >
                {details}
              </p>
            )}

            {/* Price */}
            <div className="mt-2 md:mt-4 pt-2 md:pt-4 border-t border-current/10">
              {originalPrice && (
                <div className="mb-1">
                  <span
                    className={`text-xs md:text-sm line-through ${
                      featured ? "text-cream/40" : "text-charcoal/40"
                    }`}
                  >
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    }).format(originalPrice)}
                  </span>
                </div>
              )}
              <span
                className={`font-display text-base md:text-2xl font-semibold ${
                  featured ? "text-gold-400" : originalPrice ? "text-red-600" : "text-navy-900"
                }`}
              >
                {new Intl.NumberFormat("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                }).format(price)}
              </span>
            </div>

            {/* CTA - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hidden md:flex mt-4 items-center gap-2 text-gold-400 text-sm font-medium group-hover:gap-3 transition-all duration-300"
            >
              <span>Découvrir</span>
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
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
