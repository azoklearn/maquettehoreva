"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WatchCard } from "@/components/ui/WatchCard";

// Données des montres
const watches = [
  {
    id: "girard-perregaux-monte-carlo-1965",
    brand: "GIRARD-PERREGAUX",
    model: "Monte-Carlo 1965",
    reference: "Édition limitée 250 ex.",
    price: 2790,
    image: "/Girard.jpeg",
    condition: "Excellent",
    year: 2014,
    category: "Classique",
    details: "Full set • Garantie 12 mois • Mouvement automatique manufacture",
  },
  {
    id: "rolex-submariner-kermit",
    brand: "ROLEX",
    model: "Submariner Kermit",
    reference: "16610LV",
    price: 12990,
    image: "/rolexx.jpeg",
    condition: "Excellent",
    year: 2007,
    category: "Sport",
    details: "Full set • Garantie 12 mois • Mouvement automatique",
    sold: true,
  },
  {
    id: "bell-ross-br03-92",
    brand: "BELL&ROSS",
    model: "BR03-92",
    reference: "Édition limitée 250 ex.",
    price: 3790,
    image: "/bell.webp",
    condition: "Excellent",
    year: 2000,
    category: "Sport",
    details: "Full set • Garantie 12 mois • Mouvement automatique",
  },
  {
    id: "bell-ross-123-commando",
    brand: "BELL&ROSS",
    model: "123 Commando",
    reference: "Millésime 2022",
    price: 1390,
    image: "/marine.jpeg",
    condition: "Excellent",
    year: 2022,
    category: "Sport",
    details: "Full set • Boîte et papiers • Garantie 12 mois • Mouvement automatique • Bracelet silicone neuf offert",
  },
  {
    id: "universal-geneve-gilt-shadow",
    brand: "UNIVERSAL GENÈVE",
    model: "Gilt Shadow",
    reference: "Millésime 60's",
    price: 740,
    image: "/gilt.jpeg",
    condition: "Bon",
    year: 1960,
    category: "Classique",
    details: "Garantie 12 mois • Mouvement automatique microrotor",
  },
  {
    id: "rado-true",
    brand: "RADO",
    model: "True",
    reference: "2025",
    price: 1740,
    image: "/rado.jpeg",
    condition: "Excellent",
    year: 2025,
    category: "Classique",
    details: "Garantie 36 mois • Mouvement automatique",
  },
  {
    id: "cartier-must",
    brand: "CARTIER",
    model: "Must de Cartier",
    reference: "Millésime 70's",
    price: 1540,
    image: "/must.jpeg",
    condition: "Bon",
    year: 1970,
    category: "Classique",
    details: "Vermeil • Garantie 12 mois • Mouvement quartz",
    sold: true,
  },
  {
    id: "piaget-altiplano-gold",
    brand: "PIAGET",
    model: "Altiplano OR 750/1000",
    reference: "Millésime 60's",
    price: 5790,
    image: "/piaget.jpeg",
    condition: "Excellent",
    year: 1960,
    category: "Classique",
    details: "Or 18k • Garantie 12 mois • Mouvement automatique micro-rotor 12P",
  },
  {
    id: "ulysse-nardin",
    brand: "ULYSSE NARDIN",
    model: "Classique",
    reference: "Vintage",
    price: 940,
    image: "/nardin.jpeg",
    condition: "Très bon",
    year: 1970,
    category: "Classique",
    details: "Garantie 12 mois • Mouvement remontage manuel",
  },
  {
    id: "longines-saint-imier-chrono",
    brand: "LONGINES",
    model: "Saint-Imier Chrono",
    reference: "Millésime 2010's",
    price: 1890,
    image: "/chrono.jpeg",
    condition: "Excellent",
    year: 2010,
    category: "Sport",
    details: "Boîte • Garantie 12 mois • Mouvement automatique chronographe",
  },
  {
    id: "rolex-gmt-master-ii-16710",
    brand: "ROLEX",
    model: "GMT Master II",
    reference: "16710",
    price: 11890,
    image: "/montre1.jpeg",
    condition: "Excellent",
    year: 1980,
    category: "Sport",
    details: "Boîte • 2 lunettes (Coke + Black) • Garantie 12 mois • Mouvement automatique",
  },
  {
    id: "heuer-daytona-chrono",
    brand: "HEUER",
    model: "Daytona Chrono",
    reference: "Millésime 70's",
    price: 3690,
    image: "/montre2.jpeg",
    condition: "Très bon",
    year: 1970,
    category: "Sport",
    details: "Garantie 12 mois • Mouvement automatique • Chronographe",
  },
  {
    id: "tudor-oyster-elegante",
    brand: "TUDOR",
    model: "Oyster Élégante",
    reference: "Millésime 70's",
    price: 1290,
    image: "/montre3.jpeg",
    condition: "Très bon",
    year: 1970,
    category: "Classique",
    details: "Garantie 12 mois • Mouvement remontage manuel",
  },
  {
    id: "tudor-ranger-ii-prince-oyster-date",
    brand: "TUDOR",
    model: "Ranger II Prince Oyster Date",
    reference: "Millésime 70's",
    price: 3690,
    image: "/montre4.jpeg",
    condition: "Très bon",
    year: 1970,
    category: "Sport",
    details: "Garantie 12 mois • Mouvement automatique",
  },
  {
    id: "longines-chrono-13zn",
    brand: "LONGINES",
    model: "Chrono 13ZN",
    reference: "Millésime 1946",
    price: 3990,
    image: "/montre5.jpeg",
    condition: "Très bon",
    year: 1946,
    category: "Classique",
    details: "Extrait d'archives • Garantie 12 mois • Mouvement 13ZN",
  },
  {
    id: "omega-seamaster-120-baby-proplof",
    brand: "OMEGA",
    model: "Seamaster 120 Baby Proplof",
    reference: "Millésime 70's",
    price: 4100,
    image: "/montre6.jpeg",
    condition: "Très bon",
    year: 1970,
    category: "Sport",
    details: "Garantie 12 mois • Mouvement automatique",
  },
  {
    id: "omega-dynamic-iii-3",
    brand: "OMEGA",
    model: "Dynamic III (3)",
    reference: "Millésime 1997",
    price: 1540,
    image: "/solana.jpeg",
    condition: "Très bon",
    year: 1997,
    category: "Sport",
    details: "Garantie 12 mois • Mouvement automatique • Cuir Omega rouge",
  },
  {
    id: "breitling-colt-ocean",
    brand: "BREITLING",
    model: "Colt Ocean",
    reference: "Millésime 2005",
    price: 1190,
    image: "/pec.jpeg",
    condition: "Très bon",
    year: 2005,
    category: "Sport",
    details: "Boîte, livret et gants Breitling • Garantie 12 mois • Mouvement automatique",
  },
  {
    id: "chaumet-mihewi",
    brand: "CHAUMET",
    model: "Mihewi",
    reference: "Millésime 2005",
    price: 480,
    image: "/montre7.jpeg",
    condition: "Bon",
    year: 2005,
    category: "Classique",
    details: "Boîte • Garantie 12 mois • Mouvement Quartz • Montre Dame",
  },
];

const brands = ["Toutes", "BELL&ROSS", "BREITLING", "CARTIER", "CHAUMET", "GIRARD-PERREGAUX", "HEUER", "LONGINES", "OMEGA", "PIAGET", "RADO", "ROLEX", "TUDOR", "ULYSSE NARDIN", "UNIVERSAL GENÈVE"];
const categories = ["Toutes", "Sport", "Classique"];
const conditions = ["Tous", "Comme neuf", "Excellent", "Très bon", "Bon"];

export default function MontresPage() {
  const [selectedBrand, setSelectedBrand] = useState("Toutes");
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [selectedCondition, setSelectedCondition] = useState("Tous");
  const [sortBy, setSortBy] = useState("featured");

  const filteredWatches = watches.filter((watch) => {
    if (selectedBrand !== "Toutes" && watch.brand !== selectedBrand) return false;
    if (selectedCategory !== "Toutes" && watch.category !== selectedCategory) return false;
    if (selectedCondition !== "Tous" && watch.condition !== selectedCondition) return false;
    return true;
  });

  const sortedWatches = [...filteredWatches].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "year-desc":
        return (b.year || 0) - (a.year || 0);
      default:
        return 0;
    }
  });

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
              NOTRE COLLECTION
            </span>
            <h1 className="font-display text-display-md md:text-display-lg font-semibold text-cream mt-4 mb-6">
              Montres de luxe
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Découvrez notre sélection de montres d&apos;exception, toutes authentifiées
              et garanties. Chaque pièce est soigneusement sélectionnée et préparée
              par nos experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-[72px] z-30 bg-cream border-b border-gray-200 py-4">
        <div className="container-luxury">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {/* Brand Filter */}
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm text-navy-900 focus:outline-none focus:border-gold-400"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand === "Toutes" ? "Toutes les marques" : brand}
                  </option>
                ))}
              </select>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm text-navy-900 focus:outline-none focus:border-gold-400"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "Toutes" ? "Toutes catégories" : category}
                  </option>
                ))}
              </select>

              {/* Condition Filter */}
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm text-navy-900 focus:outline-none focus:border-gold-400"
              >
                {conditions.map((condition) => (
                  <option key={condition} value={condition}>
                    {condition === "Tous" ? "Tous états" : condition}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-charcoal/60">Trier par :</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm text-navy-900 focus:outline-none focus:border-gold-400"
              >
                <option value="featured">En vedette</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="year-desc">Plus récent</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-charcoal/60 mt-4">
            {sortedWatches.length} montre{sortedWatches.length > 1 ? "s" : ""} disponible{sortedWatches.length > 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Watches Grid */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <AnimatePresence mode="wait">
            {sortedWatches.length > 0 ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
              >
                {sortedWatches.map((watch) => (
                  <WatchCard key={watch.id} {...watch} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-900 mb-2">
                  Aucune montre trouvée
                </h3>
                <p className="text-charcoal/60 mb-6">
                  Modifiez vos filtres pour voir plus de résultats.
                </p>
                <button
                  onClick={() => {
                    setSelectedBrand("Toutes");
                    setSelectedCategory("Toutes");
                    setSelectedCondition("Tous");
                  }}
                  className="btn-secondary"
                >
                  Réinitialiser les filtres
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-display-sm md:text-display-md font-semibold text-cream mb-6"
            >
              Vous ne trouvez pas votre bonheur ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-cream/70 text-lg mb-8"
            >
              Contactez-nous avec votre recherche. Notre réseau nous permet de sourcer
              les montres les plus rares pour vous.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="https://wa.me/33532189017?text=Bonjour, je recherche une montre spécifique..."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Nous contacter sur WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
