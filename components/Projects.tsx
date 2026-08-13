import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectDetailModal from './ProjectDetailModal';
import { ActionButton, DocumentActionGroup } from './ActionButton';
import { motion } from 'framer-motion';
import { Eye, FolderGit2, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onOpenAllProjects?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenAllProjects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Display top 3 key featured projects on the home section
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <>
      <SectionWrapper id="projects" className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 rounded-full text-xs font-bold mb-4 border border-teal-200 dark:border-teal-700">
            <FolderGit2 size={16} />
            Featured Software QA Deliverables
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Top highlights from my software testing work, Java automation runner, and crowdtesting experience. Explore the full collection in my dedicated projects page.
          </p>
        </div>

        {/* Top 3 Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${project.color}`}
            >
              <div className="p-7 flex flex-col flex-grow">
                {/* Header */}
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
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow text-xs sm:text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700/80 mt-auto space-y-3">
                  {/* View Details Modal Trigger */}
                  <ActionButton
                    label="View Project Details"
                    icon={Eye}
                    onClick={() => setSelectedProject(project)}
                    variant="subtle"
                    size="sm"
                    fullWidth
                  />

                  {/* Direct External Links / Artifacts */}
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
        </div>

        {/* Dedicated Projects Page Banner Link */}
        {onOpenAllProjects && (
          <div className="mt-14 text-center">
            <button
              onClick={onOpenAllProjects}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 transition-all hover:-translate-y-0.5 group"
            >
              <FolderGit2 size={20} />
              <span>View All Projects Page ({PROJECTS.length}+ Repositories)</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </SectionWrapper>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;
