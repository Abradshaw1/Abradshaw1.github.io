import React from 'react';
import { Calendar } from 'lucide-react';

const newsItems = [
  {
    date: '2024-03-15',
    title: 'Latest Achievement',
    content: 'Recently completed a major project using cutting-edge technologies.'
  },
  {
    date: '2024-02-28',
    title: 'Conference Talk',
    content: 'Presented at TechConf 2024 about modern web development practices.'
  },
  {
    date: '2024-01-15',
    title: 'Research Publication',
    content: 'Published a paper on advanced web development techniques.'
  }
];

const NewsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-gray-700/80 border border-blue-500/20 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              <time className="text-sm text-blue-400">{item.date}</time>
            </div>
            <h3 className="text-lg font-semibold mt-2 text-white">{item.title}</h3>
            <p className="text-gray-300 mt-1">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;