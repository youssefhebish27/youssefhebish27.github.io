import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        Featured <span className="text-primary-600 dark:text-primary-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-t-0 hover:shadow-2xl transition-all duration-300 flex flex-col ${project.color}`}
          >
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <project.icon size={28} className="text-gray-700 dark:text-gray-200" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{project.title}</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                {project.links.length > 0 ? (
                  project.links.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
                    >
                      <link.icon size={16} className="mr-2" />
                      {link.label}
                    </a>
                  ))
                ) : (
                   <span className="text-sm text-gray-500 italic flex items-center">
                    Confidential / Internal Project
                   </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;