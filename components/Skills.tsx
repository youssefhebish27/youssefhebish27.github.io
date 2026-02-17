import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Bug, Code, Monitor, Wrench } from 'lucide-react';
import { TESTING_CORE, TOOLS_SKILLS, PROGRAMMING_SKILLS, CONCEPT_SKILLS } from '../constants';
import { Skill } from '../types';
import { motion } from 'framer-motion';

const SkillBar: React.FC<{ skill: Skill; colorClass: string }> = ({ skill, colorClass }) => (
  <div className="mb-3 last:mb-0 group">
    <div className="flex justify-between mb-1.5 items-center">
      <span className="text-gray-700 dark:text-gray-200 font-medium text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{skill.name}</span>
      <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{skill.level}%</span>
    </div>
    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 0.8, ease: "circOut" }}
        viewport={{ once: true }}
        className={`h-full rounded-full ${colorClass} opacity-80 group-hover:opacity-100 transition-opacity`} 
      ></motion.div>
    </div>
  </div>
);

const SkillCard: React.FC<{ 
  title: string; 
  icon: React.ElementType; 
  skills: Skill[]; 
  color: string;
  iconBg: string;
  iconColor: string;
}> = ({ title, icon: Icon, skills, color, iconBg, iconColor }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-5 border-b border-gray-100 dark:border-gray-700 pb-3">
      <div className={`p-2 rounded-lg ${iconBg}`}>
        <Icon className={iconColor} size={20} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <div className="space-y-1">
      {skills.map(skill => (
        <SkillBar key={skill.name} skill={skill} colorClass={color} />
      ))}
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Technical <span className="text-primary-600 dark:text-primary-400">Expertise</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          A breakdown of my technical capabilities and proficiency levels.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <SkillCard 
          title="Testing Core" 
          icon={Bug} 
          skills={TESTING_CORE} 
          color="bg-red-500"
          iconBg="bg-red-50 dark:bg-red-900/20"
          iconColor="text-red-600 dark:text-red-400"
        />
        
        <SkillCard 
          title="Tools & Management" 
          icon={Wrench} 
          skills={TOOLS_SKILLS} 
          color="bg-purple-500"
          iconBg="bg-purple-50 dark:bg-purple-900/20"
          iconColor="text-purple-600 dark:text-purple-400"
        />

        <SkillCard 
          title="Programming" 
          icon={Code} 
          skills={PROGRAMMING_SKILLS} 
          color="bg-blue-500"
          iconBg="bg-blue-50 dark:bg-blue-900/20"
          iconColor="text-blue-600 dark:text-blue-400"
        />

        <SkillCard 
          title="Concepts" 
          icon={Monitor} 
          skills={CONCEPT_SKILLS} 
          color="bg-green-500"
          iconBg="bg-green-50 dark:bg-green-900/20"
          iconColor="text-green-600 dark:text-green-400"
        />
      </div>
    </SectionWrapper>
  );
};

export default Skills;