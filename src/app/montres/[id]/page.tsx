"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Données des montres
const watchesData: Record<string, {
  id: string;
  brand: string;
  model: string;
  reference: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  condition: string;
  year: number;
  category: string;
  details: string;
  description: string;
  specifications: {
    movement: string;
    case: string;
    dial: string;
    bracelet: string;
    waterResistance: string;
    diameter: string;
  };
  included: string[];
  highlights: string[];
}> = {
  "girard-perregaux-monte-carlo-1965": {
    id: "girard-perregaux-monte-carlo-1965",
    brand: "GIRARD-PERREGAUX",
    model: "Monte-Carlo 1965",
    reference: "Édition limitée 250 ex.",
    price: 2790,
    image: "/Girard.jpeg",
    condition: "Excellent",
    year: 2014,
    category: "Classique",
    details: "Full set • Garantie 12 mois • Mouvement automatique manufacture",
    description: "La Girard-Perregaux Monte-Carlo 1965 est une pièce d'exception qui rend hommage à l'histoire prestigieuse de la manufacture. Cette édition limitée à 250 exemplaires dans le monde célèbre l'élégance intemporelle de l'horlogerie suisse. Son design classique/sport en fait une montre polyvalente, parfaite pour toutes les occasions.",
    specifications: {
      movement: "Automatique manufacture Girard-Perregaux",
      case: "Acier inoxydable poli/satiné",
      dial: "Cadran argenté avec index appliqués",
      bracelet: "Bracelet cuir avec boucle déployante",
      waterResistance: "30 mètres",
      diameter: "40 mm",
    },
    included: [
      "Montre en excellent état",
      "Boîte d'origine Girard-Perregaux",
      "Certificat d'authenticité",
      "Manuel d'utilisation",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Édition limitée 250 exemplaires monde",
      "Mouvement manufacture suisse",
      "Full set complet",
      "État de conservation excellent",
      "Investissement horloger de qualité",
    ],
  },
  "rolex-submariner-kermit": {
    id: "rolex-submariner-kermit",
    brand: "ROLEX",
    model: "Submariner Kermit",
    reference: "16610LV",
    price: 12990,
    image: "/rolexx.jpeg",
    condition: "Excellent",
    year: 2007,
    category: "Sport",
    details: "Full set • Garantie 12 mois • Mouvement automatique",
    sold: true,
    description: "La Rolex Submariner 16610LV, surnommée \"Kermit\" par les collectionneurs en raison de sa lunette verte, est l'une des références les plus recherchées de la collection Submariner. Produite de 2003 à 2010 pour célébrer le 50ème anniversaire de la Submariner, cette pièce est devenue un véritable classique et une référence incontournable pour tout collectionneur sérieux.",
    specifications: {
      movement: "Automatique Rolex Calibre 3135",
      case: "Acier Oystersteel 904L",
      dial: "Cadran noir avec index luminescents",
      bracelet: "Bracelet Oyster avec fermoir Oysterlock",
      waterResistance: "300 mètres",
      diameter: "40 mm",
    },
    included: [
      "Montre en excellent état",
      "Boîte Rolex d'origine",
      "Certificat d'authenticité Rolex",
      "Manuel et documentation",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Édition anniversaire 50 ans Submariner",
      "Lunette verte \"Kermit\" iconique",
      "Calibre manufacture Rolex",
      "Full set complet et authentique",
      "Forte valeur de collection",
    ],
  },
  "bell-ross-br03-92": {
    id: "bell-ross-br03-92",
    brand: "BELL&ROSS",
    model: "BR03-92",
    reference: "Édition limitée 250 ex.",
    price: 3790,
    image: "/bell.webp",
    condition: "Excellent",
    year: 2000,
    category: "Sport",
    details: "Full set • Garantie 12 mois • Mouvement automatique",
    description: "La Bell&Ross BR03-92 est une icône de l'horlogerie moderne, inspirée des instruments de cockpit d'aviation. Cette édition limitée à 250 exemplaires dans le monde représente une opportunité unique d'acquérir une pièce de collection très recherchée. Son design carré emblématique et sa lisibilité exceptionnelle en font une montre sportive de caractère, parfaite pour les passionnés d'aviation et d'horlogerie contemporaine.",
    specifications: {
      movement: "Automatique Bell&Ross",
      case: "Acier inoxydable avec lunette céramique",
      dial: "Cadran noir mat avec index luminescents",
      bracelet: "Bracelet caoutchouc avec boucle déployante",
      waterResistance: "100 mètres",
      diameter: "42 mm",
    },
    included: [
      "Montre en excellent état",
      "Boîte Bell&Ross d'origine",
      "Certificat d'authenticité",
      "Manuel d'utilisation",
      "Carte de garantie",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Édition limitée 250 exemplaires monde",
      "Design iconique inspiré de l'aviation",
      "Boîtier carré emblématique",
      "Full set complet",
      "État de conservation excellent",
      "Pièce de collection recherchée",
    ],
  },
  "bell-ross-123-commando": {
    id: "bell-ross-123-commando",
    brand: "BELL&ROSS",
    model: "123 Commando",
    reference: "Millésime 2022",
    price: 1390,
    image: "/marine.jpeg",
    condition: "Excellent",
    year: 2022,
    category: "Sport",
    details: "Full set • Boîte et papiers • Garantie 12 mois • Mouvement automatique • Bracelet silicone neuf offert",
    description: "La Bell&Ross 123 Commando de 2022 incarne l'esprit militaire et l'horlogerie instrumentale de la marque. Cette pièce en excellent état est livrée en full set avec boîte et papiers. Son mouvement automatique fiable et son design sportif en font une montre robuste au quotidien. Un bracelet silicone neuf est offert avec la montre.",
    specifications: {
      movement: "Automatique Bell&Ross",
      case: "Acier inoxydable",
      dial: "Cadran avec index luminescents",
      bracelet: "Bracelet caoutchouc / Silicone neuf offert",
      waterResistance: "100 mètres",
      diameter: "41 mm",
    },
    included: [
      "Montre en excellent état",
      "Full set : boîte et papiers",
      "Bracelet silicone neuf offert",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Millésime 2022",
      "Full set boîte et papiers",
      "État excellent",
      "Bracelet silicone neuf offert",
      "Mouvement automatique",
      "Design sport Commando",
    ],
  },
  "universal-geneve-gilt-shadow": {
    id: "universal-geneve-gilt-shadow",
    brand: "UNIVERSAL GENÈVE",
    model: "Gilt Shadow",
    reference: "Millésime 60's",
    price: 740,
    image: "/gilt.jpeg",
    condition: "Bon",
    year: 1960,
    category: "Classique",
    details: "Garantie 12 mois • Mouvement automatique microrotor",
    description: "La Universal Genève Gilt Shadow est une pièce vintage authentique des années 60, représentant l'âge d'or de l'horlogerie suisse. Ce millésime rare est équipé du célèbre mouvement automatique microrotor, une prouesse technique pour l'époque. Son cadran doré (gilt) lui confère un charme intemporel et une élégance discrète. Cette montre classique est parfaite pour les collectionneurs à la recherche d'une pièce vintage abordable avec une véritable âme horlogère.",
    specifications: {
      movement: "Automatique microrotor Universal Genève",
      case: "Acier inoxydable",
      dial: "Cadran doré (gilt) avec index appliqués",
      bracelet: "Bracelet cuir",
      waterResistance: "30 mètres",
      diameter: "34 mm",
    },
    included: [
      "Montre en bon état",
      "Bracelet cuir",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Authentique millésime années 60",
      "Mouvement microrotor légendaire",
      "Cadran gilt d'époque",
      "Manufacture suisse Universal Genève",
      "Prix très accessible pour du vintage",
      "Patine naturelle authentique",
    ],
  },
  "rado-true": {
    id: "rado-true",
    brand: "RADO",
    model: "True",
    reference: "2025",
    price: 1740,
    image: "/rado.jpeg",
    condition: "Excellent",
    year: 2025,
    category: "Classique",
    details: "Garantie 36 mois • Mouvement automatique",
    description: "La Rado True représente l'excellence de l'horlogerie contemporaine suisse, alliant innovation technologique et design raffiné. Cette pièce 2025 en état excellent incarne la philosophie Rado de créer des montres ultra-résistantes et intemporelles. Avec sa céramique high-tech et son mouvement automatique de précision, la True est une montre polyvalente qui s'adapte aussi bien à un style classique que sportif. Bénéficiant d'une garantie exceptionnelle de 36 mois, c'est un investissement sûr pour les amateurs d'horlogerie moderne.",
    specifications: {
      movement: "Automatique Rado",
      case: "Céramique high-tech",
      dial: "Cadran avec index appliqués",
      bracelet: "Bracelet céramique intégré",
      waterResistance: "50 mètres",
      diameter: "40 mm",
    },
    included: [
      "Montre en excellent état",
      "Boîte Rado d'origine",
      "Certificat d'authenticité",
      "Manuel d'utilisation",
      "Carte de garantie internationale",
      "Garantie constructeur 36 mois",
      "Garantie HOREVA 12 mois additionnelle",
    ],
    highlights: [
      "Modèle 2025 dernière génération",
      "Céramique high-tech ultra-résistante",
      "Garantie exceptionnelle de 36 mois",
      "Design polyvalent classique/sport",
      "Manufacture suisse Rado",
      "État excellent comme neuf",
    ],
  },
  "cartier-must": {
    id: "cartier-must",
    brand: "CARTIER",
    model: "Must de Cartier",
    reference: "Millésime 70's",
    price: 1540,
    image: "/must.jpeg",
    condition: "Bon",
    year: 1970,
    category: "Classique",
    details: "Vermeil • Garantie 12 mois • Mouvement quartz",
    sold: true,
    description: "La Must de Cartier est une icône intemporelle de l'horlogerie de luxe, lancée dans les années 70. Cette pièce vintage en vermeil (argent plaqué or) incarne l'élégance parisienne à la française et le raffinement de la maison Cartier. Son boîtier Tank emblématique et son cadran épuré en font une montre dress classique par excellence. Équipée d'un mouvement quartz fiable, cette Must de Cartier est une porte d'entrée accessible dans l'univers prestigieux de la manufacture parisienne.",
    specifications: {
      movement: "Quartz",
      case: "Vermeil (argent plaqué or)",
      dial: "Cadran crème avec chiffres romains",
      bracelet: "Bracelet cuir avec boucle ardillon",
      waterResistance: "30 mètres",
      diameter: "30 mm",
    },
    included: [
      "Montre en bon état",
      "Bracelet cuir",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Authentique millésime années 70",
      "Icône Cartier Must légendaire",
      "Boîtier Tank en vermeil",
      "Élégance parisienne intemporelle",
      "Prix accessible pour du Cartier vintage",
      "Mouvement quartz fiable",
    ],
  },
  "piaget-altiplano-gold": {
    id: "piaget-altiplano-gold",
    brand: "PIAGET",
    model: "Altiplano OR 750/1000",
    reference: "Millésime 60's",
    price: 5790,
    image: "/piaget.jpeg",
    condition: "Excellent",
    year: 1960,
    category: "Classique",
    details: "Or 18k • Garantie 12 mois • Mouvement automatique micro-rotor 12P",
    description: "La Piaget Altiplano est l'incarnation de l'excellence horlogère suisse et du luxe discret. Cette pièce vintage des années 60 en or 18 carats (750/1000) est équipée du légendaire mouvement automatique micro-rotor calibre 12P, une véritable prouesse technique de l'horlogerie fine. Avec son profil ultra-plat caractéristique et son élégance intemporelle, l'Altiplano représente le summum de la montre habillée classique. Ce millésime en excellent état est une pièce de collection recherchée par les connaisseurs.",
    specifications: {
      movement: "Automatique micro-rotor Piaget Calibre 12P",
      case: "Or jaune 18 carats (750/1000)",
      dial: "Cadran doré avec index appliqués",
      bracelet: "Bracelet cuir avec boucle en or",
      waterResistance: "30 mètres",
      diameter: "34 mm",
    },
    included: [
      "Montre en excellent état",
      "Bracelet cuir avec boucle en or",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Boîtier en or 18 carats authentique",
      "Légendaire calibre 12P micro-rotor",
      "Millésime années 60 recherché",
      "Design ultra-plat iconique",
      "Manufacture de haute horlogerie Piaget",
      "État de conservation excellent",
    ],
  },
  "ulysse-nardin": {
    id: "ulysse-nardin",
    brand: "ULYSSE NARDIN",
    model: "Classique",
    reference: "Vintage",
    price: 940,
    image: "/nardin.jpeg",
    condition: "Très bon",
    year: 1970,
    category: "Classique",
    details: "Garantie 12 mois • Mouvement remontage manuel",
    description: "Ulysse Nardin, manufacture suisse fondée en 1846, est réputée pour son expertise horlogère et ses montres de marine de précision. Cette pièce vintage à remontage manuel incarne l'artisanat horloger traditionnel et le charme authentique des montres mécaniques d'antan. En très bon état, cette Ulysse Nardin offre une expérience horlogère pure avec son mouvement manuel qui crée un lien unique entre le porteur et sa montre. Une pièce de caractère pour les amateurs d'horlogerie classique.",
    specifications: {
      movement: "Remontage manuel Ulysse Nardin",
      case: "Acier inoxydable",
      dial: "Cadran avec index appliqués",
      bracelet: "Bracelet cuir",
      waterResistance: "30 mètres",
      diameter: "35 mm",
    },
    included: [
      "Montre en très bon état",
      "Bracelet cuir",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Manufacture suisse Ulysse Nardin (fondée en 1846)",
      "Mouvement remontage manuel authentique",
      "État de conservation très bon",
      "Charme horloger traditionnel",
      "Expérience mécanique pure",
      "Prix accessible pour du Ulysse Nardin",
    ],
  },
  "longines-saint-imier-chrono": {
    id: "longines-saint-imier-chrono",
    brand: "LONGINES",
    model: "Saint-Imier Chrono",
    reference: "Millésime 2010's",
    price: 1890,
    image: "/chrono.jpeg",
    condition: "Excellent",
    year: 2010,
    category: "Sport",
    details: "Boîte • Garantie 12 mois • Mouvement automatique chronographe",
    description: "La Longines Saint-Imier Collection rend hommage au village suisse où fut fondée la manufacture en 1832. Ce chronographe automatique des années 2010 allie élégance classique et fonctionnalité sportive. En excellent état avec sa boîte d'origine, cette pièce incarne le savoir-faire horloger de Longines avec son mouvement chronographe automatique précis et fiable. Son design intemporel en fait une montre polyvalente, parfaite aussi bien pour le quotidien que pour les occasions spéciales.",
    specifications: {
      movement: "Automatique chronographe Longines",
      case: "Acier inoxydable",
      dial: "Cadran avec compteurs de chronographe",
      bracelet: "Bracelet cuir avec boucle déployante",
      waterResistance: "30 mètres",
      diameter: "41 mm",
    },
    included: [
      "Montre en excellent état",
      "Boîte Longines d'origine",
      "Manuel d'utilisation",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Collection Saint-Imier prestigieuse",
      "Chronographe automatique",
      "Millésime 2010's récent",
      "État excellent avec boîte",
      "Design polyvalent classique/sport",
      "Manufacture suisse Longines",
    ],
  },
  "rolex-gmt-master-ii-16710": {
    id: "rolex-gmt-master-ii-16710",
    brand: "ROLEX",
    model: "GMT Master II",
    reference: "16710",
    price: 11890,
    image: "/montre1.jpeg",
    condition: "Excellent",
    year: 1980,
    category: "Sport",
    details: "Boîte • 2 lunettes (Coke + Black) • Garantie 12 mois • Mouvement automatique",
    description: "La Rolex GMT Master II 16710 est l'une des références les plus emblématiques de l'horlogerie sportive de luxe. Ce millésime des années 80 en excellent état est équipé du mouvement automatique Rolex et représente une période charnière de l'histoire de la GMT. Cette pièce exceptionnelle est livrée avec sa boîte d'origine et deux lunettes interchangeables : la célèbre Coke (rouge et noir) et la lunette noire, offrant ainsi une polyvalence unique. Un investissement horloger de premier ordre.",
    specifications: {
      movement: "Automatique Rolex Calibre 3185",
      case: "Acier Oystersteel",
      dial: "Cadran noir avec index luminescents",
      bracelet: "Bracelet Oyster avec fermoir Oysterlock",
      waterResistance: "100 mètres",
      diameter: "40 mm",
    },
    included: [
      "Montre en excellent état",
      "Boîte Rolex d'origine",
      "2 lunettes (Coke rouge/noir + Black)",
      "Manuel et documentation",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Millésime années 80 très recherché",
      "2 lunettes interchangeables incluses",
      "Calibre manufacture Rolex 3185",
      "Boîte d'origine complète",
      "État de conservation excellent",
      "Icône de l'horlogerie sportive",
    ],
  },
  "heuer-daytona-chrono": {
    id: "heuer-daytona-chrono",
    brand: "HEUER",
    model: "Daytona Chrono",
    reference: "Millésime 70's",
    price: 3690,
    image: "/montre2.jpeg",
    condition: "Très bon",
    year: 1970,
    category: "Sport",
    details: "Garantie 12 mois • Mouvement automatique • Chronographe",
    description: "La Heuer Daytona Chrono des années 70 est une pièce de collection exceptionnelle qui incarne l'âge d'or de l'horlogerie sportive avant que TAG ne fusionne avec Heuer en 1985. Ce chronographe automatique vintage en très bon état représente l'héritage légendaire de la marque dans le monde du sport automobile et de la course. Avec son esthétique racing caractéristique et son mouvement automatique robuste, cette Heuer est une opportunité rare d'acquérir une pièce historique de l'une des manufactures les plus prestigieuses.",
    specifications: {
      movement: "Automatique chronographe",
      case: "Acier inoxydable",
      dial: "Cadran avec compteurs de chronographe",
      bracelet: "Bracelet acier",
      waterResistance: "50 mètres",
      diameter: "39 mm",
    },
    included: [
      "Montre en très bon état",
      "Bracelet acier",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Authentique millésime années 70",
      "Heuer avant TAG (pré-1985)",
      "Chronographe automatique racing",
      "État de conservation très bon",
      "Héritage sport automobile",
      "Pièce de collection recherchée",
    ],
  },
  "tudor-oyster-elegante": {
    id: "tudor-oyster-elegante",
    brand: "TUDOR",
    model: "Oyster Élégante",
    reference: "Millésime 70's",
    price: 1290,
    image: "/montre3.jpeg",
    condition: "Très bon",
    year: 1970,
    category: "Classique",
    details: "Garantie 12 mois • Mouvement remontage manuel",
    description: "La Tudor Oyster des années 70 incarne l'élégance discrète et le savoir-faire horloger de la marque sœur de Rolex. Cette pièce vintage à remontage manuel en très bon état combine le charme authentique de l'horlogerie mécanique traditionnelle avec la robustesse légendaire du boîtier Oyster. Avec son design classique intemporel et son mouvement manuel qui crée un lien unique avec son porteur, cette Tudor est une opportunité d'acquérir une pièce de qualité à un prix accessible.",
    specifications: {
      movement: "Remontage manuel Tudor",
      case: "Acier inoxydable Oyster",
      dial: "Cadran avec index appliqués",
      bracelet: "Bracelet cuir",
      waterResistance: "30 mètres",
      diameter: "34 mm",
    },
    included: [
      "Montre en très bon état",
      "Bracelet cuir",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Authentique millésime années 70",
      "Boîtier Oyster légendaire",
      "Mouvement remontage manuel",
      "Marque sœur de Rolex",
      "État de conservation très bon",
      "Prix accessible pour du Tudor vintage",
    ],
  },
  "tudor-ranger-ii-prince-oyster-date": {
    id: "tudor-ranger-ii-prince-oyster-date",
    brand: "TUDOR",
    model: "Ranger II Prince Oyster Date",
    reference: "Millésime 70's",
    price: 3690,
    image: "/montre4.jpeg",
    condition: "Très bon",
    year: 1970,
    category: "Sport",
    details: "Garantie 12 mois • Mouvement automatique",
    description: "La Tudor Ranger II Prince Oyster Date des années 70 est une pièce sportive emblématique de la collection Tudor. Équipée du légendaire boîtier Oyster et d'un mouvement automatique robuste, cette montre incarne la robustesse et la fiabilité qui ont fait la réputation de Tudor. Son design sport-élégant avec fonction date en fait une montre polyvalente parfaite pour tous les jours. En très bon état de conservation, cette Ranger II représente une excellente opportunité d'acquérir une montre de qualité manufacture à un prix accessible.",
    specifications: {
      movement: "Automatique Tudor",
      case: "Acier inoxydable Oyster",
      dial: "Cadran avec index appliqués et date",
      bracelet: "Bracelet acier Oyster",
      waterResistance: "100 mètres",
      diameter: "36 mm",
    },
    included: [
      "Montre en très bon état",
      "Bracelet acier Oyster",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Authentique millésime années 70",
      "Collection Ranger II iconique",
      "Boîtier Oyster légendaire",
      "Mouvement automatique robuste",
      "Fonction date pratique",
      "État de conservation très bon",
    ],
  },
  "longines-chrono-13zn": {
    id: "longines-chrono-13zn",
    brand: "LONGINES",
    model: "Chrono 13ZN",
    reference: "Millésime 1946",
    price: 3990,
    image: "/montre5.jpeg",
    condition: "Très bon",
    year: 1946,
    category: "Classique",
    details: "Extrait d'archives • Garantie 12 mois • Mouvement 13ZN",
    description: "Cette Longines Chronographe équipée du légendaire calibre 13ZN de 1946 est une pièce historique exceptionnelle. Le calibre 13ZN est l'un des mouvements de chronographe les plus recherchés et respectés de l'histoire horlogère, réputé pour sa précision et sa fiabilité. Livré avec son extrait d'archives officiel Longines confirmant son authenticité, ce chronographe vintage en très bon état représente un investissement horloger de collection de premier ordre pour les connaisseurs d'horlogerie vintage.",
    specifications: {
      movement: "Remontage manuel Longines Calibre 13ZN",
      case: "Acier inoxydable",
      dial: "Cadran avec compteurs de chronographe",
      bracelet: "Bracelet cuir",
      waterResistance: "30 mètres",
      diameter: "36 mm",
    },
    included: [
      "Montre en très bon état",
      "Extrait d'archives Longines officiel",
      "Bracelet cuir",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Millésime 1946 authentique",
      "Légendaire calibre 13ZN",
      "Extrait d'archives officiel inclus",
      "Chronographe vintage collector",
      "État de conservation très bon",
      "Pièce d'histoire horlogère",
    ],
  },
  "omega-seamaster-120-baby-proplof": {
    id: "omega-seamaster-120-baby-proplof",
    brand: "OMEGA",
    model: "Seamaster 120 Baby Proplof",
    reference: "Millésime 70's",
    price: 4100,
    image: "/montre6.jpeg",
    condition: "Très bon",
    year: 1970,
    category: "Sport",
    details: "Garantie 12 mois • Mouvement automatique",
    description: "La Omega Seamaster 120, surnommée affectueusement 'Baby Proplof' par les collectionneurs, est une icône des montres de plongée vintage des années 70. Avec son design robuste et distinctif inspiré de la légendaire Ploprof, cette Seamaster 120 offre une esthétique unique et un charisme incomparable. En très bon état de conservation, cette pièce vintage est équipée d'un mouvement automatique fiable et représente une opportunité rare d'acquérir une montre Omega de plongée historique très recherchée par les collectionneurs.",
    specifications: {
      movement: "Automatique Omega",
      case: "Acier inoxydable",
      dial: "Cadran avec index luminescents",
      bracelet: "Bracelet acier",
      waterResistance: "120 mètres",
      diameter: "41 mm",
    },
    included: [
      "Montre en très bon état",
      "Bracelet acier",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Légendaire 'Baby Proplof'",
      "Authentique millésime années 70",
      "Design iconique de plongée",
      "Manufacture suisse Omega",
      "État de conservation très bon",
      "Pièce de collection recherchée",
    ],
  },
  "omega-dynamic-iii-3": {
    id: "omega-dynamic-iii-3",
    brand: "OMEGA",
    model: "Dynamic III (3)",
    reference: "Millésime 1997",
    price: 1540,
    image: "/solana.jpeg",
    condition: "Très bon",
    year: 1997,
    category: "Sport",
    details: "Garantie 12 mois • Mouvement automatique • Cuir Omega rouge",
    description: "L'Omega Dynamic III (3) de 1997 est une montre polyvalente qui allie élégance classique et fonctionnalité sportive. Cette pièce en très bon état de conservation incarne le savoir-faire Omega avec son mouvement automatique fiable et son design intemporel. Équipée d'un bracelet cuir Omega rouge distinctif, cette Dynamic III représente une opportunité accessible d'acquérir une montre Omega authentique des années 90, parfaite pour un usage quotidien ou sportif.",
    specifications: {
      movement: "Automatique Omega",
      case: "Acier inoxydable",
      dial: "Cadran avec index",
      bracelet: "Bracelet cuir Omega rouge",
      waterResistance: "50 mètres",
      diameter: "38 mm",
    },
    included: [
      "Montre en très bon état",
      "Bracelet cuir Omega rouge",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Millésime 1997 authentique",
      "Mouvement automatique Omega",
      "Bracelet cuir Omega rouge distinctif",
      "Design classique/sport polyvalent",
      "État de conservation très bon",
      "Prix accessible pour une Omega",
    ],
  },
  "chaumet-mihewi": {
    id: "chaumet-mihewi",
    brand: "CHAUMET",
    model: "Mihewi",
    reference: "Millésime 2005",
    price: 480,
    image: "/montre7.jpeg",
    condition: "Bon",
    year: 2005,
    category: "Classique",
    details: "Boîte • Garantie 12 mois • Mouvement Quartz • Montre Dame",
    description: "La Chaumet Mihewi est une montre élégante pour dame de la prestigieuse maison parisienne Chaumet, joaillier et horloger depuis 1780. Cette pièce de 2005 en bon état incarne l'élégance française et le raffinement de la haute joaillerie parisienne. Avec son mouvement quartz fiable et sa boîte d'origine, cette Mihewi représente une opportunité accessible d'acquérir une montre de la célèbre maison Chaumet de la Place Vendôme. Une montre classique parfaite pour compléter une garde-robe féminine élégante.",
    specifications: {
      movement: "Quartz",
      case: "Acier",
      dial: "Cadran avec index",
      bracelet: "Bracelet cuir",
      waterResistance: "30 mètres",
      diameter: "28 mm",
    },
    included: [
      "Montre en bon état",
      "Boîte Chaumet d'origine",
      "Bracelet cuir",
      "Garantie HOREVA 12 mois",
    ],
    highlights: [
      "Prestigieuse maison Chaumet Paris",
      "Montre dame élégante",
      "Boîte d'origine incluse",
      "Joaillier Place Vendôme depuis 1780",
      "Prix très accessible",
      "Mouvement quartz fiable",
    ],
  },
};

export default function WatchDetailPage() {
  const params = useParams();
  const watchId = params.id as string;
  const watch = watchesData[watchId];
  const [selectedImage, setSelectedImage] = useState<string>(watch?.image || "");
  
  // Utiliser toutes les images disponibles ou juste l'image principale
  const allImages = watch?.images || [watch?.image];

  if (!watch) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-display text-2xl text-navy-900 mb-4">Montre non trouvée</h1>
          <Link href="/montres" className="btn-primary">
            Retour au catalogue
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-28 pb-4 bg-cream border-b border-gray-200">
        <div className="container-luxury">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-charcoal/60 hover:text-gold-400 transition-colors">
              Accueil
            </Link>
            <span className="text-charcoal/40">/</span>
            <Link href="/montres" className="text-charcoal/60 hover:text-gold-400 transition-colors">
              Montres
            </Link>
            <span className="text-charcoal/40">/</span>
            <span className="text-navy-900">{watch.brand} {watch.model}</span>
          </nav>
        </div>
      </section>

      {/* Product Section */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="relative aspect-square bg-white rounded-sm overflow-hidden shadow-lg">
                <Image
                  src={selectedImage}
                  alt={`${watch.brand} ${watch.model}`}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Condition Badge */}
                <span className="absolute top-4 left-4 px-4 py-2 bg-navy-900/90 text-cream text-sm tracking-wide">
                  {watch.condition}
                </span>
              </div>
              
              {/* Thumbnails */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`relative aspect-square bg-white rounded-sm overflow-hidden border-2 transition-all ${
                        selectedImage === img
                          ? "border-gold-400 shadow-md"
                          : "border-gray-200 hover:border-gold-400/50"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${watch.brand} ${watch.model} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Brand & Category */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gold-400 text-sm tracking-[0.2em] font-body">
                  {watch.brand}
                </span>
                <span className="px-3 py-1 bg-navy-900/10 text-navy-900 text-xs rounded-full">
                  {watch.category}
                </span>
              </div>

              {/* Model */}
              <h1 className="font-display text-display-sm md:text-display-md font-semibold text-navy-900 mb-2">
                {watch.model}
              </h1>

              {/* Reference */}
              <p className="text-charcoal/60 mb-6">
                Réf. {watch.reference} • {watch.year}
              </p>

              {/* Price */}
              <div className="mb-8">
                {watch.originalPrice && (
                  <div className="mb-2">
                    <span className="text-lg text-charcoal/40 line-through">
                      Le prix initial était : {new Intl.NumberFormat("fr-FR", {
                        style: "currency",
                        currency: "EUR",
                        maximumFractionDigits: 2,
                      }).format(watch.originalPrice)}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <span className={`font-display text-display-sm font-semibold ${watch.sold ? "text-charcoal/50 line-through" : "text-red-600"}`}>
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 2,
                    }).format(watch.price)}
                  </span>
                  {watch.sold && (
                    <span className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-sm">
                      VENDU
                    </span>
                  )}
                  {watch.originalPrice && !watch.sold && (
                    <span className="ml-3 text-sm text-charcoal/60">
                      Le prix actuel
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-charcoal/70 leading-relaxed mb-8">
                {watch.description}
              </p>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-4">
                  Points forts
                </h3>
                <ul className="space-y-2">
                  {watch.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-charcoal/70">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              {watch.sold ? (
                <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-sm text-center">
                  <p className="text-red-600 font-semibold text-lg mb-2">Cette montre a été vendue</p>
                  <p className="text-charcoal/70 text-sm">Consultez nos autres montres disponibles dans le catalogue.</p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={`https://wa.me/33532189017?text=Bonjour, je suis intéressé par la ${watch.brand} ${watch.model} (Réf. ${watch.reference}) à ${watch.price}€`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Contacter via WhatsApp
                  </a>
                  <a
                    href="tel:0532189017"
                    className="btn-secondary flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Appeler
                  </a>
                </div>
              )}

              {/* Guarantee */}
              <div className="bg-navy-900/5 p-4 rounded-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-navy-900">Garantie HOREVA 12 mois</p>
                    <p className="text-sm text-charcoal/60">Authenticité garantie • Retour sous 14 jours</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-semibold text-navy-900 mb-8">
              Caractéristiques techniques
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Mouvement", value: watch.specifications.movement },
                { label: "Boîtier", value: watch.specifications.case },
                { label: "Cadran", value: watch.specifications.dial },
                { label: "Bracelet", value: watch.specifications.bracelet },
                { label: "Étanchéité", value: watch.specifications.waterResistance },
                { label: "Diamètre", value: watch.specifications.diameter },
              ].map((spec, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-charcoal/60">{spec.label}</span>
                  <span className="text-navy-900 font-medium text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-cream">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-semibold text-navy-900 mb-8">
              Contenu du set
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {watch.included.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-sm">
                  <svg className="w-6 h-6 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-charcoal/70">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-display-sm md:text-display-md font-semibold text-cream mb-6"
            >
              Intéressé par cette montre ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-cream/70 text-lg mb-8"
            >
              Contactez-nous pour plus d&apos;informations ou pour organiser une visite.
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href={`https://wa.me/33532189017?text=Bonjour, je suis intéressé par la ${watch.brand} ${watch.model}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Nous contacter
              </a>
              <Link href="/montres" className="btn-outline-light">
                Voir d&apos;autres montres
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
