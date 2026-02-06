
import React from 'react';
import { PERSONAL_INFO, PROJECTS, TECHNOLOGIES } from './constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './components/Icons';
import ProjectCard from './components/ProjectCard';
import AboutMeContent from './components/AboutMeContent';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-light-gray">
      <div className="container mx-auto max-w-4xl px-6 py-12 md:py-20">

        {/* Introduction Section */}
        <section id="home" className="flex flex-col-reverse md:flex-row items-start justify-between mb-20 md:mb-32">
          <div className="md:w-3/4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-accent mb-6">
              {PERSONAL_INFO.title}
            </h2>
            <p className="text-medium-gray mb-8 max-w-xl">
              Estudante de Análise e Desenvolvimento de Sistemas buscando oportunidades em Engenharia e Análise de Dados. Apaixonado por transformar dados em insights valiosos.
            </p>
            <div className="flex items-center space-x-6">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="text-medium-gray hover:text-accent transition-colors duration-300"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="text-medium-gray hover:text-accent transition-colors duration-300"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                aria-label="Email"
                className="text-medium-gray hover:text-accent transition-colors duration-300"
              >
                <MailIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mb-8 md:mb-0 md:w-1/4 flex justify-center md:justify-end">
             <img 
                src="/profile-photo.jpg"
                alt="Danilo Souza Reis"
                className="rounded-full h-32 w-32 md:h-40 md:w-40 object-cover border-4 border-secondary"
              />
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="mb-20 md:mb-32 scroll-mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
            Tecnologias
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent"></span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {TECHNOLOGIES.map((tech, index) => (
              <span
                key={index}
                className="bg-secondary border border-gray-700 text-light-gray text-sm font-medium px-4 py-2 rounded-lg cursor-default transition-all duration-300 hover:bg-accent/10 hover:text-accent hover:border-accent/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="mb-20 md:mb-32 scroll-mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
            Sobre Mim
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent"></span>
          </h2>
          <AboutMeContent />
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
            Meus Projetos
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-20 md:mt-32 py-6 border-t border-secondary">
            <p className="text-medium-gray text-sm">
                &copy; {new Date().getFullYear()} Danilo Souza Reis.
            </p>
            <p className="text-medium-gray text-xs mt-1">
                Construído com React e Tailwind CSS.
            </p>
        </footer>

      </div>
    </div>
  );
};

export default App;
