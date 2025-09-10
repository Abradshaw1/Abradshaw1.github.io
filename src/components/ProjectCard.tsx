import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  index: number;
  onDragStart?: () => void;
  onDrag?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  onDragEnd?: () => void;
  isDragging?: boolean;
  style?: React.CSSProperties;
}

export default function ProjectCard({ 
  id, 
  title, 
  description, 
  image, 
  index,
  onDragStart,
  onDrag,
  onDragOver,
  onDrop,
  onDragEnd,
  style = {}
}: ProjectCardProps) {
  const heights = ['h-64', 'h-80', 'h-72', 'h-96', 'h-56', 'h-88', 'h-60', 'h-84', 'h-76', 'h-92', 'h-68', 'h-52'];
  const cardHeight = heights[index % heights.length];

  const handleDragStart = (_e: React.DragEvent) => {
    if (onDragStart) {
      onDragStart();
    }
  };

  const handleMouseDown = (_e: React.MouseEvent) => {
    // Allow normal clicking - don't prevent default
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDrag={onDrag}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      onMouseDown={handleMouseDown}
      className="group bg-white overflow-hidden transition-all duration-300 shadow-sm w-full break-inside-avoid mb-4"
      style={style}
    >
      <Link 
        to={`/project/${id}`}
        className="block w-full h-full"
        draggable={false}
      >
        <div className={`${cardHeight} w-full overflow-hidden relative min-h-[256px]`}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            draggable={false}
            onError={(e) => {
              console.log(`Failed to load image for ${title}:`, image);
              e.currentTarget.src = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=800';
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
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}