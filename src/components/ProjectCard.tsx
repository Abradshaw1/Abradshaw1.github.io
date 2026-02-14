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
      <div className="relative overflow-hidden" style={{ aspectRatio: '3 / 2' }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]"
          style={{ filter: 'brightness(1)' }}
          onMouseOver={(e) => { e.currentTarget.style.filter = 'brightness(0.93)'; }}
          onMouseOut={(e) => { e.currentTarget.style.filter = 'brightness(1)'; }}
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=800';
          }}
        />
      </div>

      <div style={{ paddingTop: '14px' }}>
        <div className="relative inline-block">
          <h3 className="text-[18px] font-normal text-[#111] leading-snug">
            {title}
          </h3>
          <div
            className="absolute bottom-0 left-0 h-[1px] bg-[#111] transition-all duration-200 ease-out w-0 group-hover:w-full"
          />
        </div>

        <div className="overflow-hidden transition-all duration-200 ease-out max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100" style={{ marginTop: '12px' }}>
          <p className="text-[14px] font-light text-[#666] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out flex justify-end">
          <span className="text-[14px] text-[#111]">&rarr;</span>
        </div>
      </div>
    </Link>
  );
}
