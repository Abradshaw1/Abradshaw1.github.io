import React from 'react';

export default function Publications() {
  const placeholderImage = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=300&h=200';

  const conferencePublications = [
    {
      authors: 'Aidan B., Ramaz T., Shangping R., and Ben S.',
      title: 'A Tailored Health Application: Monitoring the Etiology of Raynaud\'s Disease',
      venue: 'CSCSU 2024',
      image: placeholderImage,
      showAllLinks: true
    },
    {
      authors: 'Aidan B., Katelyn M., Arpit M., Weicheng D., Motahhare E., Kayhan B., and Adam P.',
      title: 'Toward Interpretable 3D Diffusion in Radiology: Token-Wise Attribution for Text-to-CT Synthesis',
      venue: 'Medical Imaging in Deep Learning Conference (MIDL) 2025',
      image: placeholderImage,
      showAllLinks: true
    },
    {
      authors: 'Katelyn M., Arpit M., Aidan B., Tom W., Steven L., Afrooz Z., Weichang D., Kayhan B., Motahhare E., Adam P.',
      title: 'A Human-Centered Approach to Identifying Promises, Risks, & Challenges of Text-to-Image Generative AI in Radiology',
      venue: 'Artificial Intelligence in Ethics and Society (AIES) 2025',
      image: placeholderImage,
      showAllLinks: false
    },
    {
      authors: 'Sawyer J., Aidan B., Ramaz T., Ben S., Shangping R.',
      title: 'A Customizable, Real-time Mobile Health Application for Raynaud\'s Syndrome and Beyond',
      venue: 'IEEE International Conference on E-health Networking, Application & Services (IEEE Healthcom) 2025',
      image: placeholderImage,
      showAllLinks: false
    }
  ];

  const journalPublications = [
    {
      authors: 'Patrick Chwalek, Marie Kuronaga, Marco Giordano, Aidan Bradshaw, Isamar Zhu, Marina Arbetman, and Joseph A. Paradiso.',
      title: 'Autonomous Low-Power Distributed Acoustic System for Detecting Endangered Bombus Dahlbomii In Situ',
      venue: '(Submitted), Nature 2025',
      image: placeholderImage,
      showAllLinks: true
    },
    {
      authors: 'Aidan Bradshaw, Elif Basokur, Marco Giordano, Luca Benini and Christoph Lietner.',
      title: 'Muybridge: Quantized 2.5D Network Fusion for On-Device Gait Estimation',
      venue: '(Submitted), Nature Sensors 2025',
      image: placeholderImage,
      showAllLinks: true
    }
  ];

  const posterPublications = [
    {
      authors: 'Katelyn M., Arpit M., Aidan B., Tom W., Steven L., Afrooz Z., Weichang D., Kayhan B., Motahhare E., Adam P.',
      title: 'Opportunities and Challenges in Designing Text-to-Image Generative AI for Medical Education, Training, and Practice',
      venue: 'Pitt AI in Healthcare Research Symposium, 2024',
      image: placeholderImage,
      showAllLinks: false
    }
  ];

  const PublicationItem = ({ authors, title, venue, image, showAllLinks }: { 
    authors: string; 
    title: string; 
    venue: string; 
    image: string;
    showAllLinks: boolean;
  }) => (
    <div className="flex gap-6 py-6 border-b border-slate-200 last:border-b-0">
      <div className="w-32 h-24 flex-shrink-0 bg-slate-100 rounded overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
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
          <a href="#" className="text-[#00008B] hover:text-[#000080] text-sm underline">
            [PDF]
          </a>
          {showAllLinks && (
            <>
              <a href="#" className="text-[#00008B] hover:text-[#000080] text-sm underline">
                [Code]
              </a>
              <a href="#" className="text-[#00008B] hover:text-[#000080] text-sm underline">
                [Project Page]
              </a>
            </>
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