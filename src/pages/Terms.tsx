import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('terms.title')}
        </h1>
        <p className="text-gray-600 mb-8">
          {t('terms.lastUpdated')}
        </p>
        
        <div className="prose prose-indigo max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            {t('terms.intro')}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            {t('terms.acceptance.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('terms.acceptance.content')}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            {t('terms.services.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('terms.services.content')}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            {t('terms.payment.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('terms.payment.content')}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            {t('terms.intellectual.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('terms.intellectual.content')}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            {t('terms.liability.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('terms.liability.content')}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            {t('terms.termination.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('terms.termination.content')}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            {t('terms.contact.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('terms.contact.content')}
          </p>
        </div>
      </div>
    </div>
  );
}; 