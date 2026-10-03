// ============================================================
//  DONNÉES DU PORTFOLIO — modifie ce fichier pour tout changer
// ============================================================

export const personal = {
  name: 'Nguefah Tsafack Chris Beauclaire',
  title: 'Développeur Frontend Junior',
  subtitle: 'Titulaire d\'une Licence Pro Génie Logiciel & Développeur chez Bestcorp',
  location: 'Douala, Cameroun',
  email: 'marcelochris98@gmail.com',
  github: 'https://github.com/marcelochris98-collab',
  linkedin: 'https://linkedin.com/in/chris-nguefah-ab4a0a395',
  whatsapp: '+237689703281',
  available: true,
  // ── Photo de profil ──────────────────────────────────────
  photo: '/images/photo.jpeg',
  // ── CV téléchargeable ────────────────────────────────────
  cv: '/files/cv-chris-nguefah.pdf',
  bio: [
    "Jeune développeur web passionné et motivé, titulaire d'une Licence Professionnelle en Génie Logiciel / Systèmes d'Information (IUC / ISTDI) et d'un BTS en Développement Web et Technologies Informatiques (JFN).",
    "Actuellement développeur frontend junior chez Bestcorp, je maîtrise PHP, Laravel, HTML/CSS et MySQL, avec un niveau avancé en React et Next.js et une pratique active au quotidien de TypeScript.",
    "En apprentissage continu de Prisma, Angular, Python et Java/Spring Boot, je suis toujours à la recherche d'opportunités pour approfondir mon expertise et relever de nouveaux défis.",
  ],
  stats: [
    { value: 'Licence', label: 'Génie Logiciel (obtenue)' },
    { value: 'Bestcorp', label: 'Dev Frontend Junior' },
    { value: 'BTS', label: 'Développement Web' },
    { value: 'CMR', label: 'Douala, Cameroun' },
  ],
}

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React · Next.js (avancé)', featured: true },
      { name: 'TypeScript', featured: true },
      { name: 'HTML5 / CSS3 / JavaScript', featured: true },
      { name: 'Tailwind CSS (Design System)', featured: true },
      { name: 'Blade', featured: false },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'PHP · Laravel', featured: true },
      { name: 'MySQL / XAMPP / Laragon', featured: true },
      { name: 'Prisma (ORM)', featured: false },
      { name: 'API REST / Webhooks', featured: false },
      { name: 'Python', featured: false },
    ],
  },
  {
    category: 'Outils & CI/CD',
    items: [
      { name: 'Git / GitHub', featured: true },
      { name: 'GitHub Actions (CI/CD)', featured: true },
      { name: 'Laragon / VS Code', featured: false },
      { name: 'npm / Vite', featured: false },
    ],
  },
  {
    category: 'En Apprentissage & Notion',
    items: [
      { name: 'Java / Spring Boot', featured: true },
      { name: 'Angular · RxJS (notions)', featured: false },
      { name: 'Prisma (ORM)', featured: false },
      { name: 'Python', featured: false },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Capacité d\'apprentissage', featured: true },
      { name: 'Travail en autonomie', featured: true },
      { name: 'Rigueur et organisation', featured: false },
      { name: 'Résolution de problèmes', featured: false },
      { name: 'Esprit d\'équipe', featured: false },
      { name: 'Veille technologique', featured: false },
    ],
  },
  {
    category: 'Langues',
    items: [
      { name: 'Français — courant (95%)', featured: true },
      { name: 'Anglais — notions (25%)', featured: false },
    ],
  },
]

export const projects = [
  {
    id: 1,
    slug: 'eazlypost',
    title: 'EazlyPost',
    subtitle: 'Gestion de réseaux sociaux (Bestcorp)',
    stack: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'GitHub Actions'],
    year: 'Août 2026 – En cours',
    description: 'Plateforme B2B de gestion de réseaux sociaux pour créateurs et entreprises africaines. Interface sous React 19 / Next.js 15 et TypeScript.',
    status: 'in-progress',
    demo: 'https://eazypost.cm/',
    github: null,
    featured: true,
    thumb: '/images/eazlypost.png',

    descriptionLong: `Plateforme B2B de gestion de réseaux sociaux développée au sein du studio Bestcorp pour les créateurs et entreprises en Afrique.
Intégration d'un design system neubrutaliste sur mesure (Tailwind CSS), montée en compétence avancée sur React 19, Next.js 15, adoption complète de TypeScript et automatisation de pipelines CI/CD avec GitHub Actions.`,
    features: [
      'Gestion et planification de publications sur réseaux sociaux',
      'Interface utilisateur neubrutaliste responsive',
      'Architecture moderne React 19 & Next.js 15 avec App Router',
      'Typage strict TypeScript sur l\'ensemble du frontend',
      'Workflows collaboratifs Git et déploiement continu CI/CD via GitHub Actions',
    ],
    techDetails: [
      { name: 'React 19 & Next.js 15', role: 'Frameworks React modernes frontend' },
      { name: 'TypeScript', role: 'Langage principal pour la robustesse et le typage' },
      { name: 'Tailwind CSS', role: 'Design System Neubrutaliste' },
      { name: 'GitHub Actions', role: 'Pipeline d\'intégration et déploiement continu (CI/CD)' },
    ],
  },
  {
    id: 2,
    slug: 'kamerstock',
    title: 'KamerStock',
    subtitle: 'Gestion de Quincaillerie Multi-tenant',
    stack: ['Laravel 12', 'MySQL', 'Tailwind CSS'],
    year: 'Projet tutoré académique',
    description: 'Système complet de gestion pour quincaillerie (stocks, ventes, caisse enregistreuse, fournisseurs, matériaux) avec architecture multi-tenant en cours.',
    status: 'in-progress',
    demo: 'https://kamerstock.alwaysdata.net/',
    github: null,
    featured: true,
    thumb: '/images/kamer.png',

    descriptionLong: `KamerStock (anciennement Quincaillerie-Flow / MetalCore) est une application web de gestion complète conçue pour les quincailleries du marché camerounais.
Développée avec Laravel 12 et MySQL, elle gère l'ensemble du cycle de vente, les réapprovisionnements fournisseurs, la caisse et la préparation d'une architecture multi-tenant.`,
    features: [
      'Gestion avancée des stocks, catégories et unités de mesure',
      'Module de vente rapide et gestion de caisse enregistreuse',
      'Gestion des fournisseurs et des commandes de réapprovisionnement',
      'Interface responsive moderne en Tailwind CSS',
      'Architecture multi-tenant en cours de développement',
    ],
    techDetails: [
      { name: 'Laravel 12', role: 'Framework PHP backend' },
      { name: 'MySQL', role: 'Base de données relationnelle' },
      { name: 'Tailwind CSS', role: 'Interface utilisateur responsive' },
    ],
  },
  {
    id: 3,
    slug: 'gestion-rebuts',
    title: 'Gestion des Rebuts',
    subtitle: 'Application métier — Afriland First Bank',
    stack: ['PHP pur', 'MySQL'],
    year: 'Stage professionnel',
    description: 'Application métier pour la gestion des rebuts bancaires. Développée en PHP pur & MySQL et déployée en environnement professionnel réel.',
    status: 'delivered',
    demo: null,
    github: null,
    featured: false,
    thumb: '/images/afriland.jpg',

    descriptionLong: `Application métier conçue et développée pendant le stage à Afriland First Bank pour informatiser le suivi et la gestion des rebuts au sein de la banque.`,
    features: [
      'Conception de la base de données relationnelle MySQL',
      'Développement de l\'interface métier et des formulaires de gestion',
      'Tracking et traitement des équipements/rebuts bancaires',
      'Livraison et déploiement effectif en environnement réel',
    ],
    techDetails: [
      { name: 'PHP pur', role: 'Développement backend natif' },
      { name: 'MySQL', role: 'Conception et gestion de la base de données' },
    ],
  },
  {
    id: 4,
    slug: 'gestion-archives',
    title: 'Gestion des Archives',
    subtitle: 'Système Documentaire — EPFA PRO',
    stack: ['PHP', 'MySQL', 'HTML/CSS/JS'],
    year: 'Déc. 2024 – En cours',
    description: 'Système de gestion documentaire pour l\'école de formation professionnelle EPFA PRO.',
    status: 'delivered',
    demo: null,
    github: 'https://github.com/marcelochris98-collab',
    featured: false,
    thumb: '/images/epfa.jpg',

    descriptionLong: `Système de gestion des archives réalisé pour l'école de formation professionnelle EPFA PRO, permettant le classement et la recherche de documents.`,
    features: [
      'Archivage et numérisation des documents de formation',
      'Moteur de recherche et filtres par catégorie',
      'Interface dynamique en HTML, CSS et JavaScript',
    ],
    techDetails: [
      { name: 'PHP & MySQL', role: 'Gestion des données et stockage' },
      { name: 'JavaScript / HTML / CSS', role: 'Interface utilisateur et interactions' },
    ],
  },
]

export const experience = [
  {
    id: 1,
    period: 'Août 2026 – En cours',
    title: 'Stage — Développeur Frontend Junior',
    org: 'Bestcorp · Douala, Cameroun (Startup tech studio)',
    type: 'internship',
    description: 'Contribution au développement frontend d\'EazlyPost (plateforme B2B de gestion de réseaux sociaux pour créateurs et entreprises africaines). Montée en compétence avancée sur React 19 et Next.js 15 avec TypeScript. Développement de composants UI sur design system neubrutaliste (Tailwind CSS), workflows Git collaboratifs et découverte du CI/CD (GitHub Actions).',
    tags: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'GitHub Actions', 'EazlyPost'],
  },
  {
    id: 2,
    period: 'Déc. 2024 – En cours',
    title: 'Stage — Développeur Web & Maintenance',
    org: 'EPFA PRO (École de Formation Professionnelle) · Douala, Cameroun',
    type: 'internship',
    description: 'Développement et maintenance de pages web (HTML, CSS, JavaScript), intégration de maquettes UI responsives, développement backend PHP et réalisation du projet Gestion des archives (PHP + MySQL). Tests, débogage et collaboration pédagogique.',
    tags: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'Gestion Archives'],
  },
  {
    id: 3,
    period: 'Stage professionnel',
    title: 'Stage — Développeur & Informatique',
    org: 'Afriland First Bank · Cameroun',
    type: 'internship',
    description: 'Développement d\'une application métier complète de gestion des rebuts en PHP pur et MySQL (conçue, développée et déployée en environnement bancaire réel). Maintenance informatique (dépannage imprimantes & bureautique) et gestion logistique du matériel de réunion.',
    tags: ['PHP pur', 'MySQL', 'Maintenance IT', 'Gestion Rebuts'],
  },
  {
    id: 4,
    period: '2025 / 2026',
    title: 'Licence Professionnelle — Obtenue (Génie Logiciel)',
    org: 'IUC / ISTDI · Douala',
    type: 'education',
    description: 'Formation en Génie Logiciel et Systèmes d\'Information. Diplôme de Licence Professionnelle obtenu.',
    tags: ['Licence Pro', 'Génie Logiciel', 'Systèmes d\'Information', 'IUC / ISTDI'],
  },
  {
    id: 5,
    period: '2023 – 2024',
    title: 'BTS — Développement Web et Tech Informatiques',
    org: 'JFN - High-Tech University Institut · Douala',
    type: 'education',
    description: 'Brevet de Technicien Supérieur en Développement Web et Technologies Informatiques.',
    tags: ['BTS', 'Développement Web', 'Tech Informatiques', 'JFN'],
  },
  {
    id: 6,
    period: '2022 – 2023',
    title: 'Baccalauréat',
    org: 'Lycée Bilingue de Logpom · Douala',
    type: 'education',
    description: 'Obtention du Baccalauréat au Lycée Bilingue de Logpom.',
    tags: ['Baccalauréat', 'Logpom'],
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Équipe Bestcorp',
    role: 'Startup Tech Studio · Douala',
    content: "Chris apporte une très belle énergie dans l'équipe frontend. Sa maîtrise rapide de Next.js 15, React 19 et TypeScript ainsi que son rigoureux respect du design system sur EazlyPost sont très appréciables.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Département Informatique',
    role: 'Afriland First Bank · Cameroun',
    content: "Chris a fait preuve d'une excellente autonomie et d'une grande rigueur durant son stage. La solution métier de gestion des rebuts qu'il a développée et déployée réponds parfaitement aux besoins opérationnels.",
    rating: 5,
  },
]


