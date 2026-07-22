import React from 'react';
import { PACKAGE_OPTIONS } from '../data/eventData';
import { Check, Sparkles, Star, MessageCircle } from 'lucide-react';

interface AllInclusivePackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const AllInclusivePackages: React.FC<AllInclusivePackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="paquetes" className="py-24 bg-[#1c1220] relative border-t border-[#f5efe3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a13a]/15 border border-[#c9a13a]/30 text-[#e2c471] text-xs font-mono-tag uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#e2c471]" />
            <span>Paquetes Solución Total</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f5efe3]">
            Paquetes Todo Incluido
          </h2>
          <p className="mt-4 text-[#e9e0cd]/80 text-base leading-relaxed">
            Sin costos ocultos ni sorpresas de último minuto. Elige la cobertura que mejor se ajuste al alcance de tu fiesta.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGE_OPTIONS.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-sm p-7 flex flex-col justify-between transition-all relative ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-[#3a1734] via-[#1c1220] to-[#3a1734]/80 border-2 border-[#e2c471] shadow-2xl scale-[1.03] z-10'
                  : 'bg-[#3a1734]/30 border border-[#f5efe3]/15 hover:border-[#e2c471]/50 shadow-xl'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#c9a13a] to-[#e2c471] text-[#1c1220] font-bold text-[10px] font-mono-tag uppercase px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-[#1c1220]" />
                  <span>EL MÁS ELEGIDO</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono-tag uppercase text-[#e2c471]">
                    {pkg.subtitle}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#f5efe3] mt-1">
                    {pkg.name}
                  </h3>
                  <div className="text-xl font-serif font-bold text-[#e2c471] mt-3">
                    {pkg.priceEstimate}
                  </div>
                </div>

                <div className="space-y-3 border-t border-[#f5efe3]/10 pt-4">
                  <span className="text-[11px] font-mono-tag uppercase text-[#e2c471] block">
                    Qué incluye este paquete:
                  </span>
                  <ul className="space-y-2.5 text-xs text-[#f5efe3]/90">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#c9a13a]/20 text-[#e2c471] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-[#f5efe3]/10 space-y-3">
                <a
                  href={`https://wa.me/51999999999?text=Hola%20REGIA%20Eventos%2C%20quisiera%20solicitar%20cotizaci%C3%B3n%20para%20el%20paquete%3A%20${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-sm text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-[#c9a13a] to-[#e2c471] text-[#1c1220] shadow-lg hover:brightness-105'
                      : 'bg-[#1c1220] text-[#f5efe3] border border-[#f5efe3]/20 hover:border-[#e2c471]'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{pkg.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
