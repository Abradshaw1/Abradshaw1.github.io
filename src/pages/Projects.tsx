import React from 'react';
import { useState, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [projectList, setProjectList] = useState(projects);
  const [draggedCard, setDraggedCard] = useState<number | null>(null);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [cardPositions, setCardPositions] = useState<{ [key: number]: { x: number; y: number } }>({});
  const [isDragMode, setIsDragMode] = useState(false);
  const [holdTimer, setHoldTimer] = useState<NodeJS.Timeout | null>(null);
  const [mouseStartPos, setMouseStartPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    
    const startX = e.clientX;
    const startY = e.clientY;
    setMouseStartPos({ x: startX, y: startY });
    setDragPosition({ x: startX, y: startY });
    
    // Start hold timer - if user holds for 500ms, enter drag mode
    const timer = setTimeout(() => {
      setIsDragMode(true);
      setDraggedCard(index);
    }, 500);
    
    setHoldTimer(timer);
    
    // Add temporary mouse move listener to detect if user moves before hold completes
    const handleEarlyMove = (moveEvent: MouseEvent) => {
      const deltaX = Math.abs(moveEvent.clientX - startX);
      const deltaY = Math.abs(moveEvent.clientY - startY);
      
      // If user moves more than 5px before hold completes, cancel drag mode
      if (deltaX > 5 || deltaY > 5) {
        if (timer) clearTimeout(timer);
        document.removeEventListener('mousemove', handleEarlyMove);
        document.removeEventListener('mouseup', handleEarlyUp);
      }
    };
    
    const handleEarlyUp = () => {
      if (timer) clearTimeout(timer);
      document.removeEventListener('mousemove', handleEarlyMove);
      document.removeEventListener('mouseup', handleEarlyUp);
    };
    
    document.addEventListener('mousemove', handleEarlyMove);
    document.addEventListener('mouseup', handleEarlyUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (draggedCard === null || !isDragMode) return;
    
    // Update drag position to follow cursor exactly
    setDragPosition({ x: e.clientX, y: e.clientY });

    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    // Current cursor position relative to container
    const cursorX = e.clientX - containerRect.left;
    const cursorY = e.clientY - containerRect.top;

    const newPositions: { [key: number]: { x: number; y: number } } = {};
    
    projectList.forEach((_, index) => {
      if (index === draggedCard) return;
      
      const cardElement = document.querySelector(`[data-card-index="${index}"]`) as HTMLElement;
      if (cardElement) {
        const cardRect = cardElement.getBoundingClientRect();
        const cardCenterX = cardRect.left - containerRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top - containerRect.top + cardRect.height / 2;
        
        // Calculate distance from cursor to card center
        const deltaX = cardCenterX - cursorX;
        const deltaY = cardCenterY - cursorY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // iPhone-style interaction radius
        const interactionRadius = 120;

        if (distance < interactionRadius && distance > 0) {
          // Smooth push strength - stronger when closer
          const pushStrength = (interactionRadius - distance) / interactionRadius;
          const maxPushDistance = 60;
          // Use easing for smoother movement
          const easedStrength = 1 - Math.pow(1 - pushStrength, 3);
          const pushDistance = easedStrength * maxPushDistance;
          
          // Push in direction away from cursor
          const directionX = deltaX / distance;
          const directionY = deltaY / distance;
          
          newPositions[index] = {
            x: directionX * pushDistance,
            y: directionY * pushDistance
          };
        } else {
          // Smooth return to original position
          const currentPos = cardPositions[index] || { x: 0, y: 0 };
          newPositions[index] = {
            x: currentPos.x * 0.85,
            y: currentPos.y * 0.85
          };
        }
      }
    });

    setCardPositions(newPositions);
  };

  const handleMouseUp = (e: MouseEvent) => {
    // Clear any pending hold timer
    if (holdTimer) {
      clearTimeout(holdTimer);
      setHoldTimer(null);
    }
    
    if (draggedCard === null || !isDragMode) {
      setDraggedCard(null);
      setIsDragMode(false);
      setCardPositions({});
      return;
    }

    // Find closest card for swapping
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (containerRect) {
      const cursorX = e.clientX - containerRect.left;
      const cursorY = e.clientY - containerRect.top;
      
      let dropIndex = -1;
      let minDistance = Infinity;
      
      projectList.forEach((_, index) => {
        if (index === draggedCard) return;
        
        const cardElement = document.querySelector(`[data-card-index="${index}"]`) as HTMLElement;
        if (cardElement) {
          const cardRect = cardElement.getBoundingClientRect();
          const cardCenterX = cardRect.left - containerRect.left + cardRect.width / 2;
          const cardCenterY = cardRect.top - containerRect.top + cardRect.height / 2;
          
          const distance = Math.sqrt(
            Math.pow(cursorX - cardCenterX, 2) + Math.pow(cursorY - cardCenterY, 2)
          );
          
          if (distance < 80 && distance < minDistance) {
            minDistance = distance;
            dropIndex = index;
          }
        }
      });
      
      if (dropIndex !== -1) {
        const newProjects = [...projectList];
        const temp = newProjects[draggedCard];
        newProjects[draggedCard] = newProjects[dropIndex];
        newProjects[dropIndex] = temp;
        setProjectList(newProjects);
      }
    }

    setDraggedCard(null);
    setIsDragMode(false);
    // Animate all cards back to original positions
    const returnPositions: { [key: number]: { x: number; y: number } } = {};
    Object.keys(cardPositions).forEach(key => {
      returnPositions[parseInt(key)] = { x: 0, y: 0 };
    });
    setCardPositions(returnPositions);
  };

  React.useEffect(() => {
    if (draggedCard !== null && isDragMode) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggedCard, isDragMode, projectList, cardPositions]);

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
            const showDragState = isBeingDragged && isDragMode;
            const cardPosition = cardPositions[index] || { x: 0, y: 0 };
            
            return (
              <div
                key={project.id}
                data-card-index={index}
                className={`transition-all duration-300 ease-out ${showDragState ? 'z-50' : ''}`}
                style={{
                  transform: showDragState 
                    ? `translate(${dragPosition.x - dragStartPos.x}px, ${dragPosition.y - dragStartPos.y}px) scale(1.05) rotate(3deg)` 
                    : `translate(${cardPosition.x}px, ${cardPosition.y}px) scale(1)`,
                  position: showDragState ? 'fixed' : 'relative',
                  pointerEvents: showDragState ? 'none' : 'auto', 
                  zIndex: showDragState ? 1000 : 'auto',
                  filter: showDragState ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' : 'none',
                  transformOrigin: 'center center'
                }}
              >
                <ProjectCard 
                  {...project} 
                  index={index}
                  onMouseDown={(e) => handleMouseDown(index, e)}
                  isDragging={showDragState}
                />
              </div>
          )})}
        </div>
      </div>
    </div>
  );
}