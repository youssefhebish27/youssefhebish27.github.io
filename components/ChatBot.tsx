import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles, User, Bot, RefreshCw, ChevronRight } from 'lucide-react';
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  TESTING_CORE, 
  TOOLS_SKILLS,
  PROGRAMMING_SKILLS, 
  CONCEPT_SKILLS, 
  SERVICES, 
  EDUCATION, 
  CERTIFICATIONS, 
  CONTACT_INFO, 
  STATS,
  PROJECTS 
} from '../constants';

// --- Configuration ---
const SYSTEM_INSTRUCTION = `You are Youssef Hebish's AI Assistant. 
STATUS: Under Development.
RESPONSE: Always inform the user that the chatbot is currently being worked on and will be released soon.
RULES:
1. Answer in English only.
2. Be professional and brief.
3. Mention: "This feature is under development and will be released soon."
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages] = useState<Message[]>([
    { role: 'model', text: "Hello! 👋 I'm Youssef's AI Assistant. Please note that this feature is currently under development and will be released soon." }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 md:right-8 w-[92vw] md:w-[400px] h-[auto] max-h-[80vh] bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* --- Header --- */}
            <div className="bg-gradient-to-r from-indigo-600 to-violet-800 p-4 flex justify-between items-center text-white shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                    <Bot size={20} className="text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-indigo-700 rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h3 className="font-bold text-base">AI Assistant</h3>
                  <p className="text-xs text-indigo-200">Coming Soon</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Close">
                <X size={20} />
              </button>
            </div>

            {/* --- Chat Area --- */}
            <div className="p-6 space-y-6 bg-white dark:bg-gray-800">
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Sparkles size={14} className="text-white" />
                  </div>
                  
                  <div className="flex-1 p-4 rounded-2xl text-sm shadow-sm leading-relaxed bg-white dark:bg-gray-700/80 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-600 rounded-bl-none">
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* --- Footer --- */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700/50 text-center">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                Status: Maintenance
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 p-0 w-14 h-14 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-full shadow-lg hover:shadow-indigo-600/40 z-50 flex items-center justify-center transition-all group"
        aria-label="Toggle Chat"
      >
        {!isOpen && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-20 animate-ping"></span>
        )}
        
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare size={24} className="fill-current" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default ChatBot;
