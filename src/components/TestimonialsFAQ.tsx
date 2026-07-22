import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../data/eventData';
import { Sparkles, Star, ChevronDown, ChevronUp, MessageCircle, HelpCircle } from 'lucide-react';

export const TestimonialsFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string>('faq-1');
  const [selectedFaqCat, setSelectedFaqCat] = useState<string>('todos');

  const filteredFaqs = selectedFaqCat === 'todos'
    ? FAQS
    : FAQS.filter((f) => f.category === selectedFaqCat);

  return (
    <section id="testimonios" className="py-24 bg-[#1c1220] relative border-t border-[#f5efe3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Testimonials Block */}
        <div>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a13a]/15 border border-[#c9a13a]/30 text-[#e2c471] text-xs font-mono-tag uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#e2c471]" />
              <span>Experiencias Reales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f5efe3]">
              Lo Que Dicen Quienes Celebraron con Nosotros
            </h2>
            <p className="mt-4 text-[#e9e0cd]/80 text-base leading-relaxed">
              Reseñas y testimonios verificados de novios, padres de quinceañeras y ejecutivos que confiaron su evento a REGIA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#3a1734]/30 border-l-2 border-l-[#c9a13a] border-y border-r border-[#f5efe3]/10 rounded-sm p-7 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex text-[#e2c471] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#e2c471]" />
                    ))}
                  </div>

                  <p className="font-serif italic text-base text-[#f5efe3] leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f5efe3]/10">
                  <div className="font-bold text-sm text-[#f5efe3]">{t.author}</div>
                  <div className="text-xs font-mono-tag text-[#e2c471] mt-0.5">
                    {t.eventType} • {t.date}
                  </div>
                  <div className="text-[11px] text-[#e9e0cd]/60 mt-0.5">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Block */}
        <div id="faqs" className="pt-12 border-t border-[#f5efe3]/10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a13a]/15 border border-[#c9a13a]/30 text-[#e2c471] text-xs font-mono-tag uppercase tracking-widest mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#e2c471]" />
              <span>Resuelve Tus Dudas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f5efe3]">
              Preguntas Frecuentes
            </h2>
            <p className="mt-3 text-[#e9e0cd]/80 text-sm sm:text-base">
              Respuestas claras y transparentes a las dudas más comunes sobre la contratación y logística.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Category Filter Pills */}
            <div className="lg:col-span-4 space-y-2">
              {[
                { id: 'todos', label: 'Todas las preguntas' },
                { id: 'reserva', label: 'Reserva & Contrato' },
                { id: 'catering', label: 'Catering & Bebidas' },
                { id: 'instalaciones', label: 'Instalaciones & Horarios' },
                { id: 'pagos', label: 'Formas de Pago' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFaqCat(cat.id)}
                  className={`w-full text-left p-3.5 rounded-sm border text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                    selectedFaqCat === cat.id
                      ? 'bg-[#c9a13a] text-[#1c1220] border-[#e2c471]'
                      : 'bg-[#3a1734]/30 text-[#f5efe3] border-[#f5efe3]/10 hover:border-[#e2c471]/40'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="font-mono-tag text-[10px]">→</span>
                </button>
              ))}

              <div className="p-5 bg-[#3a1734]/50 border border-[#f5efe3]/10 rounded-sm mt-6 text-xs text-[#e9e0cd]/80 space-y-3">
                <div className="font-serif font-bold text-sm text-[#f5efe3]">
                  ¿Tienes una pregunta específica?
                </div>
                <p>Escríbenos directamente y nuestro equipo te responderá en minutos.</p>
                <a
                  href="https://wa.me/51999999999?text=Hola%20REGIA%20Eventos%2C%20tengo%20una%20consulta%20espec%C3%ADfica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#e2c471] underline decoration-[#c9a13a]"
                >
                  <MessageCircle className="w-4 h-4 text-[#e2c471]" />
                  <span>Preguntar por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Accordion Questions (8 cols) */}
            <div className="lg:col-span-8 space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-[#3a1734]/20 border border-[#f5efe3]/15 rounded-sm overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? '' : faq.id)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif font-bold text-base text-[#f5efe3] hover:text-[#e2c471] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#e2c471] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#f5efe3]/60 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#e9e0cd]/90 leading-relaxed border-t border-[#f5efe3]/10 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
