import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', status: 'active' },
      { name: 'JavaScript', status: 'active' },
      { name: 'C', status: 'active' },
      { name: 'Python', status: 'active' },
      { name: 'TypeScript', status: 'learning' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', status: 'active' },
      { name: 'Express.js', status: 'active' },
      { name: 'REST APIs', status: 'active' },
      { name: 'Backend Architecture', status: 'active' },
      { name: 'Java', status: 'active' },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', status: 'active' },
      { name: 'CSS', status: 'active' },
      { name: 'Bootstrap', status: 'active' },
      { name: 'Tailwind CSS', status: 'active' },
      { name: 'React', status: 'active' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', status: 'active' },
      { name: 'Redis', status: 'active' },
      { name: 'SQL fundamentals', status: 'active' },
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', status: 'active' },
      { name: 'GitHub', status: 'active' },
      { name: 'Docker', status: 'active' },
      { name: 'npm', status: 'active' },
      { name: 'Postman', status: 'active' },
      { name: 'VS Code', status: 'active' },
      { name: 'Antigravity IDE', status: 'active' },
      { name: 'IntelliJ IDEA', status: 'active' },
    ]
  },
  {
    title: 'Computer Science',
    skills: [
      { name: 'Data Structures & Algorithms', status: 'active' },
      { name: 'Object-Oriented Programming', status: 'active' },
      { name: 'Web Development', status: 'active' },
      { name: 'Software Engineering', status: 'active' },
      { name: 'System Design', status: 'active' },
      { name: 'Operating System', status: 'active' },
      { name: 'Computer Networks', status: 'active' },
      { name: 'Database Management System', status: 'active' },
    ]
  },
  {
    title: 'Cloud / DevOps',
    skills: [
      { name: 'Docker', status: 'active' },
      { name: 'Deployment', status: 'active' },
      { name: 'CI/CD fundamentals', status: 'active' },
      { name: 'Cloud technologies', status: 'learning' },
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-surface/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and concepts I'm actively using and currently learning."
        />

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="w-3 h-3 rounded-full bg-white/10 border border-white/20 inline-block"></span>
            Actively Using
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="w-3 h-3 rounded-full bg-primary/20 border border-primary/40 inline-block"></span>
            Currently Learning
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-xl hover:border-white/20 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-col gap-3">
                {category.skills.map(skill => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between group"
                  >
                    <span className={`text-sm font-medium ${skill.status === 'learning' ? 'text-primary' : 'text-gray-300 group-hover:text-white transition-colors'}`}>
                      {skill.name}
                    </span>
                    {skill.status === 'learning' && (
                      <span className="text-[10px] uppercase tracking-wider text-primary font-bold px-2 py-1 bg-primary/10 rounded-md">Learning</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
