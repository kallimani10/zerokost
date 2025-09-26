import React, { useState } from 'react';
import { MessageCircle, X, Send, Brain } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi! I\'m your learning assistant. How can I help you find the perfect course today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const { t } = useLanguage();

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('course') || lowerMessage.includes('learn')) {
      return 'I can help you find courses in Artificial Intelligence, Web Development, Graphic Design, Marketing, and Data Science. Which area interests you most?';
    } else if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
      return 'Great choice! Our AI courses cover machine learning, neural networks, and deep learning. We have beginner to advanced levels available. Would you like me to show you specific AI courses?';
    } else if (lowerMessage.includes('web') || lowerMessage.includes('development')) {
      return 'Web development is very popular! We offer courses in HTML/CSS, JavaScript, React, Node.js, and full-stack development. What\'s your current experience level?';
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return 'Course prices range from ₹799 to ₹2,499 depending on the complexity and duration. We often have special discounts available. Would you like to know about current offers?';
    } else if (lowerMessage.includes('beginner')) {
      return 'Perfect! We have many beginner-friendly courses with step-by-step guidance. Each course includes practical projects and lifetime access. Which subject would you like to start with?';
    } else {
      return 'I\'m here to help you with course recommendations, pricing, schedules, and learning paths. Feel free to ask me anything about our educational offerings!';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Brain className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 max-h-96 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-full">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{t('chatbotTitle')}</h3>
                <p className="text-blue-100 text-sm">Online now</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-64 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isBot ? 'text-gray-500' : 'text-blue-100'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('chatbotPlaceholder')}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;