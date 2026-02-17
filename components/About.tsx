import React from 'react';
import SectionWrapper from './SectionWrapper';
import { STATS, RESUME_LINK, KEY_LEARNINGS } from '../constants';
import { ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          About <span className="text-primary-600 dark:text-primary-400">Me</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I make sure software works perfectly by testing it carefully and finding bugs before users do.
        </p>
      </div>
      
      {/* Top Section: Image & Bio */}
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16">
        <div className="relative group flex justify-center order-1 lg:order-1">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition duration-500 hidden sm:block transform scale-95 translate-y-4"></div>
          <img 
            src="/profile.jpg" 
            alt="Youssef Hebish" 
            className="relative rounded-2xl shadow-2xl w-full max-w-sm h-auto aspect-[3/4] object-cover border-4 border-white dark:border-gray-700"
          />
        </div>

        <div className="order-2 lg:order-2">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100 leading-tight">
            Software Tester & CS Student
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
            I am a 3rd-year <strong className="text-primary-700 dark:text-primary-400">Computer Science Student</strong> with good knowledge of Java and OOP.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
            Currently, I am working as a <strong className="text-secondary-600 dark:text-secondary-400">Software Testing Intern at MedicaSpace</strong> (using ClickUp) and working as a <strong className="text-secondary-600 dark:text-secondary-400">Freelance Tester on Test.io</strong>.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-base md:text-lg">
             I focus on quality. I analyze requirements in <strong className="text-gray-900 dark:text-white">Agile</strong> teams, write <strong className="text-gray-900 dark:text-white">hundreds of Test Scenarios</strong> to cover every detail, and manage bugs using <strong className="text-gray-900 dark:text-white">Jira</strong>. My goal is to deliver a bug-free product.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={RESUME_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-primary-600/30 transform hover:-translate-y-0.5"
            >
              <FileText className="mr-2" size={20} />
              View Resume
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <CheckCircle2 className="mr-2" size={20} />
              My Projects
            </a>
          </div>
        </div>
      </div>

      {/* Middle Section: Core Competencies Grid */}
      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Core <span className="text-secondary-500">Skills</span>
        </h3>
        {/* Adjusted Grid: smaller gap, slightly more compact */}
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <p className="text-white font-medium text-lg opacity-90">{stat.label}</p>
          </div>
        ))}
      </div>

    </SectionWrapper>
  );
};

export default About;