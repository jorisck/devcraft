import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Yannick',
      roleKey: 'testimonials.yannick.role',
      image: '',
      contentKey: 'testimonials.yannick.content',
    },
    {
      name: 'Kevin',
      roleKey: 'testimonials.kevin.role',
      image: '',
      contentKey: 'testimonials.kevin.content',
    },
    {
      name: 'Anouar',
      roleKey: 'testimonials.anouar.role',
      image: '',
      contentKey: 'testimonials.anouar.content',
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{t(testimonial.contentKey)}</p>
              <div className="flex items-center">
                <div className="ml-4">
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{t(testimonial.roleKey)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};