import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  index: number;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: () => void;
  onDragEnd?: () => void;
  isDragging?: boolean;
  isDropTarget?: boolean;
  isGhost?: boolean;
}

export default function ProjectCard({ 
  id, 
  title, 
  description, 
  technologies, 
  image, 
  index,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  isDragging = false,
  isDropTarget = false,
  isGhost = false
}: ProjectCardProps) {
  // Vary card heights for masonry effect
  const heights = ['h-64', 'h-80', 'h-72', 'h-96', 'h-64', 'h-88', 'h-64', 'h-84'];
  const cardHeight = heights[index % heights.length];
  
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = 'move';
    onDragStart?.(e);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    onDragOver?.(e);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    onDrop?.();
  };

  const handleClick = (e: React.MouseEvent) => {
    // Prevent navigation if we're in the middle of a drag operation
    if (isDragging) {
      e.preventDefault();
    }
  };

  return (
    <div
      draggable={!isGhost}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnd={onDragEnd}
      className={`group bg-white overflow-hidden transition-all duration-300 shadow-sm w-full min-h-[256px] ${
        !isGhost ? 'cursor-move' : 'cursor-default'
      } ${
        isDropTarget ? 'ring-2 ring-blue-400 ring-opacity-50' : ''
      } ${
        isGhost ? 'shadow-2xl' : ''
      }`}
    >
      <Link 
        to={`/project/${id}`}
        className="block w-full h-full"
        onClick={handleClick}
      >
        <div className={`${cardHeight} w-full overflow-hidden relative min-h-[256px]`}>
        {isDropTarget && (
          <div className="absolute inset-0 bg-blue-100 opacity-20 z-10"></div>
        )}
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            console.log(`Failed to load image for ${title}:`, image);
            e.currentTarget.src = 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=1200&h=800';
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 transition-all duration-500">
          <div className="text-white">
            <h3 className="text-lg font-medium mb-2 relative overflow-hidden">
              <span className="relative z-10">{title}</span>
              <div className="absolute inset-0 bg-[#00008B] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed line-clamp-2 mb-3 relative overflow-hidden">
              <span className="relative z-10">{description}</span>
              <div className="absolute inset-0 bg-[#00008B]/70 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out delay-100"></div>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 bg-white/20 text-white rounded-sm relative overflow-hidden transition-all duration-500"
                >
                  <span className="relative z-10">{tech}</span>
                  <div className="absolute inset-0 bg-[#00008B] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" style={{transitionDelay: `${200 + index * 50}ms`}}></div>
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="text-xs px-2 py-1 bg-white/20 text-white rounded-sm relative overflow-hidden transition-all duration-500">
                  <span className="relative z-10">+{technologies.length - 3} more</span>
                  <div className="absolute inset-0 bg-[#00008B] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out delay-300"></div>
                </span>
              )}
            </div>
          </div>
        </div>
        </div>
      </Link>
    </div>
  );
}