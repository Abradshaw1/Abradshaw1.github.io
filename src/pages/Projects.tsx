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
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;
    
    // Calculate offset to center the card on cursor
    const cardCenterX = rect.width / 2;
    const cardCenterY = rect.height / 2;
    
    setDragOffset({
      x: cardCenterX,
      y: cardCenterY
    });
    
    setDragPosition({
      x: e.clientX - cardCenterX,
      y: e.clientY - cardCenterY
    });
    
    setDraggedCard(index);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (draggedCard === null) return;
    
    // Use standard card dimensions for consistency
    const cardWidth = 300; // Approximate card width
    const cardHeight = 400; // Approximate card height
    
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

    // Calculate dragged card center position relative to container
    const draggedCardX = constrainedX - containerRect.left;
    const draggedCardY = constrainedY - containerRect.top;
    const draggedCardCenterX = draggedCardX + cardWidth / 2;
    const draggedCardCenterY = draggedCardY + cardHeight / 2;

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
        
        const cardCenterX = cardContainerPos.x + cardRect.width / 2;
        const cardCenterY = cardContainerPos.y + cardRect.height / 2;

        // Calculate distance between card centers
        const deltaX = cardCenterX - draggedCardCenterX;
        const deltaY = cardCenterY - draggedCardCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // Define interaction radius (when cards start to repel each other)
        const interactionRadius = 150;

        if (distance < interactionRadius && distance > 0) {
          // Calculate push strength based on distance (closer = stronger push)
          const pushStrength = (interactionRadius - distance) / interactionRadius;
          const maxPushDistance = 80;
          const pushDistance = pushStrength * maxPushDistance;
          
          // Normalize direction vector
          const directionX = deltaX / distance;
          const directionY = deltaY / distance;
          
          newPositions[index] = {
            x: directionX * pushDistance,
            y: directionY * pushDistance
          };
        } else {
          // Smoothly return to original position
          const currentPos = cardPositions[index] || { x: 0, y: 0 };
          newPositions[index] = {
            x: currentPos.x * 0.9, // Gradual return
            y: currentPos.y * 0.9
          };
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

    // Find the card we're dropping on based on cursor position
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (containerRect) {
      const dropX = e.clientX - containerRect.left;
      const dropY = e.clientY - containerRect.top;
      
      let dropIndex = -1;
      let minDistance = Infinity;
      
      projectList.forEach((_, index) => {
        if (index === draggedCard) return;
        
        const cardElement = document.querySelector(`[data-card-index="${index}"]`) as HTMLElement;
        if (cardElement) {
          const cardRect = cardElement.getBoundingClientRect();
          const cardCenterX = (cardRect.left - containerRect.left) + cardRect.width / 2;
          const cardCenterY = (cardRect.top - containerRect.top) + cardRect.height / 2;
          
          const distance = Math.sqrt(
            Math.pow(dropX - cardCenterX, 2) + Math.pow(dropY - cardCenterY, 2)
          );
          
          // If cursor is close to this card's center, consider it for swapping
          if (distance < 100 && distance < minDistance) {
            minDistance = distance;
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
    // Smoothly animate cards back to their original positions
    const returnPositions: { [key: number]: { x: number; y: number } } = {};
    Object.keys(cardPositions).forEach(key => {
      returnPositions[parseInt(key)] = { x: 0, y: 0 };
    });
    setCardPositions(returnPositions);
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