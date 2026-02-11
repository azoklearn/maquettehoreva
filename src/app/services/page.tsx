"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "reparation",
    title: "Services de réparation",
    subtitle: "Expertise et savoir-faire",
    description:
      "Confiez votre montre à Horeva pour un service de réparation professionnel, réalisé par des horlogers qualifiés et compétents garantissant la meilleure qualité.",
    content: "Toutes marques, Rolex, Omega, Tudor, Patek, AP, Seiko, Tissot, Cartier…",
    highlight: "Un détail qui change tout : Chaque réparation est garantie 12 mois.",
    features: [
      "Aucune intervention sans votre accord préalable du devis",
      "Dépôt possible directement à Limoges ou envoi par courrier",
      "Grille tarifaire transparente disponible",
      "Garantie 12 mois sur chaque réparation",
    ],
    image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "rachat",
    title: "Rachat de montres & Dépôt-vente",
    subtitle: "Deux solutions adaptées à vos besoins",
    description:
      "Chez HOREVA, nous accompagnons les propriétaires de montres de prestige qui souhaitent vendre leur garde-temps en toute sérénité. Nous proposons deux solutions adaptées à vos besoins : le rachat immédiat ou le dépôt-vente.",
    features: [
      "Rachat immédiat : offre claire et transparente, paiement rapide et sécurisé",
      "Dépôt-vente : valorisez votre montre au meilleur prix",
      "Estimation basée sur l'état, la rareté et la valeur réelle du marché",
      "Vous conservez la propriété jusqu'à la vente",
    ],
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "vente",
    title: "Vente de montres de luxe",
    subtitle: "Sélection exigeante et authentique",
    description:
      "HOREVA sélectionne avec exigence des montres de luxe et vintage, choisies pour leur histoire, leur qualité et leur authenticité. Chaque pièce proposée à la vente est minutieusement contrôlée afin de garantir à nos clients une expérience d'achat irréprochable.",
    content: "Nous privilégions une approche humaine et personnalisée, que ce soit en boutique ou à distance, pour vous aider à trouver la montre qui vous correspond, celle qui accompagnera votre histoire.",
    features: [
      "Sélection rigoureuse de montres de luxe et vintage",
      "Contrôle minutieux de chaque pièce",
      "Approche humaine et personnalisée",
      "Service en boutique ou à distance",
    ],
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "authentification",
    title: "Authentification & expertise",
    subtitle: "L'authenticité au cœur de notre ADN",
    description:
      "Chaque montre fait l'objet d'une expertise rigoureuse : vérification du mouvement, du boîtier, du cadran, des numéros de série et de la cohérence historique des composants.",
    content: "Cette démarche garantit à nos clients une traçabilité claire et une confiance totale, qu'il s'agisse d'un achat, d'une vente, d'un dépôt-vente ou d'un simple contrôle.",
    highlight: "Faites authentifier votre montre pour 35€ et repartez avec votre attestation unique.",
    features: [
      "Vérification complète du mouvement et du boîtier",
      "Contrôle du cadran et des numéros de série",
      "Analyse de la cohérence historique des composants",
      "Traçabilité claire et confiance totale",
    ],
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "stockage",
    title: "Stockage sécurisé & assurance",
    subtitle: "Voyagez l'esprit léger",
    description:
      "Vous partez en vacances ou souhaitez simplement protéger vos montres de valeur ? HOREVA propose un service de stockage sécurisé, spécialement conçu pour les garde-temps de prestige.",
    content: "Vos montres sont conservées dans des conditions optimales, au sein d'un espace sécurisé et assurées pendant toute la durée du stockage. Une solution discrète, fiable et rassurante pour voyager l'esprit léger, en sachant que vos pièces sont entre de bonnes mains.",
    highlight: "À partir de 8€ par semaine",
    features: [
      "Conditions de conservation optimales",
      "Espace hautement sécurisé",
      "Assurance pendant toute la durée du stockage",
      "Solution discrète, fiable et rassurante",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container-luxury relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-gold-400 text-sm tracking-[0.2em] font-body">
              NOS SERVICES
            </span>
            <h1 className="font-display text-display-md md:text-display-lg font-semibold text-cream mt-4 mb-6">
              Une expertise complète à votre service
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              De la réparation à l&apos;authentification, du rachat au stockage sécurisé,
              HOREVA vous accompagne dans toutes vos démarches horlogères avec
              professionnalisme et passion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? "bg-cream" : "bg-gray-50"}`}
        >
          <div className="container-luxury">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Icon Badge */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-navy-900 rounded-sm flex items-center justify-center text-gold-400 shadow-luxury">
                  {service.icon}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <span className="text-gold-400 text-sm tracking-[0.2em] font-body">
                  {service.subtitle}
                </span>
                <h2 className="font-display text-display-sm md:text-display-md font-semibold text-navy-900 mt-2 mb-6">
                  {service.title}
                </h2>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  {service.description}
                </p>

                {service.content && (
                  <p className="text-charcoal/70 leading-relaxed mb-4">
                    {service.content}
                  </p>
                )}

                {service.highlight && (
                  <div className="bg-gold-400/10 border-l-4 border-gold-400 p-4 mb-6">
                    <p className="text-navy-900 font-semibold">
                      {service.highlight}
                    </p>
                  </div>
                )}

                <ul className="space-y-4 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-gold-400 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-charcoal/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://calendly.com/horeva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Prendre rendez-vous
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-display-sm md:text-display-md font-semibold text-cream mb-6"
            >
              Une question ? Un projet ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-cream/70 text-lg mb-8"
            >
              Notre équipe est à votre disposition pour répondre à toutes vos questions
              et vous accompagner dans vos projets horlogers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="tel:0532189017" className="btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                05 32 18 90 17
              </a>
              <Link href="/contact" className="btn-secondary">
                Formulaire de contact
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
