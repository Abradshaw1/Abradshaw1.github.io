import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export default function ProjectCard({ id, title, description, technologies, image }: ProjectCardProps) {
  return (
    <Link 
      to={`/project/${id}`}
      className="group block bg-gray-700/80 border border-blue-500/20 rounded-lg overflow-hidden transition-all hover:bg-gray-700"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}