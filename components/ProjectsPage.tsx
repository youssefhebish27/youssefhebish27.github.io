import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectDetailModal from './ProjectDetailModal';
import { ActionButton, DocumentActionGroup } from './ActionButton';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ArrowLeft, 
  FolderGit2, 
  Eye, 
  ExternalLink, 
  Github, 
  Filter, 
  Sparkles,
  Moon,
  Sun
} from 'lucide-react';

interface ProjectsPageProps {
  onBackToHome: () => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBackToHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Initialize theme state from localStorage
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'automation', label: 'Java Automation' },
    { id: 'internship', label: 'Web QA & Internship' },
    { id: 'api', label: 'API Testing' },
    { id: 'agile', label: 'Agile QA' },
    { id: 'crowdtesting', label: 'Crowdtesting' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
      (project.toolsUsed && project.toolsUsed.some(tool => tool.toLowerCase().includes(searchLower)));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/70 text-teal-700 dark:text-teal-300 font-semibold text-xs sm:text-sm border border-teal-200 dark:border-teal-800/80 transition-all shadow-sm"
          >
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/youssefhebish27" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors"
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Page Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 rounded-full text-xs font-bold mb-4 border border-teal-200 dark:border-teal-700/80">
            <FolderGit2 size={16} />
            Dedicated Projects Archive
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            All Software QA <span className="text-teal-600 dark:text-teal-400">Projects & Repositories</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to my full projects page. Here you will find my complete, up-to-date repository collection covering Java test runners, Postman API collections, Web QC internships, and Agile test suites.
          </p>
        </motion.div>

        {/* Search & Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700/80 mb-10 max-w-4xl mx-auto space-y-5"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects by title, tool (Postman, Java, ClickUp), or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
            <Filter size={16} className="text-teal-600 dark:text-teal-400 flex-shrink-0 mr-1" />
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-2">
          <p className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400">
            Showing <span className="text-teal-600 dark:text-teal-400 font-bold">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-teal-600 dark:text-teal-400 hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id || project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                  transition={{ 
                    duration: 0.35, 
                    delay: index * 0.04,
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }}
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between ${project.color}`}
                >
                  <div className="p-6 sm:p-7 flex flex-col flex-grow">
                    {/* Card Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-xl flex-shrink-0">
                        <project.icon size={26} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed flex-grow text-xs sm:text-sm">
                      {project.description}
                    </p>

                    {/* Highlights Bullet Preview */}
                    {project.keyHighlights && project.keyHighlights.length > 0 && (
                      <div className="mb-5 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-700/60">
                        <p className="text-[11px] font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-1.5">
                          Key Accomplishment:
                        </p>
                        <p className="text-xs text-gray-700 dark:text-gray-300 line-clamp-2">
                          • {project.keyHighlights[0]}
                        </p>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700/80 mt-auto space-y-2.5">
                      <ActionButton
                        label="View Project Details"
                        icon={Eye}
                        onClick={() => setSelectedProject(project)}
                        variant="subtle"
                        size="sm"
                        fullWidth
                      />

                      {project.links && project.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.links.map((link, i) => {
                            const isPdf = link.url.endsWith('.pdf');
                            if (isPdf) {
                              return (
                                <DocumentActionGroup
                                  key={i}
                                  viewUrl={link.url}
                                  downloadFilename="MedicaSpace_QC_Internship_Certificate.pdf"
                                  viewLabel={link.label}
                                  downloadLabel="Download"
                                  size="sm"
                                  className="mt-1"
                                />
                              );
                            }
                            return (
                              <ActionButton
                                key={i}
                                label={link.label}
                                icon={link.icon}
                                href={link.url}
                                target={link.url.startsWith('#') ? '_self' : '_blank'}
                                variant="outline"
                                size="sm"
                                showExternalIcon={!link.url.startsWith('#')}
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8"
            >
              <p className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">No projects found matching your search</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Try searching with different keywords or clearing filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-5 py-2.5 bg-teal-600 text-white font-semibold rounded-xl text-xs shadow-md"
              >
                Reset Search & Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub Repository Callout Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-teal-900 to-gray-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-teal-300 font-bold text-xs uppercase tracking-wider">
              <Sparkles size={16} />
              Continuous Learning & Building
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">More Repositories Coming Soon</h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl">
              I am actively expanding my Java automation skills, Selenium test frameworks, and Postman API test suites. Check out my GitHub profile for live commits and updates!
            </p>
          </div>

          <a
            href="https://github.com/youssefhebish27"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-teal-500 hover:bg-teal-400 text-gray-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-lg flex items-center gap-2 flex-shrink-0"
          >
            <Github size={18} />
            <span>Visit Youssef's GitHub Profile</span>
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </main>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default ProjectsPage;
