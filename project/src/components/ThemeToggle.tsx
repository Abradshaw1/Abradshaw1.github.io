import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-lg bg-[#2A2A3A]/80 backdrop-blur-lg border border-[#60A5FA]/20 
                hover:bg-[#2A2A3A] transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-[#60A5FA]" />
      ) : (
        <Moon className="w-5 h-5 text-[#60A5FA]" />
      )}
    </button>
  );
}