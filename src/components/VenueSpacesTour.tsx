import React, { useState } from 'react';
import { VENUE_SPACES } from '../data/eventData';
import { Maximize2, Users, ShieldCheck, Sparkles, Check, ArrowUpRight } from 'lucide-react';

export const VenueSpacesTour: React.FC = () => {
  const [selectedSpace, setSelectedSpace] = useState(VENUE_SPACES[0]);

  return (
    <section id="espacios" className="py-24 bg-[#1c1220] relative border-t border-[#f5efe3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a13a]/15 border border-[#c9a13a]/30 text-[#e2c471] text-xs font-mono-tag uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#e2c471]" />
            <span>Infraestructura de Clase Mundial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f5efe3]">
            Nuestros Espacios Exclusivos
          </h2>
          <p className="mt-4 text-[#e9e0cd]/80 text-base leading-relaxed">
            Más de 1,200 m² diseñados específicamente para eventos de alto impacto. Explora cada ambiente y elige la atmósfera ideal para tus invitados.
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {VENUE_SPACES.map((space) => {
            const isSelected = selectedSpace.id === space.id;
            return (
              <button
                key={space.id}
                onClick={() => setSelectedSpace(space)}
                className={`p-5 text-left rounded-sm border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#3a1734] border-[#e2c471] shadow-2xl scale-[1.02]'
                    : 'bg-[#1c1220]/60 border-[#f5efe3]/15 hover:border-[#e2c471]/50 hover:bg-[#3a1734]/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-tag text-[#e2c471] mb-1">
                    <span>{space.areaSize}</span>
                    <span>{space.capacity}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#f5efe3]">
                    {space.name}
                  </h3>
                </div>
                <p className="text-xs text-[#e9e0cd]/70 mt-2 line-clamp-2">
                  {space.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Space Detail Display */}
        <div className="bg-[#3a1734]/20 border border-[#f5efe3]/15 rounded-sm p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Photo Display (7 cols) */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-sm border border-[#f5efe3]/20 shadow-xl">
            <img
              src={selectedSpace.image}
              alt={selectedSpace.name}
              className="w-full h-80 sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1220] via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="bg-[#1c1220]/90 backdrop-blur-md px-4 py-2 border border-[#f5efe3]/20 text-xs text-[#f5efe3] font-mono-tag rounded-xs">
                {selectedSpace.name} • {selectedSpace.areaSize}
              </div>

              <a
                href="https://wa.me/51999999999?text=Hola%20REGIA%20Eventos%2C%20quisiera%20agendar%20una%20visita%20guiada%20presencial%20para%20conocer%20el%20local."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c9a13a] text-[#1c1220] p-3 rounded-sm font-bold text-xs flex items-center gap-1.5 shadow-lg hover:bg-[#e2c471] transition-colors"
              >
                <span>Agendar Tour Presencial</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono-tag uppercase text-[#e2c471] tracking-widest">
                {selectedSpace.capacity}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#f5efe3] mt-1">
                {selectedSpace.name}
              </h3>
              <p className="text-sm text-[#e9e0cd]/90 mt-3 leading-relaxed">
                {selectedSpace.description}
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono-tag uppercase text-[#e2c471] tracking-widest">
                Equipamiento del Espacio:
              </h4>
              <ul className="space-y-2 text-xs text-[#f5efe3]/90">
                {selectedSpace.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#c9a13a]/20 text-[#e2c471] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal for list */}
            <div className="pt-2 border-t border-[#f5efe3]/10">
              <span className="text-xs font-mono-tag uppercase text-[#e2c471] block mb-2">
                Ideal Para:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedSpace.idealFor.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-[#1c1220] border border-[#f5efe3]/15 text-[11px] text-[#e9e0cd] rounded-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
