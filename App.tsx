import React, { useState, useEffect } from 'react';
import { Terminal } from './components/Terminal';
import { PROJECTS, SKILL_CATEGORIES, EXPERIENCES, ICONS } from './constants';

const App: React.FC = () => {
  const GITHUB_URL = "https://github.com/mahnoorshkh";
  const LINKEDIN_URL = "https://www.linkedin.com/in/mahnoor-khurram-88a536215/";
  const RECOMMENDATION_URL = "https://www.linkedin.com/in/mahnoor-khurram-88a536215/details/recommendations/";

  const [displayText, setDisplayText] = useState('');
  const fullText = "Generative AI & AI-powered App Development";
  
  useEffect(() => {
    let currentText = '';
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setDisplayText(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            onClick={scrollToTop}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-zinc-950 font-bold font-mono group-hover:bg-emerald-400 transition-colors">MK</div>
            <span className="font-mono font-bold text-lg hidden sm:block">Mahnoor Khurram</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-zinc-400">
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-emerald-500 transition-colors uppercase">Projects</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-emerald-500 transition-colors uppercase">Skills</a>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover:text-emerald-500 transition-colors uppercase">Experience</a>
            <a href="#learning" onClick={(e) => handleNavClick(e, 'learning')} className="hover:text-emerald-500 transition-colors tracking-wide uppercase">Frontier</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Graduated From FAST NUCES
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              Software Engineer | <span className="text-emerald-500">Backend Specialist</span> | System Architect
            </h1>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-xl">
              Specializing in robust Node.js architectures and large-scale API optimization. 
              <strong> FAST NUCES Alumna</strong> currently serving as Visiting Faculty, bridging the gap between advanced theory and industrial application.
            </p>
            <div className="flex gap-4">
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="px-6 py-3 bg-emerald-500 text-zinc-950 font-bold rounded-lg hover:bg-emerald-400 transition-all emerald-glow">View Projects</a>
              <button onClick={() => document.getElementById('terminal')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 border border-zinc-800 text-zinc-100 font-medium rounded-lg hover:bg-zinc-900 transition-all flex items-center gap-2">
                <ICONS.Terminal />
                Open Terminal
              </button>
            </div>
          </div>
          <div id="terminal">
            <Terminal />
          </div>
        </section>

        {/* Frontier Section */}
        <section id="learning" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold italic tracking-tight">Architecting the Future</h2>
            <div className="h-px flex-1 bg-zinc-900"></div>
          </div>
          <div className="p-10 rounded-2xl bg-zinc-900/20 border border-zinc-800 hover:border-emerald-500/20 transition-all group">
            <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-zinc-900 rounded-lg text-emerald-500">
                  <ICONS.Book />
               </div>
               <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Ongoing Research & Development</span>
            </div>
            <div className="font-mono text-2xl md:text-4xl font-bold text-zinc-100 leading-tight">
              Deep diving into <span className="text-emerald-500 underline decoration-emerald-500/30 underline-offset-8">{displayText}</span>
              <span className="inline-block w-2 h-8 ml-1 bg-emerald-500 animate-pulse align-middle"></span>
            </div>
            <p className="mt-8 text-zinc-400 leading-relaxed max-w-2xl">
              Mastering the intersection of LLMs and enterprise backend systems. Focusing on RAG (Retrieval-Augmented Generation), vector databases, and autonomous AI agents designed for production environments.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Academic & Professional</h2>
            <div className="h-px flex-1 bg-zinc-900"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-emerald-500/30 transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {exp.type === 'academic' ? <ICONS.Cpu /> : <ICONS.Code />}
                </div>
                <div className="flex items-center gap-3 mb-4">
                   <span className={`text-xs px-2 py-1 rounded ${exp.type === 'academic' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
                    {exp.type.toUpperCase()}
                  </span>
                  <span className="text-zinc-500 font-mono text-sm">{exp.period}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                <p className="text-emerald-500 font-medium mb-6">{exp.company}</p>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-zinc-400 text-sm leading-relaxed">
                      <span className="text-emerald-500 mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <div className="h-px flex-1 bg-zinc-900"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group p-1 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 transition-all hover:scale-[1.02]">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-zinc-950 p-6 rounded-[calc(1rem-2px)] h-full flex flex-col block"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-zinc-900 rounded-lg text-emerald-500 group-hover:bg-emerald-500/10 transition-colors">
                      <ICONS.Layers />
                    </div>
                    <div className="text-zinc-500 hover:text-emerald-500 transition-colors">
                      <ICONS.External />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-zinc-400 text-sm mb-6 flex-grow">{project.description}</p>
                  <div className="space-y-4 mb-6">
                    {project.features.map((feat, i) => (
                      <div key={i} className="flex gap-2 text-xs text-zinc-500">
                        <span className="text-emerald-500">•</span>
                        {feat}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono font-medium px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Core Competencies</h2>
            <div className="h-px flex-1 bg-zinc-900"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.name} className="p-6 rounded-xl border border-zinc-800 hover:border-emerald-500/20 transition-colors">
                <h4 className="font-mono text-emerald-500 text-sm mb-4 tracking-wider uppercase">{cat.name}</h4>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <div key={skill} className="text-zinc-400 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-zinc-900 text-center">
          <div className="mb-8">
            <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-emerald-500 mx-auto mb-4 border border-zinc-800">
              <ICONS.Terminal />
            </div>
            <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
            <p className="text-zinc-500 text-sm max-w-sm mx-auto mb-6">
              Open for collaboration on backend architecture, API design, or educational projects.
            </p>
            <a 
              href={RECOMMENDATION_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-zinc-800 text-zinc-400 text-sm hover:border-emerald-500/50 hover:text-emerald-500 transition-all"
            >
              <span>Leave a Recommendation</span>
              <ICONS.External />
            </a>
          </div>
          <div className="flex justify-center gap-6 text-zinc-400 mb-12">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">GitHub</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">LinkedIn</a>
          </div>
          <div className="text-zinc-600 text-xs font-mono">
            &copy; {new Date().getFullYear()} Mahnoor Khurram. Optimized for Performance.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;