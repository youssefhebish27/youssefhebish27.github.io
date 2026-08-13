import React, { useEffect } from 'react';
import { X, CheckCircle2, Wrench, FileText, Layers } from 'lucide-react';
import { Project } from '../types';
import { ActionButton, DocumentActionGroup } from './ActionButton';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8 border border-gray-200 dark:border-gray-700 animate-in fade-in zoom-in duration-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 flex justify-between items-center px-4 sm:px-6 py-3.5 bg-gray-900 text-white border-b border-gray-800 shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 sm:p-2 bg-teal-500/20 text-teal-400 rounded-lg shrink-0">
              <project.icon size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-lg leading-tight line-clamp-1">{project.title}</h3>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">
                Project Detail Overview
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white transition-colors flex items-center gap-1 text-xs font-bold min-h-[40px] min-w-[40px] justify-center"
            aria-label="Close project modal"
          >
            <X size={20} />
            <span className="hidden xs:inline">Close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 space-y-6 overflow-y-auto flex-1">
          {/* Main Description */}
          <div>
            <h4 className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileText size={16} />
              About This Project
            </h4>
            <p className="text-gray-700 dark:text-gray-200 text-xs sm:text-base leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Deliverables & Highlights */}
          {project.keyHighlights && project.keyHighlights.length > 0 && (
            <div className="bg-teal-50/60 dark:bg-teal-950/30 p-4 sm:p-5 rounded-xl border border-teal-100 dark:border-teal-900/50">
              <h4 className="text-xs font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <CheckCircle2 size={16} />
                Key Testing Deliverables & Results
              </h4>
              <ul className="space-y-2.5">
                {project.keyHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                    <CheckCircle2 size={16} className="text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools & Frameworks */}
          {project.toolsUsed && project.toolsUsed.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Wrench size={16} />
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.toolsUsed.map((tool, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Direct Project Links / Artifacts */}
          {project.links && project.links.length > 0 && (
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Layers size={16} />
                Project Artifacts & Links
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, i) => {
                  const isPdf = link.url.endsWith('.pdf');
                  if (isPdf) {
                    return (
                      <DocumentActionGroup
                        key={i}
                        viewUrl={link.url}
                        downloadFilename="MedicaSpace_QC_Internship_Certificate.pdf"
                        viewLabel={link.label}
                        downloadLabel="Download PDF"
                        size="md"
                        className="w-full sm:w-auto"
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
                      variant="primary"
                      size="md"
                      showExternalIcon={!link.url.startsWith('#')}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-3.5 bg-gray-50 dark:bg-gray-800/80 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <span className="text-xs text-gray-500 dark:text-gray-400 hidden xs:inline">
            Tap outside or click button to close
          </span>
          <ActionButton
            label="Close Window"
            onClick={onClose}
            variant="secondary"
            size="md"
            className="w-full xs:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
