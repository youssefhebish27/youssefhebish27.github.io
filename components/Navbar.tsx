import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Initial theme setup
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className={`text-2xl font-bold transition-colors ${scrolled || isOpen ? 'text-gray-800 dark:text-white' : 'text-white'}`}>
            <span className={scrolled || isOpen ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-400'}>Y</span>oussef <span className={scrolled || isOpen ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-400'}>H</span>ebish
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-secondary-500 dark:hover:text-secondary-400 ${
                  scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                scrolled ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                !scrolled && !isOpen ? 'text-white' : 'text-gray-800 dark:text-yellow-400'
              }`}
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            <button 
              className={`focus:outline-none ${!scrolled && !isOpen ? 'text-white' : 'text-gray-800 dark:text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.label}
            href={item.href}
            className="text-2xl font-medium text-gray-800 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;