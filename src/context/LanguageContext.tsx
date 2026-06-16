import React, { createContext, useContext, useState, useEffect } from 'react';
import { mountainPackages, wildlifePackages, dayTrips, combinedPackages, galleryItems, testimonials, faqItems } from '../data';
import { MountainPackage, WildlifePackage, DayTrip, CombinedPackage, Testimonial, FAQItem } from '../types';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getMountainPackages: () => MountainPackage[];
  getWildlifePackages: () => WildlifePackage[];
  getDayTrips: () => DayTrip[];
  getCombinedPackages: () => CombinedPackage[];
  getTestimonials: () => Testimonial[];
  getFaqItems: () => FAQItem[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Core translation values
const dictionary: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.kilimanjaro': 'Chaka Safaris & Hiking',
    'nav.safaris': 'Mountain Experiences',
    'nav.contact': 'Contact',
    'nav.dayTrips': 'Day Trips',
    'nav.combined': 'Combined Packages',
    'nav.faq': 'FAQ',
    'nav.booking': 'Book Now',
    'nav.bookingForm': 'Booking Form',

    // Hero Section
    'hero.badge': 'Arusha, Tanzania',
    'hero.title': 'Explore Tanzania with',
    'hero.subtitle': 'Unforgettable safari and hiking experiences in the heart of Tanzania. Discover waterfalls, wildlife, hot springs, and authentic local culture with trusted local guides.',
    'hero.exploreBttn': 'Explore Our Tours',
    'hero.whatsappBttn': 'Chat on WhatsApp',

    // About Section
    'about.badge': 'About Us',
    'about.title': 'Your Local Experts in Safari & Hiking Adventures',
    'about.lead1': 'Chaka Safaris & Hiking is a locally owned tour company based in Arusha, Tanzania. We specialize in providing authentic and memorable travel experiences for visitors from around the world.',
    'about.lead2': 'Our team is passionate about nature, adventure, and hospitality. Whether you want to hike to beautiful waterfalls, relax in natural hot springs, or explore Tanzania’s wildlife, we are here to make your journey safe, enjoyable, and unforgettable.',
    'about.chooseTitle': 'Why Travelers Choose Chaka Safaris',
    'about.why.guides': 'Experienced Local Guides',
    'about.why.guides_desc': 'Our certified, English-speaking guides are native Tanzanians who know every secret animal pathway and mountain slope.',
    'about.why.success': 'High Summit Success Rate',
    'about.why.success_desc': 'With safety-first protocols, pulse checks, and structured pacing, we guide hundreds of climbers happily to Uhuru Peak.',
    'about.why.flexible': 'Affordable & Flexible',
    'about.why.flexible_desc': 'Premium customizable itineraries and flexible payment plans tailored perfectly to your individual budget limits.',
    'about.why.service': 'Personalized Service',
    'about.why.service_desc': 'From initial call to safari wrap-up, you will be accompanied by genuine Tanzanian hospitality (Karibu Sana!).',
    'about.why.transport': 'Safe & Reliable Transport',
    'about.why.transport_desc': 'We maintain our own luxury customized 4x4 open-roof safari Land Cruisers and secure private transfers 24/7.',
    'about.why.authentic': 'Authentic Experiences',
    'about.why.authentic_desc': 'Cultural integrations, traditional Chagga coffee-making chants, and ethical wild encounters that touch your soul.',

    // Quote Section
    'quote.quote': '“We don’t just offer tours — we create lifetime experiences.”',
    'quote.author': 'Chaka Safaris & Hiking Team • Arusha, Tanzania',

    // How to book
    'how.badge': 'Smooth Process',
    'how.title': 'How to Book',
    'how.subtitle': 'Booking your trip with us is simple:',
    'how.step1.title': 'Choose your favorite tour',
    'how.step1.desc': 'Pick from our curated waterfalls, wild safaris, local hikes or customize one!',
    'how.step2.title': 'Contact us via WhatsApp or Email',
    'how.step2.desc': 'Send us a direct message with your group details and preferred tour dates.',
    'how.step3.title': 'Confirm your booking',
    'how.step3.desc': 'We will finalize all travel plans, equipment, transfers and lock in dates.',
    'how.step4.title': 'Enjoy your adventure!',
    'how.step4.desc': 'Pack your bags and meet our friendly professional local guides in Arusha.',
    'how.bttn': 'Book Now via WhatsApp',

    // Floating Button
    'float.speak': 'Speak Live in Arusha 💬',

    // Top Tours / Shared buttons
    'tours.badge': 'Handpicked Experiences 🗺️',
    'tours.title': 'Our Highlight Adventures',
    'tours.subtitle': 'These are our highly recommended, traveler-tested core Tanzanian experiences.',
    'tours.bestSeller': 'Best Seller',
    'tours.popular': 'Popular',
    'tours.duration': 'Duration',
    'tours.startingFrom': 'Starting from',
    'tours.bookNow': 'Book Now',
    'tours.viewDetails': 'View Details',
    'tours.whatsappInquire': 'Inquire on WhatsApp',
    'tours.whatIncluded': 'What’s Included',
    'tours.keyFeatures': 'Key Features',

    // Gallery
    'gallery.badge': 'Memories Capture ✨',
    'gallery.title': 'Our Adventure Gallery',
    'gallery.subtitle': 'Authentic photos shared by our happy travelers and skilled guides during our safaris and climbs.',
    'gallery.cat.all': 'All Pics',
    'gallery.cat.wildlife': 'Wildlife',
    'gallery.cat.kilimanjaro': 'Kilimanjaro',
    'gallery.cat.waterfalls': 'Waterfalls',
    'gallery.cat.hotsprings': 'Hot Springs',
    'gallery.cat.safari': 'Safari Moments',
    'gallery.cat.happy': 'Happy Travelers',
    'gallery.lightbox.desc': 'We carry professional cameras on all tours to take perfect memories for you.',
    'gallery.lightbox.close': 'Close Viewer',

    // FAQ Section
    'faq.badge': 'Common Questions 🙋‍♂️',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'All the essential information you need to prepare for your incredible Tanzanian getaway.',
    'faq.cat.all': 'All FAQs',
    'faq.cat.general': 'General Questions',
    'faq.cat.kilimanjaro': 'Kilimanjaro Climbing',
    'faq.cat.safari': 'Wildlife Safaris',
    'faq.cat.booking': 'Booking & Payments',

    // Testimonials
    'test.badge': 'Client Love Stories ❤️',
    'test.title': 'Review Testimonials',
    'test.subtitle': 'Hear directly from our global family of hikers and safari lovers who scaled summits and tracked lions with us.',

    // Contact
    'contact.badge': 'Get In Touch 📍',
    'contact.title': 'Contact Chaka Safaris',
    'contact.subtitle': 'Our staff is always ready to assist. Contact us on WhatsApp or Email for instant custom planning.',
    'contact.card.title': 'Chaka Safaris Office',
    'contact.card.loc': 'Arusha, Tanzania',
    'contact.label.loc': 'Headquarters Location',
    'contact.val.loc': 'Saba Saba Road, Arusha, Tanzania',
    'contact.val.loc_sub': 'Opposite Arusha Cultural Museum (Gate #3)',
    'contact.label.phone': 'WhatsApp and Mobile Call',
    'contact.label.email': 'Official Email handles',
    'contact.socials': 'Follow our adventures on socials:',

    // Booking Modal
    'modal.title': 'Begin Your Adventure',
    'modal.subtitle': 'Fill out this quick form or connect instantly via WhatsApp for customized planning.',
    'modal.label.name': 'Full Name',
    'modal.label.email': 'Email Address',
    'modal.label.phone': 'WhatsApp / Phone Number',
    'modal.label.type': 'What are you interested in?',
    'modal.label.type.kili': 'Mount Kilimanjaro Climbing 🏔️',
    'modal.label.type.safari': 'Wildlife Safari Adventures 🦁',
    'modal.label.type.daytrip': 'Arusha Day Excursions 🌴',
    'modal.label.type.combined': 'Ultimate Combined Package 🗺️',
    'modal.label.type.custom': 'Tailor-made Custom Itinerary 🎨',
    'modal.label.package': 'Selected Tour Package',
    'modal.label.package.custom': 'Custom/Tailored Theme Plan',
    'modal.label.date': 'Estimated Travel Date',
    'modal.label.travelers': 'Number of Travelers',
    'modal.label.requests': 'Special Requests / Dietary Needs / Budget Limits',
    'modal.placeholder.requests': 'Tell us about your expectations, trekking experience, or preferred campsites...',
    'modal.success': 'Thank you! Your request was compiled successfully. We will contact you immediately.',
    'modal.submit': 'Submit Booking Request ✈',
    'modal.close': 'Cancel'
  },
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.kilimanjaro': 'Chaka Safaris & Randonnée',
    'nav.safaris': 'Expériences de Montagne',
    'nav.contact': 'Contact',
    'nav.dayTrips': 'Excursions d\'une journée',
    'nav.combined': 'Forfaits Combinés',
    'nav.faq': 'FAQ',
    'nav.booking': 'Réserver',
    'nav.bookingForm': 'Formulaire de réservation',

    // Hero Section
    'hero.badge': 'Arusha, Tanzanie',
    'hero.title': 'Explorez la Tanzanie avec',
    'hero.subtitle': 'Expériences inoubliables de safari et randonnée au cœur de la Tanzanie. Découvrez cascades, faune sauvage, sources chaudes et culture locale avec des guides locaux de confiance.',
    'hero.exploreBttn': 'Explorer nos circuits',
    'hero.whatsappBttn': 'Discuter sur WhatsApp',

    // About Section
    'about.badge': 'À Propos de Nous',
    'about.title': 'Vos experts locaux en safaris et randonnées',
    'about.lead1': 'Chaka Safaris & Hiking est une agence locale basée à Arusha, Tanzanie. Nous sommes spécialisés dans les expériences de voyage authentiques pour des visiteurs du monde entier.',
    'about.lead2': 'Notre équipe est passionnée par la nature, l\'aventure et l\'hospitalité. Que vous souhaitiez marcher vers des cascades grandioses, vous détendre dans des sources chaudes ou pister la faune tanzanienne, nous veillons à ce que votre voyage soit sûr, agréable et inoubliable.',
    'about.chooseTitle': 'Pourquoi choisir Chaka Safaris',
    'about.why.guides': 'Guides locaux certifiés',
    'about.why.guides_desc': 'Nos guides professionnels et francophones/anglophones connaissent chaque chemin secret de la faune et chaque pente de montagne.',
    'about.why.success': 'Taux élevé de réussite au sommet',
    'about.why.success_desc': 'Grâce à des protocoles de sécurité rigoureux, des contrôles d\'oxymétrie et un rythme adapté ("Pole Pole"), nous menons nos grimpeurs à Uhuru Peak avec succès.',
    'about.why.flexible': 'Abordable & Flexible',
    'about.why.flexible_desc': 'Itinéraires sur mesure de qualité supérieure et plans de paiement flexibles parfaitement adaptés à votre budget.',
    'about.why.service': 'Service personnalisé',
    'about.why.service_desc': 'Du premier message au bilan de fin de safari, vivez la chaleureuse hospitalité tanzanienne (Karibu Sana!).',
    'about.why.transport': 'Transports sécurisés et fiables',
    'about.why.transport_desc': 'Nous disposons de nos propres Land Cruisers 4x4 tout équipés avec toit ouvrant et assurons des transferts privés 24h/24, 7j/7.',
    'about.why.authentic': 'Expériences authentiques',
    'about.why.authentic_desc': 'Immersion culturelle, chants traditionnels lors de la torréfaction du café Chagga et rencontres éthiques avec les animaux sauvages.',

    // Quote Section
    'quote.quote': '« Nous ne proposons pas de simples circuits — nous créons des souvenirs pour toute une vie. »',
    'quote.author': 'L\'équipe Chaka Safaris & Hiking • Arusha, Tanzanie',

    // How to book
    'how.badge': 'Processus Simple',
    'how.title': 'Comment Réserver',
    'how.subtitle': 'Réserver votre voyage avec nous est très simple :',
    'how.step1.title': 'Choisissez votre circuit',
    'how.step1.desc': 'Sélectionnez parmi nos cascades, safaris, randonnées locales ou concevez le vôtre !',
    'how.step2.title': 'Contactez-nous sur WhatsApp ou par e-mail',
    'how.step2.desc': 'Envoyez-nous un message direct avec vos dates préférées et la taille du groupe.',
    'how.step3.title': 'Confirmez votre réservation',
    'how.step3.desc': 'Nous finalisons les plans, la logistique de transport et les réservations de dates.',
    'how.step4.title': 'Profitez de l\'aventure !',
    'how.step4.desc': 'Préparez vos bagages et rencontrez nos guides locaux professionnels à Arusha.',
    'how.bttn': 'Réserver via WhatsApp',

    // Floating Button
    'float.speak': 'Parler en Direct à Arusha 💬',

    // Top Tours / Shared buttons
    'tours.badge': 'Expériences Incontournables 🗺️',
    'tours.title': 'Nos plus belles aventures',
    'tours.subtitle': 'Voici nos expériences tanzaniennes phares, vivement recommandées par nos clients et testées sur le terrain.',
    'tours.bestSeller': 'Meilleure Vente',
    'tours.popular': 'Populaire',
    'tours.duration': 'Durée',
    'tours.startingFrom': 'À partir de',
    'tours.bookNow': 'Réserver',
    'tours.viewDetails': 'Voir Détails',
    'tours.whatsappInquire': 'S\'informer sur WhatsApp',
    'tours.whatIncluded': 'Ce qui est inclus',
    'tours.keyFeatures': 'Points Forts',

    // Gallery
    'gallery.badge': 'Capturer l\'Instant ✨',
    'gallery.title': 'Notre galerie d\'aventures',
    'gallery.subtitle': 'Photos authentiques partagées par nos voyageurs ravis et nos guides experts lors des safaris et ascensions.',
    'gallery.cat.all': 'Toutes les photos',
    'gallery.cat.wildlife': 'Faune Sauvage',
    'gallery.cat.kilimanjaro': 'Kilimandjaro',
    'gallery.cat.waterfalls': 'Cascades',
    'gallery.cat.hotsprings': 'Sources Chaudes',
    'gallery.cat.safari': 'Séquences de Safari',
    'gallery.cat.happy': 'Voyageurs Heureux',
    'gallery.lightbox.desc': 'Nous emportons des appareils photo de qualité sur tous les circuits pour immortaliser vos précieux souvenirs.',
    'gallery.lightbox.close': 'Fermer la visionneuse',

    // FAQ Section
    'faq.badge': 'Questions fréquentes 🙋‍♂️',
    'faq.title': 'Foire Aux Questions',
    'faq.subtitle': 'Toutes les questions essentielles pour bien préparer vos vacances de rêve en Tanzanie.',
    'faq.cat.all': 'Toutes les questions',
    'faq.cat.general': 'Questions Générales',
    'faq.cat.kilimanjaro': 'Ascension du Kilimandjaro',
    'faq.cat.safari': 'Safaris et Parcs',
    'faq.cat.booking': 'Réservation & Paiement',

    // Testimonials
    'test.badge': 'Histoires d\'amour clients ❤️',
    'test.title': 'Avis de Témoignages',
    'test.subtitle': 'Lisez les impressions de notre grande famille mondiale de randonneurs et passionnés de safaris.',

    // Contact
    'contact.badge': 'Contactez-Nous 📍',
    'contact.title': 'Contacter Chaka Safaris',
    'contact.subtitle': 'Notre équipe est toujours prête à vous aider. Écrivez-nous sur WhatsApp ou par email pour un devis personnalisé.',
    'contact.card.title': 'Bureau Chaka Safaris',
    'contact.card.loc': 'Arusha, Tanzanie',
    'contact.label.loc': 'Emplacement de notre Siège',
    'contact.val.loc': 'Saba Saba Road, Arusha, Tanzanie',
    'contact.val.loc_sub': 'En face du musée culturel d\'Arusha (Porte n°3)',
    'contact.label.phone': 'Appel & Échange WhatsApp',
    'contact.label.email': 'Adresses de messagerie officielles',
    'contact.socials': 'Suivez nos aventures sur les réseaux :',

    // Booking Modal
    'modal.title': 'Commencez l\'aventure',
    'modal.subtitle': 'Remplissez ce formulaire rapide ou contactez-nous directement sur WhatsApp pour planifier votre voyage sur mesure.',
    'modal.label.name': 'Nom Complet',
    'modal.label.email': 'Adresse E-mail',
    'modal.label.phone': 'Numéro de WhatsApp / Téléphone',
    'modal.label.type': 'Qu’est-ce qui vous intéresse ?',
    'modal.label.type.kili': 'Ascension du Mont Kilimandjaro 🏔️',
    'modal.label.type.safari': 'Safari d’Observation de la Faune 🦁',
    'modal.label.type.daytrip': 'Excursions d’un Jour autour d’Arusha 🌴',
    'modal.label.type.combined': 'Forfait Grand Combiné 🗺️',
    'modal.label.type.custom': 'Itinéraire sur Mesure Personnalisé 🎨',
    'modal.label.package': 'Option de Forfait choisie',
    'modal.label.package.custom': 'Plan personnalisé ou sur mesure',
    'modal.label.date': 'Date de voyage estimée',
    'modal.label.travelers': 'Nombre de voyageurs',
    'modal.label.requests': 'Demandes Particulières / Régime Alimentaire / Limites de Budget',
    'modal.placeholder.requests': 'Parlez-nous de vos attentes, de votre expérience en trekking, ou de vos préférences...',
    'modal.success': 'Merci ! Votre demande a été enregistrée avec succès. Notre équipe à Arusha vous contactera très rapidement.',
    'modal.submit': 'Soumettre la Demande de Voyage ✈',
    'modal.close': 'Annuler'
  }
};

// Mappings for package detail dynamic localization to French
const kiliFrenchNames: Record<string, string> = {
  'Machame Route': 'Voie Machame',
  'Lemosho Route': 'Voie Lemosho',
  'Marangu Route': 'Voie Marangu',
  'Rongai Route': 'Voie Rongai',
  'Umbwe Route': 'Voie Umbwe',
};

const kiliFrenchDetails: Record<string, string> = {
  'kili-machame': 'Surnommée la "voie du whisky", la voie Machame est extrêmement pittoresque et offre des paysages spectaculaires. C’est un itinéraire avec bivouac sous tente de haute qualité avec un excellent profil d\'acclimatation (grimper haut pour dormir bas).',
  'kili-lemosho': 'L\'itinéraire le plus prestigieux sur le Kilimandjaro. Commençant à l’ouest, la voie Lemosho traverse d’abord la forêt tropicale humide, parcourt le plateau spectaculaire de Shira, puis rejoint le sentier Machame. Incroyable taux d’atteinte du sommet grâce à son profil de 8 jours.',
  'kili-marangu': 'Surnommée la "voie Coca-Cola", Marangu est le parcours historique du Kilimandjaro. C’est l\'unique sentier proposant des nuitées confortables en chalets en bois partagés avec électricité solaire au lieu et place de tentes de randonnée.',
  'kili-rongai': 'Le seul sentier partant du flanc nord de la montagne, tout près de la frontière kenyane. Offrant une sensation de nature sauvage isolée, Rongai est moins fréquentée, plus sèche et idéale pendant les saisons humides.',
  'kili-umbwe': 'La voie la plus raide et la plus technique d\'accès au sommet. Recommandée uniquement aux randonneurs entraînés et en parfaite confiance vis-à-vis de l’adaptation aux très hautes altitudes.',
};

const safariFrenchNames: Record<string, string> = {
  '2 Days Tarangire & Ngorongoro Crater': '2 Jours Tarangire & Cratère du Ngorongoro',
  '3 Days Serengeti & Ngorongoro Crater': '3 Jours Serengeti & Cratère du Ngorongoro',
  '5 Days Great Migration Safari Experience': '5 Jours Safari Spécial - La Grande Migration',
};

const safariFrenchFeatures: Record<string, string[]> = {
  'safari-2day': [
    'Tarangire : Célèbre pour ses baobabs géants et ses imposants troupeaux d’éléphants sauvages',
    'Ngorongoro : Une caldeira intacte spectaculaire de 600 m de profondeur abritant 30 000 animaux et prédateurs'
  ],
  'safari-3day': [
    'Serengeti : Plaines dorées à perte de vue accueillant la fabuleuse Grande Migration des gnous et des zèbres',
    'Ngorongoro : Site classé à l’UNESCO servant de sanctuaire pour les rares rhinocéros noirs d\'Afrique',
    'Découvrez les lions, guépards, léopards emblématiques et de majestueuses girafes'
  ],
  'safari-5day': [
    'Exploration approfondie du meilleur du circuit safari nordique de la Tanzanie',
    'Forte densité de prédateurs : lions, léopards, guépards, hyènes et lycaons',
    'Lac Manyara : Réputé pour ses lions grimpeurs d\'arbres uniques et des milliers de flamants roses'
  ]
};

const kiliFrenchInclusions: Record<string, string[]> = {
  'kili-machame': [
    'Taxes de conservation et droits d\'entrée complets du parc du Kilimandjaro',
    'Guides locaux certifiés en secourisme et sauvetage en haute montagne',
    'Porteurs locaux professionnels dévoués et cuisiniers d\'alpinisme',
    'Trois repas chauds et sains servis quotidiennement durant la marche',
    'Tentes de bivouac doubles parois de marques premium et matelas confortables',
    'Transfert routier privé aller-retour depuis votre hôtel d’Arusha'
  ],
  'kili-lemosho': [
    'Taxes et permis environnementaux officiels du Parc National de Kilimandjaro',
    'Guides de haute altitude brevetés et cuisinier avec personnel de soutien',
    'Repas délicieux complets (petit-déjeuner, déjeuner chaud, goûter, dîner copieux)',
    'Matériel d’alpinisme de premier ordre (tentes repas, tables, chaises et vaisselles)',
    'Bouteilles d’oxygène médical d’urgence et oxymètre de pouls quotidien',
    'Transferts individuels en véhicules safari Land Cruiser climatisés'
  ],
  'kili-marangu': [
    'Droits d’entrée, de séjour et d’éventuel sauvetage du Parc National',
    'Guides de montagne accrédités parlant anglais et français',
    'Hébergement collectif confortable en chalets en bois (style refuge de montagne)',
    'Repas en pension complète personnalisables par des chefs qualifiés',
    'Porteurs pour acheminer vos bagages personnels (poids maximum 15 kg)',
    'Briefing d’accueil avant ascension, et transports locaux'
  ]
};

const dayTripFrenchNames: Record<string, string> = {
  'Materuni Waterfalls & Coffee Tour': 'Chute de Materuni & Atelier Café Chagga',
  'Chemka Hot Springs (Kikuletwa Hot Springs)': 'Sources Chaudes de Chemka (Kikuletwa)',
  'Serval Wildlife Experience': 'Expérience Animalière Serval Wildlife',
  'Arusha National Park Safari': 'Safari au Parc National d\'Arusha',
  'Napuru Waterfalls Hike': 'Randonnée aux Chutes de Napuru',
  'Arusha City Tour': 'Visite de la Ville d’Arusha',
  'Airport Transfer (KIA ↔ Arusha)': 'Transferts Aéroport (KIA ↔ Arusha)',
};

const dayTripFrenchDesc: Record<string, string> = {
  'trip-materuni': 'Découvrez l’une des plus magnifiques cascades près de la base du Kilimandjaro. Cette activité associe nature luxuriante, culture indigène et fabrication artisanale du café dans un paisible village Chagga.',
  'trip-chemka': 'Relaxez-vous dans des eaux thermales limpides couleur turquoise entourées de ficus géants centenaires. Les sources chaudes de Chemka sont un oasis caché parfait pour nager et se ressourcer.',
  'trip-serval': 'Rencontrez de très près les animaux d’Afrique dans un cadre d’interaction privilégié et encadré. Nourrissez les girafes et observez de somptueux singes, autruches et félins.',
  'trip-arusha-np': 'Le safari idéal pour les voyageurs disposant de peu de temps. Admirez la faune sauvage, les lacs Momella, les cascades et le majestueux Mont Meru.',
  'trip-napuru': 'Un véritable trésor caché au fond d\'un canyon près d\'Arusha offrant une randonnée splendide traversant les villages et des forêts tropicales denses.',
  'trip-city': 'Vivez l’effervescence locale au cœur d’Arusha. Découvrez ses marchés colorés d’épices, son artisanat d’art Massaï et son histoire.',
  'trip-airport': 'Service de transport fiable de jour comme de nuit entre l’aéroport international du Kilimandjaro et vos hôtels d’Arusha et Moshi.',
};

const comboFrenchNames: Record<string, string> = {
  'Kilimanjaro Trek + Wildlife Safari': 'Trek Kilimandjaro + Grand Safari Animalier',
  'Safari + Chemka Hot Springs': 'Safari Animalier + Sources Chaudes d’Oasis',
  'Kilimanjaro Machame + Materuni cultural tour': 'Kilimandjaro Machame + Culture & Cascades Materuni',
  '3-Day Classic Safari + Materuni Waterfalls': 'Safari Classique 3 Jours + Chutes de Materuni',
  '2-Day Wild Safari + Napuru Falls Trek': 'Safari Sauvage 2 Jours + Randonnée de Napuru',
};

const comboFrenchDesc: Record<string, string> = {
  'combo-kili-safari': 'L\'aventure ultime d’une vie. Gravissez Uhuru Peak sur le Mont Kilimandjaro via le sentier classique de 7 jours, puis célébrez votre exploit au cours d’un safari d\'excellence de 3 jours dans le Serengeti et le cratère du Ngorongoro.',
  'combo-safari-chemka': 'Le combiné idéal pour un court séjour d’évasion. Débutez par 2 journées d\'observation intenses dans le parc de Tarangire et du Ngorongoro, puis soufflez le dernier jour dans l\'eau des sources bleues de Chemka.',
  'combo-kili-materuni': 'Réalisez l\'ascension du toit de l’Afrique avec nos équipes de guides de montagne, et finissez par une randonnée de célébration aux pieds de la grande cascade de Materuni en torréfiant du café bio traditionnel avec les aînés Chagga.',
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved === 'fr' || saved === 'en') return saved as Language;
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    const table = dictionary[language];
    if (!table) return key;
    return table[key] || dictionary['en'][key] || key;
  };

  // Safe wrapper translating core mountain object values on-the-fly
  const getMountainPackages = (): MountainPackage[] => {
    if (language === 'en') return mountainPackages;
    return mountainPackages.map(pkg => ({
      ...pkg,
      name: kiliFrenchNames[pkg.name] || pkg.name,
      routeDetails: kiliFrenchDetails[pkg.id] || pkg.routeDetails,
      included: kiliFrenchInclusions[pkg.id] || pkg.included,
    }));
  };

  // Safe wrapper translating core safari objects
  const getWildlifePackages = (): WildlifePackage[] => {
    if (language === 'en') return wildlifePackages;
    return wildlifePackages.map(pkg => ({
      ...pkg,
      name: safariFrenchNames[pkg.name] || pkg.name,
      features: safariFrenchFeatures[pkg.id] || pkg.features,
    }));
  };

  // Safe wrapper translating excursions
  const getDayTrips = (): DayTrip[] => {
    if (language === 'en') return dayTrips;
    return dayTrips.map(trip => ({
      ...trip,
      name: dayTripFrenchNames[trip.name] || trip.name,
      description: dayTripFrenchDesc[trip.id] || trip.description,
    }));
  };

  // Safe wrapper translating combined packages
  const getCombinedPackages = (): CombinedPackage[] => {
    if (language === 'en') return combinedPackages;
    return combinedPackages.map(pkg => ({
      ...pkg,
      name: comboFrenchNames[pkg.name] || pkg.name,
      description: comboFrenchDesc[pkg.id] || pkg.description,
    }));
  };

  // Safe wrapper for Testimonials
  const getTestimonials = (): Testimonial[] => {
    if (language === 'en') return testimonials;
    return testimonials.map(test => {
      if (test.id === 't-1') {
        return {
          ...test,
          tourName: 'Randonnée de 8 jours Lemosho',
          review: 'Notre ascension de 7 jours sur la voie Lemosho a été incroyable ! L\'équipe de Chaka Safaris & Hiking nous a entouré de sécurité, a préparé de succulents repas chauds et nous a mené en douceur jusqu’au sommet. Ce sont de véritables légendes tanzaniennes de la très haute-altitude ! Recommandé les yeux fermés !',
        };
      }
      if (test.id === 't-2') {
        return {
          ...test,
          tourName: '3 Jours Serengeti & Ngorongoro',
          review: 'Ce safari de 3 jours fut l\'apothéose de notre voyage en Afrique ! Nous avons vu de grands lions dormir tout contre notre Land Cruiser, assisté à une course de guépard et vu d’immenses hardes d\'éléphants. Notre guide possédait une connaissance encyclopédique de la savane !',
        };
      }
      if (test.id === 't-3') {
        return {
          ...test,
          tourName: 'Excursions d\'un Jour Materuni & Chemka',
          review: 'Les excursions d\'un jour vers les chutes de Materuni et l\'oasis de Chemka sont immanquables. J\'ai voyagé seule et me suis sentie totalement en sécurité. La torréfaction ritualisée du café traditionnelle en chansons restera gravée dans mon cœur !',
        };
      }
      return test;
    });
  };

  // Safe wrapper for FAQs
  const getFaqItems = (): FAQItem[] => {
    if (language === 'en') return faqItems;
    return faqItems.map(item => {
      if (item.id === 'faq-1') {
        return {
          ...item,
          question: 'Quelle est la meilleure période pour gravir le Kilimandjaro et partir en safari ?',
          answer: 'Les saisons sèches sont optimales : de janvier à mars (températures douces et ciel magnifique) et de juin à octobre (la faune sauvage se regroupe alors autour des points d’eau des parcs régionaux). Nous organisons des départs toute l’année !',
        };
      }
      if (item.id === 'faq-2') {
        return {
          ...item,
          question: 'Quel est votre taux de réussite pour atteindre le sommet du Kilimandjaro ?',
          answer: 'Nous maintenons plus de 95% de réussite sur les voies Lemosho de 8 jours et Machame de 7 jours. Notre secret réside dans un rythme d’ascension modéré ("Pole Pole") pour permettre à votre organisme d\'assimiler le manque d\'oxygène, accompagné de vérifications journalières à l’oxymètre.',
        };
      }
      if (item.id === 'faq-3') {
        return {
          ...item,
          question: 'Qu’est-ce qui est compris dans le tarif des safaris ?',
          answer: 'Nos forfaits safaris privés incluent l\'utilisation exclusive d\'un 4x4 Land Cruiser de safari, le carburant, les droits d\'entrée dans les parcs nationaux agréés, l\'hébergement (hôtel, lodge ou camp de toile), la pension complète et de l’eau en bouteille réfrigérée.',
        };
      }
      if (item.id === 'faq-4') {
        return {
          ...item,
          question: 'Pouvons-nous entièrement personnaliser nos forfaits de vacances combinés ?',
          answer: 'Bien sûr ! Nous concevons d’incroyables souvenirs sur mesure en Tanzanie. Vous pouvez choisir n’importe quelle voie du Kilimandjaro et l\'inclure à un safari, ajouter des excursions vers les sources chaudes ou adapter le programme de voyage selon votre budget.',
        };
      }
      if (item.id === 'faq-5') {
        return {
          ...item,
          question: 'Comment fonctionnent les réservations et le règlement sécurisé ?',
          answer: 'Cliquez simplement sur l’un de nos boutons d\'action "Réserver" sur le site ou lancez une conversation en direct via WhatsApp. Nous acceptons de façon entièrement sécurisée les règlements par virement bancaire international et les transactions par cartes de crédit.',
        };
      }
      return item;
    });
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      getMountainPackages,
      getWildlifePackages,
      getDayTrips,
      getCombinedPackages,
      getTestimonials,
      getFaqItems
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
