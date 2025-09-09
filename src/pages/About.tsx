import React from 'react';
import { Github, Linkedin, Mail, FileText, School } from 'lucide-react';
import { 
  Timer,
  TreePine,
  Brain,
  Keyboard,
  Cpu,
  Flower,
  TowerControl,
  Gauge
} from 'lucide-react';

export default function About() {
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
    <div className="min-h-screen bg-stone-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-200">
              <img
                src="https://avatars.githubusercontent.com/u/146846937"
                alt="Aidan Bradshaw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-light text-slate-900 mb-2">About Me</h1>
              <div className="w-16 h-0.5 bg-blue-600"></div>
            </div>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I am pursuing my masters of applied data science at CMU and am a research assistant in the{' '}
                <a href="https://dig.cmu.edu/" className="text-blue-600 hover:text-blue-700 underline">DIG Lab</a> in the{' '}
                <a href="https://hcii.cmu.edu/" className="text-blue-600 hover:text-blue-700 underline">Human-Computer Interaction Institute</a>.
                My current research focuses on applied machine learning for healthcare applications, where I explain, architect, and audit generative text-to-image diffusion models and their trustworthiness.
              </p>
              
              <p>
                Before joining CMU, I was a visiting researcher in Responsive Environments at the{' '}
                <a href="https://www.media.mit.edu/" className="text-blue-600 hover:text-blue-700 underline">MIT Media Lab</a>, led by Dr. Joe Paradiso, where I worked on model distillation for resource-constrained environments.
                I completed my undergraduate studies at San Diego State University under the supervision of Dr. Shangping Ren, where my research centered on developing a wearable biosensing framework to automate health and environmental data collection for patients with Raynaud's syndrome.
              </p>
              
              <p>
                My future research interests lie in assistive machine learning for mental health characterization, specifically leveraging cognitive representation and health signals to understand, characterize, and aid in the diagnosis of disease.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com/Abradshaw1' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aidanbradshaw1/' },
                { icon: Mail, label: 'Email', href: 'mailto:abradsha@andrew.cmu.edu' },
                { icon: FileText, label: 'CV', href: '#' }
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm"
                >
                  <Icon className="w-4 h-4 text-slate-600" />
                  <span className="text-slate-700">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-light text-slate-900 mb-2">Education</h2>
              <div className="w-12 h-0.5 bg-blue-600"></div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="flex items-start gap-3">
                  <School className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-900">M.S. Applied Data Science</h3>
                    <p className="text-slate-600">Carnegie Mellon University</p>
                    <p className="text-sm text-slate-500">In Progress</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="flex items-start gap-3">
                  <School className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-900">B.S. Computer Science</h3>
                    <p className="text-slate-600">San Diego State University</p>
                    <p className="text-sm text-slate-500">Minor: Mathematics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-light text-slate-900 mb-2">Interests</h2>
              <div className="w-12 h-0.5 bg-blue-600"></div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <ul className="space-y-3">
                {personalInterests.map(({ icon: Icon, text }, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}