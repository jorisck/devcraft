import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('privacy.title')}
        </h1>
        <p className="text-gray-600 mb-8">
          {t('privacy.lastUpdated')}
        </p>
        
        <div className="prose prose-indigo max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            {t('privacy.intro')}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            {t('privacy.collection.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('privacy.collection.content')}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            {t('privacy.use.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('privacy.use.content')}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            {t('privacy.protection.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('privacy.protection.content')}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            {t('privacy.contact.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('privacy.contact.content')}
          </p>
        </div>
      </div>
    </div>
  );
}; 