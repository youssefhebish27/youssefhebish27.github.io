import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import ResumeButton from './ResumeButton';

interface NavbarProps {
  onOpenAllProjects?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAllProjects }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Initialize theme state:
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
      rootMargin: '-20% 0px -70% 0px',
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

    NAV_ITEMS.forEach((item) => {
      const sectionId = item.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
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
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3.5' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <a href="#" className={`text-xl sm:text-2xl font-bold transition-colors ${scrolled || isOpen ? 'text-gray-800 dark:text-white' : 'text-white'}`}>
            <span className={scrolled || isOpen ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-400'}>Y</span>oussef <span className={scrolled || isOpen ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-400'}>H</span>ebish
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a 
                  key={item.label}
                  href={item.href}
                  className={`text-xs xl:text-sm font-medium transition-all duration-300 relative group ${
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

            {/* Single Unified Resume Split Pill */}
            <ResumeButton variant="navbar" />
            
            {onOpenAllProjects && (
              <button
                onClick={onOpenAllProjects}
                className={`text-xs font-bold px-3 py-2 rounded-xl transition-all shadow-sm ${
                  scrolled 
                    ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                }`}
              >
                All Projects
              </button>
            )}

            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                scrolled ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile / Tablet Top Bar Controls */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
            <ResumeButton variant="compact" />

            <button 
              onClick={toggleTheme}
              className={`p-1.5 rounded-full transition-colors ${
                !scrolled && !isOpen ? 'text-white' : 'text-gray-800 dark:text-yellow-400'
              }`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button 
              className={`p-1 focus:outline-none ${!scrolled && !isOpen ? 'text-white' : 'text-gray-800 dark:text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center justify-center space-y-5 px-6 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.href.replace('#', '');
          return (
            <a 
              key={item.label}
              href={item.href}
              className={`text-xl font-medium transition-colors ${
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

        {/* Unified Mobile Drawer Resume Button */}
        <ResumeButton variant="about" onActionClick={() => setIsOpen(false)} />

        {onOpenAllProjects && (
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenAllProjects();
            }}
            className="w-full max-w-xs py-3 px-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 font-bold rounded-xl text-center text-sm shadow-md"
          >
            All Projects Page
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
