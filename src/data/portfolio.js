// ============================================================
//  DONNÉES DU PORTFOLIO — modifie ce fichier pour tout changer
// ============================================================

export const personal = {
  name: 'Chris Nguefah',
  title: 'Développeur Full Stack',
  subtitle: 'Étudiant en Licence 3 · IUC Douala',
  location: 'Douala, Cameroun',
  email: 'marcelochris98@gmail.com',
  github: 'https://github.com/marcelochris98-collab',
  linkedin: 'https://www.linkedin.com/in/chris-nguefah-ab4a0a395',
   whatsapp: '+237689703281',
  available: true,
  // ── Photo de profil ──────────────────────────────────────
  // 1. Place ta photo dans public/images/photo.jpg
  // 2. Décommente la ligne ci-dessous
  photo: '/images/photo.png',
  // ── CV téléchargeable ────────────────────────────────────
  // 1. Place ton CV dans public/files/cv-chris-nguefah.pdf
  // 2. Décommente la ligne ci-dessous
   cv: '/files/cv-chris-nguefah.pdf',
  bio: [
    "Je suis Chris Nguefah, développeur full stack basé à Douala. Titulaire d'un BTS en Génie Logiciel (Université JFN), je poursuis actuellement une Licence 3 à l'IUC.",
    "Mon environnement principal est Laravel, MySQL et Tailwind CSS. Je construis des applications web orientées métier, avec un soin particulier pour la maintenabilité et la lisibilité du code.",
    "En dehors des cours, je travaille sur KamerStock — un système de gestion de quincaillerie conçu pour répondre à des besoins réels du marché camerounais.",
  ],
  stats: [
    { value: '3+', label: 'Projets réels' },
    { value: 'BTS', label: 'Génie Logiciel' },
    { value: 'L3', label: 'En cours — IUC' },
    { value: 'CMR', label: 'Douala, Cameroun' },
  ],
}

export const skills = [
  {
    category: 'Backend',
    items: [
      { name: 'Laravel', featured: true },
      { name: 'PHP 8', featured: true },
      { name: 'MySQL', featured: true },
      { name: 'Eloquent ORM', featured: false },
      { name: 'API REST', featured: false },
      { name: 'Migrations', featured: false },
      { name: 'Artisan CLI', featured: false },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'Tailwind CSS', featured: true },
      { name: 'Blade', featured: true },
      { name: 'React', featured: false },
      { name: 'HTML5 / CSS3', featured: false },
      { name: 'JavaScript', featured: false },
      { name: 'AlpineJS', featured: false },
    ],
  },
  {
    category: 'Outils & Environnement',
    items: [
      { name: 'Git / GitHub', featured: true },
      { name: 'Laragon', featured: true },
      { name: 'Composer', featured: false },
      { name: 'npm / Vite', featured: false },
      { name: 'Linux (bases)', featured: false },
      { name: 'VS Code', featured: false },
    ],
  },
  {
    category: 'Architecture & Méthodes',
    items: [
      { name: 'MVC', featured: true },
      { name: 'UML / Merise', featured: false },
      { name: 'Design Patterns', featured: false },
      { name: 'RBAC', featured: false },
      { name: 'CRUD', featured: false },
    ],
  },
  {
    category: 'Sécurité & Auth',
    items: [
      { name: 'JWT', featured: true },
      { name: 'Laravel Sanctum', featured: false },
      { name: 'Middleware', featured: false },
      { name: 'CSRF', featured: false },
      { name: 'Hashing', featured: false },
    ],
  },
  {
    category: 'Autres',
    items: [
      { name: 'Java (réseau)', featured: false },
      { name: 'TCP / UDP', featured: false },
      { name: 'Python (bases)', featured: false },
      { name: 'DomPDF', featured: false },
      { name: 'GLPI', featured: false },
    ],
  },
]

export const projects = [
  {
    id: 1,
    slug: 'kamerstock',                    // utilisé dans l'URL : /projects/kamerstock
    title: 'KamerStock',
    subtitle: 'Gestion de Quincaillerie',
    stack: ['Laravel 12', 'MySQL', 'Tailwind CSS'],
    year: '2024 – présent',
    description: 'Système complet de gestion pour une quincaillerie : stock, ventes, retours, fournisseurs, unités de mesure, caisse et rapports PDF.',
    status: 'in-progress',
    demo: null,
    github: null,
    featured: true,
     thumb: '/images/kamer.png',

    // ── Champs page de détail ─────────────────────────────
    descriptionLong: `KamerStock est un système de gestion conçu pour répondre aux besoins réels d'une quincaillerie camerounaise.
Le projet couvre l'ensemble du cycle de vie commercial : de la réception fournisseur jusqu'aux rapports de caisse en fin de journée.

L'accent est mis sur la robustesse métier, la gestion des unités de mesure spécifiques au secteur, et la génération de documents PDF brandés.`,
    features: [
      'Gestion du stock avec alertes de seuil',
      'Module de ventes avec gestion des retours',
      'Gestion des fournisseurs et historique des achats',
      'Unités de mesure configurables par produit',
      'Rapports PDF (factures, bons de livraison)',
      'Tableau de bord avec indicateurs clés',
      'Gestion de caisse et clôture journalière',
      'Système de rôles et permissions (RBAC)',
    ],
    techDetails: [
      { name: 'Laravel 12', role: 'Framework backend principal — routing, ORM, auth' },
      { name: 'MySQL 8', role: 'Base de données relationnelle' },
      { name: 'Tailwind CSS', role: 'Framework CSS utilitaire pour l\'interface' },
      { name: 'DomPDF', role: 'Génération de rapports et factures PDF' },
      { name: 'Laravel Sanctum', role: 'Authentification et gestion des sessions' },
      { name: 'Eloquent ORM', role: 'Couche d\'abstraction base de données' },
      { name: 'Laragon', role: 'Environnement de développement local (Windows)' },
    ],
    // screenshots: ['/images/kamerstock-1.png', '/images/kamerstock-2.png'],
  },
  {
    id: 2,
    slug: 'cofaoc',
    title: 'COFAOC',
    subtitle: 'Coopérative Financière',
    stack: ['Laravel 11', 'React', 'JWT'],
    year: '2024',
    description: 'Application de gestion pour une coopérative financière. Spécifications fonctionnelles, modélisation UML, authentification JWT et tableau de bord.',
    status: 'in-progress',
    demo: null,
    github: null,
    featured: false,
    // thumb: '/images/cofaoc.png',

    descriptionLong: `COFAOC est une application web de gestion développée pour une coopérative financière.
Le projet a démarré par une phase de conception complète : rédaction des spécifications fonctionnelles, modélisation UML, et livrable Word structuré.

L'implémentation repose sur une architecture SPA avec Laravel en backend API et React en frontend, sécurisée par JWT.`,
    features: [
      'Authentification sécurisée par JWT',
      'Tableau de bord de suivi des membres',
      'Gestion des comptes et des opérations',
      'Spécifications fonctionnelles complètes',
      'Modélisation UML (cas d\'utilisation, séquence)',
      'Architecture API REST + SPA React',
    ],
    techDetails: [
      { name: 'Laravel 11', role: 'Backend API REST' },
      { name: 'React', role: 'Interface utilisateur (SPA)' },
      { name: 'JWT', role: 'Authentification stateless' },
      { name: 'MySQL', role: 'Base de données relationnelle' },
      { name: 'UML', role: 'Modélisation et conception' },
    ],
  },
  {
    id: 3,
    slug: 'afriland-scrap',
    title: 'Afriland Scrap',
    subtitle: 'Gestion du Matériel IT',
    stack: ['Laravel', 'JWT', 'Tailwind CSS'],
    year: '2024',
    description: 'Outil de suivi du cycle de vie du matériel informatique conçu lors d\'un stage à Afriland First Bank.',
    status: 'delivered',
    demo: null,
    github: null,
    featured: false,
    // thumb: '/images/afriland-scrap.png',

    descriptionLong: `Afriland Scrap est un système de gestion du cycle de vie du matériel informatique, développé lors d'un stage professionnel à Afriland First Bank.

Le projet inclut une maquette UI/UX complète aux couleurs de la banque (rouge/anthracite), puis l'implémentation du backend et du tableau de bord de suivi.`,
    features: [
      'Inventaire du matériel informatique',
      'Suivi du cycle de vie (achat → réforme)',
      'Tableau de bord avec état du parc',
      'Fiches équipement détaillées',
      'Modales d\'action (affecter, reformer, réparer)',
      'Interface aux couleurs d\'Afriland First Bank',
    ],
    techDetails: [
      { name: 'Laravel', role: 'Framework backend' },
      { name: 'JWT', role: 'Authentification' },
      { name: 'Tailwind CSS', role: 'Interface utilisateur' },
      { name: 'MySQL', role: 'Base de données' },
      { name: 'HTML / CSS / JS', role: 'Maquette UI/UX initiale' },
    ],
  },
  {
    id: 4,
    slug: 'ruche-dor',
    title: "Ruche d'Or",
    subtitle: 'E-commerce Miel Artisanal',
    stack: ['PHP natif', 'MySQL', 'Python'],
    year: '2023',
    description: 'Site e-commerce pour une entreprise artisanale de miel. Site public, panneau d\'administration, gestion des commandes.',
    status: 'delivered',
    demo: null,
    github: null,
    featured: false,
     thumb: '/images/ruche-dor.png',

    descriptionLong: `Ruche d'Or est un site e-commerce développé en PHP natif pour une entreprise artisanale de miel camerounaise.

Le projet comprend un site public de présentation et de commande, un panneau d'administration complet, et un module de traitement d'images côté serveur avec Python.`,
    features: [
      'Site public avec catalogue produits',
      'Système de commande en ligne',
      'Panneau d\'administration complet',
      'Gestion des commandes et des clients',
      'Traitement et redimensionnement d\'images (Python)',
      'Rapports de ventes',
    ],
    techDetails: [
      { name: 'PHP natif', role: 'Backend sans framework' },
      { name: 'MySQL', role: 'Base de données' },
      { name: 'Python', role: 'Traitement d\'images côté serveur' },
      { name: 'HTML / CSS', role: 'Interface publique et admin' },
      { name: 'Sessions PHP', role: 'Authentification admin' },
    ],
  },

  // ── AJOUTER UN PROJET ────────────────────────────────────
  // Copie ce bloc, remplis les champs et décommente-le :
  //
  // {
  //   id: 5,
  //   slug: 'mon-projet',               // URL : /projects/mon-projet
  //   title: 'Nom du projet',
  //   subtitle: 'Sous-titre',
  //   stack: ['Laravel', 'MySQL'],
  //   year: '2025',
  //   description: 'Courte description (carte d\'accueil).',
  //   status: 'delivered',              // 'delivered' | 'in-progress' | 'planned'
  //   demo: null,                       // 'https://...' ou null
  //   github: null,                     // 'https://...' ou null
  //   featured: false,                  // true = carte large (2 colonnes)
  //   thumb: '/images/mon-projet.png',  // image carte (optionnel)
  //   descriptionLong: `Description complète sur la page de détail.`,
  //   features: [
  //     'Fonctionnalité 1',
  //     'Fonctionnalité 2',
  //   ],
  //   techDetails: [
  //     { name: 'Laravel', role: 'Framework backend' },
  //   ],
  //   screenshots: ['/images/mon-projet-1.png'],
  // },
]

export const experience = [
  {
    id: 1,
    period: '2024 – présent',
    title: 'Licence 3 — Génie Logiciel',
    org: 'IUC (Institut Universitaire de la Côte) · Douala',
    type: 'education',
    description: "Formation en développement d'applications, architecture logicielle, gestion de bases de données et conception de systèmes d'information.",
    tags: ['Laravel', 'React', 'UML', 'Gestion de projet'],
  },
  {
    id: 2,
    period: '2024',
    title: 'Stagiaire Développeur — Afriland First Bank',
    org: 'Afriland First Bank · Douala',
    type: 'internship',
    description: "Stage professionnel au sein du département informatique. Travaux de réseaux et conception du système Afriland Scrap de gestion du matériel IT.",
    tags: ['Réseaux', 'Laravel', 'JWT', 'Tailwind CSS'],
  },
  {
    id: 3,
    period: '2022 – 2024',
    title: 'BTS — Génie Logiciel',
    org: 'Université JFN · Douala',
    type: 'education',
    description: "Formation en développement logiciel, bases de données, programmation orientée objet, réseaux informatiques et méthodes de conception.",
    tags: ['PHP', 'Java', 'MySQL', 'UML', 'Merise', 'TCP/UDP'],
  },
]
