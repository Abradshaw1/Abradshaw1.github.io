import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4">
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">Contact Me</h3>
            <p className="text-slate-600 text-sm mb-3">Feel free to reach out</p>
            <a 
              href="mailto:abradsha@andrew.cmu.edu"
              className="text-[#00008B] hover:text-[#000080] underline text-sm"
            >
              abradsha@andrew.cmu.edu
            </a>
          </div>
          <div className="border-t border-slate-300 pt-4">
            <p className="text-slate-600 text-sm">
              © 2024 Aidan Bradshaw
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}