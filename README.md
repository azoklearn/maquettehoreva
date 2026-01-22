# HOREVA - Site Officiel

Site web premium pour HOREVA, spécialiste de l'achat, revente, réparation et estimation de montres de luxe de seconde main.

## 🚀 Technologies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript

## 📁 Structure du projet

```
horeva/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Page d'accueil
│   │   ├── layout.tsx        # Layout global
│   │   ├── globals.css       # Styles globaux
│   │   ├── montres/          # Page des montres
│   │   ├── services/         # Page des services
│   │   ├── conseils/         # Blog horloger
│   │   ├── contact/          # Page de contact
│   │   └── a-propos/         # Page à propos
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx    # En-tête sticky
│       │   └── Footer.tsx    # Pied de page
│       └── ui/
│           ├── IntroAnimation.tsx
│           ├── SocialButtons.tsx
│           ├── SectionTitle.tsx
│           ├── WatchCard.tsx
│           ├── ServiceCard.tsx
│           ├── TestimonialCard.tsx
│           └── ArticleCard.tsx
├── tailwind.config.ts        # Configuration Tailwind
├── next.config.mjs           # Configuration Next.js
└── package.json
```

## 🎨 Design System

### Couleurs

- **Navy (Principal)**: `#0B1C2D` - Bleu marine profond
- **Gold (Accent)**: `#C9A24D` - Or patiné
- **Cream (Background)**: `#FAF8F5`
- **Charcoal (Text)**: `#1A1A1A`

### Typographies

- **Display**: Cormorant Garamond (titres)
- **Body**: Raleway (texte)

## 🛠️ Installation

```bash
# Cloner le projet
cd horeva

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📦 Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Démarrer en production
npm run lint     # Vérification ESLint
```

## 🌐 Pages

1. **Accueil** (`/`) - Hero immersif, services, montres vedettes, témoignages
2. **Montres** (`/montres`) - Catalogue avec filtres
3. **Services** (`/services`) - Achat, vente, estimation, réparation
4. **Conseils** (`/conseils`) - Blog horloger
5. **Contact** (`/contact`) - Formulaire et coordonnées
6. **À propos** (`/a-propos`) - Histoire et valeurs

## ✨ Fonctionnalités

- Animation d'introduction au chargement
- Header sticky avec transition au scroll
- Animations Framer Motion au scroll
- Boutons flottants (WhatsApp, Instagram, Calendly)
- Design responsive mobile-first
- Section témoignages clients
- Filtres dynamiques pour les montres

## 📞 Contact HOREVA

- **Email**: contact@montrehoreva.com
- **Téléphone**: 05 32 18 90 17
- **Zone**: Limoges + 250km

## 📄 License

Tous droits réservés © HOREVA 2025
