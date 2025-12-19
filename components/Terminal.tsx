
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ICONS } from '../constants';

interface LogEntry {
  type: 'input' | 'output' | 'system';
  content: string;
}

// Define the AIStudio interface to ensure compatibility with global declarations
interface AIStudio {
  hasSelectedApiKey: () => Promise<boolean>;
  openSelectKey: () => Promise<void>;
}

declare global {
  interface Window {
    aistudio?: AIStudio;
  }
}

export const Terminal: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: 'output', content: 'Welcome to Mahnoor.dev Terminal. Type "help" or ask a question about my experience.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasKey, setHasKey] = useState(true);
  const logEndRef = useRef<HTMLDivElement>(null);

  const checkKeyStatus = async () => {
    // If the process.env.API_KEY is defined (injected during build), we are good
    if (process.env.API_KEY) {
      setHasKey(true);
      return;
    }

    // Otherwise check if a key has been selected via the AI Studio key picker
    if (window.aistudio) {
      const selected = await window.aistudio.hasSelectedApiKey();
      setHasKey(selected);
    } else {
      setHasKey(false);
    }
  };

  useEffect(() => {
    checkKeyStatus();
  }, []);

  const scrollToBottom = () => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [logs]);

  const handleConfigureKey = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      // Assume success as per platform race-condition guidance
      setHasKey(true);
      setLogs(prev => [...prev, { type: 'system', content: 'API Key configured via AI Studio. Terminal online.' }]);
    } else {
      setLogs(prev => [...prev, { type: 'system', content: 'Error: Key picker unavailable. Please set API_KEY in your Vercel Environment Variables.' }]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userCommand = input.trim();
    setLogs(prev => [...prev, { type: 'input', content: userCommand }]);
    setInput('');
    setIsLoading(true);

    if (userCommand.toLowerCase() === 'clear') {
      setLogs([{ type: 'output', content: 'Console cleared.' }]);
      setIsLoading(false);
      return;
    }

    if (userCommand.toLowerCase() === 'help') {
      setLogs(prev => [...prev, { type: 'output', content: 'Commands: clear, help, projects, experience, skills. Or just chat with me!' }]);
      setIsLoading(false);
      return;
    }

    const response = await getGeminiResponse(userCommand);
    
    if (response === "ERROR_MISSING_KEY" || response === "ERROR_INVALID_KEY") {
      setHasKey(false);
      setLogs(prev => [...prev, { type: 'system', content: 'Security Error: API Key is missing or invalid. Configuration required.' }]);
    } else {
      setLogs(prev => [...prev, { type: 'output', content: response }]);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden emerald-glow font-mono text-sm shadow-2xl">
      <div className="bg-zinc-800/80 px-4 py-2 flex items-center justify-between border-b border-zinc-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
        </div>
        <div className="text-zinc-400 text-xs flex items-center gap-2">
          <ICONS.Terminal />
          <span>mahnoor@portfolio:~</span>
        </div>
      </div>
      
      <div className="h-80 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-zinc-700">
        {logs.map((log, i) => (
          <div key={i} className={`
            ${log.type === 'input' ? 'text-emerald-400' : ''} 
            ${log.type === 'output' ? 'text-zinc-300' : ''} 
            ${log.type === 'system' ? 'text-yellow-500 font-bold' : ''}
          `}>
            {log.type === 'input' && <span className="text-emerald-600 mr-2">$</span>}
            {log.content}
          </div>
        ))}
        
        {!hasKey && (
          <div className="p-4 border border-yellow-500/20 bg-yellow-500/5 rounded-lg text-zinc-300 mt-4 space-y-3">
            <p className="text-xs leading-relaxed">
              <span className="text-yellow-500 font-bold uppercase mr-2">[Notice]</span>
              To enable the interactive terminal on Vercel, you must link an API key from a paid GCP project.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button 
                onClick={handleConfigureKey}
                className="text-[10px] bg-yellow-500 text-zinc-950 px-4 py-1.5 rounded font-black hover:bg-yellow-400 transition-colors uppercase tracking-wider"
              >
                Link API Key
              </button>
              <a 
                href="https://ai.google.dev/gemini-api/docs/billing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] text-zinc-500 hover:text-zinc-300 underline underline-offset-4"
              >
                Billing Documentation
              </a>
            </div>
          </div>
        )}

        {isLoading && <div className="text-emerald-500/50 animate-pulse">Processing...</div>}
        <div ref={logEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-zinc-900/80 flex items-center gap-2 border-t border-zinc-800">
        <span className="text-emerald-600 font-bold">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={hasKey ? "Type a command or question..." : "Waiting for API configuration..."}
          className="bg-transparent border-none outline-none text-emerald-400 w-full placeholder:text-zinc-700"
          disabled={isLoading || !hasKey}
          autoFocus
        />
      </form>
    </div>
  );
};
