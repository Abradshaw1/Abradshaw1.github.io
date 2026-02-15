import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/projects', label: 'Projects' },
  { path: '/', label: 'About Me' },
  { path: '/publications', label: 'Publications' },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <header className="w-[75%] mx-auto pt-10 pb-12">
      <div className="flex items-start justify-between">
        <div>
          <Link
            to="/"
            className="text-[30px] font-bold leading-[1.2] text-[#111] no-underline hover:no-underline"
          >
            Aidan Bradshaw
          </Link>
          <p className="text-[18px] font-light leading-[1.5] text-[#555] mt-2">
            Working on improving human health
            <br />
            and behavior with machine learning and sensing
          </p>
        </div>

        <nav className="flex items-center gap-6 pt-1">
          {navItems.map(({ path, label }, i) => (
            <span key={path} className="flex items-center gap-6">
              <Link
                to={path}
                className={`text-[20px] font-bold text-[#111] no-underline hover:underline hover:underline-offset-4 hover:decoration-2 decoration-black ${
                  location.pathname === path ? 'underline underline-offset-4 decoration-2' : ''
                }`}
              >
                {label}
              </Link>
              {i < navItems.length - 1 && (
                <span className="text-[20px] font-bold text-[#111] select-none">|</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}
