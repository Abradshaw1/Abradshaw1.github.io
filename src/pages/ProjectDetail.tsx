import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-slate-900">Project not found</h1>
          <Link to="/projects" className="text-[#00008B] hover:text-[#000080] mt-4 inline-block">
            Return to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-slate-600 hover:text-[#00008B] mb-8 transition-colors text-lg"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        <div className="grid md:grid-cols-2 gap-8 min-h-[500px]">
          <div className="w-full h-full overflow-hidden rounded-lg">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-light text-black mb-2">{project.title}</h1>
                <div className="h-px bg-[#00008B] w-full"></div>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-lg">
                {project.fullDescription}
              </p>
              
              <div>
                <h2 className="text-xl font-medium text-slate-900 mb-2">Technologies Used</h2>
                <div className="h-0.5 bg-[#00008B] w-full mb-4"></div>
                <p className="text-slate-600">
                  {project.technologies.join(', ')}
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium text-slate-900 mb-2">Code</h2>
                <div className="h-0.5 bg-[#00008B] w-full mb-4"></div>
                <button
                  href="#"
                  className="group inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 text-sm hover:bg-slate-50 transition-colors relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    VIEW SOURCE CODE
                  </span>
                  <div className="absolute inset-0 bg-[#00008B] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                  <span className="absolute inset-0 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
                    <ArrowLeft className="w-4 h-4" />
                    VIEW SOURCE CODE
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}