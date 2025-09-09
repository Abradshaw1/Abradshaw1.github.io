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
      className="group block bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 break-inside-avoid mb-6"
    >
      <div className={`${cardHeight} w-full overflow-hidden relative`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 border-t border-slate-100">
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-slate-900 group-hover:text-[#00008B] transition-colors">
            {title}
          </h3>
          
          <div className="h-px bg-slate-200"></div>
          
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 pt-2">
            {technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 bg-slate-100 text-[#00008B] rounded-md"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="text-xs px-2 py-1 bg-slate-100 text-slate-500 rounded-md">
                +{technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}