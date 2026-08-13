import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  // Helper function to render text with **bold** markdown syntax
  const renderDescription = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="text-gray-900 dark:text-white font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <SectionWrapper id="services" className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Services & <span className="text-primary-600 dark:text-primary-400">Expertise</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Clear and reliable software testing services to ensure high quality and happy users.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {SERVICES.map((service, index) => (
          <div 
            key={index} 
            className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <motion.div
                initial={{ scale: 0, rotate: -20, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1 
                }}
                viewport={{ once: true }}
                className="mb-6 inline-block p-3.5 rounded-xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-800/50"
              >
                <service.icon size={36} />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white leading-snug">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                {renderDescription(service.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
