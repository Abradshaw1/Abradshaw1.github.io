import React from 'react';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [projectList, setProjectList] = useState(projects);
  const [draggedCard, setDraggedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedCard(index);
    setHoveredCard(null);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnter = (index: number) => {
    if (draggedCard !== null && draggedCard !== index) {
      setHoveredCard(index);
    }
  };

  const handleDragLeave = () => {
    setHoveredCard(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedCard === null || draggedCard === dropIndex) {
      setDraggedCard(null);
      setHoveredCard(null);
      return;
    }

    // Swap the two cards
    const newProjects = [...projectList];
    const temp = newProjects[draggedCard];
    newProjects[draggedCard] = newProjects[dropIndex];
    newProjects[dropIndex] = temp;
    
    setProjectList(newProjects);
    setDraggedCard(null);
    setHoveredCard(null);
  };

  const handleDragEnd = () => {
    setDraggedCard(null);
    setHoveredCard(null);
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
          {projectList.map((project, index) => {
            return (
            <ProjectCard 
              key={project.id} 
              {...project} 
              index={index}
              onDragStart={() => handleDragStart(index)}
              onDragEnter={() => handleDragEnter(index)}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              onDragEnd={handleDragEnd}
              isDragging={draggedCard === index}
              isHovered={hoveredCard === index}
            />
          )})}
        </div>
      </div>
    </div>
  );
}