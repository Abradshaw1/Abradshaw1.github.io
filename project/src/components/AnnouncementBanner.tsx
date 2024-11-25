import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function AnnouncementBanner() {
  return (
    <div className="bg-gray-700/80 border border-blue-500/20 rounded-lg p-4">
      <div className="flex items-center gap-3">
        <div className="bg-blue-500/10 p-2 rounded-full">
          <GraduationCap className="w-5 h-5 text-blue-400" />
        </div>
        <p className="text-white">
          <span className="font-semibold">Open for Opportunities:</span>{' '}
          Currently seeking PhD positions for Fall 2025
        </p>
      </div>
    </div>
  );
}