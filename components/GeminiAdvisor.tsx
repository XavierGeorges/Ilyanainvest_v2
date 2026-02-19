import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const GeminiAdvisor: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 bg-white border border-slate-200 hover:border-primary hover:bg-primary text-slate-600 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* WhatsApp Bubble */}
      <a
        href="https://wa.me/212721415548"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group relative"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Notification Dot */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
};