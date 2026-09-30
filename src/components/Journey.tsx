import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

const JOURNEY_STEPS = [
  {
    title: '2025',
    description: 'Started BCA. Began formal Computer Science/software development journey.',
    active: false
  },
  {
    title: 'Web Development',
    description: 'Learned HTML, CSS, JavaScript, React and the MERN stack.',
    active: false
  },
  {
    title: 'Backend Focus',
    description: 'Started focusing more deeply on Node.js, Express.js, APIs, databases and backend architecture.',
    active: false
  },
  {
    title: 'Java & DSA',
    description: 'Started building stronger foundations in Java, Object-Oriented Programming and Data Structures & Algorithms.',
    active: false
  },
  {
    title: 'Current Focus',
    description: 'Backend engineering, Docker, Redis, cloud technologies and scalable software architecture.',
    active: true
  }
];

export const Journey = () => {
  return (
    <section id="journey" className="py-20 px-6 bg-surface/30">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading
          title="Developer Journey"
          subtitle="The evolution of my skills and focus areas over time."
        />

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
          {JOURNEY_STEPS.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <div className={`absolute -left-[21px] md:-left-[41px] top-1.5 w-3 h-3 rounded-full ${step.active ? 'bg-primary shadow-[0_0_15px_rgba(59,130,246,0.6)]' : 'bg-white/20 border border-white/40'}`} />

              <div className="pl-6 md:pl-0">
                <h3 className={`text-xl font-bold mb-2 ${step.active ? 'text-primary' : 'text-white'}`}>
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
