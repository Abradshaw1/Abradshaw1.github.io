import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import NewsSection from '../components/NewsSection';
import Publications from '../components/Publications';
import AnnouncementBanner from '../components/AnnouncementBanner';
import { projects } from '../data/projects';
import { Cpu, Cloud, Database, Zap } from 'lucide-react';

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
              <p className="text-gray-600 leading-relaxed">
                With over 5 years of experience in software development, I've worked on projects 
                ranging from small startups to large enterprise applications. I'm passionate about 
                creating intuitive user experiences and writing clean, maintainable code.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My expertise includes full-stack development, cloud architecture, and DevOps practices.
                I'm constantly learning and exploring new technologies to stay at the forefront of
                software development.
              </p>
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