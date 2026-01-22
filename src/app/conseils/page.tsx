"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/ui/ArticleCard";

// Données des articles
const articles = [
  {
    slug: "comment-authentifier-rolex",
    title: "Comment authentifier une Rolex : le guide complet",
    excerpt: "Découvrez les points clés à vérifier pour vous assurer de l'authenticité d'une Rolex avant l'achat. Nos experts partagent leurs secrets.",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&auto=format&fit=crop",
    category: "Guide",
    date: "15 janvier 2026",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "entretien-montre-luxe",
    title: "Entretenir sa montre de luxe : les gestes essentiels",
    excerpt: "Une montre de luxe nécessite un entretien régulier pour conserver sa valeur et son fonctionnement optimal. Voici nos conseils d'experts.",
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&auto=format&fit=crop",
    category: "Entretien",
    date: "10 janvier 2026",
    readTime: "6 min",
  },
  {
    slug: "investir-montres-luxe-2026",
    title: "Investir dans les montres de luxe en 2026 : opportunités et pièges",
    excerpt: "Le marché de la montre de luxe d'occasion continue de croître. Quelles sont les meilleures opportunités d'investissement cette année ?",
    image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&auto=format&fit=crop",
    category: "Investissement",
    date: "5 janvier 2026",
    readTime: "10 min",
  },
  {
    slug: "histoire-rolex-submariner",
    title: "L'histoire de la Rolex Submariner : une icône de l'horlogerie",
    excerpt: "Plongez dans l'histoire fascinante de la Submariner, montre de plongée devenue un symbole universel de réussite et d'élégance.",
    image: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&auto=format&fit=crop",
    category: "Histoire",
    date: "28 décembre 2025",
    readTime: "12 min",
  },
  {
    slug: "omega-vs-rolex",
    title: "Omega vs Rolex : quelle marque choisir ?",
    excerpt: "Deux géants de l'horlogerie suisse face à face. Nous comparons les deux marques pour vous aider à faire votre choix.",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop",
    category: "Comparatif",
    date: "20 décembre 2025",
    readTime: "9 min",
  },
  {
    slug: "vendre-montre-luxe-conseils",
    title: "Vendre sa montre de luxe : nos conseils pour obtenir le meilleur prix",
    excerpt: "Vous souhaitez vendre votre montre de luxe ? Découvrez nos conseils pour maximiser sa valeur et trouver le bon acheteur.",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&auto=format&fit=crop",
    category: "Guide",
    date: "15 décembre 2025",
    readTime: "7 min",
  },
];

const categories = ["Tous", "Guide", "Entretien", "Investissement", "Histoire", "Comparatif"];

export default function ConseilsPage() {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-navy-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container-luxury relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-gold-400 text-sm tracking-[0.2em] font-body">
              CONSEILS & ACTUALITÉS
            </span>
            <h1 className="font-display text-display-md md:text-display-lg font-semibold text-cream mt-4 mb-6">
              Le blog horloger
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Guides, conseils et actualités du monde de l&apos;horlogerie de luxe.
              Nos experts partagent leur passion et leur expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-cream border-b border-gray-200 py-4">
        <div className="container-luxury">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm text-charcoal/70 hover:text-gold-400 whitespace-nowrap transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="section-padding bg-cream">
          <div className="container-luxury">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/conseils/${featuredArticle.slug}`}>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-sm overflow-hidden">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-gold-400 text-navy-900 text-xs font-medium tracking-wide">
                      À LA UNE
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:pl-8">
                    <span className="text-gold-400 text-sm tracking-[0.15em] font-body">
                      {featuredArticle.category}
                    </span>
                    <h2 className="font-display text-display-sm md:text-display-md font-semibold text-navy-900 mt-2 mb-4 group-hover:text-gold-600 transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-charcoal/70 leading-relaxed mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-charcoal/60">
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <span>{featuredArticle.readTime} de lecture</span>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-gold-400 font-medium group-hover:gap-3 transition-all duration-300">
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
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-luxury">
          <h2 className="font-display text-2xl font-semibold text-navy-900 mb-8">
            Derniers articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article, index) => (
              <ArticleCard key={article.slug} {...article} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-400 text-sm tracking-[0.2em] font-body"
            >
              NEWSLETTER
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-display-sm md:text-display-md font-semibold text-cream mt-4 mb-6"
            >
              Restez informé
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-cream/70 mb-8"
            >
              Recevez nos derniers articles, nos nouvelles arrivées et nos offres
              exclusives directement dans votre boîte mail.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-6 py-4 bg-white/10 border border-cream/20 rounded-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold-400"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                S&apos;inscrire
              </button>
            </motion.form>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-cream/40 text-xs mt-4"
            >
              En vous inscrivant, vous acceptez notre politique de confidentialité.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}
