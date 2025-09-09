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
      className="group block bg-gray-700/80 border border-blue-500/20 rounded-lg overflow-hidden transition-all hover:bg-gray-700 h-full"
    >
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-3 space-y-1.5">
        <h3 className="text-lg font-semibold text-white line-clamp-1">{title}</h3>
        <p className="text-gray-300 text-xs line-clamp-1">{description}</p>
        <div className="flex flex-wrap gap-1 pt-1">
          {technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}