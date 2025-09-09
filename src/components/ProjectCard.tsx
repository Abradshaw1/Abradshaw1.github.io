import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  index: number;
}

export default function ProjectCard({ id, title, description, technologies, image, index }: ProjectCardProps) {
  // Vary card heights for masonry effect
  const heights = ['h-64', 'h-80', 'h-72', 'h-96', 'h-60', 'h-88'];
  const cardHeight = heights[index % heights.length];
  
  return (
    <Link 
      to={`/project/${id}`}
      className="group block bg-white overflow-hidden transition-all duration-300 break-inside-avoid mb-6"
    >
      <div className={`${cardHeight} w-full overflow-hidden relative`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <div className="text-white">
            <h3 className="text-lg font-medium mb-2 group-hover:text-white transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed line-clamp-2 mb-3">
              {description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 bg-white/20 text-white rounded-sm"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="text-xs px-2 py-1 bg-white/20 text-white rounded-sm">
                  +{technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}