import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import NewsSection from '../components/NewsSection';
import Publications from '../components/Publications';
import AnnouncementBanner from '../components/AnnouncementBanner';
import { projects } from '../data/projects';
import { 
  Timer,
  TreePine,
  Brain,
  Keyboard,
  Cpu,
  Flower,
  UtensilsCrossed,
  Gauge,
  School, 
  TowerControl
} from 'lucide-react';

const Home: React.FC = () => {
  const personalInterests = [
    { icon: Timer, text: 'Long distance running (currently marathon training)' },
    { icon: TreePine, text: 'Finding the best reading spot in Pittsburgh Parks for hammock reading' },
    { icon: Brain, text: 'Implicit biases in language' },
    { icon: Keyboard, text: 'Mechanical Keyboard design' },
    { icon: Cpu, text: 'PC building' },
    { icon: Flower, text: 'Started my own herb Garden!' },
    { icon: TowerControl, text: 'Japanese Shrine Architecture' },
    { icon: Gauge, text: 'High performance computing' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-4xl">
        <div className="space-y-20">
          <Header />
          
          <AnnouncementBanner />

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
            <div className="prose max-w-none">
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  I am pursuing my masters of applied data science at CMU and am a research assistant in the{' '}
                  <a href="https://dig.cmu.edu/" className="text-blue-600 hover:text-blue-700">DIG Lab</a> in the{' '}
                  <a href="https://hcii.cmu.edu/" className="text-blue-600 hover:text-blue-700">Human-Computer Interaction Institute</a>.
                  My current research focuses on applied machine learning for healthcare applications, where I explain, architect, and audit generative text-to-image diffusion models and their trustworthiness.
                </p>
                
                <p className="leading-relaxed">
                  Before joining CMU, I was a visiting researcher in Responsive Environments at the <a href="https://www.media.mit.edu/" className="text-blue-600 hover:text-blue-700">MIT Media Lab,</a> led by Dr. Joe Paradiso, where I worked on model distillation for resource-constrained environments.
                  I completed my undergraduate studies at San Diego State University under the supervision of Dr. Shangping Ren, where my research centered on developing a wearable biosensing framework to automate health and environmental data collection for patients with Raynaud's syndrome.
                </p>
                
                <p className="leading-relaxed">
                  My future research interests lie in assistive machine learning for mental health characterization, specifically leveraging cognitive representation and health signals to understand, characterize, and aid in the diagnosis of disease.
                </p>

                <div className="bg-gray-700/80 border border-blue-500/20 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <School className="w-5 h-5 text-blue-400" />
                      <span><strong>M.S. Applied Data Science; In Progress</strong> - Carnegie Mellon University</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <School className="w-5 h-5 text-blue-400" />
                      <span><strong>B.S. Computer Science, Minor: Mathematics</strong> - San Diego State University</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </section>

          <Publications />

          <div className="grid md:grid-cols-2 gap-8">
            <NewsSection />
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Hobbies and Interests</h2>
              <div className="bg-gray-700/80 border border-blue-500/20 p-6 rounded-lg">
                <ul className="space-y-4">
                  {personalInterests.map(({ icon: Icon, text }, index) => (
                    <li key={index} className="flex items-center gap-3 text-white">
                      <div className="min-w-[32px] h-8 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;