import React from 'react';
import { Users, Star, Award } from 'lucide-react';

export const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
    },
    {
      icon: Star,
      value: '10+',
      label: 'Years Experience',
    },
    {
      icon: Award,
      value: '20+',
      label: 'Projects Completed',
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Icon className="h-10 w-10 text-indigo-600 mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{value}</div>
              <div className="text-gray-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};