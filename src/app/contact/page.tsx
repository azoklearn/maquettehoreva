"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous ajouteriez la logique d'envoi du formulaire
    console.log("Form submitted:", formData);
    alert("Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              CONTACT
            </span>
            <h1 className="font-display text-display-md md:text-display-lg font-semibold text-cream mt-4 mb-6">
              Parlons de votre projet
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Une question, une estimation, un rendez-vous ? Notre équipe est à
              votre disposition pour vous accompagner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-8">
                Contactez-nous directement
              </h2>

              {/* Quick Contact Buttons */}
              <div className="space-y-4 mb-12">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/33532189017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-sm border border-gray-100 hover:border-gold-400/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-navy-900">WhatsApp</p>
                    <p className="text-sm text-charcoal/60">Réponse rapide garantie</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-charcoal/40 group-hover:text-gold-400 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Phone */}
                <a
                  href="tel:0532189017"
                  className="flex items-center gap-4 p-4 bg-white rounded-sm border border-gray-100 hover:border-gold-400/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center text-gold-400 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-navy-900">05 32 18 90 17</p>
                    <p className="text-sm text-charcoal/60">Du lundi au samedi, 9h-19h</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-charcoal/40 group-hover:text-gold-400 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/horeva.officiel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-sm border border-gray-100 hover:border-gold-400/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-navy-900">Instagram</p>
                    <p className="text-sm text-charcoal/60">@horeva</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-charcoal/40 group-hover:text-gold-400 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Calendly */}
                <a
                  href="https://calendly.com/contact-montrehoreva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-sm border border-gray-100 hover:border-gold-400/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-navy-900 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-navy-900">Prendre rendez-vous</p>
                    <p className="text-sm text-charcoal/60">Réservez un créneau en ligne</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-charcoal/40 group-hover:text-gold-400 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-navy-900 mb-2">Email</h3>
                  <a
                    href="mailto:contact@montrehoreva.com"
                    className="text-charcoal/70 hover:text-gold-400 transition-colors"
                  >
                    contact@montrehoreva.com
                  </a>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-navy-900 mb-2">Zone d&apos;intervention</h3>
                  <p className="text-charcoal/70">
                    Limoges et toute la région dans un rayon de 250 km.
                    <br />
                    Déplacement gratuit pour toute estimation.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-navy-900 mb-2">Horaires</h3>
                  <p className="text-charcoal/70">
                    Du lundi au samedi : 9h00 - 19h00
                    <br />
                    Dimanche : Sur rendez-vous
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-luxury">
                <h2 className="font-display text-2xl font-semibold text-navy-900 mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-charcoal/60 mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold-400 transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold-400 transition-colors"
                        placeholder="jean@exemple.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold-400 transition-colors"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-navy-900 mb-2">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold-400 transition-colors bg-white"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="achat">Achat d&apos;une montre</option>
                        <option value="vente">Vente d&apos;une montre</option>
                        <option value="estimation">Estimation gratuite</option>
                        <option value="reparation">Réparation / Entretien</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Envoyer le message
                  </button>

                  <p className="text-xs text-charcoal/50 text-center">
                    En soumettant ce formulaire, vous acceptez notre{" "}
                    <Link href="/confidentialite" className="underline hover:text-gold-400">
                      politique de confidentialité
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="bg-navy-900 py-20">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-display-sm font-semibold text-cream mb-4"
            >
              Nous intervenons sur toute la région
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-cream/70 mb-8"
            >
              Limoges, Brive, Angoulême, Périgueux, Poitiers, Clermont-Ferrand...
              Nous nous déplaçons gratuitement dans un rayon de 250 km pour toute estimation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {["Limoges", "Brive", "Angoulême", "Périgueux", "Poitiers", "Guéret", "Tulle", "Châteauroux"].map(
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
          </div>
        </div>
      </section>
    </>
  );
}
