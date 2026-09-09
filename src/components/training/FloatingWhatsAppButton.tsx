import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const phone = '2348051780169';
  const text = encodeURIComponent('Hello Mr. Clarity, I would like to learn more about the 3-Day Canva Design Training!');
  const whatsappUrl = `https://wa.me/${phone}?text=${text}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200 text-xs font-semibold animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Need help? Chat with Mr. Clarity</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Circle */}
      <a
        id="floating-whatsapp-chat-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mr. Clarity on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 hover:scale-110 active:scale-95 transition-all cursor-pointer group"
      >
        <MessageCircle className="w-7 h-7 fill-white group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};
