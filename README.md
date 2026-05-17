# Portfolio — Chris Nguefah

Portfolio personnel développé avec **React + Vite**.

## Démarrage rapide

```bash
npm install
npm run dev
```

Ouvre ensuite http://localhost:5173 dans ton navigateur.

## Build pour la production

```bash
npm run build
```

Les fichiers compilés se retrouvent dans le dossier `dist/`.  
Tu peux déposer ce dossier sur n'importe quel hébergeur (Netlify, Vercel, GitHub Pages...).

## Personnalisation

**Toutes les données du portfolio sont centralisées dans un seul fichier :**

```
src/data/portfolio.js
```

C'est ici que tu modifies :
- Tes informations personnelles (nom, email, liens)
- Tes compétences
- Tes projets (titre, description, stack, liens demo/GitHub, image)
- Ton parcours et tes expériences

### Ajouter une image de projet

1. Place ton image dans `public/images/` (format 1280x720 recommandé)
2. Dans `src/data/portfolio.js`, décommente et remplis la ligne `thumb` du projet concerné :
   ```js
   thumb: '/images/kamerstock.png',
   ```

### Ajouter un projet

Dans `src/data/portfolio.js`, ajoute un objet dans le tableau `projects` :

```js
{
  id: 5,
  title: 'Nom du projet',
  subtitle: 'Sous-titre',
  stack: ['Laravel', 'MySQL'],
  year: '2025',
  description: 'Description du projet...',
  status: 'delivered', // 'in-progress' | 'delivered' | 'planned'
  demo: 'https://lien-demo.com',
  github: 'https://github.com/...',
  featured: false,
  thumb: '/images/projet.png',
},
```

## Structure du projet

```
src/
├── components/        # Un composant par section
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── portfolio.js   # ← TOUTES les données ici
├── hooks/
│   └── useScrollReveal.js
├── App.jsx
└── index.css          # Variables CSS globales
```
