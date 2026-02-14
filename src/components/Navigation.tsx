import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
    { path: '/publications', label: 'Publications' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl text-black no-underline"
            style={{ fontFamily: "'Times New Roman', Georgia, serif" }}
          >
            Aidan Bradshaw
          </Link>
          <div className="flex gap-6">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-base no-underline ${
                  location.pathname === path
                    ? 'text-black font-bold'
                    : 'text-[#555]'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
