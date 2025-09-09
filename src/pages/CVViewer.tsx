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
    <div className="min-h-screen bg-white">
      {/* Top navigation bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/about" 
            className="inline-flex items-center text-slate-600 hover:text-[#00008B] transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to About
          </Link>
          
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#00008B] text-white rounded hover:bg-[#000080] transition-colors"
          >
            <Download className="w-4 h-4" />
            Download CV
          </button>
        </div>
      </div>

      {/* PDF viewer */}
      <div className="w-full" style={{ height: 'calc(100vh - 80px)' }}>
        <iframe
          src={CV}
          className="w-full h-full border-0"
          title="Aidan Bradshaw CV"
        />
      </div>
    </div>
  );
}