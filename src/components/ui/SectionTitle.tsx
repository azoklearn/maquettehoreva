"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionTitleProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-block text-sm tracking-[0.2em] font-body font-medium mb-4 ${
            light ? "text-gold-400" : "text-gold-400"
          }`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-display text-display-sm md:text-display-md lg:text-display-lg font-semibold ${
          light ? "text-cream" : "text-navy-900"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-6 text-lg leading-relaxed ${
            light ? "text-cream/70" : "text-charcoal/70"
          }`}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: align === "center" ? "4rem" : "4rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`h-0.5 bg-gradient-gold mt-6 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
