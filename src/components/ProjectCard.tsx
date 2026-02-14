import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ id, title, description, image }: ProjectCardProps) {
  return (
    <Link to={`/project/${id}`} className="group block no-underline">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto block"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=800';
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 pt-12">
          <h3 className="text-white text-base font-semibold leading-snug">
            {title}
          </h3>
          <p className="text-white/85 text-sm mt-1 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
