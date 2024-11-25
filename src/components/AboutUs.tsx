import React from 'react';
import { Code2, Rocket, Users, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const AboutUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Code2,
      titleKey: 'about.features.development.title',
      descriptionKey: 'about.features.development.description',
    },
    {
      icon: Rocket,
      titleKey: 'about.features.delivery.title',
      descriptionKey: 'about.features.delivery.description',
    },
    {
      icon: Users,
      titleKey: 'about.features.client.title',
      descriptionKey: 'about.features.client.description',
    },
    {
      icon: Shield,
      titleKey: 'about.features.security.title',
      descriptionKey: 'about.features.security.description',
    },
  ];

  return (
    <div className="bg-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('about.mainTitle')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('about.paragraph1')}
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mt-5">
            {t('about.paragraph2')}
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mt-5">
            {t('about.paragraph3')}
          </p>
          <p className='text-gray-600 max-w-2xl mx-auto mt-5 font-bold'>
            {t('about.paragraph4')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, titleKey, descriptionKey }) => (
            <div key={titleKey} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t(titleKey)}
              </h3>
              <p className="text-gray-600">
                {t(descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};