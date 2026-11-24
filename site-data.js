/* =====================================================================
   CENTRE ASSALA — configuration + catalogue des formations
   Ce fichier est partagé par index.html et formations.html.
   ===================================================================== */

window.ASSALA_CONFIG = {
  // Numéro WhatsApp, format international, chiffres uniquement (ex. 213551234567)
  whatsapp: '213XXXXXXXXX',

  // URL de l'application Web Google Apps Script (voir FORMATIONS-SETUP.md, étape 3).
  // Tant qu'elle est vide, les inscriptions passent uniquement par WhatsApp.
  sheetUrl: 'https://script.google.com/macros/s/AKfycbzQQZ4i_T4M6k-PLenCyl18BZKd1JvFlE7qWDMCS7MMH1Es6k2fzDaVTqjyigN4kVno/exec'
};

/* ---------------------------------------------------------------------
   FORMATIONS
   Pour ajouter une formation : copiez un bloc { ... }, collez-le dans la
   liste et modifiez les valeurs. L'ordre n'a pas d'importance : les
   formations sont triées par date, et celles déjà passées disparaissent
   automatiquement du site.

   Champs :
     id              identifiant unique, sans espaces ni accents (sert au lien direct)
     titre           nom de la formation
     theme           discipline (sert au filtre) : Ostéopathie, Kinésithérapie, Massage…
     niveau          ex. "Professionnels", "Tout public", "Étudiants"
     resume          1–2 phrases affichées sur la carte
     dateDebut       AAAA-MM-JJ — premier jour (sert au tri et à l'expiration)
     dates           texte affiché, ex. "14 – 15 février 2027"
     horaires        ex. "9h00 – 16h30"
     duree           ex. "2 jours · 14 h"
     lieu            ex. "Centre Assala, Draria"
     prix            ex. "25 000 DA"
     acompte         optionnel, ex. "10 000 DA à l'inscription"
     places          nombre total de places
     placesRestantes mettez à jour à la main ; 0 = « Complet »
     public          à qui s'adresse la formation
     prerequis       optionnel
     objectifs       optionnel, liste « À l'issue de la formation… »
     programme       liste des modules : soit un texte simple, soit
                     { titre, points: [...], atelier } pour un module détaillé
     methode         optionnel, liste des méthodes pédagogiques
     inclus          liste de ce qui est compris
     formateur       { nom, titre, bio, photo (optionnel) }
     image           optionnel, chemin d'une image du site
   --------------------------------------------------------------------- */

window.FORMATIONS = [

  // FORMATION 1
  {
    id: 'techniques-amincissement-360',
    titre: "Techniques d'amincissement 360°",
    theme: 'Esthétique & amincissement',
    niveau: 'Professionnels de santé',
    resume: "Formation 100 % pratique — de l'analyse des tissus aux protocoles manuels, technologiques et injectables.",
    dateDebut: '',                          // AAAA-MM-JJ — à compléter
    dates: '[Date à confirmer]',
    horaires: '[Horaires à confirmer]',
    duree: '[Durée à confirmer]',
    lieu: 'Centre Assala, Draria',
    prix: '[Prix à confirmer]',
    // acompte: '',
    // places: 10,
    // placesRestantes: 10,
    public: "Professionnels de la santé : médecins, kinésithérapeutes, infirmiers.",
    programme: [
      'Analyse des tissus : bilan corporel et diagnostic',
      'Techniques manuelles : palper-rouler et drainage lymphatique',
      'Machines & thermosudation : cavitation, radiofréquence et couverture chauffante',
      'Injections lipolytiques : actifs, protocoles et sécurité'
    ],
    // inclus: ['Support de cours', 'Attestation de formation'],
    formateur: {
      nom: 'Mme Belkacem Soraya',
      titre: "Kinésithérapeute Diplômée d'État",
      bio: "Formée en kinésithérapie esthétique, 14 ans d'expérience."
    },
    image: 'image02.webp'
  },

  // FORMATION 2
  {
    id: 'massage-amincissant-drainage-maderotherapie-ventouses',
    titre: "Massage amincissant, drainage, madérothérapie & ventouses",
    theme: 'Esthétique & amincissement',
    niveau: 'Santé & esthétique',
    resume: "Formation 100 % pratique — les protocoles manuels du remodelage corporel, du diagnostic des tissus aux ventouses.",
    dateDebut: '',                          // AAAA-MM-JJ — à compléter
    dates: '[Date à confirmer]',
    horaires: '[Horaires à confirmer]',
    duree: '[Durée à confirmer]',
    lieu: 'Centre Assala, Draria',
    prix: '[Prix à confirmer]',
    // acompte: '',
    // places: 10,
    // placesRestantes: 10,
    public: "Professionnels de la santé, kinésithérapeutes et praticiens esthétiques / bien-être.",
    programme: [
      'Diagnostic : analyse des tissus et contre-indications',
      "Drainage lymphatique : relance circulatoire et rétention d'eau",
      'Massage amincissant : palper-rouler et remodelage',
      'Madérothérapie : techniques aux instruments en bois',
      'Ventouses (cupping) : verre, silicone et pneumatiques'
    ],
    // inclus: ['Support de cours', 'Attestation de formation'],
    formateur: {
      nom: 'Mme Belkacem Soraya',
      titre: "Kinésithérapeute Diplômée d'État",
      bio: "Formée en kinésithérapie esthétique, 14 ans d'expérience."
    },
    image: 'image05.webp'
  },

  // FORMATION 3
  {
    id: 'developpement-personnel-intelligence-de-soi',
    titre: 'Développement personnel & intelligence de soi',
    theme: 'Développement personnel',
    niveau: 'Tout public adulte',
    resume: "Mieux se connaître pour mieux se construire — estime de soi, confiance et intelligence émotionnelle, avec des apports en neurosciences et des exercices concrets.",
    dateDebut: '',                          // AAAA-MM-JJ — à compléter
    dates: '[Date à confirmer]',
    horaires: '[Horaires à confirmer]',
    duree: '24 h · 6 modules de 4 h',
    lieu: 'Centre Assala, Draria',
    prix: '[Prix à confirmer]',
    // acompte: '',
    places: 15,
    // placesRestantes: 15,
    public: "Adultes, étudiants, salariés et entrepreneurs. Groupe de 10 à 15 participants.",
    objectifs: [
      "Développer une meilleure connaissance de soi",
      "Renforcer l'estime et la confiance en soi",
      "Identifier et questionner ses croyances limitantes",
      "Développer son intelligence émotionnelle",
      "Mieux gérer le stress et les émotions",
      "Améliorer sa communication et ses relations",
      "Adopter une posture plus constructive face aux défis",
      "Prendre des décisions et passer à l'action"
    ],
    programme: [
      { titre: "La connaissance de soi",
        points: ["Qui suis-je réellement ?", "Identifier ses valeurs, ses besoins et ses forces", "Comprendre ses mécanismes comportementaux", "Identifier ses ressources personnelles"],
        atelier: "« Mon identité au-delà du regard des autres »" },
      { titre: "Estime de soi et confiance en soi",
        points: ["Estime de soi et confiance en soi : la différence", "L'image de soi et le regard des autres", "Le sentiment de légitimité", "Apprendre à reconnaître sa valeur", "Sortir de l'autocritique permanente"],
        atelier: "« Reconstruire le regard que je porte sur moi »" },
      { titre: "Croyances limitantes et changement comportemental",
        points: ["Comment se construisent nos croyances ?", "Influence des expériences vécues et de l'environnement", "Les pensées automatiques", "Identifier les schémas répétitifs", "Développer de nouvelles stratégies mentales et comportementales"],
        atelier: "Identifier et questionner trois croyances limitantes" },
      { titre: "Intelligence émotionnelle",
        points: ["Le rôle et le fonctionnement des émotions", "Identifier ses déclencheurs émotionnels", "Apprendre à réguler ses réactions", "Développer la résilience émotionnelle", "Apprendre à prendre du recul"],
        atelier: "« La carte de mes émotions et de mes réactions »" },
      { titre: "Communication et affirmation de soi",
        points: ["Apprendre à exprimer ses besoins", "Savoir dire non sans culpabiliser", "Développer une communication assertive", "Poser ses limites personnelles", "Gérer les conflits et les désaccords"],
        atelier: "Jeux de rôle et mises en situation" },
      { titre: "Motivation, discipline et passage à l'action",
        points: ["Les mécanismes de la motivation", "Dépasser la procrastination", "Construire de nouvelles habitudes", "Définir des objectifs réalistes", "Développer la discipline personnelle"],
        atelier: "Élaborer son plan d'action personnel à 30 jours" }
    ],
    methode: [
      "Apports théoriques en psychologie et neurosciences appliquées",
      "Exercices individuels d'introspection",
      "Questionnaires d'auto-évaluation à visée pédagogique (non diagnostiques)",
      "Jeux de rôle et mises en situation",
      "Exercices de respiration et de régulation émotionnelle",
      "Travaux en groupe et échanges d'expériences",
      "Plan de progression individuel"
    ],
    inclus: ["Attestation de participation", "Bilan de fin de formation", "Plan d'action personnel à 30 jours"],
    formateur: {
      nom: "Nassima Lamdani",
      titre: "Coach mentale et psychopraticienne en neurosciences appliquées",
      bio: "Neurocoach — centre de thérapie & neurofeedback (Dely Brahim, Alger). Une approche centrée sur la connaissance de soi, le développement des ressources individuelles et l'acquisition de compétences humaines utiles dans la vie personnelle et professionnelle."
    }
  }

];
