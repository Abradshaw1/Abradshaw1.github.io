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
    <nav className="fixed top-0 right-0 z-50 p-6">
      <div className="flex items-center gap-8">
        <div className="flex gap-6">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === path
                  ? 'text-blue-600'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="text-sm font-medium text-slate-800 border-l border-slate-300 pl-6">
          Aidan Bradshaw
        </div>
      </div>
    </nav>
  );
}