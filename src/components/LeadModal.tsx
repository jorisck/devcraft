import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLanguage } from '../contexts/LanguageContext';
import { sendEmail } from '../services/email';

export const LeadModal = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('hasSeenModal', 'true');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendEmail(formData);
      toast.success(t('modal.success'));
      setIsOpen(false);
      setFormData({ name: '', email: '', phone: '', description: '' });
    } catch (error) {
      toast.error(t('modal.error'));
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-30" onClick={() => setIsOpen(false)} />
        
        <div className="relative bg-white rounded-lg p-8 max-w-md w-full">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t('modal.title')}
            </h3>
            <p className="text-gray-600">
              {t('modal.subtitle')}
            </p>
            <p className="text-gray-500 text-sm mt-2 italic font-bold">
              {t('modal.note')}.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t('modal.name')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t('modal.email')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={t('modal.phone')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder={t('modal.description')}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? t('modal.sending') : t('modal.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};