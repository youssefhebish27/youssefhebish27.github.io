import React from 'react';
import SectionWrapper from './SectionWrapper';
import { STATS, KEY_LEARNINGS } from '../constants';
import { ExternalLink, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import ResumeButton from './ResumeButton';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          About <span className="text-primary-600 dark:text-primary-400">Me</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Testing web and mobile applications to find bugs, verify APIs, and ensure great user experience before launch.
        </p>
      </div>
      
      {/* Top Section: Image & Bio */}
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16">
        <div className="relative group flex justify-center order-1 lg:order-1">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition duration-500 hidden sm:block transform scale-95 translate-y-4"></div>
          <img 
            src="/profile.jpg" 
            alt="Youssef Hebish" 
            className="relative rounded-2xl shadow-2xl w-full max-w-sm h-auto aspect-[2/3] object-cover object-top border-4 border-white dark:border-gray-700"
            onError={(e) => {
              // Fallback if profile.jpg is missing in local environment
              e.currentTarget.src = "profile.jpg"; // Ensure this path is correct for your local setup
            }}
          />
        </div>

        <div className="order-2 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 rounded-full text-xs font-bold mb-4 border border-teal-200 dark:border-teal-700">
            <ShieldCheck size={14} />
            Certified QC Member & Software Tester
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100 leading-tight">
            Software Quality Assurance & Testing
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-base">
            I am a dedicated Web & Software Quality Assurance Specialist and <strong className="text-primary-700 dark:text-primary-400 font-semibold">4th-year Computer Science Student</strong>. I focus on making sure web applications and APIs work flawlessly through manual testing, Postman API collections, and end-to-end user journey validation.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">
            I completed a 3-month <strong className="text-teal-600 dark:text-teal-400 font-semibold">QC Member Internship at MedicaSpace</strong> focusing on Web Quality Control, actively hunt bugs on <strong className="text-secondary-600 dark:text-secondary-400 font-semibold">Test.io</strong>, and completed the <strong className="text-secondary-600 dark:text-secondary-400 font-semibold">Digital Pioneers of Egypt (Rowad Masr)</strong> Software Testing track.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            {/* Unified Resume Action Pill */}
            <ResumeButton variant="about" />

            <a 
              href="#certifications" 
              className="inline-flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all text-sm shadow-sm"
            >
              <Award className="mr-2" size={18} />
              <span>Certificates & Internship</span>
            </a>

            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors text-sm"
            >
              <CheckCircle2 className="mr-2" size={18} />
              <span>Projects</span>
            </a>
          </div>
        </div>
      </div>

      {/* Middle Section: Core Competencies Grid */}
      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Core <span className="text-secondary-500">Skills</span>
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {KEY_LEARNINGS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${item.color}`}>
                <item.icon size={20} />
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, index) => (
          <div 
            key={index} 
            className={`
              relative overflow-hidden p-6 rounded-2xl 
              bg-gradient-to-br ${stat.color} 
              shadow-lg text-center
              transform transition-transform hover:scale-[1.02]
            `}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 mix-blend-overlay"></div>
            <h4 className="text-4xl font-bold mb-2 text-white drop-shadow-md">{stat.value}</h4>
            <p className="text-white font-medium text-base opacity-90">{stat.label}</p>
          </div>
        ))}
      </div>

    </SectionWrapper>
  );
};

export default About;
