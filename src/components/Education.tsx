import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          title="Education"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <GraduationCap size={48} className="text-primary" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-lg text-gray-300 font-medium mb-4">Amity University Online</p>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-secondary/20 text-secondary border border-secondary/30 rounded-full">
                    Currently pursuing — Second Year
                  </span>
                </div>
                <p className="text-gray-400 mt-2">
                  <strong className="text-gray-300">Focus:</strong> Computer Science / Software Development / Artificial Intelligence
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
