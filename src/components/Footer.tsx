import React from 'react';
import { ArrowUp, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1c1220] border-t border-[#f5efe3]/15 pt-16 pb-12 text-xs text-[#e9e0cd]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#f5efe3]/10">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#c9a13a] text-[#1c1220] font-serif font-bold text-lg flex items-center justify-center">
                R
              </div>
              <span className="font-serif font-bold text-xl tracking-widest text-[#f5efe3]">
                REGIA<span className="text-[#c9a13a]">•</span>
              </span>
            </div>
            <p className="text-xs text-[#e9e0cd]/70 leading-relaxed">
              Infraestructura, diseño nupcial, producción de espectáculos y alta gastronomía en un solo lugar.
            </p>
            <div className="text-[11px] text-[#e2c471] font-mono-tag">
              RUC: 20601234567 • Regia Eventos S.A.C.
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#f5efe3] mb-3">
              Tipos de Celebración
            </h4>
            <ul className="space-y-2">
              <li><a href="#tipos" className="hover:text-[#e2c471] transition-colors">Bodas & Nupcias</a></li>
              <li><a href="#tipos" className="hover:text-[#e2c471] transition-colors">Quinceañeros de Ensueño</a></li>
              <li><a href="#tipos" className="hover:text-[#e2c471] transition-colors">Despedidas de Soltera VIP</a></li>
              <li><a href="#tipos" className="hover:text-[#e2c471] transition-colors">Cumpleaños & Aniversarios</a></li>
              <li><a href="#tipos" className="hover:text-[#e2c471] transition-colors">Galas Corporativas</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#f5efe3] mb-3">
              Herramientas Interactivas
            </h4>
            <ul className="space-y-2">
              <li><a href="#contacto" className="hover:text-[#e2c471] transition-colors">Asesoría Personalizada</a></li>
              <li><a href="#espacios" className="hover:text-[#e2c471] transition-colors">Tour de Espacios</a></li>
              <li><a href="#disponibilidad" className="hover:text-[#e2c471] transition-colors">Consulta de Fechas</a></li>
              <li><a href="#paquetes" className="hover:text-[#e2c471] transition-colors">Paquetes Todo Incluido</a></li>
              <li><a href="#faqs" className="hover:text-[#e2c471] transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#f5efe3]">
              Contacto & Visitas
            </h4>
            <p className="text-xs leading-relaxed">
              Av. Primavera 1280, Surco, Lima<br />
              Atención: Lun – Dom (9:00 - 20:00 hs)
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="px-4 py-2 bg-[#3a1734] border border-[#f5efe3]/20 hover:border-[#e2c471] text-[#e2c471] text-xs font-bold rounded-sm transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Volver Arriba</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#e9e0cd]/60">
          <div>
            © 2026 REGIA Casa de Eventos. Todos los derechos reservados.
          </div>
          <div className="flex gap-4">
            <span>Términos y Condiciones</span>
            <span>•</span>
            <span>Política de Privacidad</span>
            <span>•</span>
            <span>Libro de Reclamaciones</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
