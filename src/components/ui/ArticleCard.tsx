"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  index?: number;
}

export function ArticleCard({
  slug,
  title,
  excerpt,
  image,
  category,
  date,
  readTime,
  index = 0,
}: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/conseils/${slug}`} className="block">
        <div className="card-premium overflow-hidden">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            
            {/* Category Badge */}
            <span className="absolute top-4 left-4 px-3 py-1 bg-gold-400 text-navy-900 text-xs font-medium tracking-wide">
              {category}
            </span>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-3">
              <span>{date}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>

            {/* Title */}
            <h3 className="font-display text-xl font-semibold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-charcoal/70 leading-relaxed line-clamp-2">
              {excerpt}
            </p>

            {/* Read More */}
            <div className="mt-4 flex items-center gap-2 text-gold-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
              <span>Lire l&apos;article</span>
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
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
