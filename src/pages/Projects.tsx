import React from 'react';
import { useState, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [projectList, setProjectList] = useState(projects);
  const [draggedCard, setDraggedCard] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [cardPositions, setCardPositions] = useState<{ [key: number]: { x: number; y: number } }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    setDragPosition({
      x: e.clientX - (e.clientX - rect.left),
      y: e.clientY - (e.clientY - rect.top)
    });
    
    setDraggedCard(index);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (draggedCard === null) return;
    
    // Get the dragged card element to know its dimensions
    const draggedElement = document.querySelector(`[data-card-index="${draggedCard}"]`) as HTMLElement;
    if (!draggedElement) return;
    
    const cardRect = draggedElement.getBoundingClientRect();
    const cardWidth = cardRect.width;
    const cardHeight = cardRect.height;
    
    // Constrain to viewport
    const maxX = window.innerWidth - cardWidth;
    const maxY = window.innerHeight - cardHeight;
    
    const constrainedX = Math.max(0, Math.min(maxX, e.clientX - dragOffset.x));
    const constrainedY = Math.max(0, Math.min(maxY, e.clientY - dragOffset.y));
    
    setDragPosition({
      x: constrainedX,
      y: constrainedY
    });

    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    // Calculate dragged card position relative to container
    const draggedCardX = constrainedX - containerRect.left;
    const draggedCardY = constrainedY - containerRect.top;

    const newPositions: { [key: number]: { x: number; y: number } } = {};
    
    projectList.forEach((_, index) => {
      if (index === draggedCard) return;
      
      const cardElement = document.querySelector(`[data-card-index="${index}"]`) as HTMLElement;
      if (cardElement) {
        const cardRect = cardElement.getBoundingClientRect();
        const cardContainerPos = {
          x: cardRect.left - containerRect.left,
          y: cardRect.top - containerRect.top
        };

        // Approximate dragged card dimensions
        const draggedCardRect = {
          x: draggedCardX,
          y: draggedCardY,
          width: cardWidth,
          height: cardHeight
        };

        // Check if cards are overlapping
        const isOverlapping = (
          draggedCardRect.x < cardContainerPos.x + cardRect.width &&
          draggedCardRect.x + draggedCardRect.width > cardContainerPos.x &&
          draggedCardRect.y < cardContainerPos.y + cardRect.height &&
          draggedCardRect.y + draggedCardRect.height > cardContainerPos.y
        );

        if (isOverlapping) {
          // Calculate push direction
          const centerX = draggedCardRect.x + draggedCardRect.width / 2;
          const centerY = draggedCardRect.y + draggedCardRect.height / 2;
          const cardCenterX = cardContainerPos.x + cardRect.width / 2;
          const cardCenterY = cardContainerPos.y + cardRect.height / 2;
          
          const deltaX = cardCenterX - centerX;
          const deltaY = cardCenterY - centerY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          
          if (distance > 0) {
            const pushDistance = 50;
            newPositions[index] = {
              x: (deltaX / distance) * pushDistance,
              y: (deltaY / distance) * pushDistance
            };
          }
        } else {
          newPositions[index] = { x: 0, y: 0 };
        }
      }
    });

    setCardPositions(newPositions);
  };

  const handleMouseUp = (e: MouseEvent) => {
    if (draggedCard === null) {
      setDraggedCard(null);
      setCardPositions({});
      return;
    }

    // Find the card we're dropping on
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (containerRect) {
      const dropX = e.clientX - containerRect.left;
      const dropY = e.clientY - containerRect.top;
      
      let dropIndex = -1;
      projectList.forEach((_, index) => {
        if (index === draggedCard) return;
        
        const cardElement = document.querySelector(`[data-card-index="${index}"]`) as HTMLElement;
        if (cardElement) {
          const cardRect = cardElement.getBoundingClientRect();
          const cardPos = {
            x: cardRect.left - containerRect.left,
            y: cardRect.top - containerRect.top,
            width: cardRect.width,
            height: cardRect.height
          };
          
          if (dropX >= cardPos.x && dropX <= cardPos.x + cardPos.width &&
              dropY >= cardPos.y && dropY <= cardPos.y + cardPos.height) {
            dropIndex = index;
          }
        }
      });
      
      if (dropIndex !== -1) {
        // Swap the cards
        const newProjects = [...projectList];
        const temp = newProjects[draggedCard];
        newProjects[draggedCard] = newProjects[dropIndex];
        newProjects[dropIndex] = temp;
        setProjectList(newProjects);
      }
    }

    setDraggedCard(null);
    setCardPositions({});
  };

  // Add event listeners
  React.useEffect(() => {
    if (draggedCard !== null) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggedCard, dragOffset, projectList]);

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>Projects</h1>
          <div className="h-0.5 bg-[#00008B] w-full"></div>
        </div>
        
        <div 
          ref={containerRef}
          className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 relative"
        >
          {projectList.map((project, index) => {
            const isBeingDragged = draggedCard === index;
            const cardPosition = cardPositions[index] || { x: 0, y: 0 };
            
            return (
              <div
                key={project.id}
                data-card-index={index}
                className={`transition-all duration-300 ${isBeingDragged ? 'z-50 shadow-2xl' : ''}`}
                style={{
                  transform: isBeingDragged 
                    ? `translate(${dragPosition.x}px, ${dragPosition.y}px) rotate(2deg)` 
                    : `translate(${cardPosition.x}px, ${cardPosition.y}px)`,
                  position: isBeingDragged ? 'fixed' : 'relative',
                  pointerEvents: isBeingDragged ? 'none' : 'auto',
                  width: isBeingDragged ? 'auto' : 'auto',
                  height: isBeingDragged ? 'auto' : 'auto'
                }}
              >
                <ProjectCard 
                  {...project} 
                  index={index}
                  onMouseDown={(e) => handleMouseDown(index, e)}
                  isDragging={isBeingDragged}
                />
              </div>
          )})}
        </div>
      </div>
    </div>
  );
}