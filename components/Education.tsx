import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        Learning <span className="text-primary-600 dark:text-primary-400">Path</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Education Column */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100 flex items-center">
            <GraduationCap className="text-primary-600 dark:text-primary-400 mr-3" size={28} />
            Education
          </h3>
          <div className="space-y-8">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-4 border-primary-200 dark:border-primary-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
                <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">{edu.institution} • {edu.year}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Training & Learning Column */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100 flex items-center">
            <BookOpen className="text-secondary-500 mr-3" size={28} />
            Training & Scholarships
          </h3>
          <div className="space-y-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl border transition-transform hover:-translate-y-1 hover:shadow-md ${cert.color}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                     <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{cert.title}</h4>
                     <p className="text-gray-600 dark:text-gray-300 font-medium mt-1 mb-4">{cert.issuer}</p>
                  </div>
                  {cert.status && (
                    <span className="inline-block px-3 py-1 text-xs font-bold text-secondary-700 bg-secondary-100 dark:bg-secondary-900/40 dark:text-secondary-400 rounded-full border border-secondary-200 dark:border-secondary-700/50">
                      {cert.status}
                    </span>
                  )}
                </div>
                
                {cert.courses && cert.courses.length > 0 && (
                  <div className="mt-2 bg-white/50 dark:bg-black/10 rounded-lg p-4">
                    <h5 className="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide mb-3 border-b border-gray-200 dark:border-gray-600 pb-2">
                      Selected Curriculum
                    </h5>
                    <ul className="space-y-2">
                      {cert.courses.map((course, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle2 size={16} className="text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;