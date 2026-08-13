import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';
import { TYPING_TEXTS } from '../constants';
import { motion } from 'framer-motion';
import ResumeButton from './ResumeButton';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-primary-900 py-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Coding workspace" 
          className="w-full h-full object-cover opacity-40 mix-blend-soft-light"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-primary-900/80 to-primary-900"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center text-white">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-amber-300 block sm:inline mt-2 sm:mt-0">Youssef Hebish</span>
          </h1>
          
          <div className="h-16 sm:h-20 md:h-24 text-base sm:text-xl md:text-3xl font-medium text-gray-200 mb-4 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                ...TYPING_TEXTS.flatMap(text => [text, 2000]),
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="border-b-2 border-secondary-400 pb-1 text-gray-100"
            />
          </div>

          <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-light px-2">
            I am a <strong className="text-white font-semibold">Web Quality Assurance Specialist</strong> and <strong className="text-white font-semibold">4th Year Computer Science Student</strong>. 
            I completed a 3-month <strong className="text-white font-semibold">QC Member Internship at MedicaSpace</strong> testing websites, and finished the <strong className="text-secondary-400 font-semibold">Digital Pioneers of Egypt (Rowad Masr)</strong> Software Testing program.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full max-w-xl mx-auto px-4 sm:px-0">
            {/* Primary Action: View Work */}
            <a 
              href="#projects" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-secondary-500/30 text-sm sm:text-base"
            >
              <span>View My Work</span>
            </a>

            {/* Unified Resume Action Pill (View & Download) */}
            <ResumeButton variant="hero" />

            {/* Tertiary Action: Contact */}
            <a 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-md transition-all transform hover:scale-105 text-center text-sm sm:text-base"
            >
              <span>Get In Touch</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={22} className="md:w-7 md:h-7" />
      </motion.div>
    </section>
  );
};

export default Hero;
