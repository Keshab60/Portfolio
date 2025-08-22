import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';

// Projects data
const projects = [
  {
    id: 1,
    title: "Restaurant App",
    description: "A full-stack application for ordering food online, with table booking, menu management, and PayPal payment integration",
    longDescription: "A comprehensive restaurant management system that allows customers to browse menus, place orders, book tables, and make payments through PayPal. Features include real-time order tracking, menu management for restaurant owners, and secure payment processing.",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Node.js", "MongoDB", "Express", "PayPal API", "Socket.io"],
    liveUrl: "https://restaurant-app-61ro.onrender.com",
    githubUrl: "https://github.com/Keshab60/restaurant-app",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Music Player",
    description: "A frontend music streaming web app that plays songs, lets users switch between artists, and provides smooth next/previous controls with user authentication",
    longDescription: "A modern music streaming application with a sleek interface for playing songs, browsing artists, and managing playlists. Features include smooth audio controls, user authentication, playlist management, and responsive design for all devices.",
    image: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "JavaScript", "Web Audio API", "Firebase Auth", "Tailwind CSS"],
    liveUrl: "https://musicplayer-rbwz.onrender.com",
    githubUrl: "https://github.com/Keshab60/MusicPlayer",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Real-Time Chat System",
    description: "A real-life chatting system built with real-time messaging, user authentication, and media sharing",
    longDescription: "A comprehensive real-time chat application that enables instant messaging between users with features like user authentication, media file sharing, online status indicators, and message history. Built with modern real-time technologies for seamless communication.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
    liveUrl: "https://demo-chat-system.com",
    githubUrl: "https://github.com/username/chat-system",
    category: "Full Stack"
  },
  // {
  //   id: 4,
  //   title: "Student Course Planner",
  //   description: "A React-based course planning app to help students organize their academic schedule",
  //   longDescription: "A comprehensive course planning application that helps students track their courses, assignments, and academic progress. Features include course scheduling, GPA calculation, and deadline reminders.",
  //   image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   technologies: ["React", "Node.js", "MongoDB", "Express", "CSS3"],
  //   liveUrl: "https://demo-course-planner.com",
  //   githubUrl: "https://github.com/username/course-planner",
  //   category: "Backend"
  // },
  // {
  //   id: 5,
  //   title: "Study Buddy Finder",
  //   description: "A platform to connect students for study groups and academic collaboration",
  //   longDescription: "A social platform designed to help students find study partners and form study groups. Features include user profiles, course matching, and group chat functionality.",
  //   image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
  //   liveUrl: "https://demo-study-buddy.com",
  //   githubUrl: "https://github.com/username/study-buddy",
  //   category: "Frontend"
  // },
  // {
  //   id: 6,
  //   title: "AI Recipe Bot",
  //   description: "A Python chatbot that suggests recipes based on available ingredients",
  //   longDescription: "An intelligent chatbot built with Python that helps students find recipes based on ingredients they have available. Perfect for dorm cooking and budget-friendly meals.",
  //   image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   technologies: ["Python", "Natural Language Processing", "Flask", "SQLite"],
  //   liveUrl: "https://demo-recipe-bot.com",
  //   githubUrl: "https://github.com/username/recipe-bot",
  //   category: "AI/ML"
  // }
];

const projectCategories = ["All", "Full Stack", "Frontend", "Backend"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Modal Component
  const ProjectModal = ({ project, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              ×
            </button>
          </div>
          <div className="p-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {project.longDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                View Live
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1 px-3 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm font-medium hover:bg-white/30 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm font-medium hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
