import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  message?: string;
  description?: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        bcc: 'jorisck+dcdc@gmail.com, info.businessavenue@gmail.com',
        cc: '',
        phone: data.phone,
        message: data.message || data.description || '',
      },
      EMAILJS_PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
}; 