import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="font-bold text-xl text-white">DevCraft</span>
            </Link>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              {t('footer.services.title')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.justonline.be" className="hover:text-indigo-400 transition">
                  {t('footer.services.web')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  {t('footer.services.ecommerce')}
                </a>
              </li>
              <li>
                <a href="https://www.justonline.be" className="hover:text-indigo-400 transition">
                  {t('footer.services.maintenance')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              {t('footer.company.title')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="hover:text-indigo-400 transition">
                  {t('footer.company.contact')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-indigo-400 transition">
                  {t('footer.company.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-indigo-400 transition">
                  {t('footer.company.terms')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              {t('footer.social.title')}
            </h3>
            <div className="flex space-x-4">
              <a href="https://x.com/cactuskoding" className="hover:text-indigo-400 transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/justkoding/in" className="hover:text-indigo-400 transition">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/imjustkoding/" className="hover:text-indigo-400 transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>{t('footer.copyright').replace('{year}', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
};