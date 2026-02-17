"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MentionsLegalesPage() {
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
              INFORMATIONS LÉGALES
            </span>
            <h1 className="font-display text-display-md md:text-display-lg font-semibold text-cream mt-4 mb-6">
              Mentions légales
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              En vigueur au : 16/11/2025
            </p>
            <p className="text-cream/70 text-base leading-relaxed mt-4">
              Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l&apos;Économie Numérique (LCEN), il est porté à la connaissance des utilisateurs du site montrehoreva.com les présentes mentions légales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-cream">
        <div className="container-luxury max-w-4xl">
          <div className="prose prose-lg prose-navy max-w-none">
            {/* Éditeur du site */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                1. Éditeur du site
              </h2>
              <div className="text-charcoal/70 space-y-2">
                <p><strong>Raison sociale :</strong> Horeva</p>
                <p><strong>Forme juridique :</strong> Entreprise Individuelle imposée au régime réel de l&apos;impôt sur le revenu</p>
                <p><strong>Dirigée par :</strong> M. Vauzelle Nathan</p>
                <p><strong>Siège social :</strong> 1 Place Jourdan, 87000 Limoges, France</p>
                <p><strong>Numéro SIREN / SIRET :</strong> 948 395 777 00030</p>
                <p><strong>Code APE :</strong> 4791A – 9525Z</p>
                <p><strong>TVA intracommunautaire :</strong> FR27948395777</p>
                <p><strong>Email :</strong> <a href="mailto:contact@montrehoreva.com" className="text-gold-600 hover:text-gold-700">contact@montrehoreva.com</a></p>
                <p><strong>Téléphone :</strong> <a href="tel:0532189017" className="text-gold-600 hover:text-gold-700">0532189017</a></p>
              </div>
            </motion.div>

            {/* Hébergement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                2. Hébergement
              </h2>
              <div className="text-charcoal/70">
                <p>Le site est hébergé par : <strong>Hostinger</strong></p>
              </div>
            </motion.div>

            {/* Directeur de publication */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                3. Directeur de la publication
              </h2>
              <div className="text-charcoal/70">
                <p>M. Vauzelle Nathan, en qualité de dirigeant de Horeva.</p>
              </div>
            </motion.div>

            {/* Propriété intellectuelle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                4. Propriété intellectuelle
              </h2>
              <div className="text-charcoal/70 space-y-4">
                <p>
                  L&apos;ensemble du contenu du site montrehoreva.com (textes, images, logos, vidéos, graphismes, structure, base de données…) est protégé par le droit d&apos;auteur et la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, imitation, adaptation ou exploitation partielle ou totale est strictement interdite, sauf autorisation écrite préalable de Horeva.
                </p>
              </div>
            </motion.div>

            {/* Activité du site */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                5. Activité du site
              </h2>
              <div className="text-charcoal/70 space-y-4">
                <p>Le site montrehoreva.com propose :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Achat de montres de seconde main, vintage et de luxe</li>
                  <li>Revente de montres authentifiées</li>
                  <li>Authentification de montres</li>
                  <li>Service de dépôt-vente</li>
                  <li>Conseils et expertise horlogère</li>
                </ul>
                <p className="mt-4">Horeva agit en tant que commerçant spécialisé dans l&apos;horlogerie d&apos;occasion.</p>
              </div>
            </motion.div>

            {/* Conditions d'utilisation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.47 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                6. Conditions d&apos;utilisation
              </h2>
              <div className="text-charcoal/70 space-y-4">
                <p>
                  L&apos;utilisation du site implique l&apos;acceptation pleine et entière des CGU et CGV.
                </p>
                <p>
                  Ces documents peuvent être consultés à tout moment sur le site.
                </p>
              </div>
            </motion.div>

            {/* Données personnelles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                7. Données personnelles
              </h2>
              <div className="text-charcoal/70 space-y-4">
                <p>
                  La collecte et le traitement des données personnelles sont encadrés par la Politique de Confidentialité conforme au RGPD.
                </p>
                <p>
                  Pour exercer vos droits (accès, rectification, suppression…) : <a href="mailto:contact@montrehoreva.com" className="text-gold-600 hover:text-gold-700">contact@montrehoreva.com</a>
                </p>
                <p>
                  La politique complète est disponible sur la page dédiée : <Link href="/confidentialite" className="text-gold-600 hover:text-gold-700">Politique de Confidentialité</Link>.
                </p>
              </div>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                8. Cookies
              </h2>
              <div className="text-charcoal/70 space-y-4">
                <p>
                  Le site utilise des cookies pour améliorer l&apos;expérience utilisateur, analyser le trafic et personnaliser les contenus/annonces.
                </p>
                <p>
                  Un bandeau d&apos;acceptation conforme RGPD permet de gérer les préférences.
                </p>
                <p>
                  La Politique Cookies est disponible sur la page dédiée : Cookies.
                </p>
              </div>
            </motion.div>

            {/* Responsabilité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                9. Limitation de responsabilité
              </h2>
              <div className="text-charcoal/70 space-y-4">
                <p>
                  Horeva EI s&apos;efforce de fournir des informations fiables et mises à jour, mais ne saurait être tenue responsable :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>des erreurs ou omissions</li>
                  <li>des interruptions, bugs ou indisponibilités</li>
                  <li>d&apos;un mauvais usage du site par l&apos;utilisateur</li>
                </ul>
                <p className="mt-4">
                  Les montres vendues sont authentifiées selon les standards professionnels ; cependant, des marges d&apos;erreur peuvent exister selon les cas particuliers.
                </p>
              </div>
            </motion.div>

            {/* Liens externes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                10. Liens externes
              </h2>
              <div className="text-charcoal/70 space-y-4">
                <p>
                  Le site peut contenir des liens vers des sites tiers.
                </p>
                <p>
                  Horeva n&apos;est pas responsable du contenu ni des pratiques de confidentialité de ces sites.
                </p>
              </div>
            </motion.div>

            {/* Droit applicable */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                11. Droit applicable
              </h2>
              <div className="text-charcoal/70 space-y-4">
                <p>
                  Les présentes mentions légales sont régies par le droit français.
                </p>
                <p>
                  En cas de litige, les tribunaux compétents sont ceux du ressort de Limoges, sauf dispositions légales contraires.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-navy-900/5 p-6 rounded-sm"
            >
              <h2 className="font-display text-xl font-semibold text-navy-900 mb-4">
                Questions ?
              </h2>
              <p className="text-charcoal/70 mb-4">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:contact@montrehoreva.com"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Nous contacter
                </a>
                <Link href="/" className="btn-secondary inline-flex items-center justify-center">
                  Retour à l&apos;accueil
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
