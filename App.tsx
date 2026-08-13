import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'projects'>(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#all-projects' ? 'projects' : 'home';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#all-projects') {
        setCurrentView('projects');
      } else if (window.location.hash === '#home' || !window.location.hash) {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToProjects = () => {
    window.location.hash = '#all-projects';
    setCurrentView('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.location.hash = '#home';
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'projects') {
    return <ProjectsPage onBackToHome={navigateToHome} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar onOpenAllProjects={navigateToProjects} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects onOpenAllProjects={navigateToProjects} />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
