import React from 'react';
import { useState, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [projectList, setProjectList] = useState(projects);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const dragCounter = useRef(0);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    setDragOverIndex(null);
    e.dataTransfer.effectAllowed = 'move';
    dragCounter.current = 0;
  };

  const handleDragEnter = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    dragCounter.current++;
    if (draggedIndex !== null && draggedIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setDragOverIndex(null);
    }
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (draggedIndex !== null && draggedIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    
    if (draggedIndex === null) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    if (draggedIndex !== dropIndex) {
      const newProjects = [...projectList];
      const draggedProject = newProjects[draggedIndex];
      
      // Remove dragged item
      newProjects.splice(draggedIndex, 1);
      // Insert at new position
      newProjects.splice(dropIndex, 0, draggedProject);
      
      setProjectList(newProjects);
    }
    
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  // Create display order for smooth animations
  const getDisplayOrder = () => {
    if (draggedIndex === null || dragOverIndex === null) {
      return projectList.map((_, index) => index);
    }

    const order = projectList.map((_, index) => index);
    const draggedItem = order[draggedIndex];
    
    // Remove dragged item
    order.splice(draggedIndex, 1);
    // Insert at hover position
    order.splice(dragOverIndex, 0, draggedItem);
    
    return order;
  };

  const displayOrder = getDisplayOrder();

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
          {displayOrder.map((originalIndex, displayIndex) => {
            const project = projectList[originalIndex];
            return (
            <ProjectCard 
              key={project.id} 
              {...project} 
              index={originalIndex}
              onDragStart={(e) => handleDragStart(e, originalIndex)}
              onDragEnter={(e) => handleDragEnter(e, originalIndex)}
              onDragLeave={handleDragLeave}
              onDragOver={(e) => handleDragOver(e, originalIndex)}
              onDrop={(e) => handleDrop(e, originalIndex)}
              onDragEnd={handleDragEnd}
              isDragging={draggedIndex === originalIndex}
              isHovered={dragOverIndex === originalIndex}
            />
          )})}
        </div>
      </div>
    </div>
  );
}