import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-surface/30">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Let's Build Something</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Have an interesting project, collaboration idea, or just want to talk tech? Feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:theakarshsingh@gmail.com"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Email Me
            </a>

            <a
              href="https://github.com/theAkarshSingh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-white font-medium border-white/20"
            >
              <FaGithub size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/theakarshsingh/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-white font-medium border-white/20"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 text-left">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Where I'm Heading</h3>
            <p className="text-gray-400 leading-relaxed max-w-2xl text-lg italic">
              "My long-term goal is to become a strong software engineer with deep backend expertise. I'm currently building my foundations in JavaScript, TypeScript, Data Structures and Algorithms, backend development, databases, distributed systems, DevOps, and computer science fundamentals."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
