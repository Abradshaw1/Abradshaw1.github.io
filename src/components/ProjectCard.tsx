import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
}

export default function ProjectCard({ id, title, description, image, tags }: ProjectCardProps) {
  const displayTags = tags || ['UI Design', 'Health Informatics', 'ML'];

  return (
    <Link to={`/project/${id}`} className="group block no-underline cursor-pointer">
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '3 / 2' }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover block transition-transform duration-[160ms]"
          style={{ transitionTimingFunction: 'cubic-bezier(.2,.8,.2,1)' }}
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=800';
          }}
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-[160ms] ease-out flex flex-col items-center justify-center gap-2">
          <span
            className="text-white text-sm font-medium opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[400ms] ease-out"
            style={{ transitionDelay: '60ms' }}
          >
            {displayTags.join(' | ')}
          </span>
          <span
            className="text-white text-sm opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[400ms] ease-out"
            style={{ transitionDelay: '160ms' }}
          >
            See Description &rarr;
          </span>
        </div>
      </div>

      <h3 className="text-[#111] text-[20px] font-bold mt-3 underline underline-offset-2 decoration-1">
        {title}
      </h3>
      <p className="text-[#555] text-sm mt-1">
        {description}
      </p>
    </Link>
  );
}
