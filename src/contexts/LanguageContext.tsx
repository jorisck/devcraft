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
    'features.seo': 'SEO Optimization',
    'features.speed': 'Fast Loading Speed',
    'features.cms': 'Content Management',

    // Stats
    'stats.clients': 'Happy Clients',
    'stats.experience': 'Years Experience',
    'stats.projects': 'Projects Completed',

    // About
    'about.title': 'About DevCraft',
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
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.contact': 'Contact',
    'nav.claim': 'Profiter de l\'Offre',

    // Hero
    'hero.limited': 'Offre Black Friday Limitée',
    'hero.title': 'Transformez Votre Présence Numérique',
    'hero.price': 'Pour Seulement €500',
    'hero.description': 'Services de développement web premium à un prix Black Friday imbattable.',
    'hero.save': 'Économisez €1,500 et obtenez un site web professionnel qui génère des résultats.',
    'hero.claim': 'Profiter de l\'Offre',
    'hero.regular': 'Prix Normal:',
    
    // Features
    'features.development': 'Développement Web Complet',
    'features.design': 'Design Personnalisé',
    'features.responsive': 'Responsive Mobile',
    'features.seo': 'Optimisation SEO',
    'features.speed': 'Chargement Rapide',
    'features.cms': 'Gestion de Contenu',

    // Stats
    'stats.clients': 'Clients Satisfaits',
    'stats.experience': 'Ans d\'Expérience',
    'stats.projects': 'Projets Réalisés',

    // About
    'about.title': 'À Propos de DevCraft',
    'about.description': 'Avec plus d\'une décennie d\'expérience, nous avons aidé des centaines d\'entreprises à transformer leur présence numérique.',
    
    // CTA
    'cta.title': 'Prêt à Transformer Votre Présence Numérique ?',
    'cta.description': 'Ne manquez pas notre offre spéciale Black Friday. Économisez €1,500 et obtenez un site web professionnel.',
    'cta.button': 'Commencer Maintenant',
    'cta.save': 'Économisez 75% Aujourd\'hui',

    // Contact Form
    'contact.title': 'Créons Quelque Chose d\'Extraordinaire Ensemble',
    'contact.description': 'Profitez de notre offre Black Friday et transformez votre présence numérique.',
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.phone': 'Numéro de Téléphone',
    'contact.message': 'Votre Message',
    'contact.submit': 'Envoyer le Message',
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
    'features.development': 'Volledige Webontwikkeling',
    'features.design': 'Aangepast Ontwerp',
    'features.responsive': 'Mobiel Responsive',
    'features.seo': 'SEO Optimalisatie',
    'features.speed': 'Snelle Laadtijd',
    'features.cms': 'Content Management',

    // Stats
    'stats.clients': 'Tevreden Klanten',
    'stats.experience': 'Jaar Ervaring',
    'stats.projects': 'Voltooide Projecten',

    // About
    'about.title': 'Over DevCraft',
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