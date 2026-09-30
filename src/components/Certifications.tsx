import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Award, BookOpen, ExternalLink } from 'lucide-react';

const CERTIFICATIONS = [
  {
    title: 'MERN Full Stack Web Development with AI',
    issuer: 'GeeksforGeeks',
    link: 'https://www.geeksforgeeks.org/certificate/2090750287d576c13ddbd54fdc893a04'
  },
  {
    title: 'Generative AI Skills for Software Developers',
    issuer: 'IBM',
    link: 'https://courses.gfg.skillsnetwork.site/certificates/c7f79ebb67814dc298f172cce9291b93'
  }
];

const ONGOING_LEARNING = [
  'Data Structures & Algorithms with Java',
  'Backend Development',
  'Docker',
  'Redis',
  'System Design',
  'Cloud / DevOps'
];

export const Certifications = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          title="Certifications & Learning"
          subtitle="Continuous learning is a core part of my journey as a developer."
        />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="text-primary" />
              Completed Certifications
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 glass-card rounded-xl border-l-4 border-l-primary relative group flex flex-col justify-center"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-white mb-1">{cert.title}</h4>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                        title="View Certificate"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="text-secondary" />
              Ongoing Learning
            </h3>

            <div className="flex flex-wrap gap-3">
              {ONGOING_LEARNING.map((topic, idx) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="px-4 py-3 glass rounded-lg border border-white/5 text-gray-300 text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  {topic}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
