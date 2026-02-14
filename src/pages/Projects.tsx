import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10">
          <h1
            className="text-4xl font-light text-black mb-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Projects
          </h1>
          <div className="h-[2px] bg-[#00008B] w-full" />
        </div>

        <div
          className="columns-1 md:columns-2 lg:columns-3"
          style={{ columnGap: '16px' }}
        >
          {projects.map((project) => (
            <div key={project.id} className="mb-4 break-inside-avoid">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
