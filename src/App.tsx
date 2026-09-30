import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Journey } from './components/Journey';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-gray-200 font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Journey />
        <CurrentlyLearning />
        <GitHubSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
