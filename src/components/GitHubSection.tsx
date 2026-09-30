import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Star, GitFork, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string;
}

export const GitHubSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch real data from GitHub API
    fetch('https://api.github.com/users/theAkarshSingh/repos?sort=updated&per_page=4')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch GitHub repos", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <SectionHeading 
            title="GitHub Activity" 
            subtitle="Recent code and open source contributions."
          />
          <a 
            href="https://github.com/theAkarshSingh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/10 transition-colors text-white font-medium self-start md:self-auto mb-16 md:mb-12"
          >
            <FaGithub size={18} />
            @theAkarshSingh
          </a>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : repos.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {repos.map((repo, idx) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <a 
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 glass-card rounded-xl hover:-translate-y-1 hover:border-white/20 transition-all h-full"
                >
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <BookOpen size={18} />
                    {repo.name}
                  </div>
                  <p className="text-sm text-gray-400 mb-6 line-clamp-2 min-h-[40px]">
                    {repo.description || 'No description provided.'}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mt-auto">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={14} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={14} /> {repo.forks_count}
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="p-8 glass-card rounded-xl text-center">
            <FaGithub size={48} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">View my full portfolio on GitHub.</p>
          </div>
        )}
      </div>
    </section>
  );
};
