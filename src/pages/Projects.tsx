import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="w-[60%] mx-auto">
        <div className="mb-10">
          <h1 className="text-[28px] font-bold text-[#111] mb-2">
            Projects
          </h1>
          <div className="h-[2px] bg-black w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
