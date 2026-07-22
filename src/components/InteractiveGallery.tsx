import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/eventData';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { GalleryItem } from '../types';

export const InteractiveGallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('todos');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="galeria" className="py-24 bg-[#1c1220] relative border-t border-[#f5efe3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a13a]/15 border border-[#c9a13a]/30 text-[#e2c471] text-xs font-mono-tag uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#e2c471]" />
            <span>Galería Fotográfica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f5efe3]">
            El Local, Listo Para Cada Ocasión
          </h2>
          <p className="mt-4 text-[#e9e0cd]/80 text-base leading-relaxed">
            Fotografía real de eventos recientes realizados en REGIA Casa de Eventos. Observa la iluminación, la amplitud y los acabados de nuestros salones.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-[#f5efe3]/15 pb-4">
          {[
            { id: 'todos', label: 'Todos' },
            { id: 'salon', label: 'Salón Imperial' },
            { id: 'jardin', label: 'Jardín Botánico' },
            { id: 'catering', label: 'Catering & Mesas' },
            { id: 'luces', label: 'Luces & Show' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 text-xs font-bold rounded-xs border transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#c9a13a] text-[#1c1220] border-[#e2c471]'
                  : 'bg-[#3a1734]/30 text-[#e9e0cd]/80 border-[#f5efe3]/10 hover:border-[#e2c471]/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative group overflow-hidden rounded-sm border border-[#f5efe3]/15 bg-[#3a1734]/30 cursor-pointer aspect-4/3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1220] via-[#1c1220]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-[10px] font-mono-tag uppercase text-[#e2c471] tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif font-bold text-base text-[#f5efe3] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#e9e0cd]/80 line-clamp-1 mt-1 font-light">
                  {item.caption}
                </p>
              </div>

              <div className="absolute top-3 right-3 p-2 bg-[#1c1220]/80 rounded-full border border-[#f5efe3]/20 text-[#e2c471] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-[#1c1220]/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-[#3a1734] border border-[#e2c471] rounded-sm overflow-hidden shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#1c1220] text-[#f5efe3] rounded-full border border-[#f5efe3]/20 hover:text-[#e2c471]"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-contain bg-[#1c1220]"
              referrerPolicy="no-referrer"
            />

            <div className="p-6 bg-[#1c1220]">
              <span className="text-xs font-mono-tag uppercase text-[#e2c471] block mb-1">
                REGIA • {selectedImage.category}
              </span>
              <h3 className="text-xl font-serif font-bold text-[#f5efe3]">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-[#e9e0cd]/80 mt-2">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
