// ============================================================
//  content.js — edit this file to update all portfolio text
// ============================================================

// ── Loading screen ──────────────────────────────────────────
export const LOADING = {
  prompt: "louis@basset:~$ sudo su",
};

// ── Navigation ──────────────────────────────────────────────
export const NAV = {
  // The logo splits into two colours: "louis" (white) + ".basset" (blue)
  logo: { first: "louis", second: ".basset" },
  links: [
    { label: "Accueil",  href: "#home" },
    { label: "À propos", href: "#about" },
    { label: "Projets",  href: "#projects" },
    { label: "Contact",  href: "#contact" },
  ],
};

// ── Hero section ────────────────────────────────────────────
export const HERO = {
  title: "Bonjour, je suis Louis Basset",
  description:
    "Ingénieur diplômé de l'ENSEEIHT, spécialisé en mathématiques appliquées, " +
    "optimisation et simulation de systèmes complexes. " +
    "Publié à MSWiM 2025 et IEEE VTC 2025 Spring.",
  primaryButton:   { label: "Voir les projets", href: "#projects" },
  secondaryButton: { label: "Me contacter",     href: "#contact" },
};

// ── About section ───────────────────────────────────────────
export const ABOUT = {
  title: "À propos",
  description:
    "Ingénieur diplômé de l'ENSEEIHT avec une formation solide en mathématiques appliquées, " +
    "optimisation et simulation. Expérience en apprentissage par renforcement multi-agents, " +
    "modélisation probabiliste et pipelines de simulation haute performance.",

  // Three skill groups — first two displayed side by side, third full width
  skills: [
    {
      title: "Langages de programmation",
      items: ["Python", "Java", "C", "C++", "Bash", "SQL", "LaTeX"],
    },
    {
      title: "Outils de développement",
      items: ["PyCharm", "VS Code", "Git", "GitLab CI", "Docker", "Linux", "Jupyter", "SUMO", "NetworkX"],
    },
    {
      title: "Bibliothèques scientifiques",
      items: ["PyTorch", "Scikit-learn", "Stable-Baselines3", "NumPy", "Pandas", "Scipy", "OR-Tools", "Matplotlib"],
    },
  ],

  education: {
    title: "🏫 Formation",
    items: [
      {
        degree:   "Erasmus – Mathématiques appliquées",
        school:   "Université de Liège",
        location: "Liège, Belgique",
        years:    "2024–2025",
      },
      {
        degree:   "Diplôme d'ingénieur, Informatique & Télécommunications",
        school:   "ENSEEIHT",
        location: "Toulouse, France",
        years:    "2022–2025",
      },
      {
        degree:   "Classe préparatoire PCSI/PSI",
        school:   "Lycée François Arago",
        location: "Perpignan, France",
        years:    "2019–2022",
      },
    ],
    // Displayed as the last bullet point in the education list
    coursework:
      "Cours suivis : EDP, Analyse fonctionnelle, Théorie ergodique, " +
      "Machine Learning, Optimisation, Algorithmique, Calcul parallèle",
  },

  experience: {
    title: "💼 Expériences professionnelles",
    items: [
      {
        role:        "Stage de recherche – Simulation & Optimisation multi-agents",
        period:      "03/2025 – 09/2025",
        description:
          "Laboratoire IRIT, Toulouse – Conception d'un simulateur V2X (SUMO/Python/TraCI) " +
          "avec apprentissage par renforcement multi-agents (MAPPO, Stable-Baselines3, 100 agents). " +
          "Réduction de 43,2 % du trafic réseau tout en préservant 82,1 % des objets détectés " +
          "collectivement. Publication à MSWiM 2025.",
      },
      {
        role:        "Stage de recherche – Modélisation réseaux de nanosatellites",
        period:      "06/2024 – 09/2024",
        description:
          "Laboratoire IRIT, Toulouse – Modélisation probabiliste d'essaims de nanosatellites " +
          "(50+ nœuds) avec pipeline Python/NetworkX pour l'analyse de métriques graphe-théoriques. " +
          "Mise en évidence de propriétés small-world orientant la sélection vers OSPF. " +
          "Publication à IEEE VTC 2025 Spring.",
      },
      {
        role:        "Housekeeping Staff",
        period:      "06/2023 – 08/2023",
        description:
          "Caro Foresta Lucia, Motohakone, Japon – Séjour professionnel en environnement de " +
          "travail japonais et anglais avec une clientèle internationale.",
      },
    ],
  },
};

// ── Projects section ────────────────────────────────────────
export const PROJECTS = {
  title: "Projets",

  // Add your projects here. Each entry:
  //   title:       string
  //   description: string
  //   tags:        string[]   — tech badges shown below the description
  //   link:        string | null   — URL for the "View Project →" button (null to hide it)
  items: [],

  // Shown when items is empty
  emptyMessage: "Projets à venir...",
};

// ── Contact section ─────────────────────────────────────────
export const CONTACT = {
  title: "Contactez-moi",
  placeholders: {
    name:    "Nom...",
    email:   "exemple@gmail.com",
    message: "Votre message...",
  },
  submitButton:   "Envoyer",
  successMessage: "Message envoyé !",
  errorMessage:   "Une erreur s'est produite. Veuillez réessayer.",

  // EmailJS credentials — https://dashboard.emailjs.com
  emailjs: {
    serviceId:  "service_u8w56hy",
    templateId: "template_q5v23j8",
    publicKey:  "41DJ-SNPxcu2apIQ0",
  },
};
