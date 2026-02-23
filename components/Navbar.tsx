import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Initialize theme state:
  // 1. Check localStorage immediately.
  // 2. If 'dark' is explicitly saved, use it.
  // 3. Otherwise, ALWAYS default to 'light' (ignoring system preferences).
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active Section Tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust these values to fine-tune when a section is considered "active"
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Get all sections that have IDs matching our NAV_ITEMS
    NAV_ITEMS.forEach((item) => {
      const sectionId = item.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Sync the DOM class with the state immediately whenever theme changes
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
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
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
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a 
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    isActive 
                      ? 'text-secondary-500 dark:text-secondary-400' 
                      : scrolled 
                        ? 'text-gray-700 dark:text-gray-200 hover:text-secondary-500 dark:hover:text-secondary-400' 
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary-500 dark:bg-secondary-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              );
            })}
            
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
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.href.replace('#', '');
          return (
            <a 
              key={item.label}
              href={item.href}
              className={`text-2xl font-medium transition-colors ${
                isActive 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-800 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
