import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Music, Coffee, Brain, Timer, Keyboard } from 'lucide-react';

function HighlightLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className="text-[#2563eb] hover:text-[#1d4ed8] underline underline-offset-2">
      {children}
    </a>
  );
}

const handleCVDownload = async (e: React.MouseEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('/project-images/Aidan_Bradshaw_Resume_CV.pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Aidan_Bradshaw_Resume_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Download failed:', error);
    window.open('/project-images/Aidan_Bradshaw_Resume_CV.pdf', '_blank');
  }
};

export default function About() {
  return (
    <div className="bg-white pb-16">
      <div className="w-[60%] mx-auto">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-start">
          <div className="md:col-span-1 flex flex-col items-center gap-6 mt-2">
            <div className="w-full overflow-hidden rounded-lg bg-slate-200" style={{ aspectRatio: '5 / 4' }}>
              <img
                src="project-images/Headshot1.jpg"
                alt="Aidan Bradshaw"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 w-full">
              <a
                href="https://github.com/Abradshaw1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-[#111] text-sm border-2 border-[#111] hover:bg-[#111] hover:text-white transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/aidanbradshaw1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-[#111] text-sm border-2 border-[#111] hover:bg-[#111] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                LINKEDIN
              </a>
              <a
                href="mailto:aidanbradshaw2025@u.northwestern.edu"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-[#111] text-sm border-2 border-[#111] hover:bg-[#111] hover:text-white transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                EMAIL
              </a>
              <a
                href="#"
                onClick={handleCVDownload}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-[#111] text-sm border-2 border-[#111] hover:bg-[#111] hover:text-white transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                CV
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="mb-2">
              <h1 className="text-[28px] font-bold text-[#111] mb-2">About Me</h1>
              <div className="h-[2px] bg-black w-full" />
            </div>

            <div className="space-y-4 text-[#555] font-light leading-relaxed text-base">
              <p>
                I am an applied machine learning researcher and first-year PhD student
                in the{' '}
                <HighlightLink href="https://spice-lab.org/">
                  SPICE Lab
                </HighlightLink>
                {' '}at Northwestern University. My research spans on-device machine learning
                and behavioral sensing systems for digital health, activity understanding,
                and affective computing.
              </p>

              <p>
                Before my doctoral studies, I conducted research at{' '}
                <HighlightLink href="https://www.media.mit.edu/">
                  MIT&apos;s Media Lab
                </HighlightLink>
                {' '}on embedded deep learning, at Carnegie Mellon University&apos;s{' '}
                <HighlightLink href="https://hcii.cmu.edu/">
                  Human-Computer Interaction Institute
                </HighlightLink>
                {' '}on text-to-image diffusion models, and at ETH Zurich&apos;s{' '}
                <HighlightLink href="https://iis.ee.ethz.ch/">
                  Integrated Systems Laboratory
                </HighlightLink>
                , where my current collaborations focus on mobile computing. I hold an M.S. in Applied Data Science
                from Carnegie Mellon University and a B.S. in Computer Science with a minor
                in Mathematics from San Diego State University.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[28px] font-bold text-[#111] mb-2">Interests</h2>
              <div className="h-[2px] bg-black w-full mb-6" />
              <div className="space-y-3 text-[#555] font-light mt-6">
                <div className="flex items-center gap-3">
                  <Music className="w-5 h-5 text-[#111] flex-shrink-0" />
                  <p className="text-base leading-relaxed">Music -- Synthetic pop and electronic (paid DJ at public/private events); self-taught pianist (classical and contemporary)</p>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-[#111] flex-shrink-0" />
                  <p className="text-base leading-relaxed">Coffee Brewing -- Moka pot, grounds mixtures (preferably heavy caffeine), mechanical French press, and pour-over methods</p>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-[#111] flex-shrink-0" />
                  <p className="text-base leading-relaxed">Logic & Language -- Implicit biases, game theory, paradoxes, and linguistics</p>
                </div>
                <div className="flex items-center gap-3">
                  <Timer className="w-5 h-5 text-[#111] flex-shrink-0" />
                  <p className="text-base leading-relaxed">Long Distance Running -- XC and trail running</p>
                </div>
                <div className="flex items-center gap-3">
                  <Keyboard className="w-5 h-5 text-[#111] flex-shrink-0" />
                  <p className="text-base leading-relaxed">Mechanical Keyboard Design -- Magnetic switches, hall sensors, Japanese inspired design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
