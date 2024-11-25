import React from 'react';
import { ArrowRight, Clock, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  const features = [
    t('features.development'),
    t('features.design'),
    t('features.responsive'),
    t('features.seo'),
    t('features.speed'),
    t('features.cms')
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 px-4 py-2 rounded-full mb-8">
            <Clock className="h-4 w-4 text-indigo-600" />
            <span className="text-indigo-600 font-medium">{t('hero.limited')}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
            <span className="block text-indigo-600 mt-2">{t('hero.price')}</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
            {t('hero.description')} {t('hero.save')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
            >
              {t('hero.claim')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <div className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 bg-gray-100 rounded-lg">
              {t('hero.regular')} <span className="line-through ml-2">€2,000</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};