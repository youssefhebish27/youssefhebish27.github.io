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
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        Services & <span className="text-primary-600 dark:text-primary-400">Expertise</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <div 
            key={index} 
            className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl border border-transparent dark:border-gray-700 hover:border-gray-100 dark:hover:border-gray-600 ${service.color}`}
          >
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
              className="mb-6 inline-block"
            >
              <service.icon size={48} />
            </motion.div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {renderDescription(service.description)}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;