import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
    title: 'MealsNest',
    description: 'A full-stack food/meal-related web application built using the MERN ecosystem. Focuses on full-stack architecture, REST APIs, and containerized deployment.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Docker'],
    github: 'https://github.com/theAkarshSingh/meals-nest',
    live: 'https://mealsnest.vercel.app/'
  },
  {
    title: 'Expense Tracker',
    description: 'A Python-based expense tracking application created while developing Python programming and application-building skills.',
    tech: ['Python'],
    github: 'https://github.com/theAkarshSingh', // Generic link if specific not provided
    live: null
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-surface/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work, focusing on backend systems and full-stack applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
            >
              <div className="p-8 flex flex-col h-full relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transition-all group-hover:bg-primary/10" />

                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{project.title}</h3>

                <p className="text-gray-400 leading-relaxed mb-6 flex-grow relative z-10">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                      <FaGithub size={18} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
