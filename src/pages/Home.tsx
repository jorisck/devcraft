
import { Hero } from '../components/Hero';
import { ProjectsGallery } from '../components/ProjectsGallery';
import { AboutUs } from '../components/AboutUs';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';

export const Home = () => {
  return (
    <main>
      <Hero />
      <ProjectsGallery />
      <AboutUs />
      <Testimonials />
      <CTA />
    </main>
  );
};