import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, X, Send, Crown, Sparkles, ArrowRight } from 'lucide-react';
import { rooms, packages, diningVenues, spaActivities } from '../data';

interface ChatAction {
  label: string;
  type: 'book' | 'link';
  payload: {
    path?: string;
    bookingType?: 'Room' | 'Package' | 'Dining' | 'Spa' | 'Activity';
    item?: any;
  };
}

interface ChatMessage {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  actions?: ChatAction[];
  itemsCarousel?: Array<{
    name: string;
    price?: number;
    description: string;
    image?: string;
    action: ChatAction;
  }>;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      id: 1, 
      text: "Pranam! Welcome to Raj Heritage. I am your Royal Concierge concierge. How may I elevate your palace experience today?", 
      sender: 'bot',
      actions: [
        { label: "View Suites", type: 'link', payload: { path: '/rooms' } },
        { label: "Book a Room", type: 'book', payload: { bookingType: 'Room', item: rooms[0] } },
        { label: "Explore Dining", type: 'link', payload: { path: '/dining' } }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const quickActions = [
    { label: "👑 Stay Rooms", query: "rooms" },
    { label: "🍽️ Dining", query: "dining" },
    { label: "🌸 Spa Therapies", query: "spa" },
    { label: "🎪 Cultural Tours", query: "activities" },
    { label: "🎁 Curated Packages", query: "packages" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleAction = (action: ChatAction) => {
    if (action.type === 'book') {
      navigate('/book', { state: { bookingType: action.payload.bookingType, item: action.payload.item } });
    } else if (action.type === 'link' && action.payload.path) {
      navigate(action.payload.path);
    }
    setIsOpen(false); // Close chatbot upon action click
  };

  const parseUserQuery = (query: string): ChatMessage => {
    const text = query.toLowerCase().trim();
    const id = Date.now();

    // 1. Rooms & Suites
    if (text.includes('room') || text.includes('suite') || text.includes('stay') || text.includes('maharaja') || text.includes('deluxe') || text.includes('sleep') || text.includes('accommodation')) {
      return {
        id,
        sender: 'bot',
        text: "I would be honored to host you in our royal accommodations. Here are our premier heritage rooms and suites:",
        itemsCarousel: rooms.slice(0, 3).map(room => ({
          name: room.name,
          price: room.price,
          description: room.description,
          image: room.images[0],
          action: {
            label: `Reserve for ₹${room.price.toLocaleString()}`,
            type: 'book',
            payload: { bookingType: 'Room', item: room }
          }
        }))
      };
    }

    // 2. Dining
    if (text.includes('dining') || text.includes('restaurant') || text.includes('food') || text.includes('table') || text.includes('eat') || text.includes('menu') || text.includes('tea') || text.includes('bar')) {
      return {
        id,
        sender: 'bot',
        text: "Raj Heritage offers exquisite culinary options, from imperial Rajasthani feasts to classic colonial afternoon high tea. Here are our dining venues:",
        itemsCarousel: diningVenues.map(venue => ({
          name: venue.name,
          description: venue.description,
          image: venue.image,
          action: {
            label: "Reserve Table",
            type: 'book',
            payload: { bookingType: 'Dining', item: venue }
          }
        }))
      };
    }

    // 3. Spa / Wellness
    if (text.includes('spa') || text.includes('massage') || text.includes('yoga') || text.includes('meditation') || text.includes('wellness') || text.includes('therapy')) {
      const wellnessSpa = spaActivities.filter(a => a.category === 'Wellness');
      return {
        id,
        sender: 'bot',
        text: "Escape to our tranquil wellness sanctuary. We offer ancient Ayurvedic therapies to align body and spirit:",
        itemsCarousel: wellnessSpa.slice(0, 3).map(spa => ({
          name: spa.name,
          price: spa.price,
          description: spa.description,
          image: spa.image,
          action: {
            label: "Book Therapy",
            type: 'book',
            payload: { bookingType: 'Spa', item: spa }
          }
        }))
      };
    }

    // 4. Activities & Tours
    if (text.includes('activity') || text.includes('activities') || text.includes('tour') || text.includes('walk') || text.includes('car') || text.includes('puppet') || text.includes('workshop')) {
      const activities = spaActivities.filter(a => a.category !== 'Wellness');
      return {
        id,
        sender: 'bot',
        text: "Immerse yourself in Rajasthani folk culture or explore local crafts with our curated leisure activities:",
        itemsCarousel: activities.slice(0, 3).map(act => ({
          name: act.name,
          price: act.price,
          description: act.description,
          image: act.image,
          action: {
            label: "Book Activity",
            type: 'book',
            payload: { bookingType: 'Activity', item: act }
          }
        }))
      };
    }

    // 5. Packages
    if (text.includes('package') || text.includes('offer') || text.includes('deal') || text.includes('holiday') || text.includes('honeymoon') || text.includes('celebration')) {
      return {
        id,
        sender: 'bot',
        text: "Combine luxury lodging with curated cultural experiences through our tailored heritage packages:",
        itemsCarousel: packages.slice(0, 3).map(pkg => ({
          name: pkg.name,
          price: pkg.price,
          description: pkg.description,
          image: pkg.image,
          action: {
            label: "Book Package",
            type: 'book',
            payload: { bookingType: 'Package', item: pkg }
          }
        }))
      };
    }

    // Greetings
    if (text.includes('hello') || text.includes('hi') || text.includes('hey') || text.includes('pranam') || text.includes('namaste')) {
      return {
        id,
        sender: 'bot',
        text: "Namaste! I am at your service. Let me assist you with our rooms, dining options, custom packages, or wellness treatments. What matches your interest?",
        actions: [
          { label: "View Rooms", type: 'link', payload: { path: '/rooms' } },
          { label: "Wellness Spa", type: 'link', payload: { path: '/spa' } },
          { label: "Heritage Packages", type: 'link', payload: { path: '/packages' } }
        ]
      };
    }

    // Default concierges fallback
    return {
      id,
      sender: 'bot',
      text: "I want to make sure your stay is flawless. I can help book suites, reserve a table at Maharaja's Table, schedule an Ayurvedic Abhyanga massage, or arrange a private vintage car tour of Jaipur. How can I help you?",
      actions: [
        { label: "Book Room", type: 'book', payload: { bookingType: 'Room', item: rooms[0] } },
        { label: "Reserve Dining", type: 'link', payload: { path: '/dining' } },
        { label: "Spa Treatments", type: 'link', payload: { path: '/spa' } }
      ]
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage: ChatMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    const query = input;
    setInput('');
    
    setTimeout(() => {
      const response = parseUserQuery(query);
      setMessages(prev => [...prev, response]);
    }, 800);
  };

  const handleQuickActionClick = (action: { label: string, query: string }) => {
    const userMsg: ChatMessage = { id: Date.now(), text: action.label.substring(3), sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    
    setTimeout(() => {
      const response = parseUserQuery(action.query);
      setMessages(prev => [...prev, response]);
    }, 800);
  };

  return (
    <>
      {/* Concierge floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-royal-maroon text-white p-4 rounded-full shadow-2xl hover:bg-royal-maroon/90 hover:shadow-luxury-hover transition-all duration-300 transform hover:scale-110 z-50 group border border-antique-gold/20"
        aria-label="Toggle concierge desk"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <div className="relative">
            <MessageCircle className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-antique-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-antique-gold"></span>
            </span>
          </div>
        )}
      </button>

      {/* Concierge Modal Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] bg-white rounded-3xl shadow-2xl z-50 border border-antique-gold/15 flex flex-col overflow-hidden animate-fade-up">
          
          {/* Concierge Header */}
          <div className="bg-gradient-to-r from-royal-maroon to-royal-maroon/95 p-5 text-white flex items-center justify-between border-b border-antique-gold/25">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-2 rounded-full border border-white/15">
                <Crown className="h-5 w-5 text-antique-gold" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base tracking-wide flex items-center space-x-1">
                  <span>Royal Concierge</span>
                  <Sparkles className="h-3.5 w-3.5 text-antique-gold animate-pulse" />
                </h3>
                <p className="text-[10px] text-white/70 uppercase tracking-wider">Online Concierge Desk</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Concierge Chat History */}
          <div className="flex-1 overflow-y-auto p-5 bg-ivory-sand/20 space-y-4 scrollbar-thin">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {/* Bubble Text */}
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-royal-maroon text-white rounded-tr-none'
                      : 'bg-white border border-palace-beige text-charcoal-ink rounded-tl-none'
                  }`}
                >
                  <p>{message.text}</p>
                </div>

                {/* Inline Action buttons */}
                {message.actions && message.actions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2 max-w-[85%]">
                    {message.actions.map((act, i) => (
                      <button
                        key={i}
                        onClick={() => handleAction(act)}
                        className="text-xs bg-white border border-antique-gold/30 hover:border-antique-gold text-royal-maroon hover:bg-royal-maroon hover:text-white px-3 py-1.5 rounded-full transition-all duration-200 font-medium shadow-sm flex items-center space-x-1"
                      >
                        <span>{act.label}</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Rich Carousel Cards */}
                {message.itemsCarousel && message.itemsCarousel.length > 0 && (
                  <div className="w-full overflow-x-auto flex gap-3 mt-3 py-2 scrollbar-none snap-x snap-mandatory">
                    {message.itemsCarousel.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white border border-palace-beige rounded-xl p-3 min-w-[200px] max-w-[200px] snap-center flex flex-col shadow-md flex-shrink-0"
                      >
                        {item.image && (
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-24 object-cover rounded-lg border border-palace-beige/50 mb-2" 
                          />
                        )}
                        <h4 className="font-serif font-bold text-xs text-royal-maroon truncate">{item.name}</h4>
                        {item.price && (
                          <span className="text-[10px] text-antique-gold font-bold">₹{item.price.toLocaleString()} per night</span>
                        )}
                        <p className="text-[10px] text-charcoal-ink/70 line-clamp-2 mt-1 leading-snug flex-grow">{item.description}</p>
                        
                        <button
                          onClick={() => handleAction(item.action)}
                          className="w-full mt-3 bg-royal-maroon text-white text-[10px] font-bold uppercase tracking-wider py-1.5 rounded-md hover:bg-antique-gold transition-colors duration-300"
                        >
                          {item.action.label.includes('₹') ? 'Book Room' : item.action.label}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick recommendations panel */}
          <div className="px-4 py-2 border-t border-palace-beige/40 bg-white">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickActionClick(action)}
                  className="text-[10px] bg-ivory-sand border border-palace-beige text-charcoal-ink/80 hover:border-antique-gold px-2.5 py-1 rounded-full whitespace-nowrap font-medium transition-colors"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Panel */}
          <div className="p-4 bg-white border-t border-palace-beige/60 flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Concierge (e.g. rooms, dining, massage)..."
              className="flex-1 px-4 py-2.5 bg-ivory-sand/50 border border-palace-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-antique-gold focus:border-transparent text-xs"
            />
            <button
              onClick={handleSend}
              className="bg-royal-maroon text-white p-2.5 rounded-xl hover:bg-royal-maroon/90 shadow-md transition-colors"
              aria-label="Send message"
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