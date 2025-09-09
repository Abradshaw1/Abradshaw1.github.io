import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-light text-slate-900 tracking-tight">
            Aidan Bradshaw
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            M.S. Applied Data Science at Carnegie Mellon University
          </p>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Research in applied machine learning for healthcare applications, 
            generative AI, and human-computer interaction
          </p>
        </div>
        
        <div className="flex gap-4 justify-center pt-8">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}