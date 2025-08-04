"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ChatWidget({OPENAI_API_KEY, OPENAI_URL}) {
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Hi! I\'m John\'s AI assistant. I can help you learn about his experience, projects, and technical expertise. What would you like to know?',
      timestamp: new Date()
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedQuestions = [
    "What technologies does John work with?",
    "Tell me about John's recent projects",
    "What certifications does John have?",
    "How can I contact John for a project?",
    "What's John's experience with mobile development?",
    "Tell me about John's full-stack expertise"
  ];

  const sendMessage = async (messageContent = input) => {
    if (!messageContent.trim()) return;
    
    const userMessage = { 
      role: 'user', 
      content: messageContent,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    
    try {
      // Enhanced system prompt for better responses about John
      const systemMessage = {
        role: 'system',
        content: `You are John Nguyen's professional AI assistant. John is a skilled Full-Stack Software Engineer with expertise in:

        TECHNICAL SKILLS:
        - Frontend: React, Next.js, React Native, JavaScript, TypeScript, Tailwind CSS
        - Backend: Node.js, Express, Python, Java, C#
        - Mobile: React Native, Expo, iOS/Android development
        - Databases: MongoDB, PostgreSQL, MySQL, Firebase
        - Cloud: AWS (Certified), Azure, Google Cloud
        - DevOps: Docker, CI/CD, Git, GitHub Actions

        RECENT PROJECTS:
        - Alberta Driving Class 7 app (1K+ downloads)
        - GPS Tracking System for enterprise
        - 600 GPLX app (5K+ downloads) 
        - Movies Discovery Platform
        - Green Food app (2K+ downloads)
        - Parking Master application

        EDUCATION & CERTIFICATIONS:
        - SAIT Software Development Diploma (2024)
        - AWS Cloud Practitioner
        - Google Search Central Certificate
        - Advanced Node.js Development
        - Technical SEO Certification

        EXPERIENCE:
        - Led capstone project "Sprout" - AI-powered plant care system
        - 8K+ combined app downloads
        - Mentored 15+ junior developers
        - Open source contributor

        CONTACT:
        - Email: john.nguyen@example.com
        - Phone: (825) 288-0437
        - Location: Calgary, Canada
        - Available for full-time positions and consulting

        Respond professionally and helpfully about John's qualifications, experience, and availability. Keep responses concise but informative.`
      };

      const response = await fetch(`${OPENAI_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [systemMessage, ...messages, userMessage],
          max_tokens: 300,
          temperature: 0.7
        })
      });

      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || 'I apologize, but I\'m having trouble processing your request right now. Please try asking about John\'s experience, projects, or technical skills.';

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: botReply,
        timestamp: new Date()
      }]);

    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I\'m experiencing technical difficulties. Please feel free to contact John directly at john.nguyen@example.com or call (825) 288-0437.',
        timestamp: new Date()
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isExpanded) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] z-50">
      <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-blue-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image 
                  src="/bot.webp" 
                  alt="John Nguyen AI Assistant" 
                  width={40} 
                  height={40} 
                  className="rounded-full border-2 border-white/30" 
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-white font-semibold">John&apos;s AI Assistant</h3>
                <p className="text-white/80 text-sm">Software Engineer Expert</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Quick Questions */}
        <div className="px-4 py-3 bg-gray-800/50 border-b border-gray-700">
          <p className="text-gray-300 text-sm mb-2">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {predefinedQuestions.slice(0, 3).map((question, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(question)}
                className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full hover:bg-emerald-500/30 transition-colors duration-200"
              >
                {question.length > 30 ? question.substring(0, 30) + '...' : question}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-900 to-gray-800">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.role === 'user' 
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white' 
                  : 'bg-gray-700/50 text-gray-100 border border-gray-600'
              }`}>
                <div className="flex items-start gap-2">
                  {msg.role === 'assistant' && (
                    <Image 
                      src="/bot.webp" 
                      alt="Assistant" 
                      width={20} 
                      height={20} 
                      className="rounded-full mt-1 flex-shrink-0" 
                    />
                  )}
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                    <p className={`text-xs mt-2 ${
                      msg.role === 'user' ? 'text-white/70' : 'text-gray-400'
                    }`}>
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-700/50 rounded-2xl px-4 py-3 border border-gray-600">
                <div className="flex items-center gap-2">
                  <Image src="/bot.webp" alt="Assistant" width={20} height={20} className="rounded-full" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <span className="text-gray-400 text-sm">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-gray-800/50 border-t border-gray-700">
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <textarea
                placeholder="Ask about John's experience, projects, or skills..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                rows="1"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                style={{ minHeight: '44px', maxHeight: '120px' }}
              />
            </div>
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-gray-900 text-center">
          <p className="text-xs text-gray-400">
            Powered by John Nguyen&apos;s AI • 
            <a href="mailto:mailtam62@gmail.com" className="text-emerald-400 hover:text-emerald-300 ml-1">
              Contact Directly
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
