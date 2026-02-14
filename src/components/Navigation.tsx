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
      <div className="mx-auto px-8" style={{ width: '72%', maxWidth: '1400px' }}>
        <div className="flex items-center justify-between" style={{ height: '90px' }}>
          <Link to="/" className="text-[32px] font-bold text-[#111] no-underline">
            Aidan Bradshaw
          </Link>
          <div className="flex gap-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-lg no-underline transition-colors duration-200 ${
                  location.pathname === path
                    ? 'text-[#111] font-normal'
                    : 'text-[#666] hover:text-[#111] font-light'
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
