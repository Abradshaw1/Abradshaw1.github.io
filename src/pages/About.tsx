import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Music, Coffee, Brain, Timer, Keyboard } from 'lucide-react';

function HighlightLink({
  href,
  children,
  style,
}: {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <span className="relative inline-block align-baseline">
      <span className="absolute inset-0 bg-[#00008B] rounded-sm"></span>
      <a href={href} className="relative text-white px-1 hover:underline" style={style}>
        {children}
      </a>
    </span>
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
    // Fallback to direct link
    window.open('/project-images/Aidan_Bradshaw_Resume_CV.pdf', '_blank');
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* header grid */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1 flex justify-center items-start mt-16">
            <div className="w-64 h-80 rounded-lg overflow-hidden bg-slate-200">
              <img
                src="project-images/Headshot1.jpg"
                alt="Aidan Bradshaw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="mb-2">
              <h1
                className="text-4xl font-light text-black mb-2"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                About Me
              </h1>
              <div className="h-[2px] bg-[#00008B] w-full" />
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I am an applied machine learning researcher and first-year PhD student 
                rotating in the{' '}
                <HighlightLink href="https://spice-lab.org/" style={{ textDecorationThickness: '2px' }}>
                  SPICE Lab
                </HighlightLink>
                {' '}at Northwestern University. My research spans on-device machine learning 
                and behavioral sensing systems for digital health, activity understanding, 
                and affective computing.
              </p>

              <p>
                Before my doctoral studies, I conducted research at{' '}
                <HighlightLink href="https://www.media.mit.edu/" style={{ textDecorationThickness: '2px' }}>
                  MIT&apos;s Media Lab
                </HighlightLink>
                {' '}on embedded deep learning, at Carnegie Mellon University&apos;s{' '}
                <HighlightLink href="https://hcii.cmu.edu/" style={{ textDecorationThickness: '2px' }}>
                  Human-Computer Interaction Institute
                </HighlightLink>
                {' '}on text-to-image diffusion models, and at ETH Zurich&apos;s{' '}
                <HighlightLink href="https://iis.ee.ethz.ch/" style={{ textDecorationThickness: '2px' }}>
                  Integrated Systems Laboratory
                </HighlightLink>
                , where my current collaborations focus on mobile computing. I hold an M.S. in Applied Data Science 
                from Carnegie Mellon University and a B.S. in Computer Science with a minor 
                in Mathematics from San Diego State University.
              </p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="mt-24">
          <h2
            className="text-4xl font-light text-slate-900 mb-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Resources
          </h2>
          <div className="h-[2px] bg-[#00008B] w-full mb-6" />

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="https://github.com/Abradshaw1"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#00008B] text-sm border-2 border-[#00008B] hover:bg-[#00008B] hover:text-white transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/aidanbradshaw1/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#00008B] text-sm border-2 border-[#00008B] hover:bg-[#00008B] hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
              LINKEDIN
            </a>
            <a
              href="mailto:aidanbradshaw2025@u.northwestern.edu"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#00008B] text-sm border-2 border-[#00008B] hover:bg-[#00008B] hover:text-white transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              EMAIL
            </a>
            <a
              href="#"
              onClick={handleCVDownload}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#00008B] text-sm border-2 border-[#00008B] hover:bg-[#00008B] hover:text-white transition-all duration-300"
            >
              <FileText className="w-4 h-4" />
              CV DOWNLOAD
            </a>
          </div>
        </div>

        {/* Interests */}
        <div className="mt-24">
          <h2 className="text-4xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>Interests</h2>
          <div className="h-[2px] bg-[#00008B] w-full mb-6" />
          <div className="space-y-3 text-slate-600 mt-6">
            <div className="flex items-center gap-3">
              <Music className="w-5 h-5 text-[#00008B] flex-shrink-0" />
              <p className="text-sm leading-relaxed">Music – Synthetic pop and electronic (paid DJ at public/private events); self-taught pianist (classical and contemporary)</p>
            </div>
            <div className="flex items-center gap-3">
              <Coffee className="w-5 h-5 text-[#00008B] flex-shrink-0" />
              <p className="text-sm leading-relaxed">Coffee Brewing – Moka pot, grounds mixtures (preferably heavy caffeine), mechanical French press, and pour-over methods</p>
            </div>
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-[#00008B] flex-shrink-0" />
              <p className="text-sm leading-relaxed">Logic & Language – Implicit biases, game theory, paradoxes, and linguistics</p>
            </div>
            <div className="flex items-center gap-3">
              <Timer className="w-5 h-5 text-[#00008B] flex-shrink-0" />
              <p className="text-sm leading-relaxed">Long Distance Running – XC and trail running</p>
            </div>
            <div className="flex items-center gap-3">
              <Keyboard className="w-5 h-5 text-[#00008B] flex-shrink-0" />
              <p className="text-sm leading-relaxed">Mechanical Keyboard Design – Magnetic switches, hall sensors, Japanese inspired design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}