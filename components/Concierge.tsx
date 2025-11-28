import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToConcierge } from '../services/geminiService';

export const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'いらっしゃいませ。AIコンシェルジュでございます。お料理の内容や、当店についてのご質問など、お気軽にお尋ねください。',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToConcierge(messages.concat(userMsg), input);
      
      const modelMsg: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
       // Error handling is inside service, but double check here
       const errorMsg: ChatMessage = {
         role: 'model',
         text: "申し訳ございません。通信エラーが発生しました。",
         timestamp: new Date()
       };
       setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-ginrei-gold text-ginrei-black p-4 rounded-full shadow-lg hover:bg-white transition-all duration-300 ${isOpen ? 'hidden' : 'flex'} items-center gap-2`}
      >
        <Sparkles size={20} />
        <span className="font-serif text-sm tracking-wide hidden md:inline">AI Concierge</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-96 h-[500px] bg-ginrei-black border border-ginrei-gold/30 shadow-2xl flex flex-col rounded-lg overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-zinc-900 p-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="text-ginrei-gold w-4 h-4" />
              <span className="text-white font-serif tracking-widest text-sm">AI Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-900/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 text-sm leading-relaxed rounded-lg ${
                    msg.role === 'user' 
                      ? 'bg-ginrei-gray text-white border border-white/10 rounded-br-none' 
                      : 'bg-ginrei-black border border-ginrei-gold/20 text-gray-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-ginrei-black border border-ginrei-gold/20 p-3 rounded-lg text-ginrei-gold text-xs animate-pulse">
                  入力中...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-zinc-900 border-t border-white/10">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="質問を入力..."
                className="flex-1 bg-black/50 border border-white/20 text-white px-3 py-2 text-sm focus:outline-none focus:border-ginrei-gold transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-ginrei-gold text-ginrei-black p-2 hover:bg-white transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-gray-600 mt-2 text-center">
              AIは誤った情報を生成する可能性があります。正確な情報は店舗へお問い合わせください。
            </p>
          </div>
        </div>
      )}
    </>
  );
};