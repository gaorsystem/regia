import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenLeadModal: (defaultType?: string) => void;
  onOpenAppointment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLeadModal, onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nuestros Espacios', href: '#espacios' },
    { name: 'Tipos de Evento', href: '#tipos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Disponibilidad', href: '#disponibilidad' },
    { name: 'Paquetes', href: '#paquetes' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1c1220]/95 backdrop-blur-md border-b border-[#f5efe3]/15 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#1c1220]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#c9a13a] to-[#e2c471] flex items-center justify-center text-[#1c1220] font-serif font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
            R
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-2xl tracking-widest text-[#f5efe3] group-hover:text-[#e2c471] transition-colors">
              REGIA<span className="text-[#c9a13a] ml-1">•</span>
            </span>
            <span className="font-mono-tag text-[10px] tracking-widest text-[#e2c471]/80 uppercase -mt-1">
              Casa de Eventos
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#f5efe3]/90">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative hover:text-[#e2c471] transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#e2c471] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenLeadModal('Solicitud de Asesoría Personalizada')}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#e2c471] border border-[#e2c471]/40 hover:border-[#e2c471] rounded-sm hover:bg-[#e2c471]/10 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c9a13a]" />
            <span>Agendar Cita</span>
          </button>

          <a
            href="https://wa.me/51999999999?text=Hola%20REGIA%20Eventos%2C%20quisiera%20solicitar%20asesor%C3%ADa%20personalizada%20para%20un%20evento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold bg-gradient-to-r from-[#c9a13a] to-[#e2c471] hover:from-[#e2c471] hover:to-[#c9a13a] text-[#1c1220] rounded-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Directo</span>
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#f5efe3] hover:text-[#e2c471] focus:outline-none"
          aria-label="Abrir Menú"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1c1220]/98 border-b border-[#f5efe3]/20 px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#f5efe3] hover:text-[#e2c471] transition-colors border-b border-[#f5efe3]/10 pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-3 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal('Solicitud de Asesoría Presencial');
                }}
                className="w-full py-3 text-center text-sm font-bold text-[#e2c471] border border-[#e2c471] rounded-sm bg-[#e2c471]/10 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Agendar Asesoría Presencial</span>
              </button>
              <a
                href="https://wa.me/51999999999?text=Hola%20REGIA%20Eventos%2C%20quisiera%20solicitar%20asesor%C3%ADa%20personalizada%20para%20un%20evento."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-bold text-[#1c1220] bg-gradient-to-r from-[#c9a13a] to-[#e2c471] rounded-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hablar con un Event Planner</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
