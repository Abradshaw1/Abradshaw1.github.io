export default function Publications() {
  // Helper function to get publication image path
  const getPublicationImage = (imageName: string | null) => {
    if (imageName) {
      return `/project-images/${imageName}`;
    }
    return null; // Return null for placeholder
  };

  const conferencePublications = [
    {
      authors: 'Aidan B., Ramaz T., Shangping R., and Ben S.',
      title: 'A Tailored Health Application: Monitoring the Etiology of Raynaud\'s Disease',
      venue: 'CSCSU 2024',
      image: getPublicationImage('healthapp.png'),
      customImage: 'healthapp.png',
      showAllLinks: true,
      pdfLink: 'https://scholarworks.calstate.edu/downloads/5138jn54n',
      codeLink: 'https://github.com/Abradshaw1/HealthApp'
    },
    {
      authors: 'Aidan B., Katelyn M., Arpit M., Weicheng D., Motahhare E., Kayhan B., and Adam P.',
      title: 'Toward Interpretable 3D Diffusion in Radiology: Token-Wise Attribution for Text-to-CT Synthesis',
      venue: 'Medical Imaging in Deep Learning Conference (MIDL) 2025',
      image: getPublicationImage('MIDL_attn_pipline_final_2.png'),
      customImage: 'MIDL_attn_pipline_final_2.png',
      showAllLinks: true,
      pdfLink: 'https://openreview.net/pdf?id=DTYFRzRPQn',
      codeLink: 'https://github.com/cmudig/MedsynBackend'
    },
    {
      authors: 'Katelyn M., Arpit M., Aidan B., Tom W., Steven L., Afrooz Z., Weichang D., Kayhan B., Motahhare E., Adam P.',
      title: 'A Human-Centered Approach to Identifying Promises, Risks, & Challenges of Text-to-Image Generative AI in Radiology',
      venue: 'Artificial Intelligence in Ethics and Society (AIES) 2025',
      image: getPublicationImage(null),
      customImage: null,
      showAllLinks: false,
      pdfLink: 'https://arxiv.org/pdf/2507.16207'
    },
    {
      authors: 'Sawyer J., Aidan B., Ramaz T., Ben S., Shangping R.',
      title: 'A Customizable, Real-time Mobile Health Application for Raynaud\'s Syndrome and Beyond',
      venue: 'IEEE International Conference on E-health Networking, Application & Services (IEEE Healthcom) 2025',
      image: getPublicationImage(null),
      customImage: null,
      showAllLinks: false
    }
  ];

  const journalPublications = [
    {
      authors: 'Patrick Chwalek, Marie Kuronaga, Marco Giordano, Aidan Bradshaw, Isamar Zhu, Marina Arbetman, and Joseph A. Paradiso.',
      title: 'Autonomous Low-Power Distributed Acoustic System for Detecting Endangered Bombus Dahlbomii In Situ',
      venue: '(Submitted), Nature 2025',
      image: getPublicationImage(null),
      customImage: null,
      showAllLinks: true
    },
    {
      authors: 'Aidan Bradshaw, Elif Basokur, Marco Giordano, Luca Benini and Christoph Lietner.',
      title: 'Muybridge: Quantized 2.5D Network Fusion for On-Device Gait Estimation',
      venue: '(Submitted), Nature Sensors 2025',
      image: getPublicationImage('muybridge_temp.png'),
      customImage: 'muybridge_temp.png',
      showAllLinks: true
    }
  ];

  const posterPublications = [
    {
      authors: 'Katelyn M., Arpit M., Aidan B., Tom W., Steven L., Afrooz Z., Weichang D., Kayhan B., Motahhare E., Adam P.',
      title: 'Opportunities and Challenges in Designing Text-to-Image Generative AI for Medical Education, Training, and Practice',
      venue: 'Pitt AI in Healthcare Research Symposium, 2024',
      image: getPublicationImage(null),
      customImage: null,
      showAllLinks: false
    }
  ];

  const PublicationItem = ({ authors, title, venue, image, showAllLinks, pdfLink, codeLink }: { 
    authors: string; 
    title: string; 
    venue: string; 
    image: string | null;
    showAllLinks: boolean;
    pdfLink?: string;
    codeLink?: string;
  }) => (
    <div className="flex gap-6 py-6 border-b border-slate-200 last:border-b-0">
      <div className="w-64 h-40 flex-shrink-0 bg-slate-100 rounded overflow-hidden flex items-center justify-center">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <div className="text-slate-400 text-sm text-center px-4">
            Image Coming Soon
          </div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium text-black mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-slate-600 text-sm mb-1">
          {authors}
        </p>
        <p className="text-[#00008B] text-sm font-medium italic">
          {venue}
        </p>
        <div className="flex gap-4 mt-3">
          {pdfLink ? (
            <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="text-[#00008B] hover:text-[#000080] text-sm underline">
              [PDF]
            </a>
          ) : (
            <span className="text-slate-400 text-sm">[PDF Coming Soon]</span>
          )}
          {showAllLinks && codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="text-[#00008B] hover:text-[#000080] text-sm underline">
              [Code]
            </a>
          )}
          {showAllLinks && !codeLink && (
            <span className="text-slate-400 text-sm">[Code Coming Soon]</span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>Publications</h1>
          <div className="h-0.5 bg-[#00008B] w-full"></div>
        </div>
        
        <div className="space-y-12">
          {/* Conference Papers */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Conference Papers
            </h2>
            <div className="h-0.5 bg-[#00008B] w-full mb-6"></div>
            <div className="space-y-0">
              {conferencePublications.map((pub, index) => (
                <PublicationItem key={index} {...pub} />
              ))}
            </div>
          </section>

          {/* Journals */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Journals
            </h2>
            <div className="h-0.5 bg-[#00008B] w-full mb-6"></div>
            <div className="space-y-0">
              {journalPublications.map((pub, index) => (
                <PublicationItem key={index} {...pub} />
              ))}
            </div>
          </section>

          {/* Posters */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Posters
            </h2>
            <div className="h-0.5 bg-[#00008B] w-full mb-6"></div>
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