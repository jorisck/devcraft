import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import toast from 'react-hot-toast';

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would integrate with your email service
      toast.success(t('contact.form.success'));
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error(t('contact.form.error'));
    }
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contact.page.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('contact.page.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              {/* <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {t('contact.page.address.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('contact.page.address.content')}
                  </p>
                </div>
              </div> */}

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {t('contact.page.email.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('contact.page.email.content')}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {t('contact.page.phone.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('contact.page.phone.content')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('contact.name')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t('contact.email')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t('contact.phone')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('contact.message')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition"
              >
                {t('contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};