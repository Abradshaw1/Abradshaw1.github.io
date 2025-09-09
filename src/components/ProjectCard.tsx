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
  const heights = ['h-64', 'h-80', 'h-72', 'h-96', 'h-60', 'h-88', 'h-56', 'h-84'];
  const cardHeight = heights[index % heights.length];
  
  return (
    <Link 
      to={`/project/${id}`}
      className="group block bg-white overflow-hidden transition-all duration-500 break-inside-avoid mb-6"
    >
      <div className={`${cardHeight} w-full overflow-hidden relative`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 transition-all duration-500">
          <div className="text-white">
            <h3 className="text-lg font-medium mb-2 transition-colors duration-500 group-hover:text-[#00008B]">
              {title}
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed line-clamp-2 mb-3 transition-colors duration-500 group-hover:text-[#00008B]">
              {description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 bg-white/20 text-white rounded-sm transition-all duration-500 group-hover:bg-[#00008B]/80 group-hover:text-white"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="text-xs px-2 py-1 bg-white/20 text-white rounded-sm transition-all duration-500 group-hover:bg-[#00008B]/80 group-hover:text-white">
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