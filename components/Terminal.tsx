
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ICONS } from '../constants';

interface LogEntry {
  type: 'input' | 'output';
  content: string;
}

export const Terminal: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: 'output', content: 'Welcome to Mahnoor.dev Terminal. Type "help" or ask a question about my experience.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const logEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [logs]);

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
      setLogs(prev => [...prev, { type: 'output', content: 'Commands: clear, skills, projects, experience. Or just ask anything about Mahnoor!' }]);
      setIsLoading(false);
      return;
    }

    const response = await getGeminiResponse(userCommand);
    setLogs(prev => [...prev, { type: 'output', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden emerald-glow font-mono text-sm">
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
          <div key={i} className={`${log.type === 'input' ? 'text-emerald-400' : 'text-zinc-300'}`}>
            {log.type === 'input' && <span className="text-emerald-600 mr-2">$</span>}
            {log.content}
          </div>
        ))}
        {isLoading && <div className="text-emerald-500/50 animate-pulse">Processing...</div>}
        <div ref={logEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 bg-zinc-900/80 flex items-center gap-2">
        <span className="text-emerald-600">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me something..."
          className="bg-transparent border-none outline-none text-emerald-400 w-full"
          disabled={isLoading}
        />
      </form>
    </div>
  );
};
