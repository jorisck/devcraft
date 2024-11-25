import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const ProjectsGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Wordlogger',
      descriptionKey: 'projects.wordlogger.description',
      image: '/wordlogger.png',
      tech: ['React', 'Node.js', 'Vite'],
      link: 'https://www.wordlogger.fun',
    },
    {
      title: 'Dash-Runner',
      descriptionKey: 'projects.dashrunner.description',
      image: '/dashrunner.png',
      tech: ['React', 'TypeScript', 'Web3'],
      link: 'https://www.dash-runner.com',
    },
    {
      title: 'Afro Bowl',
      descriptionKey: 'projects.afrobowl.description',
      image: '/afrobowl.png',
      tech: ['Next.js', 'Contentfull', 'Google'],
      link: 'https://www.afrobwol.be'
    },
    {
      title: 'Bridge23',
      descriptionKey: 'projects.bridge23.description',
      image: '/bridge.png',
      tech: ['Next.js', 'Contentfull', 'Google'],
      link: 'https://www.bridge23.xyz'
    },
    {
      title: 'Limitless Cabs',
      descriptionKey: 'projects.limitlesscabs.description',
      image: '/cabs.png',
      tech: ['Next.js', 'Contentfull', 'Google'],
      link: 'https://www.limitlesstaxi.be'
    },
    {
      title: 'Energy Mastering',
      descriptionKey: 'projects.energymastering.description',
      image: '/emaster.png',
      tech: ['Next.js', 'Contentfull', 'Google'],
      link: 'https://www.energy-mastering.be'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.title} className="w-full flex-shrink-0">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-200 mb-4">{t(project.descriptionKey)}</p>
                      <div className="flex gap-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-white/20 rounded-full text-sm text-white hover:bg-white/30 transition-colors"
                        >
                          {t('projects.visitSite')}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};