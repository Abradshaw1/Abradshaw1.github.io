import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function AnnouncementBanner() {
  return (
    <div className="bg-gray-600/90 border border-blue-900/20 rounded-lg p-4">
      <div className="flex items-center gap-3">
        <div className="bg-blue-500/10 p-2 rounded-full">
          <GraduationCap className="w-5 h-5 text-blue-400" />
        </div>
        <p className="text-white">
          <span className="font-semibold">Reach Out!</span>{' '}
          Always looking to chat on healthcare-AI collaboration.
        </p>
      </div>
    </div>
  );
}