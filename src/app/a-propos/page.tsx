"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";

const values = [
  {
    title: "Confiance",
    description: "La relation de confiance avec nos clients est au cœur de notre métier. Chaque transaction est transparente et sécurisée.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Expertise",
    description: "Plus de 10 ans d'expérience dans l'horlogerie de luxe. Nos experts sont formés auprès des plus grandes maisons suisses.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Passion",
    description: "Chaque montre raconte une histoire. Notre passion pour l'horlogerie nous pousse à traiter chaque pièce avec le plus grand soin.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Transparence",
    description: "Prix justes, estimations honnêtes et communication claire. Nous croyons en une relation commerciale basée sur la transparence.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

const milestones = [
  { year: "2015", title: "Création de HOREVA", description: "Fondation de l'entreprise à Limoges avec une passion pour l'horlogerie." },
  { year: "2017", title: "Certification expertise", description: "Obtention des certifications pour l'authentification des grandes marques." },
  { year: "2020", title: "Expansion régionale", description: "Extension de notre zone d'intervention à 250 km autour de Limoges." },
  { year: "2023", title: "1000+ clients satisfaits", description: "Cap symbolique franchi avec une note moyenne de 4.9/5." },
  { year: "2025", title: "Nouvelle ère digitale", description: "Lancement de notre plateforme en ligne pour mieux vous servir." },
];

const stats = [
  { value: "10+", label: "Années d'expertise" },
  { value: "1000+", label: "Clients satisfaits" },
  { value: "500+", label: "Montres vendues" },
  { value: "4.9/5", label: "Note moyenne" },
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
                La passion de l&apos;horlogerie depuis 2015
              </h1>
              <p className="text-cream/70 text-lg leading-relaxed mb-8">
                HOREVA est née d&apos;une passion profonde pour les montres d&apos;exception.
                Depuis notre création à Limoges, nous accompagnons les amateurs
                d&apos;horlogerie dans l&apos;achat, la vente et l&apos;entretien de leurs
                garde-temps précieux.
              </p>
              <Link
                href="https://calendly.com/horeva"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Prendre rendez-vous
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&auto=format&fit=crop"
                  alt="Expert HOREVA"
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

      {/* Stats Section */}
      <section className="py-16 bg-cream border-b border-gray-100">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-semibold text-gold-400">
                  {stat.value}
                </p>
                <p className="text-charcoal/60 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              subtitle="NOTRE PARCOURS"
              title="Une aventure horlogère"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 prose prose-lg max-w-none"
            >
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Tout a commencé par une Omega Seamaster héritée de mon grand-père.
                Cette montre, avec ses mécanismes précis et son design intemporel,
                a éveillé en moi une fascination pour l&apos;art horloger qui ne m&apos;a
                jamais quitté.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Après des années passées à collectionner, étudier et restaurer des
                montres de prestige, j&apos;ai fondé HOREVA en 2015 avec une mission
                claire : rendre l&apos;horlogerie de luxe accessible à tous, tout en
                préservant les valeurs d&apos;authenticité et de qualité qui font la
                noblesse de cet art.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Aujourd&apos;hui, notre équipe partage cette même passion et s&apos;engage
                chaque jour à offrir un service d&apos;excellence à nos clients. Que
                vous cherchiez à acquérir votre première montre de luxe ou à vendre
                une pièce de collection, nous sommes là pour vous accompagner.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-luxury">
          <SectionTitle
            subtitle="NOS VALEURS"
            title="Ce qui nous guide"
            description="Quatre piliers fondamentaux qui définissent notre approche et notre engagement envers nos clients."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-3">
                  {value.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-luxury">
          <SectionTitle
            subtitle="NOTRE PARCOURS"
            title="Les étapes clés"
          />

          <div className="mt-16 max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-8 pb-12 border-l-2 border-gold-400/30 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-gold-400" />
                
                <span className="text-gold-400 font-display text-2xl font-semibold">
                  {milestone.year}
                </span>
                <h3 className="font-display text-xl font-semibold text-navy-900 mt-2 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-charcoal/70">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1920&auto=format&fit=crop"
          alt="L'équipe HOREVA"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container-luxury pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="font-display text-display-sm md:text-display-md font-semibold text-cream mb-4">
                Une équipe passionnée à votre service
              </h2>
              <p className="text-cream/70 mb-6">
                Notre équipe combine expertise technique et passion pour l&apos;horlogerie
                afin de vous offrir un service d&apos;exception.
              </p>
              <Link href="/contact" className="btn-primary">
                Rencontrez-nous
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
                href="https://calendly.com/horeva"
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
