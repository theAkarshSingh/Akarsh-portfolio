import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Terminal, Server, Database } from 'lucide-react';

const EXPLORING_ITEMS = [
  'Backend Architecture',
  'System Design',
  'Redis',
  'Docker',
  'Cloud & DevOps',
  'TypeScript',
  'Data Structures & Algorithms',
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          title="About Me"
          subtitle="My background, interests, and what I'm focused on learning right now."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <p>
              I am a BCA undergraduate student focused on Computer Science and software development, with a deep interest in <strong className="text-white font-medium">backend engineering</strong>.
            </p>
            <p>
              My journey started with the MERN ecosystem and JavaScript, which gave me a solid foundation in web development. Currently, I am expanding my technical depth by learning <strong className="text-white font-medium">Java</strong>.
            </p>
            <p>
              I am deeply curious about how production software actually works. I spend my time learning about databases, APIs, Docker, Redis, Git, cloud infrastructure, and DevOps practices.
            </p>
            <p>
              My ultimate goal is to prepare toward a long-term career as a strong software and backend engineer, building robust and scalable systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />

            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Terminal className="text-primary" size={20} />
              Currently Exploring
            </h3>

            <div className="flex flex-wrap gap-3">
              {EXPLORING_ITEMS.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-2">
                <Server className="text-primary" size={24} />
                <span className="text-sm font-medium text-gray-300">Backend Systems</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-2">
                <Database className="text-secondary" size={24} />
                <span className="text-sm font-medium text-gray-300">Database Design</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
