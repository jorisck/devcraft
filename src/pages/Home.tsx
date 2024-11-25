import React from 'react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { ProjectsGallery } from '../components/ProjectsGallery';
import { AboutUs } from '../components/AboutUs';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';

export const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <ProjectsGallery />
      <AboutUs />
      <Testimonials />
      <CTA />
    </main>
  );
};