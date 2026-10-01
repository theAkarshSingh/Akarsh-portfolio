import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/5 bg-background">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-lg font-bold text-white tracking-tight">Akarsh Singh</span>
          <span className="text-sm text-primary font-mono">Building. Learning. Shipping.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/theAkarshSingh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/theakarshsingh/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:theakarshsingh@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="text-sm text-gray-500">
          &copy; 2026 Akarsh Singh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
