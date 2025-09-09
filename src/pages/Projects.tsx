import React from 'react';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [projectList, setProjectList] = useState(projects);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      return;
    }

    const newProjects = [...projectList];
    const draggedProject = newProjects[draggedIndex];
    
    // Remove dragged item
    newProjects.splice(draggedIndex, 1);
    // Insert at new position
    newProjects.splice(dropIndex, 0, draggedProject);
    
    setProjectList(newProjects);
    setDraggedIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-slate-900 mb-2">Projects</h1>
          <div className="w-16 h-0.5 bg-[#00008B]"></div>
          <p className="text-slate-600 mt-4 max-w-2xl">
            A collection of research projects, applications, and experiments spanning machine learning, 
            healthcare technology, and data science.
          </p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projectList.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              index={index}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              onDragEnd={handleDragEnd}
              isDragging={draggedIndex === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}