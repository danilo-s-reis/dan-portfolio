
import React from 'react';
import type { Project } from '../types';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-secondary p-6 rounded-lg border border-gray-800 flex flex-col h-full hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white pr-4">{project.title}</h3>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver projeto ${project.title} no GitHub`}
            className="text-medium-gray hover:text-accent transition-colors duration-300 shrink-0"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-medium-gray mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-accent/10 text-accent text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
