import { useState, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [projectList, setProjectList] = useState(projects);
  const [draggedCard, setDraggedCard] = useState<number | null>(null);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [cardPositions, setCardPositions] = useState<{ [key: number]: { x: number; y: number } }>({});
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
    
    // Create invisible drag image
    const dragImage = new Image();
    dragImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    e.dataTransfer.setDragImage(dragImage, 0, 0);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();

    // Update drag position and calculate card avoidance
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (containerRect && draggedCard !== null) {
      const newX = e.clientX - containerRect.left - dragOffset.x;
      const newY = e.clientY - containerRect.top - dragOffset.y;
      
      setDragPosition({
        x: newX,
        y: newY
      });

      // Calculate which cards should move away
      const draggedCardRect = {
        x: newX,
        y: newY,
        width: 300, // Approximate card width
        height: 400  // Approximate card height
      };

      const newPositions: { [key: number]: { x: number; y: number } } = {};
      
      projectList.forEach((_, index) => {
        if (index === draggedCard) return;
        
        // Get the card element to calculate its position
        const cardElement = document.querySelector(`[data-card-index="${index}"]`) as HTMLElement;
        if (cardElement) {
          const cardRect = cardElement.getBoundingClientRect();
          const cardContainerPos = {
            x: cardRect.left - containerRect.left,
            y: cardRect.top - containerRect.top
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
              const pushDistance = 50; // How far to push cards away
              newPositions[index] = {
                x: (deltaX / distance) * pushDistance,
                y: (deltaY / distance) * pushDistance
              };
            }
          } else {
            // Return to original position
            newPositions[index] = { x: 0, y: 0 };
          }
        }
      });

      setCardPositions(newPositions);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
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

  const handleDragEnd = () => {
    setDraggedCard(null);
    setCardPositions({});
  };

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
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {/* Dragged card overlay */}
          {draggedCard !== null && (
            <div
              className="fixed pointer-events-none z-50 opacity-80"
              style={{
                left: dragPosition.x,
                top: dragPosition.y,
                transform: 'rotate(5deg)',
                width: '300px', // Fixed width for dragged card
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
            const isBeingDragged = draggedCard === index;
            const cardPosition = cardPositions[index] || { x: 0, y: 0 };
            
            return (
              <div
                key={project.id}
                data-card-index={index}
                className={`transition-all duration-300 ${isBeingDragged ? 'opacity-30' : ''}`}
                style={{
                  transform: `translate(${cardPosition.x}px, ${cardPosition.y}px)`,
                }}
              >
                <ProjectCard 
                  {...project} 
                  index={index}
                  onDragStart={(e) => handleDragStart(index, e)}
                  onDragEnd={handleDragEnd}
                  isDragging={isBeingDragged}
                />
              </div>
          )})}
        </div>
      </div>
    </div>
  );
}