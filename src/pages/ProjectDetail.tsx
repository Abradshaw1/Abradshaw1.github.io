import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-slate-900">Project not found</h1>
          <Link to="/projects" className="text-[#111] hover:text-[#333] mt-4 inline-block">
            Return to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pb-16">
      <div className="w-[60%] mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center text-slate-600 hover:text-[#111] mb-8 transition-colors text-lg"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div
            className="w-full overflow-hidden rounded-lg bg-slate-100"
            style={{ aspectRatio: '4 / 3' }}
          >
            <img
              src={project.detailImage || project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-start pt-0">
            <div>
              <h1 className="text-[28px] font-bold text-[#111] mb-2">{project.title}</h1>
              <div className="h-[2px] bg-black w-full"></div>
            </div>

            <p className="text-[#555] font-light leading-relaxed text-base mt-6">
              {project.fullDescription}
            </p>

            <div className="mt-6">
              <h2 className="text-[20px] font-bold text-[#111] mb-2">Technology</h2>
              <div className="h-[2px] bg-black w-full mb-4"></div>
              <p className="text-[#555] font-light text-base">
                {project.technologies.join(', ')}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-6">
              {project.link === '#' ? (
                <span className="text-[#555] font-light text-base">
                  Source code available upon request
                </span>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#111] text-base font-medium no-underline hover:underline hover:underline-offset-4 hover:decoration-1 transition-all"
                >
                  View Source Code
                  <ArrowRight className="w-5 h-5" />
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#111] text-base font-medium no-underline hover:underline hover:underline-offset-4 hover:decoration-1 transition-all"
                >
                  Try Me!
                  <ArrowRight className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
