import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: '170px', paddingBottom: '120px' }}>
      <div className="mx-auto px-8" style={{ width: '72%', maxWidth: '1400px' }}>
        <h1 className="text-[22px] font-bold text-[#111] mb-20">Projects</h1>

        <div
          className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '48px', rowGap: '80px', width: '75%' }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
