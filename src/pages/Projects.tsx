import React from 'react';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [projectList, setProjectList] = useState(projects);
  const [draggedCard, setDraggedCard] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedCard(index);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    
    if (draggedCard === null || draggedCard === dropIndex) {
      setDraggedCard(null);
      return;
    }

    const newProjects = [...projectList];
    const temp = newProjects[draggedCard];
    newProjects[draggedCard] = newProjects[dropIndex];
    newProjects[dropIndex] = temp;
    
    setProjectList(newProjects);
    setDraggedCard(null);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>Projects</h1>
          <div className="h-0.5 bg-[#00008B] w-full"></div>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {projectList.map((project, index) => (
            <ProjectCard 
              key={project.id}
              {...project} 
              index={index}
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              isDragging={draggedCard === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}