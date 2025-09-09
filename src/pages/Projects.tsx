import { useState, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [projectList, setProjectList] = useState(projects);
  const [draggedCard, setDraggedCard] = useState<number | null>(null);
  const [dragOverCard, setDragOverCard] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (index: number, e: React.DragEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    
    if (containerRect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setDragPosition({
        x: rect.left - containerRect.left,
        y: rect.top - containerRect.top
      });
    }
    
    setDraggedCard(index);
    setDragOverCard(null);
    
    // Create invisible drag image
    const dragImage = new Image();
    dragImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    e.dataTransfer.setDragImage(dragImage, 0, 0);
  };

  const handleDragOver = (index: number, e: React.DragEvent) => {
    e.preventDefault();
    
    if (draggedCard !== null && draggedCard !== index) {
      setDragOverCard(index);
    }
    
    // Update drag position
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (containerRect) {
      setDragPosition({
        x: e.clientX - containerRect.left - dragOffset.x,
        y: e.clientY - containerRect.top - dragOffset.y
      });
    }
  };

  const handleContainerDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    
    // Update drag position when dragging over container
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (containerRect && draggedCard !== null) {
      setDragPosition({
        x: e.clientX - containerRect.left - dragOffset.x,
        y: e.clientY - containerRect.top - dragOffset.y
      });
    }
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedCard === null || draggedCard === dropIndex) {
      setDraggedCard(null);
      setDragOverCard(null);
      return;
    }

    // Swap the two cards
    const newProjects = [...projectList];
    const temp = newProjects[draggedCard];
    newProjects[draggedCard] = newProjects[dropIndex];
    newProjects[dropIndex] = temp;
    
    setProjectList(newProjects);
    setDraggedCard(null);
    setDragOverCard(null);
  };

  const handleDragEnd = () => {
    setDraggedCard(null);
    setDragOverCard(null);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>Projects</h1>
          <div className="h-0.5 bg-[#00008B] w-full"></div>
        </div>
        
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
          onDragOver={handleContainerDragOver}
        >
          {/* Dragged card overlay */}
          {draggedCard !== null && (
            <div
              className="fixed pointer-events-none z-50 opacity-80"
              style={{
                left: dragPosition.x,
                top: dragPosition.y,
                transform: 'rotate(5deg)',
              }}
            >
              <ProjectCard 
                {...projectList[draggedCard]} 
                index={draggedCard}
                isDragging={false}
                isGhost={true}
              />
            </div>
          )}
          
          {projectList.map((project, index) => {
            const shouldShift = dragOverCard !== null && draggedCard !== null && 
                               index === dragOverCard && index !== draggedCard;
            const isBeingDragged = draggedCard === index;
            
            return (
              <div
                key={project.id}
                className={`transition-all duration-300 ${
                  shouldShift ? 'transform translate-y-4' : ''
                } ${isBeingDragged ? 'opacity-30' : ''}`}
              >
                <ProjectCard 
                  {...project} 
                  index={index}
                  onDragStart={(e) => handleDragStart(index, e)}
                  onDragOver={(e) => handleDragOver(index, e)}
                  onDrop={() => handleDrop(index)}
                  onDragEnd={handleDragEnd}
                  isDragging={isBeingDragged}
                  isDropTarget={dragOverCard === index && draggedCard !== index}
                />
              </div>
          )})}
        </div>
      </div>
    </div>
  );
}