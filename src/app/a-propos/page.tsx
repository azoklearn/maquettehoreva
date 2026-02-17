"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Tradition",
    description: "Nous perpétuons l'art horloger avec respect et passion, en préservant les savoir-faire ancestraux.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "Nous combinons les méthodes traditionnelles avec les technologies modernes pour un service d'excellence.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Authenticité",
    description: "Chaque montre est rigoureusement vérifiée pour garantir son authenticité et sa qualité.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Transmission",
    description: "Nous ne vendons pas simplement des montres, nous transmettons des témoignages du temps.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container-luxury relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold-400 text-sm tracking-[0.2em] font-body">
                NOTRE HISTOIRE
              </span>
              <h1 className="font-display text-display-md md:text-display-lg font-semibold text-cream mt-4 mb-6">
                HOREVA, leader dans la montre d&apos;occasion
              </h1>
              <p className="text-cream/70 text-lg leading-relaxed mb-6">
                Horeva est une entreprise de Haute-Vienne, basée à Limoges (87),
                qui intervient partout en France. Dédiée à l&apos;univers de l&apos;horlogerie,
                à l&apos;achat de vos montres comme à la réparation.
              </p>
              <p className="text-cream/70 text-lg leading-relaxed">
                Notre vision est de combiner tradition et innovation pour offrir
                les meilleures montres et services à notre clientèle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="/luxe1.jpeg"
                  alt="HOREVA - L'art de l'horlogerie"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-gold-400/30 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Le Nom HOREVA */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-400 text-sm tracking-[0.2em] font-body">
                NOTRE NOM
              </span>
              <h2 className="font-display text-display-sm md:text-display-md font-semibold text-navy-900 mt-4 mb-8">
                HOR<span className="text-gold-400">EVA</span>
              </h2>
              
              <div className="bg-navy-900 text-cream p-8 md:p-12 rounded-sm mb-8">
                <p className="text-xl md:text-2xl font-display leading-relaxed">
                  Le nom <span className="text-gold-400 font-semibold">HOREVA</span> unit deux mondes :
                  <br />
                  <span className="text-gold-400">HOR</span>logerie et <span className="text-gold-400">EVA</span>sion.
                </p>
              </div>

              <p className="text-charcoal/70 text-lg leading-relaxed">
                C&apos;est bien plus qu&apos;un nom – c&apos;est une invitation à voyager dans le temps.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Le Fondateur */}
      <section className="section-padding bg-gray-50">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-sm overflow-hidden">
                <Image
                  src="/nath.jpeg"
                  alt="Nathan VAUZELLE - Fondateur HOREVA"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold-400 text-sm tracking-[0.2em] font-body">
                LE FONDATEUR
              </span>
              <h2 className="font-display text-display-sm md:text-display-md font-semibold text-navy-900 mt-4 mb-6">
                Nathan VAUZELLE
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                Née d&apos;une passion horlogère et fasciné par les diverses tocantes,
                Nathan VAUZELLE, fondateur HOREVA, a pris la décision de créer son univers.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Une vision claire : offrir un service d&apos;excellence dans l&apos;univers
                de la montre d&apos;occasion, en combinant expertise technique et
                passion authentique pour l&apos;horlogerie.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Le Logo */}
      <section className="section-padding bg-navy-900">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-gold-400 text-sm tracking-[0.2em] font-body">
                NOTRE SYMBOLE
              </span>
              <h2 className="font-display text-display-sm md:text-display-md font-semibold text-cream mt-4">
                Le sens de notre logo
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 relative">
                  <Image
                    src="/logo.webp"
                    alt="Logo HOREVA"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-cream/80 text-lg leading-relaxed mb-6">
                  Le <span className="text-gold-400 font-semibold">sablier</span> du logo
                  symbolise ce passage des heures, tandis que la{" "}
                  <span className="text-gold-400 font-semibold">montagne</span> en son sein
                  rappelle que certaines choses demeurent face aux tempêtes du temps.
                </p>
                <p className="text-cream/80 leading-relaxed">
                  Les montres traversent les époques, portent les traces du passé
                  et continuent d&apos;écrire leur histoire.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-400 text-sm tracking-[0.2em] font-body">
                NOTRE MISSION
              </span>
              <h2 className="font-display text-display-sm md:text-display-md font-semibold text-navy-900 mt-4 mb-8">
                Transmettre des témoignages du temps
              </h2>
              
              <div className="bg-gold-400/10 border-l-4 border-gold-400 p-8 text-left mb-8">
                <p className="text-navy-900 text-xl font-display leading-relaxed italic">
                  &ldquo;Chez HOREVA, nous ne vendons pas simplement des montres,
                  nous transmettons des témoignages du temps, des objets uniques
                  qui continueront d&apos;exister à travers les générations.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="section-padding bg-gray-50">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold-400 text-sm tracking-[0.2em] font-body">
              NOS VALEURS
            </span>
            <h2 className="font-display text-display-sm md:text-display-md font-semibold text-navy-900 mt-4">
              Ce qui nous guide
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 bg-white rounded-sm shadow-luxury"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy-900 flex items-center justify-center text-gold-400">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* L'Expérience HOREVA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1619134778706-7015533a6150?w=1920&auto=format&fit=crop"
            alt="L'expérience HOREVA"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/85" />
        </div>

        <div className="container-luxury relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-400 text-sm tracking-[0.2em] font-body"
            >
              L&apos;EXPÉRIENCE HOREVA
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-display-sm md:text-display-md font-semibold text-cream mt-4 mb-8"
            >
              Vivez un moment d&apos;exception
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8 mb-12"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-400/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-cream font-semibold mb-2">Cadre prestigieux</h3>
                <p className="text-cream/60 text-sm">Un espace dédié à l&apos;horlogerie de luxe</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-400/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-cream font-semibold mb-2">Boisson offerte</h3>
                <p className="text-cream/60 text-sm">Pour un moment de convivialité</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-400/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-cream font-semibold mb-2">Essais personnalisés</h3>
                <p className="text-cream/60 text-sm">Découvrez les plus belles pièces</p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-cream/80 text-lg mb-8"
            >
              Vivez l&apos;expérience d&apos;être reçu dans un cadre prestigieux,
              d&apos;avoir une boisson offerte et de pouvoir essayer les montres les plus belles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="https://calendly.com/contact-montrehoreva"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Réserver votre expérience
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-display-sm md:text-display-md font-semibold text-navy-900 mb-6"
            >
              Prêt à nous faire confiance ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-charcoal/70 text-lg mb-8"
            >
              Que vous souhaitiez acheter, vendre ou faire expertiser une montre,
              notre équipe est à votre disposition pour vous accompagner.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="https://calendly.com/contact-montrehoreva"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Prendre rendez-vous
              </Link>
              <Link href="/contact" className="btn-secondary">
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
