import React from 'react';
import { BookOpen } from 'lucide-react';

const publications = [
  {
    title: 'Modern Web Development Practices',
    journal: 'Tech Journal',
    year: 2024,
    link: '#'
  },
  {
    title: 'The Future of Cloud Computing',
    journal: 'Cloud Weekly',
    year: 2023,
    link: '#'
  },
  {
    title: 'Machine Learning in Production',
    journal: 'AI Research Quarterly',
    year: 2023,
    link: '#'
  },
  {
    title: 'Distributed Systems Architecture',
    journal: 'System Design Today',
    year: 2022,
    link: '#'
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
              <BookOpen className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold text-white">{pub.title}</h3>
                <p className="text-gray-300">
                  {pub.journal} ({pub.year})
                </p>
                <a 
                  href={pub.link}
                  className="text-sm text-blue-400 hover:text-blue-300 mt-2 inline-block"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}