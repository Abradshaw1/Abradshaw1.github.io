import React from 'react';
import { BookOpen } from 'lucide-react';

const publications = [
  {
    title: 'A Tailored Health Application: Monitoring the Etiology of Raynaud\'s Disease',
    journal: 'CSCSU 2024',
    authors: 'Aidan B., Ramaz T., Shangping R., Ben S.',
    type: 'Conference Paper',
    status: 'published',
    link: 'https://scholarworks.calstate.edu/concern/publications/np193j359'
  },
  {
    title: 'Counterfactual Cross-Attention Maps for Explainable High-Fidelity 3D Radiology Image Generation in Text-to-Image Diffusion Models',
    journal: 'International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI) 2025',
    authors: 'Aidan B., Weicheng D., Katelyn M., Adam P., Motahhare E., Kayhan B.',
    type: 'Conference Paper',
    status: 'in-preparation'
  },
  {
    title: 'Opportunities & Challenges in Designing Text-to-Image Generative AI for Medical Education, Training, & Practice',
    journal: 'ACM Designing Interactive Systems Conference (DIS) 2025',
    authors: 'Katelyn M., Arpit M., Aidan B., Tom W., Steven L., Afrooz Z., Weichang D., Kayhan B., Motahhare E., Adam P.',
    type: 'Conference Paper',
    status: 'under-review'
  },
  {
    title: 'Autonomous Low-Power Distributed Acoustic System for Detecting Endangered Bombus Dahlbomii In Situ',
    journal: 'Nature 2024',
    authors: 'Patrick Chwalek, Marie Kuronaga, Marco Giordano, Aidan Bradshaw, Isamar Zhu, Marina Arbetman, Joseph A. Paradiso',
    type: 'Journal',
    status: 'in-preparation'
  }
];

export default function Publications() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Publications</h2>
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <div key={index} className="bg-gray-700/80 border border-blue-500/20 p-4 rounded-lg">
            <div className="flex items-start gap-4">
              <BookOpen className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white">{pub.title}</h3>
                <p className="text-gray-300 text-sm mt-1">
                  {pub.authors}
                </p>
                <p className="text-gray-300 text-sm">
                  {pub.journal}
                </p>
                {pub.status === 'in-preparation' ? (
                  <span className="text-sm text-blue-400 mt-2 inline-block">
                    In Preparation
                  </span>
                ) : pub.status === 'under-review' ? (
                  <span className="text-sm text-blue-400 mt-2 inline-block">
                   Submitted - Under Review
                  </span>
                ) : (
                  <a 
                    href={pub.link}
                    className="text-sm text-blue-400 hover:text-blue-300 mt-2 inline-block"
                  >
                    Read More →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}