"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";

const services = [
  {
    id: "achat",
    title: "Achat de montres",
    subtitle: "Vendez votre montre au meilleur prix",
    description:
      "Vous souhaitez vendre votre montre de luxe ? HOREVA vous propose une estimation gratuite et un rachat immédiat au prix le plus juste du marché. Notre expertise nous permet d'évaluer avec précision la valeur de votre pièce.",
    features: [
      "Estimation gratuite et sans engagement",
      "Paiement immédiat par virement ou espèces",
      "Déplacement gratuit dans un rayon de 250 km",
      "Discrétion et confidentialité assurées",
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
    title: "Vente de montres",
    subtitle: "Découvrez notre collection d'exception",
    description:
      "Notre sélection de montres de luxe de seconde main est rigoureusement contrôlée et authentifiée. Chaque pièce est accompagnée d'une garantie et d'un certificat d'authenticité pour votre tranquillité d'esprit.",
    features: [
      "Montres 100% authentiques et vérifiées",
      "Garantie de 12 mois sur toutes les pièces",
      "Certificat d'authenticité fourni",
      "Facilités de paiement disponibles",
    ],
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "estimation",
    title: "Estimation gratuite",
    subtitle: "Connaissez la valeur de votre montre",
    description:
      "Nos experts certifiés analysent votre montre selon les critères du marché : état général, authenticité, rareté, documentation... Vous recevez une estimation précise et transparente de la valeur de votre pièce.",
    features: [
      "Analyse complète par un expert certifié",
      "Estimation basée sur le marché actuel",
      "Rapport détaillé sur l'état de la montre",
      "Service 100% gratuit et sans engagement",
    ],
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "reparation",
    title: "Réparation & Entretien",
    subtitle: "Prenez soin de votre montre",
    description:
      "Nos horlogers qualifiés assurent l'entretien et la réparation de vos montres de luxe avec le plus grand soin. Du simple changement de pile à la révision complète, nous prenons en charge toutes vos demandes.",
    features: [
      "Horlogers certifiés et expérimentés",
      "Pièces détachées d'origine",
      "Devis gratuit avant intervention",
      "Garantie sur toutes les réparations",
    ],
    image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "01",
    title: "Contact",
    description: "Prenez rendez-vous par téléphone, WhatsApp ou via notre formulaire en ligne.",
  },
  {
    step: "02",
    title: "Rencontre",
    description: "Nous nous déplaçons chez vous ou vous accueillons pour examiner votre montre.",
  },
  {
    step: "03",
    title: "Estimation",
    description: "Notre expert évalue votre pièce et vous propose un prix juste et transparent.",
  },
  {
    step: "04",
    title: "Transaction",
    description: "Si l'offre vous convient, le paiement est effectué immédiatement.",
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
              De l&apos;achat à la réparation, HOREVA vous accompagne dans toutes vos
              démarches horlogères avec professionnalisme et passion.
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
                <p className="text-charcoal/70 leading-relaxed mb-8">
                  {service.description}
                </p>

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

      {/* Process Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-luxury">
          <SectionTitle
            subtitle="NOTRE PROCESSUS"
            title="Simple et transparent"
            description="Découvrez comment nous travaillons pour vous offrir le meilleur service possible."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gold-400/30" />
                )}

                <div className="text-center">
                  <span className="font-display text-5xl font-bold text-gold-400/30">
                    {item.step}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-cream mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
              Une question ? Un projet ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-charcoal/70 text-lg mb-8"
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
