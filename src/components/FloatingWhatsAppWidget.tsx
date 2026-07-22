import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

export const FloatingWhatsAppWidget: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 bg-[#3a1734] border-2 border-[#e2c471] text-[#f5efe3] p-4 rounded-sm shadow-2xl max-w-xs relative animate-bounce-short">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[#f5efe3]/60 hover:text-[#e2c471]"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-mono-tag uppercase text-[#e2c471]">
              Planner en Línea
            </span>
          </div>

          <p className="text-xs font-semibold leading-snug">
            ¿Buscas fecha para tu evento? Cotizamos en 5 minutos por WhatsApp 🥂
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/51999999999?text=Hola%20REGIA%20Eventos%2C%20quisiera%20consultar%20disponibilidad%20y%20precios."
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center cursor-pointer"
        aria-label="Chatear por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#e2c471] rounded-full border-2 border-[#1c1220]" />
      </a>
    </div>
  );
};
