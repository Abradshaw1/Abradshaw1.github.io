import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-gray-700/80 border border-blue-500/20 rounded-lg overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-72 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-gray-300 mb-6 leading-relaxed">{project.fullDescription}</p>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-3">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}