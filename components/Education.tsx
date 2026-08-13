import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EDUCATION } from '../constants';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Academic & <span className="text-primary-600 dark:text-primary-400">Training Background</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Formal Computer Science foundation combined with specialized Software Testing bootcamps.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {EDUCATION.map((edu, index) => (
          <div 
            key={index} 
            className="bg-gray-50 dark:bg-gray-700/50 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-600 shadow-sm relative pl-10 sm:pl-12 border-l-8 border-l-primary-600 dark:border-l-primary-500 flex flex-col justify-between"
          >
            <div className="absolute left-3 top-7 p-1 bg-primary-600 text-white rounded-full">
              <GraduationCap size={16} />
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 font-semibold text-xs rounded-full w-fit">
                  {edu.year}
                </span>
              </div>

              <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                {edu.institution}
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {edu.description}
              </p>

              {edu.modules && edu.modules.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <h4 className="text-xs font-bold text-primary-700 dark:text-primary-400 uppercase tracking-wider mb-3">
                    Key Course Modules & Skills Covered:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {edu.modules.map((mod, modIdx) => (
                      <div key={modIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200">
                        <CheckCircle2 size={16} className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
