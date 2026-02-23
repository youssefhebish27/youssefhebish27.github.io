import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, Sparkles, Loader2, MessageCircle, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";

const Contact: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isPolishing, setIsPolishing] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const polishMessage = async () => {
    if (!message.trim() || message.length < 5) return; // Prevent polishing very short text
    
    setIsPolishing(true);
    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
          console.error("API Key is missing (process.env.API_KEY)");
          return;
      }
      
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Rewrite the following message to be more professional, polite, and concise for a business inquiry. Only return the refined message text. Message: "${message}"`
      });
      
      if (response.text) {
        setMessage(response.text.trim());
      }
    } catch (e) {
      console.error("Error polishing message:", e);
    } finally {
      setIsPolishing(false);
    }
  };

  const validateForm = (formData: FormData): boolean => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const msg = message; // Use state for message

    // 1. Name Validation (Min 4 chars)
    if (!name || name.trim().length < 4) {
      newErrors.name = "Name must be at least 4 characters long.";
    }

    // 2. Email Validation (Must be @gmail.com or @icloud.com)
    const lowerEmail = email ? email.toLowerCase() : '';
    if (!email || !(lowerEmail.endsWith('@gmail.com') || lowerEmail.endsWith('@icloud.com'))) {
      newErrors.email = "Please use a valid @gmail.com or @icloud.com address.";
    }

    // 3. Message Validation (Min 5 chars)
    if (!msg || msg.trim().length < 5) {
      newErrors.message = "Message is too short. Please write at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validate before sending
    if (!validateForm(formData)) {
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(CONTACT_INFO.formAction, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setMessage('');
        form.reset();
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Get In <span className="text-secondary-400">Touch</span></h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Collaborate on Quality</h3>
              <p className="text-lg mb-10 text-primary-100 leading-relaxed">
                Ready to ensure your software meets the highest quality standards? 
                Let's discuss how I can contribute to your testing needs and help deliver 
                exceptional user experiences.
              </p>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="p-3 bg-white/10 rounded-lg mr-4 group-hover:bg-[#EA4335] transition-colors shadow-lg group-hover:shadow-[#EA4335]/20">
                    <Mail className="text-white" size={20} />
                  </div>
                  <span className="text-lg transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#4285F4] group-hover:via-[#EA4335] group-hover:via-[#FBBC05] group-hover:to-[#34A853] font-medium">
                    {CONTACT_INFO.email}
                  </span>
                </div>
                
                {/* WhatsApp Link */}
                <a 
                  href={CONTACT_INFO.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center group cursor-pointer transition-colors"
                >
                   <div className="p-3 bg-white/10 rounded-lg mr-4 group-hover:bg-[#25D366] transition-colors shadow-lg group-hover:shadow-[#25D366]/20">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <span className="text-lg font-medium group-hover:text-[#25D366] transition-colors">{CONTACT_INFO.phone} (WhatsApp)</span>
                </a>

                <div className="flex items-center group">
                   <div className="p-3 bg-white/10 rounded-lg mr-4 group-hover:bg-[#4285F4] transition-colors shadow-lg group-hover:shadow-[#4285F4]/20">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <span className="text-lg group-hover:text-[#4285F4] transition-colors">{CONTACT_INFO.location}</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-10">
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-[#0077B5] transition-all hover:-translate-y-1 shadow-lg hover:shadow-[#0077B5]/20">
                  <Linkedin size={24} />
                </a>
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-[#333] transition-all hover:-translate-y-1 shadow-lg hover:shadow-black/20">
                  <Github size={24} />
                </a>
              </div>
            </div>

            {/* Contact Form Container */}
            <div className="bg-white/10 backdrop-blur-lg p-1 rounded-2xl border border-white/20 shadow-2xl relative flex flex-col">
              <div className="p-6 md:p-10 flex-1 flex flex-col">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-10"
                    >
                      <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                      <p className="text-primary-100 mb-8">
                        Thank you for reaching out. I will get back to you as soon as possible via email.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white font-medium group"
                      >
                        Send another message
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Configuration for FormSubmit */}
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                      <input type="hidden" name="_template" value="table" />

                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary-200 mb-1">Name <span className="text-red-400">*</span></label>
                        <input 
                          type="text" 
                          name="name" 
                          id="name"
                          onChange={() => setErrors(prev => ({...prev, name: ''}))}
                          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/30 focus:outline-none focus:bg-white/10 transition-colors ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-white/20 focus:border-secondary-400'}`}
                          placeholder="e.g. Youssef Hebish"
                        />
                        {errors.name && (
                          <p className="text-red-300 text-xs mt-1 flex items-center animate-pulse">
                            <AlertCircle size={12} className="mr-1" /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary-200 mb-1">Email <span className="text-red-400">*</span></label>
                        <input 
                          type="email" 
                          name="email" 
                          id="email"
                          onChange={() => setErrors(prev => ({...prev, email: ''}))}
                          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/30 focus:outline-none focus:bg-white/10 transition-colors ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-white/20 focus:border-secondary-400'}`}
                          placeholder="example@gmail.com or @icloud.com"
                        />
                         {errors.email && (
                          <p className="text-red-300 text-xs mt-1 flex items-center animate-pulse">
                            <AlertCircle size={12} className="mr-1" /> {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Message Field */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                           <label htmlFor="message" className="block text-sm font-medium text-primary-200">Message <span className="text-red-400">*</span></label>
                        </div>
                        <textarea 
                          name="message" 
                          rows={4} 
                          id="message"
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                            setErrors(prev => ({...prev, message: ''}));
                          }}
                          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/30 focus:outline-none focus:bg-white/10 resize-none transition-colors ${errors.message ? 'border-red-400 focus:border-red-400' : 'border-white/20 focus:border-secondary-400'}`}
                          placeholder="Share a nice message, a project inquiry, or just say hello... (min 5 chars)"
                        ></textarea>
                        <div className="flex justify-between mt-1">
                          {errors.message ? (
                            <p className="text-red-300 text-xs flex items-center animate-pulse">
                              <AlertCircle size={12} className="mr-1" /> {errors.message}
                            </p>
                          ) : <span></span>}
                          <span className={`text-xs ${message.length > 0 && message.length < 5 ? 'text-secondary-400' : 'text-white/30'}`}>
                            {message.length} / 5 chars
                          </span>
                        </div>
                      </div>
                      
                      {status === 'error' && (
                        <div className="flex items-center gap-2 text-red-300 text-sm bg-red-900/20 p-3 rounded-lg border border-red-500/30">
                          <AlertCircle size={16} />
                          <span>Something went wrong. Please check your connection.</span>
                        </div>
                      )}

                      <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full bg-secondary-500 text-white font-bold py-4 rounded-lg hover:bg-secondary-400 transition-all transform hover:scale-[1.02] flex items-center justify-center shadow-lg hover:shadow-secondary-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? (
                          <Loader2 size={20} className="animate-spin mr-2" />
                        ) : (
                          <Send size={20} className="mr-2" />
                        )}
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
