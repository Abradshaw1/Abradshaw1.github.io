import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import NewsSection from '../components/NewsSection';
import Publications from '../components/Publications';
import AnnouncementBanner from '../components/AnnouncementBanner';
import { projects } from '../data/projects';
import { Cpu, Cloud, Database, Zap, School } from 'lucide-react';

const Home: React.FC = () => {
  const researchInterests = [
    { icon: Cpu, text: 'Artificial Intelligence' },
    { icon: Cloud, text: 'Cloud Computing' },
    { icon: Database, text: 'Distributed Systems' },
    { icon: Zap, text: 'Web Performance' }
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
                  I am currently finishing my masters of applied data science at CMU and am a research assistant in the{' '}
                  <a href="https://dig.cmu.edu/" className="text-blue-600 hover:text-blue-700">DIG Lab</a> in the{' '}
                  <a href="https://hcii.cmu.edu/" className="text-blue-600 hover:text-blue-700">Human-Computer Interaction Institute</a>.
                  My current research focuses on applied machine learning for healthcare applications, where I explain, architect, and audit generative text-to-image diffusion models and their trustworthiness.
                </p>
                
                <p className="leading-relaxed">
                  Before joining CMU, I was a visiting researcher in Responsive Environments at the MIT Media Lab, led by Dr. Joe Paradiso, where I worked on model distillation for resource-constrained environments.
                  I completed my undergraduate studies at San Diego State University under the supervision of Dr. Shangping Ren, where my research centered on developing a wearable biosensing framework to automate health and environmental data collection for patients with Raynaud's syndrome.
                </p>
                
                <p className="leading-relaxed">
                  My future research interests lie at the intersection of assistive machine learning for mental health characterization, specifically leveraging cognitive representation and health signals to understand, characterize, and aid in the diagnosis of disease.
                </p>

                <div className="bg-gray-700/80 border border-blue-500/20 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <School className="w-5 h-5 text-blue-400" />
                      <span><strong>M.S. Applied Data Science</strong> - Carnegie Mellon University</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <School className="w-5 h-5 text-blue-400" />
                      <span><strong>B.S. Computer Science, Minor: Applied Mathematics</strong> - San Diego State University</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Selected Work</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </section>

          <Publications />

          <div className="grid md:grid-cols-2 gap-8">
            <NewsSection />
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Research Interests</h2>
              <div className="bg-gray-700/80 border border-blue-500/20 p-6 rounded-lg">
                <ul className="space-y-4">
                  {researchInterests.map(({ icon: Icon, text }, index) => (
                    <li key={index} className="flex items-center gap-3 text-white">
                      <Icon className="w-5 h-5 text-blue-400" />
                      <span>{text}</span>
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