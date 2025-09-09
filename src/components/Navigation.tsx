import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-6">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === path
                  ? 'text-[#00008B]'
                  : 'text-slate-600 hover:text-[#00008B]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="text-sm font-medium text-slate-800">
          Aidan Bradshaw
        </div>
      </div>
    </nav>
  );
}