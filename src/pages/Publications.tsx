import { Paperclip, Github, Link, FileText, LucideIcon } from 'lucide-react';

interface Publication {
  authors: string;
  title: string;
  venue: string;
  image?: string;
  paperLink?: string;
  codeLink?: string;
  projectLink?: string;
}

export default function Publications() {
  const publicationImage = (name: string) => `/project-images/${name}`;

  const conferencePublications: Publication[] = [
    {
      authors: 'Aidan Bradshaw, Riku Arakawa, Xin Liu, and Karan Ahuja',
      title: 'TransfHAR: Self-Supervised Wrist Representations for On-Demand Activity Recognition',
      venue: 'ACM UIST 2026',
      image: publicationImage('transfhar.jpg'),
      paperLink: 'https://arxiv.org/abs/2608.15861',
      projectLink: 'https://spice-lab.org/projects/TransfHAR/'
    },
    {
      authors: 'Sawyer T. Jones, Aidan Bradshaw, Ramaz Tskhadadze, Ben Shen, and Shangping Ren',
      title: 'A Customizable, Real-Time Mobile Health Application for Raynaud\'s Syndrome and Beyond',
      venue: 'IEEE HealthCom 2025',
      image: publicationImage('custommHealthapp.png'),
      paperLink: 'https://ieeexplore.ieee.org/document/11343427'
    },
    {
      authors: 'Katelyn Morrison, Arpit Mathur, Aidan Bradshaw, Tom Wartmann, Steven Lundi, Afrooz Zandifar, Weichang Dai, Kayhan Batmanghelich, Motahhare Eslami, and Adam Perer',
      title: 'A Human-Centered Approach to Identifying Promises, Risks, and Challenges of Text-to-Image Generative AI in Radiology',
      venue: 'ACM AIES 2025',
      image: publicationImage('MedSynUI.png'),
      paperLink: 'https://ojs.aaai.org/index.php/AIES/article/view/36672/38810'
    },
    {
      authors: 'Aidan Bradshaw, Katelyn Morrison, Arpit Mathur, Weichang Dai, Motahhare Eslami, Kayhan Batmanghelich, and Adam Perer',
      title: 'Toward Interpretable 3D Diffusion in Radiology: Token-Wise Attribution for Text-to-CT Synthesis',
      venue: 'MIDL 2025 (Short Paper)',
      image: publicationImage('MIDL_attn_pipline_final_2.png'),
      paperLink: 'https://openreview.net/pdf?id=DTYFRzRPQn',
      codeLink: 'https://github.com/cmudig/MedsynBackend'
    },
    {
      authors: 'Aidan Bradshaw, Ramaz Tskhadadze, Shangping Ren, and Ben Shen',
      title: 'A Tailored Health Application: Monitoring the Etiology of Raynaud\'s Disease',
      venue: 'CSCSU 2024',
      image: publicationImage('healthapp.png'),
      paperLink: 'https://scholarworks.calstate.edu/concern/publications/np193j359',
      codeLink: 'https://github.com/Abradshaw1/HealthApp'
    }
  ];

  const journalPublications: Publication[] = [
    {
      authors: 'Patrick Chwalek, Marie Kuronaga, Marco Giordano, Aidan Bradshaw, Isamar Zhu, Marina Arbetman, and Joseph A. Paradiso',
      title: 'On-Device Deep Learning for Real-Time Acoustic Monitoring of Endangered Bombus Dahlbomii and Invasive Congeners',
      venue: 'Scientific Reports 2026',
      image: publicationImage('buzzdetection.png'),
      paperLink: 'https://www.nature.com/articles/s41598-026-65371-1',
      codeLink: 'https://github.com/Abradshaw1/AS2.0_REPO'
    }
  ];

  const posterPublications: Publication[] = [
    {
      authors: 'Katelyn Morrison, Arpit Mathur, Aidan Bradshaw, Tom Wartmann, Steven Lundi, Afrooz Zandifar, Weichang Dai, Kayhan Batmanghelich, Motahhare Eslami, and Adam Perer',
      title: 'Opportunities and Challenges in Designing Text-to-Image Generative AI for Medical Education, Training, and Practice',
      venue: 'Pitt AI in Healthcare Research Symposium 2024',
      image: publicationImage('pittaiposter.png')
    }
  ];

  const boldName = (text: string) =>
    text.replace(/Aidan Bradshaw/g, '<strong>Aidan Bradshaw</strong>');

  const LinkChip = ({ href, icon: Icon, label }: {
    href: string;
    icon: LucideIcon;
    label: string;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#111] rounded-md bg-white text-[#111] text-[13px] hover:bg-[#111] hover:text-white transition-all duration-300"
    >
      <Icon className="w-3.5 h-3.5" />
      {label}
    </a>
  );

  const PublicationItem = ({ authors, title, venue, image, paperLink, codeLink, projectLink }: Publication) => (
    <div className="flex gap-6 py-6 border-b border-slate-200 last:border-b-0">
      <div className="w-64 flex-shrink-0 bg-slate-100 rounded overflow-hidden flex items-center justify-center" style={{ aspectRatio: '4 / 3' }}>
        {image ? (
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <FileText className="w-8 h-8 text-slate-300" />
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-[18px] font-medium text-[#111] mb-1.5 leading-tight">
          {title}
        </h3>
        <p className="text-[#555] text-[15px] font-light mb-1">
          <span dangerouslySetInnerHTML={{ __html: boldName(authors) }} />
        </p>
        <p className="text-[#111] text-sm font-medium italic">
          {venue}
        </p>
        {(paperLink || codeLink || projectLink) && (
          <div className="flex flex-wrap gap-2 mt-3">
            {paperLink && <LinkChip href={paperLink} icon={Paperclip} label="Paper" />}
            {projectLink && <LinkChip href={projectLink} icon={Link} label="Project Page" />}
            {codeLink && <LinkChip href={codeLink} icon={Github} label="Code" />}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="w-[60%] mx-auto">
        <div className="mb-12">
          <h1 className="text-[28px] font-bold text-[#111] mb-2">Publications</h1>
          <div className="h-[2px] bg-black w-full"></div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-[22px] font-bold text-[#111] mb-2">
              Conference Papers
            </h2>
            <div className="h-[2px] bg-black w-full mb-6"></div>
            <div className="space-y-0">
              {conferencePublications.map((pub, index) => (
                <PublicationItem key={index} {...pub} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[22px] font-bold text-[#111] mb-2">
              Journals
            </h2>
            <div className="h-[2px] bg-black w-full mb-6"></div>
            <div className="space-y-0">
              {journalPublications.map((pub, index) => (
                <PublicationItem key={index} {...pub} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[22px] font-bold text-[#111] mb-2">
              Posters
            </h2>
            <div className="h-[2px] bg-black w-full mb-6"></div>
            <div className="space-y-0">
              {posterPublications.map((pub, index) => (
                <PublicationItem key={index} {...pub} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
