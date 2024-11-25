import React from 'react';
import { Code2, Rocket, Users, Shield } from 'lucide-react';

export const AboutUs = () => {
  const features = [
    {
      icon: Code2,
      title: 'Expert Development',
      description: 'Our team of skilled developers creates robust and scalable solutions.',
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'We deliver projects on time without compromising on quality.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our priority. We work closely with you at every step.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'We implement best practices for security and performance.',
    },
  ];

  return (
    <div className="bg-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About DevCraft</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With over a decade of experience, we've helped hundreds of businesses transform their digital presence.
            Our passion is creating exceptional web experiences that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};