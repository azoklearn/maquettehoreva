"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GarantiePage() {
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
              POLITIQUE DE GARANTIE
            </span>
            <h1 className="font-display text-display-md md:text-display-lg font-semibold text-cream mt-4 mb-6">
              Garantie 12 mois
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Ventes & Réparations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-sm mb-12"
            >
              <p className="text-charcoal/60 text-sm">
                <strong>Dernière mise à jour :</strong> 16/11/2025
              </p>
              <p className="text-charcoal/60 text-sm">
                <strong>Entreprise :</strong> Horeva – M. Vauzelle Nathan
              </p>
              <p className="text-charcoal/60 text-sm">
                <strong>Adresse :</strong> 1 Place Jourdan, 87000 Limoges
              </p>
            </motion.div>

            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                1. Objet de la garantie commerciale
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                La présente garantie commerciale de 12 mois est proposée par Horeva sur :
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-charcoal/70">toutes les montres vendues sur montrehoreva.com,</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-charcoal/70">les réparations, révisions, restaurations ou interventions horlogères réalisées par Horeva.</span>
                </li>
              </ul>
              <p className="text-charcoal/70 leading-relaxed">
                Elle s&apos;ajoute aux garanties légales de conformité (articles L217-4 à L217-20 du Code de la Consommation) 
                et des vices cachés (articles 1641 à 1649 du Code civil), qui restent pleinement applicables.
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                2. Durée de la garantie
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                La garantie commerciale est valable <strong className="text-navy-900">12 mois</strong> à compter :
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-charcoal/70">de la date de livraison pour une vente,</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-charcoal/70">de la date de restitution pour une réparation ou révision.</span>
                </li>
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
                3. Ce que couvre la garantie 12 mois
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                La garantie couvre exclusivement :
              </p>

              <div className="bg-navy-900 p-6 rounded-sm mb-6">
                <h3 className="font-display text-lg font-semibold text-gold-400 mb-4">
                  Pour les montres vendues :
                </h3>
                <ul className="space-y-2">
                  {[
                    "Défaillance du mouvement (automatique, mécanique ou quartz)",
                    "Problème de précision anormal",
                    "Défaut interne non visible au moment de la vente",
                    "Arrêt anormal du mouvement",
                    "Défaut lié à l'assemblage ou à un élément mécanique interne",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-cream/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-900 p-6 rounded-sm">
                <h3 className="font-display text-lg font-semibold text-gold-400 mb-4">
                  Pour les réparations :
                </h3>
                <ul className="space-y-2">
                  {[
                    "Défaut lié à la pièce remplacée",
                    "Mauvais montage d'une pièce",
                    "Défaut résultant directement de l'intervention effectuée par Horeva",
                    "Retour d'un problème initial que la réparation était censée résoudre",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-cream/80">{item}</span>
                    </li>
                  ))}
                </ul>
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
                4. Ce que la garantie ne couvre pas
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                La garantie commerciale ne couvre pas :
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-navy-900 mb-2">A. Dégâts externes</h3>
                  <ul className="space-y-1 text-charcoal/70 text-sm">
                    <li>• Chocs, chute, accident</li>
                    <li>• Rayures sur cadran, boîtier, verre ou bracelet</li>
                    <li>• Déformation ou casse du bracelet (cuir, acier, textile)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-navy-900 mb-2">B. Mauvaise utilisation</h3>
                  <ul className="space-y-1 text-charcoal/70 text-sm">
                    <li>• Ouvrir la montre soi-même ou par un tiers non agréé</li>
                    <li>• Exposition à l&apos;humidité ou immersion non conforme aux spécifications d&apos;origine</li>
                    <li>• Utilisation de produits chimiques, solvants, parfums, lotions</li>
                    <li>• Magnétisation du mouvement</li>
                    <li>• Chocs thermiques</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-navy-900 mb-2">C. Usure normale</h3>
                  <ul className="space-y-1 text-charcoal/70 text-sm">
                    <li>• Réserve de marche légèrement dégradée</li>
                    <li>• Légère dérive du mouvement cohérente avec l&apos;âge</li>
                    <li>• Usure du bracelet, joints, lunettes, couronnes</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-navy-900 mb-2">D. Interventions d&apos;un tiers</h3>
                  <p className="text-charcoal/70 text-sm">
                    Toute intervention ou tentative de réparation par un horloger non affilié à Horeva annule la garantie.
                  </p>
                </div>
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
                5. Conditions d&apos;application de la garantie
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Pour bénéficier de la garantie, le client doit :
              </p>
              <ul className="space-y-2 ml-4 mb-6">
                {[
                  "contacter Horeva par email à contact@montrehoreva.com",
                  "décrire la panne rencontrée,",
                  "fournir la facture ou preuve d'achat / de réparation,",
                  "envoyer la montre pour inspection.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-charcoal/70">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-charcoal/70 leading-relaxed">
                Horeva se réserve le droit d&apos;inspecter la montre avant toute décision et de refuser la prise en charge 
                si les conditions ci-dessus ne sont pas remplies.
              </p>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                6. Modalités de prise en charge
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Si le défaut est couvert par la garantie commerciale, Horeva procédera, sans frais, à l&apos;un des choix suivants :
              </p>
              <ul className="space-y-2 ml-4 mb-6">
                {[
                  "réparation de la montre,",
                  "remplacement d'une pièce défectueuse,",
                  "révision partielle ou complète,",
                  "remplacement du produit (si réparation impossible),",
                  "remboursement (en dernier recours).",
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
                <p className="text-navy-900">
                  <strong>Important :</strong> Les frais d&apos;expédition retour vers Horeva sont à la charge du client. 
                  Les frais de renvoi après réparation sont pris en charge par Horeva.
                </p>
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
                7. Exclusions spécifiques – Montres vintage
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Pour les montres anciennes (plus de 20 ans), certaines particularités peuvent exister :
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                {[
                  "précision inférieure aux standards modernes,",
                  "réserve de marche réduite,",
                  "pièces d'origine introuvables,",
                  "fragilité accrue du mouvement.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-charcoal/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-charcoal/70">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-charcoal/70 leading-relaxed">
                Ces caractéristiques ne constituent pas un défaut couvert par la garantie commerciale.
              </p>
            </motion.div>

            {/* Section 8 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                8. Durée après une réparation effectuée sous garantie
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Toute réparation effectuée dans le cadre de la garantie ne prolonge pas la durée initiale de garantie.
              </p>
              <div className="bg-navy-900 p-4 rounded-sm">
                <p className="text-cream">
                  Les pièces remplacées sont quant à elles garanties <strong className="text-gold-400">90 jours</strong>.
                </p>
              </div>
            </motion.div>

            {/* Section 9 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                9. Limitation de responsabilité
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Horeva ne peut être tenu responsable :
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  "de la perte ou du vol lors du transport si la montre n'est pas assurée par le client,",
                  "d'un dommage indirect (perte financière, émotionnelle, valeur de collection),",
                  "d'un défaut résultant d'une mauvaise utilisation.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-charcoal/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-charcoal/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Section 10 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-900 mb-4">
                10. Litiges
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                En cas de désaccord sur l&apos;application de la garantie :
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-gold-400 font-semibold">1.</span>
                  <span className="text-charcoal/70">une solution amiable sera recherchée en priorité ;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-400 font-semibold">2.</span>
                  <span className="text-charcoal/70">à défaut, le client pourra saisir un médiateur de la consommation ;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-400 font-semibold">3.</span>
                  <span className="text-charcoal/70">en dernier recours, la compétence revient aux tribunaux du ressort de Limoges.</span>
                </li>
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-navy-900 p-8 rounded-sm text-center"
            >
              <h3 className="font-display text-xl font-semibold text-cream mb-4">
                Une question sur la garantie ?
              </h3>
              <p className="text-cream/70 mb-6">
                Contactez-nous pour toute question relative à notre politique de garantie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:contact@montrehoreva.com" className="btn-primary">
                  contact@montrehoreva.com
                </a>
                <Link href="/contact" className="btn-secondary">
                  Formulaire de contact
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
