# Portfolio Fontom's - Développeur Full-Stack

Portfolio moderne développé avec Next.js 15, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Fonctionnalités

- ✅ **Design ultra-moderne** avec animations Apple-style
- ✅ **Entièrement responsive** (mobile-first)
- ✅ **Menu hamburger** pour mobile et tablettes
- ✅ **Curseur personnalisé** avec interactions avancées
- ✅ **Animations fluides** avec Framer Motion
- ✅ **Optimisation SEO** complète avec métadonnées
- ✅ **PWA Ready** avec manifest.json
- ✅ **Données structurées** JSON-LD pour le référencement
- ✅ **Performance optimisée** avec Next.js 15
- ✅ **Thème sombre** avec glassmorphism

## 🛠️ Technologies

- **Framework** : Next.js 15 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS v4
- **Composants** : shadcn/ui
- **Animations** : Framer Motion
- **Icons** : Lucide React

## 📱 Pages

### Page d'accueil (`/`)

- Présentation personnelle avec animations
- Aperçu des projets principaux
- Section expertise technique
- Footer avec liens sociaux

### Page projets (`/projets`)

- **CyberCompanion** : Bot Discord IA (65+ serveurs)
- **The Mechanic Community** : Communauté automobile (Modérateur & Développeur)
- **Ami en Tête** : Plateforme d'entraide (Administrateur & Responsable technique)

## � Installation

```bash
# Cloner le repository
git clone https://github.com/fontoms/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 🚀 Déploiement

Le projet est configuré pour un déploiement automatique sur **GitHub Pages** :

### Déploiement automatique

- Push sur la branche `main` déclenche le déploiement
- Le site est accessible via `https://username.github.io/repository-name/`

### Configuration manuelle

Voir le guide détaillé : [DEPLOYMENT.md](DEPLOYMENT.md)

### Scripts disponibles

```bash
npm run dev          # Développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # ESLint
npm run export       # Export statique pour GitHub Pages
```

## 📁 Structure du Projet

```
src/
├── app/
│   ├── globals.css          # Styles globaux avec thème personnalisé
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Page d'accueil
├── components/
│   └── ui/                  # Composants shadcn/ui
└── lib/
    └── utils.ts             # Utilitaires

public/
└── home/
    └── banner_profile.jpg   # Image de bannière (à ajouter)
```

## 🎯 Fonctionnalités

- **Section Héro** : Présentation avec animation de fond
- **Compétences** : Badges interactifs avec hover effects
- **Projets** : Cartes avec animations hover
- **Footer** : Liens sociaux et informations de contact

## 🎨 Thème et Design

Le projet utilise un thème sombre avec :

- **Couleur primaire** : Orange (#ff7300)
- **Couleur secondaire** : Magenta (#ff00ff)
- **Arrière-plan** : Noir avec image de bannière
- **Typographie** : Arial avec hiérarchie claire

## 📸 Images Requises

Placez vos images dans le dossier `public/home/` :

- `banner_profile.jpg` - Image de bannière principale

## 🚀 Déploiement

Le projet peut être déployé facilement sur Vercel :

```bash
npm run build
```

Pour plus d'informations sur le déploiement Next.js, consultez la [documentation officielle](https://nextjs.org/docs/app/building-your-application/deploying).

## 📝 Licence

© 2025 Fontom's. Tous droits réservés.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
