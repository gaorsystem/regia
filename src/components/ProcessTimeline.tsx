import React from 'react';
import { Sparkles, MessageSquarePlus, Compass, Wrench, PartyPopper } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      roman: 'I',
      title: '1. Nos cuentas tu evento',
      desc: 'Formulario o llamada por WhatsApp de 5 minutos: tipo de celebración, fecha tentativa, número estimado de invitados y estilo deseado.',
      icon: <MessageSquarePlus className="w-5 h-5 text-[#e2c471]" />
    },
    {
      roman: 'II',
      title: '2. Diseñamos la propuesta',
      desc: 'Te enviamos la cotización en PDF con distribución del salón, propuesta gastronómica, alternativas de bebidas y renders visuales.',
      icon: <Compass className="w-5 h-5 text-[#e2c471]" />
    },
    {
      roman: 'III',
      title: '3. Visita guiada & Degustación',
      desc: 'Conoce el local en persona, prueba los platos del menú con nuestro Chef y congela tu fecha con solo el 20% de anticipo.',
      icon: <Wrench className="w-5 h-5 text-[#e2c471]" />
    },
    {
      roman: 'IV',
      title: '4. El día del evento: Tú disfrutas',
      desc: 'Nuestro equipo de producción, mozos, DJ y coordinadora ejecutan todo de principio a fin. Tú solo llegas a celebrar.',
      icon: <PartyPopper className="w-5 h-5 text-[#e2c471]" />
    }
  ];

  return (
    <section id="proceso" className="py-24 bg-gradient-to-b from-[#1c1220] via-[#3a1734]/30 to-[#1c1220] relative border-t border-[#f5efe3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a13a]/15 border border-[#c9a13a]/30 text-[#e2c471] text-xs font-mono-tag uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#e2c471]" />
            <span>Paso a Paso Transparente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f5efe3]">
            De la Idea a la Celebración Perfecta
          </h2>
          <p className="mt-4 text-[#e9e0cd]/80 text-base leading-relaxed">
            Eliminamos el estrés de organizar un evento. Un solo punto de contacto para coordinar local, decoración, catering, sonido y seguridad.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#1c1220]/80 border border-[#f5efe3]/15 rounded-sm p-6 relative group hover:border-[#e2c471] transition-all hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-[#f5efe3]/10 pb-3">
                  <span className="font-serif italic font-bold text-3xl text-[#e2c471]">
                    {step.roman}.
                  </span>
                  <div className="p-2 bg-[#3a1734] rounded-full border border-[#f5efe3]/10">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-serif font-bold text-lg text-[#f5efe3] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#e9e0cd]/80 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#f5efe3]/10 text-[10px] font-mono-tag text-[#e2c471] uppercase tracking-wider flex items-center justify-between">
                <span>Paso 0{index + 1}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
