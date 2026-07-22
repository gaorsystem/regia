import React, { useState } from 'react';
import { EVENT_CATEGORIES } from '../data/eventData';
import { EventType } from '../types';
import { Check, ArrowRight, Sparkles, Heart, Gift, PartyPopper, Briefcase, Glasses, Calendar } from 'lucide-react';

interface EventTypesSectionProps {
  onSelectEventType: (type: EventType) => void;
}

export const EventTypesSection: React.FC<EventTypesSectionProps> = ({ onSelectEventType }) => {
  const [activeTab, setActiveTab] = useState<EventType>('boda');

  const activeCategory = EVENT_CATEGORIES.find((c) => c.id === activeTab) || EVENT_CATEGORIES[0];

  const getIconForCategory = (id: EventType) => {
    switch (id) {
      case 'boda':
        return <Heart className="w-4 h-4" />;
      case 'quinceanero':
        return <Sparkles className="w-4 h-4" />;
      case 'despedida':
        return <PartyPopper className="w-4 h-4" />;
      case 'cumpleanos':
        return <Gift className="w-4 h-4" />;
      case 'aniversario':
        return <Glasses className="w-4 h-4" />;
      case 'corporativo':
        return <Briefcase className="w-4 h-4" />;
    }
  };

  return (
    <section id="tipos" className="py-24 bg-[#1c1220] relative border-t border-[#f5efe3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a13a]/15 border border-[#c9a13a]/30 text-[#e2c471] text-xs font-mono-tag uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#e2c471]" />
            <span>Versatilidad de Espacio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f5efe3]">
            El Local, Listo Para Cada Ocasión
          </h2>
          <p className="mt-4 text-[#e9e0cd]/80 text-base leading-relaxed">
            Nuestros arquitectos y diseñadores de eventos transforman la iluminación, distribución y mobiliario de REGIA para adaptarse al concepto exacto de tu celebración.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-[#f5efe3]/15 mb-10">
          {EVENT_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-3 text-xs sm:text-sm font-bold rounded-sm border whitespace-nowrap transition-all flex items-center gap-2.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#c9a13a] text-[#1c1220] border-[#e2c471] shadow-lg scale-105'
                    : 'bg-[#3a1734]/40 text-[#f5efe3]/80 border-[#f5efe3]/10 hover:border-[#e2c471]/50 hover:text-[#f5efe3]'
                }`}
              >
                {getIconForCategory(cat.id)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Feature Card */}
        <div className="bg-gradient-to-r from-[#3a1734]/80 via-[#1c1220] to-[#2c4636]/60 border border-[#f5efe3]/15 rounded-sm p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono-tag uppercase tracking-widest px-3 py-1 bg-[#c9a13a]/20 border border-[#c9a13a]/40 text-[#e2c471] rounded-xs">
                {activeCategory.tag}
              </span>
              <span className="text-xs text-[#e9e0cd]/70 font-mono-tag">
                Recomendado: {activeCategory.recommendedGuests}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#f5efe3]">
              {activeCategory.title}
            </h3>

            <p className="text-base text-[#e9e0cd]/90 leading-relaxed">
              {activeCategory.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono-tag uppercase tracking-widest text-[#e2c471]">
                Servicios Clave Incluidos:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#f5efe3]/90">
                {activeCategory.includedItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#c9a13a]/20 text-[#e2c471] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                onClick={() => {
                  onSelectEventType(activeCategory.id);
                  const el = document.getElementById('cotizador');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-gradient-to-r from-[#c9a13a] to-[#e2c471] text-[#1c1220] font-bold text-sm rounded-sm hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Cotizar {activeCategory.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/51999999999?text=Hola%20REGIA%20Eventos%2C%20quisiera%20cotizar%20espec%C3%ADficamente%20un(a)%20${encodeURIComponent(activeCategory.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-[#1c1220] border border-[#f5efe3]/20 hover:border-[#e2c471] text-[#f5efe3] font-bold text-xs rounded-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Visual Highlight Box */}
          <div className="lg:col-span-5 bg-[#1c1220]/90 border border-[#f5efe3]/10 p-6 rounded-sm space-y-4">
            <div className="text-xs font-mono-tag uppercase text-[#e2c471]">
              Popular para esta categoría:
            </div>
            <div className="text-lg font-serif font-bold text-[#f5efe3]">
              {activeCategory.popularAddon}
            </div>
            <div className="text-xs text-[#e9e0cd]/80 leading-relaxed border-t border-[#f5efe3]/10 pt-3">
              Combina tu evento con nuestra experiencia estrella para asegurar una noche vibrante y llena de elegancia.
            </div>

            <div className="p-4 bg-[#3a1734]/50 rounded-sm border border-[#c9a13a]/30 text-xs text-[#e2c471] flex items-center gap-3">
              <Calendar className="w-5 h-5 shrink-0" />
              <span>
                Recomendamos agendar la fecha con al menos 45 a 90 días de anticipación.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
