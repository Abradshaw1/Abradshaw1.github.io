
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <h3 className="text-lg font-medium text-slate-900 mb-2">Contact Me</h3>
            <p className="text-slate-600 text-sm mb-3">Feel free to reach out</p>
            <a 
              href="mailto:aidanbradshaw2025@u.northwestern.edu"
              className="text-[#00008B] hover:text-[#000080] underline text-sm"
            >
              aidanbradshaw2025@u.northwestern.edu
            </a>
          </div>
          <div className="text-right">
            <p className="text-slate-600 text-sm">
              © 2024 Aidan Bradshaw
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}