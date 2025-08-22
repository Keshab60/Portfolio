import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  // Frontend
  { name: "React", level: 80, category: "Frontend", icon: "⚛️" },
  // { name: "TypeScript", level: 70, category: "Frontend", icon: "🔷" },
  // { name: "Next.js", level: 65, category: "Frontend", icon: "▲" },
  { name: "Tailwind CSS", level: 85, category: "Frontend", icon: "🎨" },
  // { name: "Vue.js", level: 60, category: "Frontend", icon: "💚" },
  { name: "HTML5", level: 85, category: "Frontend", icon: "🎨" },
  { name: "CSS3", level: 85, category: "Frontend", icon: "🎨" },
  { name: "JavaScript", level: 85, category: "Frontend", icon: "🎨" },

  // Backend
  { name: "Node.js", level: 75, category: "Backend", icon: "🟢" },
  // { name: "Python", level: 80, category: "Backend", icon: "🐍" },
  { name: "Express.js", level: 70, category: "Backend", icon: "⚡" },
  // { name: "PostgreSQL", level: 65, category: "Backend", icon: "🐘" },
  { name: "MongoDB", level: 70, category: "Backend", icon: "🍃" },

  // DevOps & Tools
  // { name: "AWS", level: 55, category: "DevOps", icon: "☁️" },
  // { name: "Docker", level: 60, category: "DevOps", icon: "🐳" },
  // { name: "Git", level: 85, category: "DevOps", icon: "🌿" },
  // { name: "CI/CD", level: 50, category: "DevOps", icon: "🔄" },

  // Design & UX
  // { name: "Figma", level: 70, category: "Design", icon: "🎯" },
  { name: "UI/UX Design", level: 65, category: "Design", icon: "✨" },
  { name: "Java", level: 70, category: "Language", icon: "☕" },
  { name: "C", level: 70, category: "Language", icon: "🅲" },

];

const skillCategories = ["All", "Frontend", "Backend", "Language", "Design"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies I use to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${skill.category}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                />
              </div>

              <div className="mt-3">
                <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium text-gray-600 dark:text-gray-400">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The tech world evolves rapidly, and so do I. I'm constantly exploring new technologies,
              frameworks, and best practices to stay at the forefront of web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
