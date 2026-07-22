import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, FileText } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  customSummary?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, customSummary }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#1c1220]/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-md w-full bg-[#3a1734] border-2 border-[#e2c471] rounded-sm p-6 sm:p-8 shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 bg-[#1c1220] text-[#f5efe3] rounded-full border border-[#f5efe3]/20 hover:text-[#e2c471] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-[#2c4636] text-[#e2c471] rounded-full flex items-center justify-center mx-auto border border-[#e2c471]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#f5efe3]">
              ¡Dossier Enviado!
            </h3>
            <p className="text-xs text-[#e9e0cd]/90 leading-relaxed">
              Hemos enviado el catálogo interactivo y la propuesta formal a tu WhatsApp y correo.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#1c1220] border border-[#e2c471] text-[#e2c471] text-xs font-bold rounded-sm hover:bg-[#e2c471] hover:text-[#1c1220]"
            >
              Cerrar Ventana
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tag text-[#e2c471] uppercase">
              <FileText className="w-4 h-4" />
              <span>Dossier de Eventos 2026/2027</span>
            </div>

            <h3 className="text-xl font-serif font-bold text-[#f5efe3]">
              Descarga la Guía de Tarifas & Menús
            </h3>

            {customSummary && (
              <div className="p-3 bg-[#1c1220]/80 rounded-sm border border-[#e2c471]/30 text-xs text-[#e2c471] italic">
                {customSummary}
              </div>
            )}

            <p className="text-xs text-[#e9e0cd]/80 leading-relaxed">
              Ingresa tus datos y te enviaremos de inmediato el documento PDF detallado con planos, opciones de vajilla, paquetes de tragos y fotos adicionales.
            </p>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-[11px] font-mono-tag text-[#e2c471] uppercase mb-1">
                  Tu Nombre *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Valeria Mendoza"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1c1220] border border-[#f5efe3]/20 rounded-sm p-2.5 text-xs text-[#f5efe3] focus:border-[#e2c471] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-tag text-[#e2c471] uppercase mb-1">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+51 987 654 321"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#1c1220] border border-[#f5efe3]/20 rounded-sm p-2.5 text-xs text-[#f5efe3] focus:border-[#e2c471] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-tag text-[#e2c471] uppercase mb-1">
                  Correo *
                </label>
                <input
                  type="email"
                  required
                  placeholder="valeria@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1c1220] border border-[#f5efe3]/20 rounded-sm p-2.5 text-xs text-[#f5efe3] focus:border-[#e2c471] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#c9a13a] to-[#e2c471] text-[#1c1220] font-bold text-xs uppercase rounded-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Dossier a Mi WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
