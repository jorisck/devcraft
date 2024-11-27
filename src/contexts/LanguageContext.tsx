import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.contact': 'Contact',
    'nav.claim': 'Claim My Offer',

    // Hero
    'hero.limited': 'Limited Time Black Friday Offer',
    'hero.title': 'Transform Your Digital Presence',
    'hero.price': 'For Just €500',
    'hero.description': 'Premium web development services at an unbeatable Black Friday price.',
    'hero.save': 'Save €1,500 and get a professional website that drives results.',
    'hero.claim': 'Claim Offer Now',
    'hero.regular': 'Regular Price:',
    
    // Features
    'features.development': 'Full Website Development',
    'features.design': 'Custom Design',
    'features.responsive': 'Mobile Responsive',
    'features.seo': 'Free Hosting',
    'features.speed': 'Fast Loading Speed',
    'features.cms': 'Content Management',

    // Stats
    'stats.clients': 'Happy Clients',
    'stats.experience': 'Years Experience',
    'stats.projects': 'Projects Completed',

    // About
    'about.title': 'About Devs-Craft',
    'about.description': 'With over a decade of experience, we\'ve helped hundreds of businesses transform their digital presence.',
    
    // CTA
    'cta.title': 'Ready to Transform Your Digital Presence?',
    'cta.description': 'Don\'t miss out on our Black Friday special. Save €1,500 and get a professional website that drives results.',
    'cta.button': 'Get Started Now',
    'cta.save': 'Save 75% Today',

    // Contact Form
    'contact.title': 'Let\'s Build Something Amazing Together',
    'contact.description': 'Take advantage of our Black Friday offer and transform your digital presence.',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',

    // Projects Gallery
    'projects.title': 'A Look to Our Latest Projects',
    'projects.subtitle': 'Explore our portfolio of successful projects delivered to clients worldwide.',
    'projects.visitSite': 'Visit Site',

    // Projects descriptions
    'projects.wordlogger.description': 'An app that makes language learning easier',
    'projects.dashrunner.description': 'A browser game that lets you earn money',
    'projects.afrobowl.description': 'A showcase website for an innovative fast-food',
    'projects.bridge23.description': 'Web3 access for everyone',
    'projects.limitlesscabs.description': 'Airport taxi service in Brussels',
    'projects.energymastering.description': 'A showcase website for an energy company',

    // About Section
    'about.mainTitle': 'About Devs-Craft',
    'about.paragraph1': 'With over a decade of proven success, we\'ve empowered countless businesses to elevate their online presence and achieve their goals. Our passion lies in crafting exceptional digital experiences that deliver measurable results.',
    'about.paragraph2': 'Our team of expert developers specializes in building robust and scalable solutions tailored to your unique needs, from showcase websites and e-commerce platforms to custom applications.',
    'about.paragraph3': 'We pride ourselves on delivering projects on time and without compromising quality, ensuring your vision becomes a reality seamlessly. Beyond development, our comprehensive knowledge of the digital landscape allows us to provide strategic advice for your marketing challenges, ensuring your success extends beyond just a great website.',
    'about.paragraph4': 'Ready to take your business to the next level? Let\'s create something extraordinary together.',
    
    // About Features
    'about.features.development.title': 'Expert Development',
    'about.features.development.description': 'Our team of skilled developers creates robust and scalable solutions.',
    'about.features.delivery.title': 'Fast Delivery',
    'about.features.delivery.description': 'We deliver projects on time without compromising on quality.',
    'about.features.client.title': 'Client-Focused',
    'about.features.client.description': 'Your success is our priority. We work closely with you at every step.',
    'about.features.security.title': 'Secure & Reliable',
    'about.features.security.description': 'We implement best practices for security and performance.',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Don\'t just take our word for it. Here\'s what our clients have to say about their experience working with us.',
    'testimonials.yannick.content': 'As a young startup, we needed to digitize without hiring an IT team. So we partnered with Devs-Craft. Very quickly, we had our own platform and were able to handle new customer requests (5x in one month) while keeping the same team.',
    'testimonials.yannick.role': 'FamilyCabs',
    'testimonials.kevin.content': 'Available to help where it\'s not planned. As usual, they exceeded all my expectations. You can see that they know their job inside out and that they gave it their all. Every little thing, every detail, you can feel they put their heart into it. Working together has been super enriching, and I\'m really grateful for this beyond-top result!',
    'testimonials.kevin.role': 'Team AfroBowl',
    'testimonials.anouar.content': 'When I created my electric charging station company, I didn\'t know much about the digital world. I needed to be guided by professionals to create my online presence. I called Devs-Craft and it was a matter of 2 weeks: Website, Google, professional email, and automation.',
    'testimonials.anouar.role': 'CEO @ Electric Green',

    // Lead Modal
    'modal.title': 'Get 75% OFF Now!',
    'modal.subtitle': 'Tell us about your project and secure your Black Friday discount today.',
    'modal.note': 'No commitment',
    'modal.name': 'Your Name',
    'modal.email': 'Email Address',
    'modal.phone': 'Phone Number',
    'modal.description': 'Tell us about your project',
    'modal.submit': 'Claim My Discount',
    'modal.success': 'Thank you for your interest! We\'ll contact you soon.',
    'modal.error': 'Something went wrong. Please try again.',
    'modal.sending': 'Sending...',

    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last Updated: November 26, 2024',
    'privacy.intro': 'At Devs-Craft, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.',
    'privacy.collection.title': 'Information We Collect',
    'privacy.collection.content': 'We collect information that you provide directly to us, including name, email address, phone number, and any other information you choose to provide.',
    'privacy.use.title': 'How We Use Your Information',
    'privacy.use.content': 'We use the information we collect to provide our services, communicate with you, and improve our website.',
    'privacy.protection.title': 'How We Protect Your Information',
    'privacy.protection.content': 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.',
    'privacy.contact.title': 'Contact Us',
    'privacy.contact.content': 'If you have any questions about this Privacy Policy, please contact us at contact@devs-craft.com',

    // Contact Page
    'contact.page.title': 'Get in Touch',
    'contact.page.subtitle': 'We\'d love to hear from you. Let us know how we can help.',
    'contact.page.address.title': 'Our Office',
    'contact.page.address.content': 'Rue de la Loi 42, 1000 Brussels, Belgium',
    'contact.page.email.title': 'Email Us',
    'contact.page.email.content': 'contact@devs-craft.com',
    'contact.page.phone.title': 'Call Us',
    'contact.page.phone.content': '+32 483 00 27 92',
    'contact.form.success': 'Message sent successfully! We\'ll get back to you soon.',
    'contact.form.error': 'There was an error sending your message. Please try again.',

    // Terms of Service
    'terms.title': 'Terms of Service',
    'terms.lastUpdated': 'Last Updated: November 26, 2024',
    'terms.intro': 'Please read these Terms of Service carefully before using our services.',
    'terms.acceptance.title': 'Acceptance of Terms',
    'terms.acceptance.content': 'By accessing and using our services, you accept and agree to be bound by these Terms of Service.',
    'terms.services.title': 'Services',
    'terms.services.content': 'We provide web development and digital transformation services. The specific details of services will be outlined in individual agreements with clients.',
    'terms.payment.title': 'Payment Terms',
    'terms.payment.content': 'Payment terms will be specified in individual agreements. All prices are in euros and exclude VAT unless otherwise stated.',
    'terms.intellectual.title': 'Intellectual Property',
    'terms.intellectual.content': 'All intellectual property rights related to our services remain our property unless explicitly transferred through written agreement.',
    'terms.liability.title': 'Limitation of Liability',
    'terms.liability.content': 'We strive to provide high-quality services but cannot guarantee that our services will be error-free or uninterrupted.',
    'terms.termination.title': 'Termination',
    'terms.termination.content': 'We reserve the right to terminate or suspend services if these terms are violated.',
    'terms.contact.title': 'Contact Us',
    'terms.contact.content': 'If you have any questions about these Terms of Service, please contact us at contact@devs-craft.com',

    // Footer
    'footer.description': 'Transforming businesses through innovative web solutions.',
    'footer.services.title': 'Services',
    'footer.services.web': 'Web Development',
    'footer.services.ecommerce': 'E-Commerce',
    'footer.services.maintenance': 'Maintenance',
    'footer.company.title': 'Company',
    'footer.company.contact': 'Contact',
    'footer.company.privacy': 'Privacy Policy',
    'footer.company.terms': 'Terms of Service',
    'footer.social.title': 'Follow Us',
    'footer.copyright': '© {year} Devs-Craft. All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.contact': 'Contact',
    'nav.claim': 'Profiter de l\'Offre',

    // Hero
    'hero.limited': 'Offre Black Friday Limitée',
    'hero.title': 'Transformez Votre Présence Digitale',
    'hero.price': 'Pour Seulement €500',
    'hero.description': 'Services de développement web premium à un prix Black Friday imbattable.',
    'hero.save': 'Économisez €1,500 et obtenez un site web professionnel qui génère des résultats.',
    'hero.claim': 'Profiter de l\'Offre',
    'hero.regular': 'Prix Normal:',
    
    // Features
    'features.development': 'Développement Web 100%',
    'features.design': 'Design Personnalisé',
    'features.responsive': 'Responsive Mobile',
    'features.seo': 'Hébergement gratuit',
    'features.speed': 'Chargement Rapide',
    'features.cms': 'Gestion de Contenu',

    // Stats
    'stats.clients': 'Clients Satisfaits',
    'stats.experience': 'Ans d\'Expérience',
    'stats.projects': 'Projets Réalisés',

    // About
    'about.title': 'À Propos de Devs-Craft',
    'about.description': 'Avec plus d\'une décennie d\'expérience, nous avons aidé des centaines d\'entreprises à transformer leur présence digitale.',
    
    // CTA
    'cta.title': 'Prêt à Transformer Votre Présence Digitale ?',
    'cta.description': 'Ne manquez pas notre offre spéciale Black Friday. Économisez €1,500 et obtenez un site web professionnel.',
    'cta.button': 'Commencer Maintenant',
    'cta.save': 'Économisez 75% Aujourd\'hui',

    // Contact Form
    'contact.title': 'Créons Quelque Chose d\'Extraordinaire Ensemble',
    'contact.description': 'Profitez de notre offre Black Friday et transformez votre présence digitale.',
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.phone': 'Numéro de Téléphone',
    'contact.message': 'Votre Message',
    'contact.submit': 'Envoyer le Message',

    // Projects Gallery
    'projects.title': 'Découvrez nos Derniers Projets',
    'projects.subtitle': 'Découvrez notre portfolio de projets de sites vitrines ou d\'applications web.',
    'projects.visitSite': 'Visiter le Site',

    // Projects descriptions
    'projects.wordlogger.description': 'Une app qui facilite l\'apprentissage des langues',
    'projects.dashrunner.description': 'Un jeu dans un navigateur qui permet de gagner de l\'argent',
    'projects.afrobowl.description': 'Un site vitrine pour un fast-food innovant',
    'projects.bridge23.description': 'Un accès au Web3 pour tous',
    'projects.limitlesscabs.description': 'Un taxi pour et vers l\'aéroport sur Bruxelles',
    'projects.energymastering.description': 'Un site vitrine pour une entreprise dans le domaine de l\'énergie',

    // About Section
    'about.mainTitle': 'À Propos de Devs-Craft',
    'about.paragraph1': 'Avec plus d\'une décennie dans le secteur, nous avons permis à plusieurs entreprises d\'améliorer leur présence en ligne et d\'atteindre leurs objectifs. Notre passion réside dans la création d\'expériences numériques exceptionnelles qui produisent des résultats mesurables.',
    'about.paragraph2': 'Notre équipe de développeurs, experts dans leur domaine, est spécialisée dans la création de solutions robustes et évolutives adaptées à vos besoins uniques, des sites vitrines aux plateformes e-commerce en passant par les applications personnalisées.',
    'about.paragraph3': 'Nous sommes fiers de livrer des projets dans les délais sans compromettre la qualité, garantissant que votre vision devient réalité de manière transparente. Au-delà du développement, notre connaissance approfondie du paysage numérique nous permet de vous fournir des conseils stratégiques pour vos défis marketing.',
    'about.paragraph4': 'Prêt à faire passer votre entreprise au niveau supérieur ? Créons ensemble quelque chose d\'extraordinaire.',
    
    // About Features
    'about.features.development.title': 'Développement Web',
    'about.features.development.description': 'Notre équipe de développeurs qualifiés vous crée des solutions robustes et évolutives.',
    'about.features.delivery.title': 'Livraison Rapide',
    'about.features.delivery.description': 'Nous livrons les projets à temps sans compromettre la qualité et avec 0 frais d\'hébergement.',
    'about.features.client.title': 'Centré sur le Client',
    'about.features.client.description': 'Votre succès est notre priorité. Nous travaillons en étroite collaboration avec vous à chaque étape.',
    'about.features.security.title': 'Sûr et Fiable',
    'about.features.security.description': 'Nous appliquons les meilleures pratiques en matière de sécurité et de performance sur les produits que nous construisons.',

    // Testimonials
    'testimonials.title': 'Ce Que Disent Nos Clients',
    'testimonials.subtitle': 'Ne nous croyez pas sur parole. Voici ce que nos clients disent de leur expérience avec nous.',
    'testimonials.yannick.content': "En tant que jeune start-up, nous avions besoin de nous digitaliser sans embaucher une équipe d'informaticiens. Nous nous sommes donc associés à Devs-Craft. Très rapidement, nous avons eu notre propre plateforme et nous avons pu absorber les nouvelles demandes de nos clients (x5 en un mois) tout en gardant la même équipe.",
    'testimonials.yannick.role': 'FamilyCabs',
    'testimonials.kevin.content': "Dispo pour aider où ce n'est pas prévu. Comme d'habitude, ils ont dépassé toutes mes attentes. On voit qu'ils connaissent leur boulot sur le bout des doigts et qu'il se sont donnés à fond. Chaque petit truc, chaque détail, on sent qu'ils y ont mis du cœur. Travailler ensemble a été super enrichissant, et je suis vraiment reconnaissant pour ce résultat au-delà du top !",
    'testimonials.kevin.role': 'Team AfroBowl',
    'testimonials.anouar.content': 'Lorsque j\'ai créé mon entreprise de bornes électriques, je ne connaissais pas grand-chose au monde numérique. J\'avais besoin d\'être accompagné par des professionnels pour créer ma présence en ligne. J\'ai appelé Devs-Craft et ce fut une question de 2 semaines : Site web, google, email pro et automatisation.',
    'testimonials.anouar.role': 'CEO @ Electric Green',

    // Lead Modal
    'modal.title': 'Obtenez 75% de Réduction !',
    'modal.subtitle': 'Parlez-nous de votre projet et profitez de notre réduction Black Friday dès aujourd\'hui.',
    'modal.note': 'Sans engagement',
    'modal.name': 'Votre Nom',
    'modal.email': 'Adresse Email',
    'modal.phone': 'Numéro de Téléphone',
    'modal.description': 'Parlez-nous de votre projet',
    'modal.submit': 'Obtenir Ma Réduction',
    'modal.success': 'Merci de votre intérêt ! Nous vous contacterons bientôt.',
    'modal.error': 'Une erreur est survenue. Veuillez réessayer.',
    'modal.sending': 'Envoi en cours...',

    // Privacy Policy
    'privacy.title': 'Politique de Confidentialité',
    'privacy.lastUpdated': 'Dernière Mise à Jour : 26 novembre 2024',
    'privacy.intro': 'Chez Devs-Craft, nous prenons votre confidentialité au sérieux. Cette Politique de Confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.',
    'privacy.collection.title': 'Informations Que Nous Collectons',
    'privacy.collection.content': 'Nous collectons des informations que vous nous fournissez directement, y compris votre nom, adresse email, numéro de téléphone et toute autre information que vous choisissez de nous fournir.',
    'privacy.use.title': 'Comment Nous Utilisons Vos Informations',
    'privacy.use.content': 'Nous utilisons les informations que nous collectons pour fournir nos services, communiquer avec vous et améliorer notre site web.',
    'privacy.protection.title': 'Comment Nous Protégeons Vos Informations',
    'privacy.protection.content': 'Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre l\'accès non autorisé, la modification ou la divulgation.',
    'privacy.contact.title': 'Contactez-Nous',
    'privacy.contact.content': 'Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter à contact@devs-craft.com',

    // Contact Page
    'contact.page.title': 'Nous Contacter',
    'contact.page.subtitle': 'Nous aimerions vous entendre. Faites-nous savoir comment nous pouvons vous aider.',
    'contact.page.address.title': 'Notre Bureau',
    'contact.page.address.content': 'Rue de la Loi 42, 1000 Bruxelles, Belgique',
    'contact.page.email.title': 'Écrivez-Nous',
    'contact.page.email.content': 'contact@devs-craft.com',
    'contact.page.phone.title': 'Appelez-Nous',
    'contact.page.phone.content': '+32 483 00 27 92',
    'contact.form.success': 'Message envoyé avec succès ! Nous vous répondrons dès que possible.',
    'contact.form.error': 'Il y a eu une erreur lors de l\'envoi de votre message. Veuillez réessayer.',

    // Terms of Service
    'terms.title': 'Conditions Générales de Service',
    'terms.lastUpdated': 'Dernière Mise à Jour : 26 novembre 2024',
    'terms.intro': 'Veuillez lire attentivement ces Conditions Générales de Service avant d\'utiliser nos services.',
    'terms.acceptance.title': 'Acceptation des Conditions',
    'terms.acceptance.content': 'En accédant et en utilisant nos services, vous acceptez d\'être lié par ces Conditions Générales de Service.',
    'terms.services.title': 'Services',
    'terms.services.content': 'Nous fournissons des services de développement web et de transformation digitale. Les détails spécifiques des services seront décrits dans des accords individuels avec les clients.',
    'terms.payment.title': 'Conditions de Paiement',
    'terms.payment.content': 'Les conditions de paiement seront spécifiées dans les accords individuels. Tous les prix sont en euros et hors TVA sauf mention contraire.',
    'terms.intellectual.title': 'Propriété Intellectuelle',
    'terms.intellectual.content': 'Tous les droits de propriété intellectuelle liés à nos services restent notre propriété sauf transfert explicite par accord écrit.',
    'terms.liability.title': 'Limitation de Responsabilité',
    'terms.liability.content': 'Nous nous efforçons de fournir des services de haute qualité mais ne pouvons garantir que nos services seront exempts d\'erreurs ou ininterrompus.',
    'terms.termination.title': 'Résiliation',
    'terms.termination.content': 'Nous nous réservons le droit de résilier ou de suspendre les services en cas de violation de ces conditions.',
    'terms.contact.title': 'Contactez-Nous',
    'terms.contact.content': 'Si vous avez des questions concernant ces Conditions Générales de Service, veuillez nous contacter à contact@devs-craft.com',

    // Footer
    'footer.description': 'Transformer les entreprises grâce à des solutions web innovantes.',
    'footer.services.title': 'Services',
    'footer.services.web': 'Développement Web',
    'footer.services.ecommerce': 'E-Commerce',
    'footer.services.maintenance': 'Maintenance',
    'footer.company.title': 'Entreprise',
    'footer.company.contact': 'Contact',
    'footer.company.privacy': 'Politique de Confidentialité',
    'footer.company.terms': 'Conditions d\'Utilisation',
    'footer.social.title': 'Suivez-Nous',
    'footer.copyright': '© {year} Devs-Craft. Tous droits réservés.',
  },
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.contact': 'Contact',
    'nav.claim': 'Claim Mijn Aanbieding',

    // Hero
    'hero.limited': 'Black Friday Aanbieding - Beperkte Tijd',
    'hero.title': 'Transformeer Uw Digitale Aanwezigheid',
    'hero.price': 'Voor Slechts €500',
    'hero.description': 'Premium webontwikkelingsdiensten tegen een onverslaanbare Black Friday-prijs.',
    'hero.save': 'Bespaar €1.500 en krijg een professionele website die resultaten oplevert.',
    'hero.claim': 'Claim Nu Uw Aanbieding',
    'hero.regular': 'Normale Prijs:',
    
    // Features
    'features.development': '100% Webontwikkeling',
    'features.design': 'Ontwerp op Maat',
    'features.responsive': 'Responsive Mobile',
    'features.seo': 'Gratis Hosting',
    'features.speed': 'Snelle Laadtijd',
    'features.cms': 'Content Management',

    // Stats
    'stats.clients': 'Tevreden Klanten',
    'stats.experience': 'Jaar Ervaring',
    'stats.projects': 'Voltooide Projecten',

    // About
    'about.title': 'Over Devs-Craft',
    'about.description': 'Met meer dan tien jaar ervaring hebben we honderden bedrijven geholpen hun digitale aanwezigheid te transformeren.',
    
    // CTA
    'cta.title': 'Klaar om Uw Digitale Aanwezigheid te Transformeren?',
    'cta.description': 'Mis onze Black Friday-aanbieding niet. Bespaar €1.500 en krijg een professionele website.',
    'cta.button': 'Begin Nu',
    'cta.save': 'Bespaar Vandaag 75%',

    // Contact Form
    'contact.title': 'Laten We Samen Iets Geweldigs Bouwen',
    'contact.description': 'Profiteer van onze Black Friday-aanbieding en transformeer uw digitale aanwezigheid.',
    'contact.name': 'Volledige Naam',
    'contact.email': 'E-mailadres',
    'contact.phone': 'Telefoonnummer',
    'contact.message': 'Uw Bericht',
    'contact.submit': 'Bericht Versturen',

    // Projects Gallery
    'projects.title': 'Ontdek onze laatste projecten',
    'projects.subtitle': 'Ontdek onze portfolio van succesvolle projecten die wereldwijd aan klanten zijn geleverd.',
    'projects.visitSite': 'Bezoek Website',

    // Projects descriptions
    'projects.wordlogger.description': 'Een app die het leren van talen gemakkelijker maakt',
    'projects.dashrunner.description': 'Een browsergame waarmee je geld kunt verdienen',
    'projects.afrobowl.description': 'Een showcase website voor een innovatieve fastfood',
    'projects.bridge23.description': 'Web3-toegang voor iedereen',
    'projects.limitlesscabs.description': 'Luchthaventaxi service in Brussel',
    'projects.energymastering.description': 'Een showcase website voor een energiebedrijf',

    // About Section
    'about.mainTitle': 'Over Devs-Craft',
    'about.paragraph1': 'Met meer dan tien jaar bewezen succes hebben we talloze bedrijven geholpen hun online aanwezigheid te verbeteren en hun doelen te bereiken. Onze passie ligt in het creëren van uitzonderlijke digitale ervaringen die meetbare resultaten opleveren.',
    'about.paragraph2': 'Ons team van deskundige ontwikkelaars is gespecialiseerd in het creëren van robuuste en schaalbare oplossingen op maat van uw unieke behoeften, van showcase sites tot e-commerce platforms en applicaties op maat.',
    'about.paragraph3': 'We zijn er trots op dat we projecten op tijd opleveren zonder afbreuk te doen aan de kwaliteit, zodat uw visie naadloos werkelijkheid wordt. Naast ontwikkeling kunnen we dankzij onze diepgaande kennis van het digitale landschap strategisch advies geven voor uw marketinguitdagingen.',
    'about.paragraph4': 'Klaar om uw bedrijf naar een hoger niveau te tillen? Laten we samen iets buitengewoons creëren.',
    
    // About Features
    'about.features.development.title': 'Expert Ontwikkeling',
    'about.features.development.description': 'Ons team van bekwame ontwikkelaars creëert robuuste en schaalbare oplossingen.',
    'about.features.delivery.title': 'Snelle Levering',
    'about.features.delivery.description': 'We leveren projecten op tijd zonder in te leveren op kwaliteit.',
    'about.features.client.title': 'Klantgericht',
    'about.features.client.description': 'Uw succes is onze prioriteit. We werken nauw met u samen in elke fase.',
    'about.features.security.title': 'Veilig & Betrouwbaar',
    'about.features.security.description': 'We implementeren best practices voor veiligheid en prestaties.',

    // Testimonials
    'testimonials.title': 'Wat Onze Klanten Zeggen',
    'testimonials.subtitle': 'Neem niet alleen ons woord ervoor. Dit is wat onze klanten zeggen over hun ervaring met ons.',
    'testimonials.yannick.content': 'Als jonge startup moesten we digitaliseren zonder een IT-team aan te nemen. Dus werkten we samen met Devs-Craft. Heel snel hadden we ons eigen platform en konden we nieuwe klantaanvragen verwerken (5x in één maand) met behoud van hetzelfde team.',
    'testimonials.yannick.role': 'FamilyCabs',
    'testimonials.kevin.content': 'Beschikbaar om te helpen waar het niet gepland is. Zoals gewoonlijk hebben ze al mijn verwachtingen overtroffen. Je ziet dat ze hun vak door en door kennen en dat ze alles hebben gegeven. Elk klein ding, elk detail, je voelt dat ze er hun hart in hebben gestoken. Samenwerken was super verrijkend, en ik ben echt dankbaar voor dit meer dan top resultaat!',
    'testimonials.kevin.role': 'Team AfroBowl',
    'testimonials.anouar.content': 'Toen ik mijn bedrijf voor elektrische laadpalen oprichtte, wist ik niet veel van de digitale wereld. Ik had begeleiding nodig van professionals om mijn online aanwezigheid te creëren. Ik belde Devs-Craft en het was een kwestie van 2 weken: Website, Google, professionele e-mail en automatisering.',
    'testimonials.anouar.role': 'CEO @ Electric Green',

    // Lead Modal
    'modal.title': 'Krijg Nu 75% Korting!',
    'modal.subtitle': 'Vertel ons over uw project en verzeker u vandaag van uw Black Friday-korting.',
    'modal.note': 'Geen verplichting',
    'modal.name': 'Uw Naam',
    'modal.email': 'E-mailadres',
    'modal.phone': 'Telefoonnummer',
    'modal.description': 'Vertel ons over uw project',
    'modal.submit': 'Claim Mijn Korting',
    'modal.success': 'Bedankt voor uw interesse! We nemen binnenkort contact met u op.',
    'modal.error': 'Er is iets misgegaan. Probeer het opnieuw.',
    'modal.sending': 'Bericht wordt verzonden...',

    // Privacy Policy
    'privacy.title': 'Privacybeleid',
    'privacy.lastUpdated': 'Laatst Bijgewerkt: 26 november 2024',
    'privacy.intro': 'Bij Devs-Craft nemen we uw privacy serieus. Dit Privacybeleid legt uit hoe we uw persoonlijke gegevens verzamelen, gebruiken en beschermen.',
    'privacy.collection.title': 'Informatie Die We Verzamelen',
    'privacy.collection.content': 'We verzamelen informatie die u rechtstreeks aan ons verstrekt, waaronder naam, e-mailadres, telefoonnummer en andere informatie die u kiest om te verstrekken.',
    'privacy.use.title': 'Hoe We Uw Informatie Gebruiken',
    'privacy.use.content': 'We gebruiken de verzamelde informatie om onze diensten te leveren, met u te communiceren en onze website te verbeteren.',
    'privacy.protection.title': 'Hoe We Uw Informatie Beschermen',
    'privacy.protection.content': 'We implementeren passende beveiligingsmaatregelen om uw persoonlijke informatie te beschermen tegen ongeautoriseerde toegang, wijziging of openbaarmaking.',
    'privacy.contact.title': 'Contact',
    'privacy.contact.content': 'Als u vragen heeft over dit Privacybeleid, neem dan contact met ons op via contact@devs-craft.com',

    // Contact Page
    'contact.page.title': 'Get in Touch',
    'contact.page.subtitle': 'We\'d love to hear from you. Let us know how we can help.',
    'contact.page.address.title': 'Our Office',
    'contact.page.address.content': 'Rue de la Loi 42, 1000 Brussels, Belgium',
    'contact.page.email.title': 'Email Us',
    'contact.page.email.content': 'contact@devs-craft.com',
    'contact.page.phone.title': 'Call Us',
    'contact.page.phone.content': '+32 483 00 27 92',
    'contact.form.success': 'Message sent successfully! We\'ll get back to you soon.',
    'contact.form.error': 'There was an error sending your message. Please try again.',

    // Terms of Service
    'terms.title': 'Algemene Voorwaarden',
    'terms.lastUpdated': 'Laatst Bijgewerkt: 26 november 2024',
    'terms.intro': 'Lees deze Algemene Voorwaarden zorgvuldig door voordat u gebruik maakt van onze diensten.',
    'terms.acceptance.title': 'Aanvaarding van Voorwaarden',
    'terms.acceptance.content': 'Door toegang te krijgen tot en gebruik te maken van onze diensten, accepteert u deze Algemene Voorwaarden.',
    'terms.services.title': 'Diensten',
    'terms.services.content': 'Wij leveren webontwikkeling en digitale transformatiediensten. De specifieke details van diensten worden beschreven in individuele overeenkomsten met klanten.',
    'terms.payment.title': 'Betalingsvoorwaarden',
    'terms.payment.content': 'Betalingsvoorwaarden worden gespecificeerd in individuele overeenkomsten. Alle prijzen zijn in euro\'s en exclusief BTW tenzij anders vermeld.',
    'terms.intellectual.title': 'Intellectueel Eigendom',
    'terms.intellectual.content': 'Alle intellectuele eigendomsrechten met betrekking tot onze diensten blijven ons eigendom tenzij expliciet overgedragen via schriftelijke overeenkomst.',
    'terms.liability.title': 'Beperking van Aansprakelijkheid',
    'terms.liability.content': 'Wij streven ernaar hoogwaardige diensten te leveren maar kunnen niet garanderen dat onze diensten foutloos of ononderbroken zullen zijn.',
    'terms.termination.title': 'Beëindiging',
    'terms.termination.content': 'Wij behouden ons het recht voor om diensten te beëindigen of op te schorten bij schending van deze voorwaarden.',
    'terms.contact.title': 'Contact',
    'terms.contact.content': 'Als u vragen heeft over deze Algemene Voorwaarden, neem dan contact met ons op via contact@devs-craft.com',

    // Footer
    'footer.description': 'Bedrijven transformeren door innovatieve weboplossingen.',
    'footer.services.title': 'Diensten',
    'footer.services.web': 'Webontwikkeling',
    'footer.services.ecommerce': 'E-Commerce',
    'footer.services.maintenance': 'Onderhoud',
    'footer.company.title': 'Bedrijf',
    'footer.company.contact': 'Contact',
    'footer.company.privacy': 'Privacybeleid',
    'footer.company.terms': 'Algemene Voorwaarden',
    'footer.social.title': 'Volg Ons',
    'footer.copyright': '© {year} Devs-Craft. Alle rechten voorbehouden.',
  }
};

const getInitialLanguage = (): Language => {
  // Get browser language (e.g., 'en-US' -> 'en')
  const browserLang = navigator.language.split('-')[0];
  
  // Check if browser language is supported
  if (browserLang in translations) {
    return browserLang as Language;
  }
  
  // Check navigator.languages array for supported languages
  const supportedLang = navigator.languages?.find(lang => 
    translations.hasOwnProperty(lang.split('-')[0])
  );
  
  if (supportedLang) {
    return supportedLang.split('-')[0] as Language;
  }
  
  // Default to English if no supported language is found
  return 'en';
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage());

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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