import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';
import { TYPING_TEXTS } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-primary-900 py-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        {/* 
           INSTRUCTIONS: 
           Place your photo in the 'public' folder and name it 'hero-bg.jpg'.
           I increased opacity so your nice setup is more visible! 
        */}
        <img 
          src="/hero-bg.jpg" 
          alt="Coding workspace" 
          className="w-full h-full object-cover opacity-40 mix-blend-soft-light"
        />
        {/* Adjusted gradient to be lighter at the top so the screens show through, darker at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-primary-900/80 to-primary-900"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          {/* Badge Removed as requested */}

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-amber-300 block sm:inline mt-2 sm:mt-0">Youssef Hebish</span>
          </h1>
          
          <div className="h-16 sm:h-20 md:h-24 text-lg sm:text-xl md:text-3xl font-medium text-gray-200 mb-4 flex items-center justify-center">
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

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-light px-2">
            I focus on ensuring software quality and user happiness. 
            Currently, I am a <strong className="text-white font-normal">Computer Science Student</strong> and a <strong className="text-white font-normal">Software Testing Intern at MedicaSpace</strong>. 
            I am also growing my career through the <strong className="text-secondary-400 font-normal">Digital Pioneers of Egypt (Rowad Masr)</strong> program.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-secondary-500 text-white font-semibold rounded-full hover:bg-secondary-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-secondary-500/25 border border-transparent text-center"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-md transition-all transform hover:scale-105 text-center"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 text-white/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} className="md:w-8 md:h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;