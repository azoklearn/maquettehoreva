"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: "preserver-montre-automatique",
    title: "Les bons gestes pour préserver votre montre automatique",
    intro: "Prendre soin d'une montre automatique, c'est garantir sa précision, sa longévité et préserver toute la finesse de sa mécanique. Ces pièces horlogères, souvent héritées ou choisies avec passion, méritent une attention particulière au quotidien.",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&auto=format&fit=crop",
    sections: [
      {
        title: "1. Le changement de date : attention à la \"zone morte\"",
        content: `Si votre montre automatique est équipée d'un guichet de date, un geste maladroit peut suffire à perturber son mécanisme. Lorsqu'elle se trouve entre 21h et 3h, le mouvement interne entame un processus délicat : celui de préparer le changement de date automatique.

Durant cette plage horaire — appelée zone morte — plusieurs composants sont en tension. Forcer un changement de date rapide à ce moment-là peut :`,
        risks: [
          "Abîmer les roues du calendrier",
          "Dérégler le mécanisme",
          "Aller jusqu'à casser la tige de changement de date",
        ],
        tip: "Le bon geste : avancez d'abord les aiguilles en dehors de cette plage, puis procédez au changement rapide de la date en toute sécurité.",
      },
      {
        title: "2. Remonter sa montre manuellement : un réflexe indispensable",
        content: `Même si votre montre est automatique, un remontage manuel occasionnel peut être bénéfique, notamment après une période d'inactivité. Mais attention : ce geste doit être fait correctement.

Beaucoup ont le réflexe de remonter la montre directement au poignet. Or, cette habitude met une pression latérale sur la tige de couronne, une pièce fragile et essentielle au bon fonctionnement de la montre.

Les risques ?`,
        risks: [
          "Tige de couronne tordue",
          "Système de remontage endommagé",
          "Couronne qui ne rentre plus correctement",
        ],
        tip: "Le bon réflexe : toujours enlever votre montre avant de la remonter. Vous préserverez ainsi l'alignement parfait de la tige et éviterez toute contrainte inutile.",
      },
    ],
    conclusion: "Chaque montre vintage raconte une histoire : la vôtre. En adoptant ces gestes simples, vous contribuez à préserver son mouvement, sa valeur et son charme d'origine. Chez Horeva, nous avons à cœur de transmettre la passion du vintage, mais aussi les connaissances qui permettent d'en prendre soin au quotidien.",
  },
  {
    id: "nettoyer-montre",
    title: "Nettoyer sa montre sans l'abîmer : les bons outils et les bons gestes",
    intro: "Entretenir régulièrement sa montre — surtout lorsqu'il s'agit d'une pièce vintage — permet de préserver son éclat, sa lisibilité et son confort au poignet. Un nettoyage mal réalisé peut cependant provoquer micro-rayures, infiltration d'eau ou usure prématurée. Voici comment nettoyer votre montre en toute sécurité, avec des outils simples et accessibles.",
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&auto=format&fit=crop",
    sections: [
      {
        title: "1. Les accessoires indispensables pour un nettoyage en douceur",
        content: "Pour éviter les rayures sur le boîtier, le bracelet ou le verre, il est essentiel d'utiliser des matériaux adaptés. Deux outils se démarquent :",
        features: [
          "La chiffonnette microfibre ultra douce, du type utilisé pour les lunettes : idéale pour enlever poussières, empreintes et traces sans agresser la surface.",
          "La brosse à poils souples, comme un petit pinceau à maquillage ou une brosse à dents pour enfants : parfaite pour atteindre les zones difficiles d'accès, notamment autour des cornes, de la couronne ou entre les maillons d'un bracelet.",
        ],
        tip: "Ces accessoires permettent un nettoyage minutieux tout en respectant l'intégrité des matériaux.",
      },
      {
        title: "2. Eau tiède et savon de Marseille : seulement si votre montre est étanche",
        content: "Pour un nettoyage plus en profondeur, vous pouvez utiliser de l'eau tiède et du savon de Marseille, mais uniquement si votre montre possède une étanchéité suffisante.",
        features: [
          "Vérifiez le niveau d'étanchéité de votre montre avant tout contact avec l'eau.",
          "Assurez-vous que la couronne est bien vissée ou en position fermée.",
          "Trempez légèrement la brosse dans l'eau savonneuse puis nettoyez délicatement le boîtier et le bracelet.",
          "Rincez rapidement sous un filet d'eau tiède (seulement si la montre le permet).",
          "Terminez en essuyant soigneusement avec une microfibre propre et sèche.",
        ],
        tip: "Pour les montres non étanches ou vintage sensibles, privilégiez un nettoyage à sec, uniquement avec la microfibre et la brosse.",
      },
    ],
    conclusion: "Un entretien régulier, même rapide, permet d'éviter l'accumulation de saletés et de prolonger la beauté de votre montre au fil du temps. Avec les bons outils et les bons réflexes, vous gardez votre pièce éclatante sans aucun risque.",
  },
  {
    id: "stocker-montre",
    title: "Stocker votre montre : les bonnes pratiques pour la préserver dans le temps",
    intro: "Bien stocker sa montre est essentiel pour préserver son fonctionnement, son esthétique et sa longévité. Qu'elle soit portée au quotidien ou laissée au repos pendant plusieurs semaines, chaque montre nécessite une attention particulière pour rester en parfait état.",
    highlight: "Horeva propose des solutions de stockage sécurisées et assurées à partir de 8€ par semaine, contactez-nous",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop",
    sections: [
      {
        title: "1. Pour une montre portée régulièrement : la simplicité avant tout",
        content: "Si vous utilisez votre montre au quotidien ou plusieurs fois par semaine, un rangement simple mais adapté suffit largement. L'idéal est de la glisser dans une pochette de protection, comme celles proposées par Horeva.",
        features: [
          "Protège des micro-rayures lorsque la montre reste dans un sac ou un tiroir",
          "La garde à l'abri de la poussière",
          "Limite l'exposition à l'humidité, ennemie des mécanismes horlogers",
          "Offre une solution compacte et facile à transporter",
        ],
        tip: "Pour les passionnés qui alternent plusieurs montres dans la semaine, cette solution est à la fois pratique et sécurisante.",
      },
      {
        title: "2. Pour une montre laissée au repos : le remontoir automatique",
        content: "Si vous ne portez pas votre montre pendant plusieurs semaines, un simple stockage ne suffit pas. Les montres automatiques fonctionnent grâce aux mouvements du poignet ; lorsqu'elles s'arrêtent, leurs huiles internes peuvent se figer légèrement et le mécanisme perd en régularité.\n\nPour éviter cela, l'idéal est d'utiliser un remontoir automatique (watch winder).",
        features: [
          "Simule les mouvements naturels du poignet",
          "Maintient le mouvement en action, évitant l'arrêt complet",
          "Préserve la précision du mécanisme",
          "Limite l'usure liée aux redémarrages fréquents",
          "Permet de garder la date et l'heure toujours justes",
        ],
        tip: "Le remontoir est parfait pour les collectionneurs, les montres complexes (phase de lune, calendrier complet, GMT…) ou toute montre qui risque de rester longtemps au repos.",
      },
    ],
    conclusion: "Choisir le bon mode de stockage, c'est protéger à la fois la mécanique, l'esthétique et la valeur de votre montre. Que vous soyez utilisateur quotidien ou collectionneur, adopter ces gestes simples vous permettra d'en profiter pendant de longues années.",
  },
];

export default function ConseilsPage() {
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
              NOS CONSEILS
            </span>
            <h1 className="font-display text-display-md md:text-display-lg font-semibold text-cream mt-4 mb-6">
              Le guide de l&apos;horlogerie
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Découvrez nos conseils d&apos;experts pour entretenir, préserver et
              profiter pleinement de vos montres de luxe au quotidien.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      {articles.map((article, articleIndex) => (
        <section
          key={article.id}
          id={article.id}
          className={`section-padding ${articleIndex % 2 === 0 ? "bg-cream" : "bg-gray-50"}`}
        >
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              {/* Article Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="relative aspect-[21/9] rounded-sm overflow-hidden mb-8">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                </div>

                <h2 className="font-display text-display-sm md:text-display-md font-semibold text-navy-900 mb-6">
                  {article.title}
                </h2>

                <p className="text-charcoal/70 text-lg leading-relaxed">
                  {article.intro}
                </p>

                {article.highlight && (
                  <div className="mt-6 bg-gold-400/10 border-l-4 border-gold-400 p-4">
                    <p className="text-navy-900 font-semibold">
                      {article.highlight}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Article Sections */}
              {article.sections.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sectionIndex * 0.1 }}
                  className="mb-12"
                >
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-navy-900 mb-4">
                    {section.title}
                  </h3>

                  <p className="text-charcoal/70 leading-relaxed mb-4 whitespace-pre-line">
                    {section.content}
                  </p>

                  {section.risks && (
                    <ul className="space-y-2 mb-4 ml-4">
                      {section.risks.map((risk, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                          <span className="text-charcoal/80">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.features && (
                    <ul className="space-y-3 mb-4 ml-4">
                      {section.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5"
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
                  )}

                  {section.tip && (
                    <div className="bg-navy-900 text-cream p-6 rounded-sm">
                      <div className="flex items-start gap-4">
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
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-cream/90">{section.tip}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Article Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-t border-gray-200 pt-8"
              >
                <h3 className="font-display text-xl font-semibold text-navy-900 mb-4">
                  {article.id === "preserver-montre-automatique" && "Protéger sa montre, c'est prolonger son histoire"}
                  {article.id === "nettoyer-montre" && "Préserver l'éclat de votre montre au quotidien"}
                  {article.id === "stocker-montre" && "Un bon stockage, c'est prolonger la vie de votre montre"}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {article.conclusion}
                </p>
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
              Besoin d&apos;un conseil personnalisé ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-cream/70 text-lg mb-8"
            >
              Nos experts sont à votre disposition pour répondre à toutes vos
              questions sur l&apos;entretien et la préservation de vos montres.
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
