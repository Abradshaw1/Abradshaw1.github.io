import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-slate-900 mb-2">Projects</h1>
          <div className="w-16 h-0.5 bg-blue-600"></div>
          <p className="text-slate-600 mt-4 max-w-2xl">
            A collection of research projects, applications, and experiments spanning machine learning, 
            healthcare technology, and data science.
          </p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}