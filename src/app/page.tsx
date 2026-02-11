"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { WatchCard } from "@/components/ui/WatchCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

// Données des montres en vedette
const featuredWatches = [
  {
    id: "girard-perregaux-monte-carlo-1965",
    brand: "GIRARD-PERREGAUX",
    model: "Monte-Carlo 1965",
    reference: "Édition limitée 250 ex.",
    price: 2790,
    image: "/Girard.jpeg",
    condition: "Excellent",
    year: 2014,
    featured: true,
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
    featured: true,
  },
];

// Données des témoignages
const testimonials = [
  {
    name: "Laurent M.",
    location: "Limoges",
    rating: 5,
    text: "Service impeccable ! J'ai vendu ma Rolex Datejust en toute confiance. L'estimation était juste et le paiement immédiat. Je recommande vivement HOREVA.",
    date: "Décembre 2025",
  },
  {
    name: "Sophie D.",
    location: "Brive-la-Gaillarde",
    rating: 5,
    text: "J'ai trouvé l'Omega de mes rêves chez HOREVA. L'équipe est passionnée et de bon conseil. La montre était dans un état irréprochable.",
    date: "Novembre 2025",
  },
  {
    name: "Pierre B.",
    location: "Angoulême",
    rating: 5,
    text: "Ma montre de famille réparée avec un soin exceptionnel. HOREVA respecte vraiment l'horlogerie et ses clients. Merci pour votre expertise !",
    date: "Octobre 2025",
  },
];

// Services
const services = [
  {
    title: "Achat",
    description: "Nous rachetons vos montres de luxe au meilleur prix. Estimation gratuite et paiement immédiat.",
    href: "/services#achat",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Vente",
    description: "Découvrez notre sélection de montres de prestige, toutes authentifiées et garanties.",
    href: "/services#vente",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Estimation",
    description: "Obtenez une estimation précise et gratuite de votre montre par nos experts certifiés.",
    href: "/services#estimation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Réparation",
    description: "Nos horlogers qualifiés prennent soin de vos pièces avec le plus grand savoir-faire.",
    href: "/services#reparation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="HOREVA - Montres de luxe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-900/80" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute top-1/4 -left-20 w-96 h-96 border border-gold-400 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ delay: 2.7, duration: 1 }}
            className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] border border-gold-400 rounded-full"
          />
        </div>

        {/* Content */}
        <div className="relative container-luxury text-center text-cream z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <span className="inline-block text-gold-400 text-sm tracking-[0.3em] font-body mb-6">
              LIMOGES & RÉGION • DEPUIS 2015
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="font-display text-display-md md:text-display-lg lg:text-display-xl font-semibold mb-6"
          >
            L&apos;Excellence
            <br />
            <span className="text-gold-400">Horlogère</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-cream/80 mb-10"
          >
            Spécialiste de l&apos;achat, la vente, l&apos;estimation et la réparation
            de montres de luxe de seconde main. Une expertise au service de votre passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8 }}
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
            <Link href="/montres" className="btn-outline-light">
              Découvrir nos montres
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-gold-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <SectionTitle
            subtitle="NOS SERVICES"
            title="Une expertise complète"
            description="Que vous souhaitiez acheter, vendre ou faire réparer votre montre de luxe, HOREVA vous accompagne avec professionnalisme et passion."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Watches Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-luxury">
          <SectionTitle
            subtitle="COLLECTION"
            title="Montres en vedette"
            description="Découvrez notre sélection de pièces d'exception, soigneusement authentifiées et préparées."
            light
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-16">
            {featuredWatches.map((watch) => (
              <WatchCard key={watch.id} {...watch} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/montres" className="btn-secondary">
              Voir toutes nos montres
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-cream relative overflow-hidden">
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
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&auto=format&fit=crop"
                  alt="Expert horloger HOREVA"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-navy-900 text-cream p-8 rounded-sm shadow-luxury"
              >
                <p className="font-display text-4xl font-semibold text-gold-400">10+</p>
                <p className="text-sm text-cream/70 mt-1">années d&apos;expertise</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold-400 text-sm tracking-[0.2em] font-body">
                POURQUOI NOUS CHOISIR
              </span>
              <h2 className="font-display text-display-sm md:text-display-md font-semibold text-navy-900 mt-4 mb-6">
                La confiance au cœur de notre métier
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                Chez HOREVA, chaque montre raconte une histoire. Notre mission est de
                vous accompagner dans l&apos;acquisition ou la transmission de ces pièces
                d&apos;exception avec transparence et expertise.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Expertise certifiée",
                    description: "Nos horlogers sont formés auprès des plus grandes maisons suisses.",
                  },
                  {
                    title: "Authenticité garantie",
                    description: "Chaque montre est rigoureusement vérifiée et certifiée authentique.",
                  },
                  {
                    title: "Prix transparents",
                    description: "Nos estimations sont justes et alignées sur le marché.",
                  },
                  {
                    title: "Service personnalisé",
                    description: "Un accompagnement sur-mesure pour chaque client.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-gold-400"
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
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-navy-900">
                        {item.title}
                      </h3>
                      <p className="text-charcoal/70 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-luxury">
          <SectionTitle
            subtitle="TÉMOIGNAGES"
            title="Ils nous font confiance"
            description="Découvrez les retours de nos clients satisfaits à travers toute la région."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Zone Géographique Section */}
      <section className="section-padding bg-navy-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A24D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-luxury relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-gold-400 text-sm tracking-[0.2em] font-body mb-4"
            >
              ZONE D&apos;INTERVENTION
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-display-sm md:text-display-md font-semibold text-cream mb-6"
            >
              Limoges et 250 km aux alentours
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-cream/70 text-lg mb-8"
            >
              Nous nous déplaçons gratuitement pour toute estimation ou transaction
              dans un rayon de 250 km autour de Limoges. Angoulême, Brive, Périgueux,
              Poitiers, Clermont-Ferrand... nous venons à vous.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {["Limoges", "Brive", "Angoulême", "Périgueux", "Poitiers", "Guéret", "Tulle"].map(
                (city) => (
                  <span
                    key={city}
                    className="px-4 py-2 border border-gold-400/30 text-cream/80 text-sm rounded-sm"
                  >
                    {city}
                  </span>
                )
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Link
                href="https://calendly.com/horeva"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Planifier un déplacement
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1619134778706-7015533a6150?w=1920&auto=format&fit=crop"
            alt="Montre de luxe"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/85" />
        </div>

        <div className="container-luxury relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-display-sm md:text-display-md font-semibold text-cream mb-6"
            >
              Prêt à faire estimer votre montre ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-cream/70 text-lg mb-8"
            >
              Contactez-nous pour une estimation gratuite et sans engagement.
              Notre équipe d&apos;experts est à votre disposition.
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
              <Link href="/contact" className="btn-outline-light">
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
