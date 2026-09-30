import { motion } from 'framer-motion';

const STACK = [
  { icon: '💛', name: 'JavaScript', desc: 'Building dynamic frontend applications.' },
  { icon: '🧠', name: 'Data Structures & Algorithms', desc: 'Strengthening problem-solving skills.' },
  { icon: '⚙️', name: 'Backend Architecture', desc: 'Designing scalable systems.' },
  { icon: '🐳', name: 'Docker & Containers', desc: 'Containerizing applications.' },
  { icon: '⚡', name: 'Redis', desc: 'Implementing caching strategies.' },
  { icon: '🔷', name: 'TypeScript', desc: 'Adding type safety to JS.' },
  { icon: '☁️', name: 'Cloud & DevOps', desc: 'Deploying and managing infrastructure.' },
  { icon: '🏗️', name: 'System Design', desc: 'Understanding distributed architectures.' }
];

export const CurrentlyLearning = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Currently Building My Stack</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {STACK.map((item, idx) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform text-left"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-white mb-2">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
