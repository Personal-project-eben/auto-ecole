const questions = [

  // ============================================================
  // Chapitre 1 : L'éclairage et la signalisation
  // ============================================================
  {
    id: 1,
    chapter: "L'éclairage et la signalisation",
    image: "images/danger_sign_1781909053839.png",
    text: "Quelle est la particularité des panneaux de danger ?",
    options: [
      "Ils sont ronds et bleus",
      "Ils ont une forme triangulaire, un fond blanc avec un listel rouge",
      "Ils sont placés à 50m en agglomération et 150m en rase campagne",
      "Ce sont des panneaux de position placés à 0m"
    ],
    correctAnswers: [1, 2],
    explanation: "Les panneaux de danger sont triangulaires à bord rouge et placés en amont du danger (50m en ville, 150m hors ville)."
  },
  {
    id: 2,
    chapter: "L'éclairage et la signalisation",
    text: "Qu'indique une ligne jaune continue tracée sur la bordure du trottoir ?",
    options: [
      "Stationnement autorisé",
      "Arrêt et stationnement interdits",
      "Arrêt autorisé",
      "Voie de bus"
    ],
    correctAnswers: [1],
    explanation: "Une ligne jaune continue interdit strictement l'arrêt et le stationnement."
  },
  {
    id: 3,
    chapter: "L'éclairage et la signalisation",
    text: "Quand dois-je utiliser les feux de croisement (codes) ?",
    options: [
      "Pour croiser un autre usager",
      "Dans une agglomération éclairée",
      "Par temps de pluie ou de brouillard",
      "Pour éblouir les autres usagers"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Les feux de croisement éclairent à 30m sans éblouir. Ils s'utilisent pour croiser, en agglomération éclairée, et en cas d'intempéries."
  },
  {
    id: 4,
    chapter: "L'éclairage et la signalisation",
    text: "Si un agent réglant la circulation est vu de face ou de dos, que dois-je faire ?",
    options: [
      "Je m'arrête",
      "Je passe",
      "Je ralentis",
      "Je klaxonne"
    ],
    correctAnswers: [0],
    explanation: "Vu de face ou de dos, l'agent vous ordonne de vous arrêter. Les signes de l'agent prévalent sur toute autre signalisation."
  },
  {
    id: 5,
    chapter: "L'éclairage et la signalisation",
    text: "Quand doit-on utiliser les feux de route (phares) ?",
    options: [
      "En agglomération bien éclairée",
      "Hors agglomération la nuit en l'absence de véhicules en face",
      "Pour dépasser un camion",
      "Lorsqu'un véhicule vient en sens inverse"
    ],
    correctAnswers: [1],
    explanation: "Les feux de route s'utilisent hors agglomération la nuit, quand aucun véhicule ne vient en face. On bascule sur les codes pour croiser."
  },
  {
    id: 6,
    chapter: "L'éclairage et la signalisation",
    text: "Que signifie un panneau rond à fond bleu avec une flèche blanche ?",
    options: [
      "Interdiction de tourner",
      "Sens obligatoire (prescription positive)",
      "Sens unique",
      "Stationnement autorisé"
    ],
    correctAnswers: [1],
    explanation: "Un panneau rond bleu à flèche blanche est un panneau de prescription positive : il indique la direction obligatoire à suivre."
  },
  {
    id: 7,
    chapter: "L'éclairage et la signalisation",
    text: "Que signifie un feu orange clignotant à une intersection ?",
    options: [
      "Arrêt obligatoire",
      "Vous pouvez passer sans ralentir",
      "Ralentir et passer avec prudence",
      "Priorité absolue accordée"
    ],
    correctAnswers: [2],
    explanation: "Un feu orange clignotant signale un danger : vous devez ralentir et vous assurer que le passage est libre avant de traverser."
  },
  {
    id: 8,
    chapter: "L'éclairage et la signalisation",
    text: "Quelle est la portée minimale des feux de croisement (codes) ?",
    options: [
      "15 mètres",
      "30 mètres",
      "50 mètres",
      "100 mètres"
    ],
    correctAnswers: [1],
    explanation: "Les feux de croisement éclairent à au moins 30 mètres sans éblouir le conducteur en face."
  },
  {
    id: 9,
    chapter: "L'éclairage et la signalisation",
    text: "Dans quelle situation le klaxon est-il autorisé en agglomération ?",
    options: [
      "Pour saluer un ami",
      "Pour manifester son impatience",
      "En cas de danger imminent uniquement",
      "Avant de doubler un cycliste"
    ],
    correctAnswers: [2],
    explanation: "En agglomération, le klaxon n'est autorisé qu'en cas de danger imminent. Tout usage non justifié est sanctionné."
  },

  // ============================================================
  // Chapitre 2 : Intersections et Priorité
  // ============================================================
  {
    id: 10,
    chapter: "Intersections et Priorité",
    text: "À une intersection sans signalisation, quelle règle s'applique ?",
    options: [
      "La priorité à droite",
      "La priorité à gauche",
      "Le premier arrivé passe",
      "La règle de courtoisie si la droite n'est pas libre"
    ],
    correctAnswers: [0, 3],
    explanation: "Par défaut, on cède le passage à droite. Si l'intersection est bloquée, on utilise la courtoisie pour se dégager."
  },
  {
    id: 11,
    chapter: "Intersections et Priorité",
    image: "images/stop_sign_1781909042757.png",
    text: "Face à un panneau STOP, que devez-vous faire ?",
    options: [
      "Ralentir et passer",
      "Marquer l'arrêt absolu à la ligne",
      "Céder le passage à droite et à gauche (perte de priorité)",
      "Klaxonner avant de passer"
    ],
    correctAnswers: [1, 2],
    explanation: "Le panneau STOP exige un arrêt obligatoire à la bande blanche et la cession du passage à tous les usagers de la route croisée."
  },
  {
    id: 12,
    chapter: "Intersections et Priorité",
    text: "Que signifie le panneau 'Cédez le passage' (triangle pointe vers le bas) ?",
    options: [
      "Arrêt obligatoire",
      "Priorité absolue accordée",
      "Vous devez laisser passer les usagers de la route principale sans forcément vous arrêter",
      "Voie sans issue"
    ],
    correctAnswers: [2],
    explanation: "Le cédez-le-passage impose de laisser passer sans arrêt forcé, contrairement au STOP qui exige l'arrêt complet."
  },
  {
    id: 13,
    chapter: "Intersections et Priorité",
    text: "À un carrefour à sens giratoire, qui est prioritaire ?",
    options: [
      "Le conducteur qui entre dans le giratoire",
      "Le conducteur qui est déjà dans le giratoire",
      "Celui qui vient de la droite",
      "Le véhicule le plus rapide"
    ],
    correctAnswers: [1],
    explanation: "Dans un giratoire, les véhicules circulant à l'intérieur sont prioritaires sur ceux qui entrent."
  },
  {
    id: 14,
    chapter: "Intersections et Priorité",
    text: "Sur une route à grande circulation (RGC), qui est prioritaire ?",
    options: [
      "Les véhicules venant de la droite",
      "Les véhicules sur la RGC (route principale)",
      "Les véhicules les plus lourds",
      "Les véhicules en montée"
    ],
    correctAnswers: [1],
    explanation: "La route à grande circulation est signalée par des panneaux. Les usagers qui y circulent sont prioritaires sur ceux des voies secondaires."
  },
  {
    id: 15,
    chapter: "Intersections et Priorité",
    text: "Quel panneau indique que vous êtes sur la route prioritaire ?",
    options: [
      "Un triangle rouge",
      "Un panneau carré jaune à fond blanc (passage protégé)",
      "Un panneau rond bleu",
      "Un panneau octogonal rouge"
    ],
    correctAnswers: [1],
    explanation: "Le panneau 'Passage protégé' (losange jaune et blanc) indique que vous êtes prioritaire aux prochains carrefours."
  },

  // ============================================================
  // Chapitre 3 : Croisement et Dépassement
  // ============================================================
  {
    id: 16,
    chapter: "Croisement et Dépassement",
    text: "Quelles précautions prendre avant d'effectuer un dépassement ?",
    options: [
      "S'assurer qu'aucun usager ne vient en face",
      "S'assurer qu'on n'est pas sur le point d'être dépassé (rétroviseurs)",
      "Mettre son clignotant gauche sans regarder",
      "Avoir une vitesse d'accélération suffisante supérieure au véhicule dépassé"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Il faut vérifier l'avant, l'arrière, et avoir une réserve de puissance suffisante pour dépasser rapidement."
  },
  {
    id: 17,
    chapter: "Croisement et Dépassement",
    text: "Dans quels cas le dépassement est-il interdit ?",
    options: [
      "À l'approche d'un sommet de côte",
      "En virage sans visibilité suffisante",
      "Sur une ligne blanche continue",
      "Sur une route droite à deux voies"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Le dépassement est interdit en sommet de côte, en virage, et lorsqu'une ligne blanche continue sépare les voies."
  },
  {
    id: 18,
    chapter: "Croisement et Dépassement",
    text: "Sur une route étroite où deux véhicules se croisent difficilement, qui doit céder la place ?",
    options: [
      "Celui qui monte (le descendant est prioritaire)",
      "Celui qui descend (le montant est prioritaire)",
      "Celui dont le côté droit est dégagé",
      "Le véhicule le plus léger"
    ],
    correctAnswers: [1],
    explanation: "En montagne, c'est le véhicule qui descend qui doit serrer et reculer si nécessaire, car le montant a moins de marge de manœuvre."
  },
  {
    id: 19,
    chapter: "Croisement et Dépassement",
    text: "Quel signal doit-on donner avant de dépasser ?",
    options: [
      "Klaxonner deux fois",
      "Mettre le clignotant gauche",
      "Klaxonner et mettre le clignotant gauche",
      "Faire un appel de phares"
    ],
    correctAnswers: [1],
    explanation: "On doit mettre le clignotant gauche avant de déborder pour dépasser, et le clignotant droit pour revenir dans sa voie."
  },
  {
    id: 20,
    chapter: "Croisement et Dépassement",
    text: "Quelle distance latérale minimale doit-on respecter pour dépasser un cycliste ?",
    options: [
      "0,5 mètre",
      "1 mètre en agglomération",
      "1,5 mètre hors agglomération",
      "B et C"
    ],
    correctAnswers: [3],
    explanation: "Il faut laisser au moins 1m en ville et 1,5m hors agglomération entre le véhicule et le cycliste lors du dépassement."
  },

  // ============================================================
  // Chapitre 4 : Arrêt et Stationnement
  // ============================================================
  {
    id: 21,
    chapter: "Arrêt et Stationnement",
    text: "Qu'est-ce qu'un stationnement abusif ?",
    options: [
      "Stationner sur un passage piéton",
      "Immobiliser son véhicule au même endroit sur la voie publique pendant plus de 7 jours",
      "Stationner en double file",
      "Stationner devant un garage"
    ],
    correctAnswers: [1],
    explanation: "Le stationnement de plus de 7 jours consécutifs sur un même lieu public est considéré comme abusif."
  },
  {
    id: 22,
    chapter: "Arrêt et Stationnement",
    text: "Où l'arrêt et le stationnement sont-ils formellement interdits ?",
    options: [
      "Sur un passage à niveau",
      "Devant une entrée de garage",
      "Sur un pont",
      "Toutes ces réponses"
    ],
    correctAnswers: [3],
    explanation: "L'arrêt et le stationnement sont interdits sur les passages à niveau, devant les garages, sur les ponts étroits et en bien d'autres endroits."
  },
  {
    id: 23,
    chapter: "Arrêt et Stationnement",
    text: "Quelle est la différence entre l'arrêt et le stationnement ?",
    options: [
      "L'arrêt est volontaire, le stationnement est forcé",
      "L'arrêt est bref (conducteur présent/prêt à repartir), le stationnement est plus long",
      "Il n'y a aucune différence",
      "Le stationnement dure moins de 5 minutes"
    ],
    correctAnswers: [1],
    explanation: "L'arrêt est une immobilisation brève avec conducteur à bord prêt à partir. Le stationnement est plus long ou avec le conducteur absent."
  },
  {
    id: 24,
    chapter: "Arrêt et Stationnement",
    text: "À quelle distance d'un feu tricolore le stationnement est-il interdit ?",
    options: [
      "5 mètres",
      "10 mètres",
      "15 mètres",
      "20 mètres"
    ],
    correctAnswers: [1],
    explanation: "Il est interdit de stationner à moins de 10 mètres d'un feu tricolore ou d'un panneau de signalisation."
  },
  {
    id: 25,
    chapter: "Arrêt et Stationnement",
    text: "En cas de stationnement de nuit sans éclairage public, que faut-il faire ?",
    options: [
      "Laisser les feux de position allumés toute la nuit",
      "Garer le véhicule avec les roues côté trottoir en retrait de la chaussée",
      "Placer un triangle de signalisation",
      "Mettre les feux de détresse"
    ],
    correctAnswers: [1],
    explanation: "La nuit sans éclairage, les roues du côté de la chaussée doivent être en retrait de la voie. Les feux de position peuvent être requis selon la visibilité."
  },

  // ============================================================
  // Chapitre 5 : Le Véhicule
  // ============================================================
  {
    id: 26,
    chapter: "Le Véhicule",
    text: "Quels sont les documents obligatoires à bord d'un véhicule ?",
    options: [
      "La carte grise (certificat d'immatriculation)",
      "L'attestation d'assurance",
      "La visite technique périodique",
      "La facture d'achat"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Sont obligatoires : Carte grise, Assurance, Visite technique (et vignette/permis)."
  },
  {
    id: 27,
    chapter: "Le Véhicule",
    text: "Quelle est la pression réglementaire des pneumatiques ?",
    options: [
      "Elle est identique pour tous les véhicules",
      "Elle est indiquée dans le manuel du constructeur ou sur la portière",
      "Elle doit toujours être de 2 bars",
      "Elle ne se contrôle qu'à la révision annuelle"
    ],
    correctAnswers: [1],
    explanation: "La pression recommandée varie selon le véhicule et la charge. Elle est indiquée par le constructeur (portière, coffre ou notice)."
  },
  {
    id: 28,
    chapter: "Le Véhicule",
    text: "Quel est l'effet d'un sous-gonflage des pneus ?",
    options: [
      "Réduction de la consommation de carburant",
      "Meilleure tenue de route",
      "Usure prématurée des flancs et risque d'éclatement",
      "Réduction de la distance de freinage"
    ],
    correctAnswers: [2],
    explanation: "Un pneu sous-gonflé s'use davantage sur les bords, chauffe excessivement à haute vitesse et peut éclater."
  },
  {
    id: 29,
    chapter: "Le Véhicule",
    text: "Qu'indique le voyant rouge en forme de batterie sur le tableau de bord ?",
    options: [
      "Batterie pleine",
      "Défaillance du circuit de charge (alternateur ou courroie)",
      "Manque d'huile",
      "Problème de frein"
    ],
    correctAnswers: [1],
    explanation: "Ce voyant allumé signale que la batterie ne se recharge plus (alternateur défaillant ou courroie cassée). Il faut s'arrêter rapidement."
  },
  {
    id: 30,
    chapter: "Le Véhicule",
    text: "Quelle est la charge maximale autorisée sur le toit d'un véhicule ordinaire ?",
    options: [
      "50 kg",
      "75 kg",
      "Elle est indiquée par le constructeur, généralement entre 50 et 100 kg",
      "Il n'y a aucune limite réglementaire"
    ],
    correctAnswers: [2],
    explanation: "La charge sur le toit est définie par le constructeur. Un dépassement affecte la stabilité et peut entraîner des sanctions."
  },
  {
    id: 31,
    chapter: "Le Véhicule",
    text: "À quoi sert la ceinture de sécurité ?",
    options: [
      "À maintenir le conducteur en position correcte",
      "À retenir le conducteur et les passagers en cas de choc ou freinage brutal",
      "À éviter les amendes",
      "À et B"
    ],
    correctAnswers: [3],
    explanation: "La ceinture de sécurité maintient les occupants en position et les protège lors d'un choc, réduisant considérablement les risques de décès."
  },

  // ============================================================
  // Chapitre 6 : Route et Autoroute
  // ============================================================
  {
    id: 32,
    chapter: "Route et Autoroute",
    image: "images/speed_limit_sign_1781909065949.png",
    text: "Sur une autoroute en conditions normales, la vitesse maximale est de :",
    options: [
      "110 km/h",
      "130 km/h",
      "90 km/h",
      "150 km/h"
    ],
    correctAnswers: [1],
    explanation: "Sauf indication contraire ou intempéries (110 km/h), la vitesse maximale est de 130 km/h sur autoroute."
  },
  {
    id: 33,
    chapter: "Route et Autoroute",
    text: "Quelles manœuvres sont strictement interdites sur l'autoroute ?",
    options: [
      "Faire une marche arrière",
      "S'arrêter sur la bande d'arrêt d'urgence en cas de panne",
      "Faire un demi-tour",
      "Traverser le terre-plein central"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Il est interdit de faire demi-tour, marche arrière ou traverser le terre-plein central. L'arrêt d'urgence est autorisé SEULEMENT en cas de panne ou malaise."
  },
  {
    id: 34,
    chapter: "Route et Autoroute",
    text: "Quelle est la vitesse maximale autorisée en agglomération par défaut ?",
    options: [
      "30 km/h",
      "50 km/h",
      "70 km/h",
      "90 km/h"
    ],
    correctAnswers: [1],
    explanation: "En agglomération, la vitesse maximale par défaut est de 50 km/h, sauf panneau contraire."
  },
  {
    id: 35,
    chapter: "Route et Autoroute",
    text: "Quelle est la vitesse maximale hors agglomération sur une route ordinaire à deux voies ?",
    options: [
      "70 km/h",
      "80 km/h",
      "90 km/h",
      "110 km/h"
    ],
    correctAnswers: [2],
    explanation: "Hors agglomération sur une route ordinaire, la vitesse maximale est de 90 km/h (80 km/h en France depuis 2018 sur les routes à double sens sans séparateur)."
  },
  {
    id: 36,
    chapter: "Route et Autoroute",
    text: "Que doit faire un conducteur dont le véhicule tombe en panne sur l'autoroute ?",
    options: [
      "Rester dans son véhicule les feux de croisement allumés",
      "Sortir le triangle de signalisation et les gilets réfléchissants, puis se mettre en sécurité derrière la glissière",
      "Pousser son véhicule sur la voie de dépassement",
      "Attendre dans le véhicule sans rien faire"
    ],
    correctAnswers: [1],
    explanation: "En cas de panne sur autoroute : placer le triangle, enfiler le gilet, contacter les secours par la borne d'appel et s'éloigner du véhicule derrière la glissière."
  },
  {
    id: 37,
    chapter: "Route et Autoroute",
    text: "Quelle distance de sécurité faut-il respecter sur autoroute à 130 km/h ?",
    options: [
      "50 mètres",
      "100 mètres (2 secondes environ)",
      "130 mètres (distance = vitesse en mètres)",
      "200 mètres"
    ],
    correctAnswers: [2],
    explanation: "La règle est d'appliquer une distance de sécurité égale à la vitesse en mètres. À 130 km/h, c'est environ 130 m (3 secondes)."
  },

  // ============================================================
  // Chapitre 7 : Freinage et Dérapage
  // ============================================================
  {
    id: 38,
    chapter: "Freinage et Dérapage",
    text: "Comment calcule-t-on la distance d'arrêt approximative à 60 km/h ?",
    options: [
      "6 x 3 = 18 mètres",
      "6 x 6 = 36 mètres",
      "60 / 2 = 30 mètres",
      "18 + 18 = 36 mètres"
    ],
    correctAnswers: [1],
    explanation: "La distance d'arrêt se calcule en multipliant le chiffre des dizaines par lui-même (6x6 = 36m)."
  },
  {
    id: 39,
    chapter: "Freinage et Dérapage",
    text: "Qu'est-ce que la distance de réaction ?",
    options: [
      "La distance parcourue pendant le freinage",
      "La distance parcourue entre la perception du danger et l'action sur la pédale de frein",
      "La distance d'arrêt totale",
      "La distance entre deux véhicules"
    ],
    correctAnswers: [1],
    explanation: "La distance de réaction correspond au chemin parcouru entre le moment où le conducteur perçoit le danger et celui où il appuie sur le frein (environ 1 seconde)."
  },
  {
    id: 40,
    chapter: "Freinage et Dérapage",
    text: "Comment la distance d'arrêt évolue-t-elle quand la vitesse double ?",
    options: [
      "Elle double aussi",
      "Elle est multipliée par 3",
      "Elle est multipliée par 4",
      "Elle reste la même"
    ],
    correctAnswers: [2],
    explanation: "La distance de freinage est proportionnelle au carré de la vitesse. Si la vitesse double, la distance d'arrêt est multipliée par 4."
  },
  {
    id: 41,
    chapter: "Freinage et Dérapage",
    text: "Que faire en cas de dérapage de l'avant du véhicule (sous-virage) ?",
    options: [
      "Accélérer brusquement",
      "Braquer fortement dans le sens du virage",
      "Relâcher l'accélérateur progressivement et regarder où l'on veut aller",
      "Freiner en urgence"
    ],
    correctAnswers: [2],
    explanation: "En cas de sous-virage (l'avant part tout droit), relâcher progressivement l'accélérateur et regarder la trajectoire souhaitée permet au véhicule de retrouver son adhérence."
  },
  {
    id: 42,
    chapter: "Freinage et Dérapage",
    text: "Que faire en cas de dérapage de l'arrière du véhicule (survirage) ?",
    options: [
      "Contrebraquer (braquer dans le sens du dérapage de l'arrière)",
      "Freiner brusquement",
      "Accélérer à fond",
      "Braquer dans le sens opposé au dérapage"
    ],
    correctAnswers: [0],
    explanation: "En survirage, l'arrière part vers l'extérieur. Il faut contrebraquer (tourner le volant dans le sens où part l'arrière) et relâcher l'accélérateur."
  },
  {
    id: 43,
    chapter: "Freinage et Dérapage",
    text: "Quelle est la distance d'arrêt approximative à 90 km/h (piste sèche) ?",
    options: [
      "45 mètres",
      "60 mètres",
      "81 mètres",
      "100 mètres"
    ],
    correctAnswers: [2],
    explanation: "À 90 km/h : 9 x 9 = 81 mètres. Auxquels s'ajoute la distance de réaction (~25m), soit environ 106m au total."
  },

  // ============================================================
  // Chapitre 8 : Catégories de Permis
  // ============================================================
  {
    id: 44,
    chapter: "Catégories de Permis",
    text: "Que permet de conduire le permis B ?",
    options: [
      "Un véhicule affecté au transport de personnes ou marchandises",
      "Un véhicule dont le PTAC ne dépasse pas 3,5 tonnes",
      "Un véhicule comportant 8 places au maximum (sans compter le conducteur)",
      "Un poids lourd de 18 tonnes"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Le permis B est limité à 3,5T et 8 places passagers maximum."
  },
  {
    id: 45,
    chapter: "Catégories de Permis",
    text: "Quel permis est nécessaire pour conduire une moto de plus de 125 cm³ ?",
    options: [
      "Permis A1",
      "Permis A2",
      "Permis A",
      "Permis B"
    ],
    correctAnswers: [2],
    explanation: "Le permis A (sans restriction de cylindrée) est requis pour les motos de plus de 35 kW, accessible à partir de 24 ans ou après 2 ans de permis A2."
  },
  {
    id: 46,
    chapter: "Catégories de Permis",
    text: "Quel permis autorise la conduite d'un poids lourd de transport de marchandises (PTAC > 3,5T) ?",
    options: [
      "Permis B",
      "Permis C",
      "Permis D",
      "Permis BE"
    ],
    correctAnswers: [1],
    explanation: "Le permis C est requis pour les camions dont le PTAC dépasse 3,5 tonnes. Le permis D concerne les transports en commun de personnes."
  },
  {
    id: 47,
    chapter: "Catégories de Permis",
    text: "Quel document remplace le permis de conduire à l'étranger pour un ressortissant ?",
    options: [
      "La carte d'identité nationale",
      "Le permis de conduire international",
      "La carte grise",
      "Le passeport"
    ],
    correctAnswers: [1],
    explanation: "Le permis international (ou permis de conduire traduit) est requis dans de nombreux pays hors Union Européenne pour conduire légalement."
  },

  // ============================================================
  // Chapitre 9 : Infractions
  // ============================================================
  {
    id: 48,
    chapter: "Infractions",
    text: "Lesquelles de ces infractions peuvent donner lieu à la suspension du permis de conduire ?",
    options: [
      "Délit de fuite",
      "Conduire avec des chaussures non conformes",
      "Conduire en sens interdit",
      "Non-respect de l'arrêt au feu rouge ou au stop"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Le non-respect absolu (feu rouge, sens interdit, délit de fuite) est lourdement sanctionné."
  },
  {
    id: 49,
    chapter: "Infractions",
    text: "Qu'est-ce qu'un excès de vitesse 'grand excès' (dépassement important) ?",
    options: [
      "Dépasser de 10 km/h la limitation",
      "Dépasser de 50 km/h et plus la vitesse maximale autorisée",
      "Rouler à 90 km/h sur une route limitée à 80 km/h",
      "Rouler vite la nuit"
    ],
    correctAnswers: [1],
    explanation: "Un dépassement de 50 km/h ou plus constitue un grand excès de vitesse entraînant suspension immédiate du permis et risque d'emprisonnement."
  },
  {
    id: 50,
    chapter: "Infractions",
    text: "Quelle infraction entraîne une rétention immédiate du permis de conduire ?",
    options: [
      "Un stationnement interdit",
      "Un refus de priorité",
      "Un taux d'alcoolémie supérieur ou égal à 0,8 g/l de sang",
      "L'utilisation du téléphone au volant"
    ],
    correctAnswers: [2],
    explanation: "Au-delà de 0,8 g/l de sang (délit), les forces de l'ordre peuvent procéder à la rétention immédiate du permis."
  },
  {
    id: 51,
    chapter: "Infractions",
    text: "L'utilisation du téléphone tenu en main au volant est :",
    options: [
      "Autorisée si vous êtes à l'arrêt",
      "Une infraction sanctionnée d'une amende et d'un retrait de points",
      "Permise sur autoroute",
      "Autorisée en kit mains libres uniquement"
    ],
    correctAnswers: [1],
    explanation: "Tenir son téléphone en main en conduisant est interdit. L'usage en kit mains libres est toléré, mais le téléphone en main est verbalisable même à l'arrêt moteur tournant."
  },
  {
    id: 52,
    chapter: "Infractions",
    text: "Le délit de fuite après un accident est puni de :",
    options: [
      "Une simple amende",
      "Un retrait de 3 points",
      "Emprisonnement et retrait du permis",
      "Aucune sanction si personne n'est blessé"
    ],
    correctAnswers: [2],
    explanation: "Le délit de fuite est un délit pénal passible de prison, d'une lourde amende et du retrait du permis."
  },

  // ============================================================
  // Chapitre 10 : Accidents et Secourisme
  // ============================================================
  {
    id: 53,
    chapter: "Accidents et Secourisme",
    text: "Quels sont les 3 gestes qui s'imposent face à un accident (PAS) ?",
    options: [
      "Protéger",
      "Alerter",
      "S'enfuir",
      "Secourir"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Protéger (éviter le sur-accident), Alerter (les secours) et Secourir (gestes de premiers secours)."
  },
  {
    id: 54,
    chapter: "Accidents et Secourisme",
    text: "Que faire face à une victime d'accident en état de choc ou gravement blessée avant l'arrivée des secours ?",
    options: [
      "Lui donner à boire",
      "Déplacer le blessé pour le mettre à l'ombre",
      "Ne pas la déplacer sauf en cas d'incendie",
      "Rassurer la victime"
    ],
    correctAnswers: [2, 3],
    explanation: "Il ne faut jamais donner à boire à un blessé grave, ni le déplacer (sauf danger mortel immédiat comme un incendie)."
  },
  {
    id: 55,
    chapter: "Accidents et Secourisme",
    text: "À partir de quel taux d'alcool dans le sang est-on en situation de délit (suspension de permis) ?",
    options: [
      "0,2 g/l",
      "0,5 g/l",
      "0,8 g/l",
      "1,0 g/l"
    ],
    correctAnswers: [2],
    explanation: "À 0,5 g/l c'est une infraction, mais à 0,8 g/l c'est un délit (amendes, emprisonnement, suspension de permis)."
  },
  {
    id: 56,
    chapter: "Accidents et Secourisme",
    text: "Quel est le numéro d'urgence du SAMU (Service d'Aide Médicale Urgente) ?",
    options: [
      "17",
      "15",
      "18",
      "112"
    ],
    correctAnswers: [1],
    explanation: "Le 15 est le SAMU (urgences médicales). Le 17 est la Police, le 18 les Pompiers et le 112 le numéro européen d'urgence."
  },
  {
    id: 57,
    chapter: "Accidents et Secourisme",
    text: "Qu'est-ce que la position latérale de sécurité (PLS) ?",
    options: [
      "On allonge la victime sur le dos, bras le long du corps",
      "On retourne la victime inconsciente qui respire sur le côté pour éviter l'étouffement",
      "On redresse la victime en position assise",
      "On ne touche pas à la victime"
    ],
    correctAnswers: [1],
    explanation: "La PLS consiste à placer une victime inconsciente mais respirante sur le côté pour éviter qu'elle ne s'étouffe avec sa langue ou des vomissements."
  },
  {
    id: 58,
    chapter: "Accidents et Secourisme",
    text: "Avant de protéger les lieux d'un accident, quels équipements de sécurité devez-vous utiliser ?",
    options: [
      "Des lunettes de soleil",
      "Un gilet de haute visibilité (gilet réfléchissant)",
      "Le triangle de présignalisation",
      "B et C"
    ],
    correctAnswers: [3],
    explanation: "Avant de placer le triangle (à 30m minimum en agglomération, 100m hors agglomération), on enfile le gilet réfléchissant pour être visible."
  },
  {
    id: 59,
    chapter: "Accidents et Secourisme",
    text: "Que faire si une personne est en arrêt cardio-respiratoire ?",
    options: [
      "Attendre les secours sans intervenir",
      "Lui donner de l'eau pour la réveiller",
      "Pratiquer la réanimation cardio-pulmonaire (RCP) : compressions thoraciques et bouche-à-bouche",
      "La déplacer vers un endroit ombragé"
    ],
    correctAnswers: [2],
    explanation: "En cas d'arrêt cardiaque, démarrer immédiatement la RCP (30 compressions thoraciques + 2 insufflations) en attendant les secours."
  },

  // ============================================================
  // Chapitre 11 : Notion de Mécanique
  // ============================================================
  {
    id: 60,
    chapter: "Notion de Mécanique",
    text: "Quels sont les 4 temps d'un moteur ?",
    options: [
      "Admission",
      "Compression",
      "Accélération",
      "Explosion et Échappement"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Les 4 temps sont : Admission, Compression, Explosion (combustion), Échappement."
  },
  {
    id: 61,
    chapter: "Notion de Mécanique",
    text: "Quelle est la conséquence d'un manque d'huile dans le moteur ?",
    options: [
      "Bielle coulée",
      "Joint de culasse brûlé",
      "Moteur bloqué",
      "Meilleure aération du moteur"
    ],
    correctAnswers: [0, 2],
    explanation: "Le manque d'huile empêche le graissage, ce qui entraîne le grippage : bielle coulée ou moteur bloqué."
  },
  {
    id: 62,
    chapter: "Notion de Mécanique",
    text: "Quel organe distribue le courant électrique à chaque bougie ?",
    options: [
      "Le carburateur",
      "La batterie",
      "L'allumeur (distributeur / delco)",
      "L'alternateur"
    ],
    correctAnswers: [2],
    explanation: "C'est l'allumeur qui répartit la haute tension vers chaque bougie pour créer l'étincelle d'allumage."
  },
  {
    id: 63,
    chapter: "Notion de Mécanique",
    text: "Quel est le rôle de l'alternateur ?",
    options: [
      "Refroidir le moteur",
      "Produire le courant électrique pour recharger la batterie quand le moteur tourne",
      "Distribuer le carburant aux cylindres",
      "Filtrer l'huile"
    ],
    correctAnswers: [1],
    explanation: "L'alternateur génère du courant alternatif, converti en courant continu pour recharger la batterie et alimenter les équipements électriques."
  },
  {
    id: 64,
    chapter: "Notion de Mécanique",
    text: "À quoi sert le thermostat dans un moteur ?",
    options: [
      "À mesurer la vitesse du véhicule",
      "À réguler la température du moteur en contrôlant la circulation du liquide de refroidissement",
      "À filtrer l'air entrant dans le moteur",
      "À ajuster la pression des pneus"
    ],
    correctAnswers: [1],
    explanation: "Le thermostat régule la température en maintenant le liquide de refroidissement dans le moteur jusqu'à ce qu'il atteigne sa température de fonctionnement optimale."
  },
  {
    id: 65,
    chapter: "Notion de Mécanique",
    text: "Que se passe-t-il si le liquide de refroidissement est insuffisant ?",
    options: [
      "Le moteur surconsomme du carburant",
      "Le moteur surchauffe, risquant d'endommager le joint de culasse",
      "La direction devient difficile",
      "Les freins perdent en efficacité"
    ],
    correctAnswers: [1],
    explanation: "Sans liquide de refroidissement suffisant, la chaleur n'est pas évacuée. Le moteur surchauffe et peut griller le joint de culasse."
  },
  {
    id: 66,
    chapter: "Notion de Mécanique",
    text: "Quelle est la fonction de la courroie de distribution ?",
    options: [
      "Relier le moteur à la boîte de vitesses",
      "Synchroniser la rotation du vilebrequin et de l'arbre à cames",
      "Actionner l'alternateur",
      "Refroidir le moteur"
    ],
    correctAnswers: [1],
    explanation: "La courroie de distribution synchronise le vilebrequin et l'arbre à cames. Sa rupture peut provoquer une destruction totale du moteur."
  },

  // ============================================================
  // Chapitre 12 : Les Piétons et Usagers Vulnérables
  // ============================================================
  {
    id: 67,
    chapter: "Les Piétons et Usagers Vulnérables",
    text: "Face à un piéton sur un passage protégé (zébré), que doit faire le conducteur ?",
    options: [
      "Accélérer pour passer avant le piéton",
      "Klaxonner pour avertir le piéton",
      "Céder le passage au piéton qui est engagé ou sur le point de s'engager",
      "Continuer à vitesse réduite"
    ],
    correctAnswers: [2],
    explanation: "Le piéton engagé sur un passage piéton est prioritaire. Le conducteur doit s'arrêter et lui céder le passage."
  },
  {
    id: 68,
    chapter: "Les Piétons et Usagers Vulnérables",
    text: "Quelle distance de sécurité latérale doit-on respecter en croisant ou dépassant un cycliste ?",
    options: [
      "0,5 m en agglomération",
      "1 m en agglomération, 1,5 m hors agglomération",
      "2 m dans tous les cas",
      "Aucune distance particulière n'est requise"
    ],
    correctAnswers: [1],
    explanation: "La loi impose 1m de dégagement latéral en agglomération et 1,5m hors agglomération lors du croisement ou dépassement d'un cycliste."
  },
  {
    id: 69,
    chapter: "Les Piétons et Usagers Vulnérables",
    text: "Où un piéton doit-il marcher sur une route sans trottoir ?",
    options: [
      "Au milieu de la chaussée",
      "À droite, dans le sens de circulation",
      "À gauche, face à la circulation venant en face",
      "Sur le côté droit en portant un gilet fluorescent"
    ],
    correctAnswers: [2],
    explanation: "Sur une route sans trottoir, le piéton marche à gauche, face aux véhicules, afin de voir les dangers venir en face."
  },

  // ============================================================
  // Chapitre 13 : Environnement et Écologie
  // ============================================================
  {
    id: 70,
    chapter: "Environnement et Écologie",
    text: "Quelle pratique de conduite permet de réduire la consommation de carburant ?",
    options: [
      "Accélérer et freiner brusquement",
      "Maintenir une vitesse élevée en permanence",
      "Anticiper les ralentissements, maintenir une allure régulière et couper le moteur à l'arrêt prolongé",
      "Laisser le moteur tourner à l'arrêt pour le chauffer"
    ],
    correctAnswers: [2],
    explanation: "L'éco-conduite consiste à anticiper, maintenir une vitesse régulière, éviter les accélérations/freinages brusques et couper le moteur lors des arrêts prolongés."
  },
  {
    id: 71,
    chapter: "Environnement et Écologie",
    text: "Qu'est-ce que le co-voiturage permet de réduire ?",
    options: [
      "Les embouteillages uniquement",
      "Les émissions de CO2 et les coûts de déplacement par personne",
      "La durée du trajet",
      "La maintenance des véhicules"
    ],
    correctAnswers: [1],
    explanation: "Le covoiturage partage les frais et les émissions entre plusieurs personnes, réduisant l'empreinte carbone par voyageur et les embouteillages."
  },

  // ============================================================
  // Questions complémentaires mixtes
  // ============================================================
  {
    id: 72,
    chapter: "L'éclairage et la signalisation",
    text: "Quelle est la signification d'une ligne discontinue (tirets) au centre de la chaussée ?",
    options: [
      "Dépassement interdit",
      "Dépassement autorisé si la sécurité le permet",
      "Voie réservée aux bus",
      "Limite de vitesse"
    ],
    correctAnswers: [1],
    explanation: "Une ligne blanche discontinue indique que le dépassement est autorisé, sous réserve que la sécurité soit assurée (visibilité suffisante, voie libre)."
  },
  {
    id: 73,
    chapter: "Intersections et Priorité",
    text: "Un véhicule de transport en commun (bus) signalant sa sortie d'arrêt avec son clignotant gauche :",
    options: [
      "Doit attendre que toute la circulation soit libre",
      "Doit être laissé passer par les conducteurs arrivant derrière lui en agglomération",
      "Est prioritaire sur les véhicules arrivant en face",
      "N'a aucune priorité particulière"
    ],
    correctAnswers: [1],
    explanation: "En agglomération, les conducteurs doivent laisser passer les bus qui signalent leur départ d'arrêt. C'est une priorité accordée aux transports en commun."
  },
  {
    id: 74,
    chapter: "Freinage et Dérapage",
    text: "Quel est l'effet de la pluie sur la distance de freinage ?",
    options: [
      "La distance de freinage est inchangée",
      "La distance de freinage est réduite",
      "La distance de freinage peut doubler ou plus",
      "La distance de freinage dépend uniquement du type de frein"
    ],
    correctAnswers: [2],
    explanation: "Sur chaussée mouillée, l'adhérence des pneus diminue, ce qui peut multiplier la distance de freinage par 2 ou plus selon l'état des pneus et la vitesse."
  },
  {
    id: 75,
    chapter: "Accidents et Secourisme",
    text: "Quel numéro appeler en cas d'accident avec victimes graves ?",
    options: [
      "15 (SAMU) ou 18 (Pompiers) ou 112 (numéro européen)",
      "17 (Police) uniquement",
      "Appeler un ami d'abord",
      "Attendre qu'un autre automobiliste s'arrête"
    ],
    correctAnswers: [0],
    explanation: "En cas d'accident grave, composez le 15 (SAMU), le 18 (Pompiers) ou le 112 (numéro européen d'urgence, disponible partout)."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
