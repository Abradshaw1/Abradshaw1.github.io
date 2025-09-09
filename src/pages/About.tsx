import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { 
  Timer,
  TreePine,
  Brain,
  Keyboard,
  Cpu,
  Flower,
  TowerControl,
  Gauge,
  Coffee
} from 'lucide-react';

const personalInterests = [
  { icon: Timer, text: 'Long distance running (currently marathon training)', size: 'w-5 h-5' },
  { icon: TreePine, text: 'Finding the best reading spot in Pittsburgh Parks for hammock reading', size: 'w-4 h-4' },
  { icon: Brain, text: 'Implicit biases in language', size: 'w-6 h-6' },
  { icon: Keyboard, text: 'Mechanical Keyboard design', size: 'w-4 h-4' },
  { icon: Cpu, text: 'PC building', size: 'w-5 h-5' },
  { icon: Flower, text: 'Started my own herb Garden!', size: 'w-4 h-4' },
  { icon: Coffee, text: 'Coffee brewing and roasting techniques', size: 'w-5 h-5' },
  { icon: TowerControl, text: 'Japanese Shrine Architecture', size: 'w-4 h-4' },
  { icon: Gauge, text: 'High performance computing', size: 'w-6 h-6' }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
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
              <h1 className="text-4xl font-light text-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>About Me</h1>
              <div className="h-0.5 bg-[#00008B] w-full max-w-fit"></div>
            </div>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I am pursuing my masters of applied data science at CMU and am a research assistant in the{' '}
                <a href="https://dig.cmu.edu/" className="text-[#00008B] hover:text-[#000080] underline">DIG Lab</a> in the{' '}
                <a href="https://hcii.cmu.edu/" className="text-[#00008B] hover:text-[#000080] underline">Human-Computer Interaction Institute</a>.
                My current research focuses on applied machine learning for healthcare applications, where I explain, architect, and audit generative text-to-image diffusion models and their trustworthiness.
              </p>
              
              <p>
                Before joining CMU, I was a visiting researcher in Responsive Environments at the{' '}
                <a href="https://www.media.mit.edu/" className="text-[#00008B] hover:text-[#000080] underline">MIT Media Lab</a>, led by Dr. Joe Paradiso, where I worked on model distillation for resource-constrained environments.
                I completed my undergraduate studies at San Diego State University under the supervision of Dr. Shangping Ren, where my research centered on developing a wearable biosensing framework to automate health and environmental data collection for patients with Raynaud's syndrome.
              </p>
              
              <p>
                My future research interests lie in assistive machine learning for mental health characterization, specifically leveraging cognitive representation and health signals to understand, characterize, and aid in the diagnosis of disease.
              </p>
            </div>
          </div>
        </div>

        {/* Blue divider bar - full width */}
        <div className="w-full h-0.5 bg-[#00008B] mb-12"></div>
        
        <div className="space-y-12">
          
          <div>
            <h2 className="text-4xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>Links</h2>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/Abradshaw1"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#00008B] text-white text-sm hover:bg-[#000080] transition-colors"
              >
                <Github className="w-4 h-4" />
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/aidanbradshaw1/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#00008B] text-white text-sm hover:bg-[#000080] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LINKEDIN
              </a>
              <a
                href="mailto:abradsha@andrew.cmu.edu"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#00008B] text-white text-sm hover:bg-[#000080] transition-colors"
              >
                <Mail className="w-4 h-4" />
                EMAIL
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#00008B] text-white text-sm hover:bg-[#000080] transition-colors"
              >
                <FileText className="w-4 h-4" />
                CV DOWNLOAD
              </a>
            </div>
          </div>

          {/* Blue divider bar - full width */}
          <div className="w-full h-0.5 bg-[#00008B]"></div>
          
          <div>
            <h2 className="text-4xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInterests.map(({ icon: Icon, text, size }, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-600">
                  <div className="flex items-center justify-center min-w-[32px]">
                    <Icon className={`${size} text-[#00008B] flex-shrink-0`} />
                  </div>
                  <span className="text-sm leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}