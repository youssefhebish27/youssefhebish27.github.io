import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles, User, Bot, RefreshCw, ChevronRight, Hammer, Construction } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'framer-motion';
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
const SUGGESTED_QUESTIONS = [
  "What are your main skills?",
  "Tell me about your projects",
  "How can I contact Youssef?",
  "Do you know Automation Testing?",
];

const SYSTEM_INSTRUCTION = `You are a smart, professional, and friendly AI assistant for Youssef Hebish's portfolio.

### **Your Role & Persona:**
1. **Expert QA Engineer:** You have deep knowledge of Software Testing (Manual, Automation, API, Agile, Jira, etc.).
2. **Youssef's Representative:** When asked about Youssef, use the provided JSON data to answer accurately.
3. **Language & Tone:** 
   - Detect the user's language. 
   - **If Arabic:** Reply in a mix of **Egyptian Arabic (Masri)** and **Professional Arabic**. 
   - **IMPORTANT:** In Arabic, always write Youssef's name as **"يوسف حبيش"**.
   - Be friendly (e.g., "أهلاً بيك! بص يا سيدي، يوسف حبيش بيعرف...").
   - **If English:** Professional, enthusiastic, and concise.

### **Knowledge Base:**
- **Bio:** CS Student (3rd Year), Software Testing Intern at MedicaSpace, Freelancer on Test.io.
- **Skills:** Manual Testing, API (Postman), Jira, Zephyr Scale, SQL, Java, OOP.
- **Projects:** Rideshare App (Agile/Jira), Trello API Automation, Petstore Automation.

**Data Context:**
Stats: ${JSON.stringify(STATS)}
Projects: ${JSON.stringify(PROJECTS)}
Testing Core: ${JSON.stringify(TESTING_CORE)}
Tools: ${JSON.stringify(TOOLS_SKILLS)}
Programming: ${JSON.stringify(PROGRAMMING_SKILLS)}
Concepts: ${JSON.stringify(CONCEPT_SKILLS)}
Services: ${JSON.stringify(SERVICES)}
Education: ${JSON.stringify(EDUCATION)}
Certifications: ${JSON.stringify(CERTIFICATIONS)}
Contact: ${JSON.stringify(CONTACT_INFO)}
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

// --- Components ---

const FormattedText = ({ text, isRtl }: { text: string, isRtl: boolean }) => {
  return (
    <div className={`space-y-2 text-sm leading-relaxed ${isRtl ? 'text-right font-sans' : 'text-left'}`}>
      {text.split('\n').map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} className="h-1" />;

        // Handle Bullet Points
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          return (
            <div key={i} className="flex gap-2 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current opacity-60 flex-shrink-0" />
              <span>{parseBold(trimmed.substring(2))}</span>
            </div>
          );
        }

        return <div key={i}>{parseBold(line)}</div>;
      })}
    </div>
  );
};

// Helper to parse **bold** text
const parseBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-bold text-gray-900 dark:text-white">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMaintenance = false; // Disabled maintenance mode as requested
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! 👋 I hope you're having a wonderful day! \n\nI'm Youssef's AI Assistant. I can tell you about his **Testing Skills**, **Projects**, or discuss QA concepts. How can I help?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInstance = useRef<any>(null); // Store chat session

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Initialize Chat Session
  const getChatSession = () => {
    if (!chatInstance.current) {
      // Using the hardcoded key provided by the user
      const apiKey = "AIzaSyCJDZsZRTh_MbFvsXS1UC3ClqynzDbuX0A";
      
      const ai = new GoogleGenAI({ apiKey });
      chatInstance.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: { systemInstruction: SYSTEM_INSTRUCTION },
      });
    }
    return chatInstance.current;
  };

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    // 1. Add User Message
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setInput('');
    setIsLoading(true);

    try {
      const chat = getChatSession();
      if (!chat) throw new Error("API Key missing");

      // 2. Stream Response
      const result = await chat.sendMessageStream({ message: textToSend });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]); // Add empty placeholder

      for await (const chunk of result) {
        const chunkText = chunk.text; // Ensure correct property access
        if (chunkText) {
          fullResponse += chunkText;
          setMessages(prev => {
            const newMsgs = [...prev];
            newMsgs[newMsgs.length - 1].text = fullResponse;
            return newMsgs;
          });
        }
      }
    } catch (error: any) {
      console.error("Chat Error:", error);
      let errorText = "⚠️ Sorry, I encountered a connection error. Please check your internet or try again later.";
      
      if (error.message === "API Key missing") {
        errorText = "⚠️ Configuration Error: API Key is missing. Check your environment configuration.";
      } else if (error.message?.includes("403")) {
         errorText = "⚠️ API Access Denied. Please check your API Key quotas or restrictions.";
      }
      
      setMessages(prev => [...prev, { role: 'model', text: errorText }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      { role: 'model', text: "Chat cleared! 🧹\nAsk me anything about Youssef's work or QA testing." }
    ]);
    chatInstance.current = null; // Reset history
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 md:right-8 w-[92vw] md:w-[450px] h-[600px] max-h-[80vh] bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* --- Header --- */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-4 flex justify-between items-center text-white shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                    <Bot size={20} className="text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-primary-700 rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h3 className="font-bold text-base">Smart AI Assistant</h3>
                  <p className="text-xs text-primary-200">{isMaintenance ? 'Coming Soon' : 'Online'}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button onClick={handleReset} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Clear Chat">
                  <RefreshCw size={18} />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Close">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* --- Chat Area --- */}
            <div className={`flex-1 overflow-hidden flex flex-col bg-white dark:bg-gray-800 ${isMaintenance ? 'p-0' : 'p-4 space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600'}`}>
              {isMaintenance ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                  {/* Creative Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  </div>

                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="relative mb-6"
                  >
                    <div className="w-24 h-24 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-[2rem] flex items-center justify-center relative group">
                      <div className="absolute inset-0 border-2 border-primary-500/20 rounded-[2rem] animate-[pulse_3s_infinite]"></div>
                      <div className="w-18 h-18 bg-white dark:bg-gray-700 rounded-[1.5rem] shadow-xl flex items-center justify-center border border-gray-100 dark:border-gray-600">
                        <Bot size={36} className="text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    <motion.div 
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-2 -right-2 bg-gradient-to-br from-secondary-400 to-secondary-500 text-white p-2 rounded-xl shadow-xl shadow-secondary-500/20"
                    >
                      <Sparkles size={16} />
                    </motion.div>
                  </motion.div>

                  <div className="space-y-8 max-w-[320px] relative z-10">
                    <div className="space-y-3">
                      <h4 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
                        Smart AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Assistant</span>
                      </h4>
                      <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                        I am currently learning and getting ready. I will be back soon to help you!
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200 dark:to-gray-700"></div>
                      <div className="flex gap-1">
                        {[1, 2, 3].map(i => (
                          <motion.div 
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                            className="w-1.5 h-1.5 rounded-full bg-primary-500"
                          />
                        ))}
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200 dark:to-gray-700"></div>
                    </div>

                    <div className="pt-2">
                      <div className="relative inline-block group">
                        <div className="absolute inset-0 bg-primary-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                        <div className="relative flex items-center gap-3 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-xs font-black tracking-[0.15em] uppercase shadow-2xl">
                          <RefreshCw size={14} className="animate-spin text-primary-500" />
                          <span>Building v2.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((msg, idx) => {
                    const isUser = msg.role === 'user';
                    const isArabicText = /[\u0600-\u06FF]/.test(msg.text);
                    
                    return (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-end gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                      >
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${isUser ? 'bg-primary-100 dark:bg-primary-900' : 'bg-gradient-to-br from-secondary-400 to-secondary-600'}`}>
                          {isUser ? <User size={14} className="text-primary-700 dark:text-primary-300" /> : <Sparkles size={14} className="text-white" />}
                        </div>
                        
                        {/* Bubble */}
                        <div 
                          className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm leading-relaxed ${
                            isUser 
                              ? 'bg-primary-600 text-white rounded-br-none' 
                              : 'bg-white dark:bg-gray-700/80 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-600 rounded-bl-none'
                          }`}
                          dir={isArabicText ? 'rtl' : 'ltr'}
                        >
                          <FormattedText text={msg.text} isRtl={isArabicText} />
                        </div>
                      </motion.div>
                    );
                  })}
                  
                  {isLoading && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center flex-shrink-0">
                          <Loader2 size={14} className="text-white animate-spin" />
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 animate-pulse">Thinking...</span>
                     </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* --- Quick Suggestions --- */}
            {!isMaintenance && messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-400 mb-2 pl-1 font-medium">Suggested questions:</p>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="whitespace-nowrap px-3 py-2 bg-gray-100 dark:bg-gray-700/50 hover:bg-primary-50 dark:hover:bg-primary-900/30 text-xs text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-600 transition-colors flex items-center gap-1"
                    >
                      {q} <ChevronRight size={12} className="opacity-50" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* --- Input Area --- */}
            {!isMaintenance && (
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(input); }} 
                className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700/50"
              >
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    dir="auto"
                    placeholder="Ask me anything..."
                    className="flex-1 pl-4 pr-12 py-3.5 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 border border-gray-200 dark:border-gray-600 focus:border-primary-500 transition-all placeholder-gray-400 text-sm shadow-inner"
                  />
                  <button 
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2 p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:bg-gray-400 transition-all shadow-md"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Floating Trigger Button --- */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 p-0 w-14 h-14 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full shadow-lg hover:shadow-primary-600/40 z-50 flex items-center justify-center transition-all group"
        aria-label="Toggle Chat"
      >
        {/* Ping Animation */}
        {!isOpen && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-20 animate-ping"></span>
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
