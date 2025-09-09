import { Link } from 'react-router-dom';
import { ChevronLeft, Download } from 'lucide-react';

export default function CVViewer() {
  const CV = '/ABradshaw-Resume-CV.pdf';
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Aidan_Bradshaw_CV.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/about" 
            className="inline-flex items-center text-slate-600 hover:text-[#00008B] transition-colors text-lg"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to About
          </Link>
          
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00008B] text-white rounded-lg hover:bg-[#000080] transition-colors"
          >
            <Download className="w-4 h-4" />
            Download CV
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="h-[calc(100vh-200px)] w-full">
            <iframe
              src={CV}
              className="w-full h-full border-0"
              title="Aidan Bradshaw CV"
            />
          </div>
        </div>
      </div>
    </div>
  );
}