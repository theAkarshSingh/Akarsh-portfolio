import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-start gap-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full glass border-white/10 text-sm font-mono text-gray-300"
          >
            <Code2 size={16} className="text-primary" />
            <span>Building scalable software</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight"
            >
              Akarsh Singh
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-gray-400"
            >
              <span className="text-white">BCA Student</span> <span className="text-primary">•</span> Backend Developer <span className="text-secondary">•</span> Software Engineer
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed"
          >
            I'm a Computer Science-focused BCA student passionate about backend engineering, web development, and building real-world software. I primarily work with <span className="text-white font-medium">Java</span> and <span className="text-white font-medium">JavaScript ecosystem</span> while continuously exploring scalable backend architectures, databases, APIs, cloud technologies, and modern developer tooling. I enjoy building practical, production-oriented applications and solving problems through clean, maintainable technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/theAkarshSingh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg glass-card hover:bg-white/10 transition-colors flex items-center gap-2 font-medium text-white"
            >
              <FaGithub size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/theakarshsingh/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg glass-card hover:bg-white/10 transition-colors flex items-center gap-2 font-medium text-white"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative developer elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hidden lg:block absolute right-12 bottom-32 text-gray-800/40 font-mono text-9xl select-none pointer-events-none"
      >
        &#123; &#125;
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden lg:flex items-center justify-center absolute right-32 top-1/3 text-gray-800/40 font-mono text-8xl select-none pointer-events-none"
      >
        &lt;/&gt;
      </motion.div>
    </section>
  );
};
