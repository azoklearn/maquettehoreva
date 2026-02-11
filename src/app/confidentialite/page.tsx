"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ConfidentialitePage() {
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
              RGPD
            </span>
            <h1 className="font-display text-display-md md:text-display-lg font-semibold text-cream mt-4 mb-6">
              Politique de confidentialité
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Dernière mise à jour : 16/11/2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-charcoal/70 leading-relaxed mb-4">
                La présente Politique de Confidentialité explique comment <strong className="text-navy-900">Horeva</strong>, 
                entreprise individuelle imposée au régime réel à l&apos;impôt sur le revenu et dirigée par M. Vauzelle Nathan, 
                dont le siège social est situé 1 Place Jourdan, 87000 Limoges, collecte, utilise, protège et partage vos 
                données personnelles dans le cadre de l&apos;utilisation du site montrehoreva.com et de ses services :
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                {[
                  "achat et revente de montres vintage et de luxe,",
                  "authentification,",
                  "dépôt-vente,",
                  "utilisation de la boutique en ligne WooCommerce.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-charcoal/70">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gold-400/10 border-l-4 border-gold-400 p-4">
                <p className="text-navy-900 font-semibold">
                  Horeva s&apos;engage à respecter le RGPD et la loi Informatique et Libertés.
                </p>
              </div>
            </motion.div>

            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                1. Responsable du traitement
              </h2>
              <div className="bg-gray-50 p-6 rounded-sm">
                <p className="text-charcoal/70 mb-2"><strong className="text-navy-900">Horeva</strong></p>
                <p className="text-charcoal/70 mb-2">Dirigé par : M. Vauzelle Nathan</p>
                <p className="text-charcoal/70 mb-2">Adresse : 1 Place Jourdan, 87000 Limoges</p>
                <p className="text-charcoal/70 mb-2">E-mail : contact@montrehoreva.com</p>
                <p className="text-charcoal/70">Téléphone : 05 32 18 90 17</p>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                2. Données collectées
              </h2>

              <h3 className="font-semibold text-navy-900 mb-3">2.1. Données fournies par l&apos;utilisateur</h3>
              <p className="text-charcoal/70 mb-3">
                Collectées lors de la création de compte, commande, dépôt-vente ou demande d&apos;authentification :
              </p>
              <ul className="space-y-1 ml-4 mb-6 text-charcoal/70 text-sm">
                <li>• Nom, prénom</li>
                <li>• Adresse postale et de livraison</li>
                <li>• Adresse e-mail</li>
                <li>• Numéro de téléphone</li>
                <li>• Informations de paiement (non conservées : gérées par Stripe)</li>
                <li>• Informations sur les produits confiés (photos, description, certificats)</li>
                <li>• Factures et documents liés aux achats/ventes</li>
                <li>• Échanges avec le support client</li>
              </ul>

              <h3 className="font-semibold text-navy-900 mb-3">2.2. Données collectées automatiquement via WooCommerce</h3>
              <p className="text-charcoal/70 mb-3">WooCommerce collecte automatiquement :</p>
              <ul className="space-y-1 ml-4 mb-6 text-charcoal/70 text-sm">
                <li>• Adresse IP</li>
                <li>• Type de navigateur et appareil</li>
                <li>• Pages vues, produits consultés</li>
                <li>• Panier, sessions, jetons de sécurité</li>
                <li>• Cookies WooCommerce nécessaires</li>
              </ul>

              <h3 className="font-semibold text-navy-900 mb-3">2.3. Données liées aux transactions</h3>
              <ul className="space-y-1 ml-4 text-charcoal/70 text-sm">
                <li>• Historique d&apos;achats et ventes</li>
                <li>• Historique des dépôts-vente</li>
                <li>• Résultats d&apos;authentification des montres</li>
                <li>• Preuves pour la lutte contre la fraude</li>
              </ul>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                3. Finalités de traitement
              </h2>
              <p className="text-charcoal/70 mb-4">Les données sont utilisées pour :</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Gestion des comptes WooCommerce",
                  "Traitement et livraison des commandes",
                  "Paiement sécurisé via Stripe",
                  "Gestion du dépôt-vente",
                  "Authentification des montres",
                  "Gestion du support client",
                  "Facturation et obligations légales",
                  "Envoi d'e-mails transactionnels",
                  "Envoi de newsletters (si consentement)",
                  "Amélioration du site",
                  "Sécurisation du site",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-charcoal/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                4. Base légale
              </h2>
              <div className="space-y-3">
                {[
                  { title: "Exécution d'un contrat", desc: "commande, paiement, dépôt-vente, authentification" },
                  { title: "Intérêt légitime", desc: "prévention fraude, sécurité, amélioration du site" },
                  { title: "Obligation légale", desc: "comptabilité, obligations fiscales" },
                  { title: "Consentement", desc: "newsletters, cookies non essentiels, publicités" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-sm">
                    <span className="text-gold-400 font-semibold">{i + 1}.</span>
                    <div>
                      <span className="font-semibold text-navy-900">{item.title}</span>
                      <span className="text-charcoal/70"> : {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                5. Partage des données
              </h2>
              <p className="text-charcoal/70 mb-4">Vos données peuvent être transmises à :</p>

              <div className="space-y-4">
                <div className="border-l-4 border-gold-400 pl-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Prestataires WooCommerce</h3>
                  <p className="text-charcoal/70 text-sm">Hébergeur du site, développeurs d&apos;extensions</p>
                </div>
                <div className="border-l-4 border-gold-400 pl-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Paiements sécurisés</h3>
                  <p className="text-charcoal/70 text-sm">Stripe, virements bancaires, Klarna</p>
                </div>
                <div className="border-l-4 border-gold-400 pl-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Services d&apos;expédition</h3>
                  <p className="text-charcoal/70 text-sm">Colissimo, Chronopost, autres transporteurs</p>
                </div>
                <div className="border-l-4 border-gold-400 pl-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Partenaires d&apos;authentification</h3>
                  <p className="text-charcoal/70 text-sm">Experts spécialisés dans la vérification de montres de luxe</p>
                </div>
                <div className="border-l-4 border-gold-400 pl-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Services d&apos;analyse et marketing</h3>
                  <p className="text-charcoal/70 text-sm">Google Analytics, Facebook/Meta, Mailing</p>
                </div>
                <div className="border-l-4 border-gold-400 pl-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Autorités légales</h3>
                  <p className="text-charcoal/70 text-sm">En cas d&apos;exigence administrative, douanière ou judiciaire</p>
                </div>
              </div>

              <div className="bg-navy-900 p-4 rounded-sm mt-6">
                <p className="text-cream font-semibold">
                  Horeva ne revend jamais les données personnelles.
                </p>
              </div>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                6. Conservation des données
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy-900 text-cream">
                      <th className="p-3 text-left">Type de données</th>
                      <th className="p-3 text-left">Durée de conservation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-gray-50">
                      <td className="p-3 text-charcoal/70">Compte client</td>
                      <td className="p-3 text-charcoal/70">Jusqu&apos;à suppression par le client</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-charcoal/70">Commandes</td>
                      <td className="p-3 text-charcoal/70">10 ans (obligation comptable)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 text-charcoal/70">Données de dépôt-vente</td>
                      <td className="p-3 text-charcoal/70">Jusqu&apos;à 5 ans</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-charcoal/70">Cookies</td>
                      <td className="p-3 text-charcoal/70">13 à 24 mois</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 text-charcoal/70">Emails marketing</td>
                      <td className="p-3 text-charcoal/70">Jusqu&apos;au retrait du consentement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Section 7 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                7. Sécurité des données
              </h2>
              <p className="text-charcoal/70 mb-4">Horeva met en place :</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Chiffrement SSL/HTTPS",
                  "Accès limité aux données",
                  "Protection WooCommerce (jetons, sécurité API)",
                  "Pare-feu, anti-spam et anti-fraude",
                  "Stockage sécurisé de l'hébergement",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-charcoal/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Section 8 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                8. Cookies (WooCommerce)
              </h2>
              <p className="text-charcoal/70 mb-4">Le site utilise :</p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-sm">
                  <h3 className="font-semibold text-navy-900 mb-2">Cookies techniques WooCommerce (obligatoires)</h3>
                  <ul className="space-y-1 text-charcoal/70 text-sm">
                    <li>• Gestion du panier</li>
                    <li>• Connexion compte</li>
                    <li>• Sessions utilisateur</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-sm">
                  <h3 className="font-semibold text-navy-900 mb-2">Cookies analytiques et marketing (si consentement)</h3>
                  <ul className="space-y-1 text-charcoal/70 text-sm">
                    <li>• Google Analytics</li>
                    <li>• Facebook Pixel</li>
                    <li>• Cookies publicitaires</li>
                  </ul>
                </div>
              </div>

              <p className="text-charcoal/70 mt-4 text-sm">
                Un bandeau conforme RGPD permet d&apos;accepter ou refuser les cookies non essentiels.
              </p>
            </motion.div>

            {/* Section 9 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                9. Vos droits (RGPD)
              </h2>
              <p className="text-charcoal/70 mb-4">Vous disposez de :</p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {[
                  "Droit d'accès",
                  "Droit de rectification",
                  "Droit d'effacement",
                  "Droit d'opposition",
                  "Droit à la limitation",
                  "Droit à la portabilité",
                  "Droit de retirer le consentement",
                  "Droit de réclamation à la CNIL",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-charcoal/70">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-navy-900 p-6 rounded-sm">
                <h3 className="text-gold-400 font-semibold mb-3">Pour exercer vos droits :</h3>
                <p className="text-cream/80 mb-2">
                  <strong className="text-cream">Email :</strong> contact@montrehoreva.com
                </p>
                <p className="text-cream/80 mb-2">
                  <strong className="text-cream">Téléphone :</strong> 05 32 18 90 17
                </p>
                <p className="text-cream/80">
                  <strong className="text-cream">Adresse :</strong> Horeva – 1 Place Jourdan, 87000 Limoges
                </p>
              </div>
            </motion.div>

            {/* Section 10 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                10. Transfert hors UE
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                Les services tels que Google, Meta ou certains prestataires WooCommerce peuvent entraîner des transferts hors UE.
                Nous nous assurons qu&apos;ils respectent les clauses contractuelles types imposées par l&apos;UE.
              </p>
            </motion.div>

            {/* Section 11 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                11. Modifications de la politique
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                Cette Politique peut être mise à jour. La date de la dernière modification sera indiquée en haut de la page.
              </p>
            </motion.div>

            {/* Section 12 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                12. Contact
              </h2>
              <div className="bg-gray-50 p-6 rounded-sm">
                <p className="text-charcoal/70 mb-2"><strong className="text-navy-900">Horeva</strong> – M. Vauzelle Nathan</p>
                <p className="text-charcoal/70 mb-2">1 Place Jourdan</p>
                <p className="text-charcoal/70 mb-2">87000 Limoges – France</p>
                <p className="text-charcoal/70">
                  Email : <a href="mailto:contact@montrehoreva.com" className="text-gold-400 hover:underline">contact@montrehoreva.com</a>
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/contact" className="btn-primary">
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
