import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="w-56 h-56 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src="https://avatars.githubusercontent.com/u/146846937"
          alt="Profile"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      
      <div className="space-y-6 flex-grow">
        <h1 className="text-5xl font-bold text-gray-900">
          Aidan Bradshaw
        </h1>
        <div className="space-y-1">
          <p className="text-xl text-gray-900 font-medium">
            Carnegie Mellon University
          </p>
          <p className="text-xl text-gray-900 font-medium">
            M.S. in Applied Data Science
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            { icon: Github, label: 'GitHub', href: 'https://github.com/Abradshaw1' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aidanbradshaw1/' },
            { icon: Mail, label: 'Email', href: 'mailto:abradsha@andrew.cmu.edu' },
            { icon: FileText, label: 'CV', href: '/ABradshaw-Resume-CV.pdf', download: true }
          ].map(({ icon: Icon, label, href, download }) => (
            <a
              key={label}
              href={href}
              download={download}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600/90 rounded-md hover:bg-gray-600 text-[#60A5FA] transition-colors text-sm font-medium"
            >
              <Icon className="w-4 h-4" />
              <span className="text-white">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}