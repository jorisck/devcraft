import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

export const CTA = () => {
  return (
    <div className="bg-indigo-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/30 px-4 py-2 rounded-full mb-8">
            <Clock className="h-4 w-4 text-white" />
            <span className="text-white font-medium">Limited Time Offer</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>

          <p className="text-xl text-indigo-100 mb-8 max-w-2xl">
            Don't miss out on our Black Friday special. Save €1,500 and get a professional website that drives results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-indigo-600 bg-white rounded-lg hover:bg-indigo-50 transition"
            >
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <div className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-lg">
              Save 75% Today
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};