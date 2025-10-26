import React, { useState } from 'react';
import { MessageCircle, X, Send, Crown } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to Raj Heritage! I'm your personal concierge. How may I assist you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const quickActions = [
    "Check room availability",
    "Book spa treatment",
    "Reserve dining table",
    "Plan heritage tour",
    "View special offers"
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: "Thank you for your inquiry. Our team will assist you shortly. Would you like me to connect you with a specialist?", 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
    
    setInput('');
  };

  const handleQuickAction = (action: string) => {
    const userMessage = { id: Date.now(), text: action, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: `I'll help you with ${action.toLowerCase()}. Let me pull up the relevant information for you.`, 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-royal-maroon text-white p-4 rounded-full shadow-lg hover:bg-royal-maroon/90 transition-all duration-300 transform hover:scale-110 z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 border border-palace-beige overflow-hidden">
          {/* Header */}
          <div className="bg-royal-maroon text-white p-4 flex items-center space-x-3">
            <Crown className="h-6 w-6 text-antique-gold" />
            <div>
              <h3 className="font-semibold">Royal Concierge</h3>
              <p className="text-sm text-white/80">Always at your service</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-royal-maroon text-white'
                      : 'bg-palace-beige text-charcoal-ink'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className="text-xs bg-palace-beige text-charcoal-ink px-3 py-1 rounded-full hover:bg-antique-gold hover:text-white transition-colors duration-300"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-palace-beige flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold focus:border-transparent text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-royal-maroon text-white p-2 rounded-lg hover:bg-royal-maroon/90 transition-colors duration-300"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;