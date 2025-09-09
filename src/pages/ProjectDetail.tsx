import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-slate-900">Project not found</h1>
          <Link to="/projects" className="text-[#00008B] hover:text-[#000080] mt-4 inline-block">
            Return to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-slate-600 hover:text-[#00008B] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
        <div className="bg-white overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            </div>
            
            <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-light text-slate-900 mb-2">{project.title}</h1>
                <div className="w-16 h-0.5 bg-[#00008B]"></div>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-lg">
                {project.fullDescription}
              </p>
              
              <div>
                <h2 className="text-xl font-medium text-slate-900 mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-slate-100 text-[#00008B] rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}