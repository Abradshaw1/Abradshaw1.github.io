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
  Coffee,
  MessageSquare,
  Calculator,
  Gamepad2
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-80 h-80 rounded-2xl overflow-hidden bg-slate-200">
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
              <div className="h-px bg-[#00008B] w-full"></div>
            </div>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I am an AI researcher and embedded systems designer working at the intersection of ubiquitous computing, health sensing, and applied machine learning. I hold an M.S. in Applied Data Science from Carnegie Mellon University and a B.S. in Computer Science (with a minor in Applied Mathematics) from San Diego State University.
              </p>
              
              <p>
                I am currently based in Zurich, working as a research assistant at ETH Zurich's Integrated Systems Laboratory. My previous work spans AI applications in TinyML, sensor fusion, wearables, signal processing, interface design, multimodal diffusion, and mHealth during my time at Carnegie Mellon University's Human-Computer Interaction Institute and MIT's Media Lab.
              </p>
            </div>
          </div>
        </div>

        {/* Blue divider bar - full width */}
        <div className="w-full h-px bg-[#00008B] mb-12"></div>
        
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
                onClick={(e) => {
                  e.preventDefault();
                  window.open('/ABradshaw-Resume-CV.pdf', '_blank');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#00008B] text-white text-sm hover:bg-[#000080] transition-colors"
              >
                <FileText className="w-4 h-4" />
                CV DOWNLOAD
              </a>
            </div>
          </div>

          {/* Blue divider bar - full width */}
          <div className="w-full h-px bg-[#00008B]"></div>
          
          <div>
            <h2 className="text-4xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>Interests</h2>
            <div className="space-y-3 text-slate-600">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[#00008B] flex-shrink-0" />
                <p className="text-sm leading-relaxed">Logic & Language – Implicit biases, game theory, paradoxes, and linguistics.</p>
              </div>
              <div className="flex items-center gap-3">
                <Calculator className="w-5 h-5 text-[#00008B] flex-shrink-0" />
                <p className="text-sm leading-relaxed">Decision Theory & Logic – Implicit biases, game theory, paradoxes, and linguistics.</p>
              </div>
              <div className="flex items-center gap-3">
                <Gamepad2 className="w-5 h-5 text-[#00008B] flex-shrink-0" />
                <p className="text-sm leading-relaxed">Reasoning, Games & Language – Implicit biases, game theory, paradoxes, and linguistics.</p>
              </div>
              <div className="flex items-center gap-3">
                <Timer className="w-5 h-5 text-[#00008B] flex-shrink-0" />
                <p className="text-sm leading-relaxed">Long distance running</p>
              </div>
              <div className="flex items-center gap-3">
                <Keyboard className="w-5 h-5 text-[#00008B] flex-shrink-0" />
                <p className="text-sm leading-relaxed">Mechanical Keyboard design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}