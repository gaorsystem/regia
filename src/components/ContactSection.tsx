import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Boda',
    guestCount: '100',
    eventDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-[#1c1220] via-[#3a1734] to-[#1c1220] relative border-t border-[#f5efe3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="bg-[#1c1220] border-2 border-[#e2c471]/40 rounded-sm p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a13a]/15 border border-[#c9a13a]/30 text-[#e2c471] text-xs font-mono-tag uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#e2c471]" />
                <span>Contacto Directo</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f5efe3]">
                Hablemos de Tu Celebración
              </h2>
              <p className="mt-3 text-sm text-[#e9e0cd]/80 leading-relaxed">
                Nuestros Event Planners atienden de Lunes a Domingo de 9:00 am a 8:00 pm. Agenda tu llamada o visita guiada.
              </p>
            </div>

            {/* Direct Contact List */}
            <div className="space-y-4 text-sm text-[#f5efe3]">
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 bg-[#3a1734]/40 rounded-sm border border-[#f5efe3]/10 hover:border-[#e2c471] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#c9a13a]/20 border border-[#c9a13a]/40 flex items-center justify-center text-[#e2c471]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tag text-[#e2c471] uppercase">WhatsApp Atención Inmediata</div>
                  <div className="font-bold">+51 999 999 999</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 bg-[#3a1734]/40 rounded-sm border border-[#f5efe3]/10">
                <div className="w-10 h-10 rounded-full bg-[#c9a13a]/20 border border-[#c9a13a]/40 flex items-center justify-center text-[#e2c471]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tag text-[#e2c471] uppercase">Correo Electrónico</div>
                  <div className="font-bold">hola@regiaeventos.pe</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-[#3a1734]/40 rounded-sm border border-[#f5efe3]/10">
                <div className="w-10 h-10 rounded-full bg-[#c9a13a]/20 border border-[#c9a13a]/40 flex items-center justify-center text-[#e2c471]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tag text-[#e2c471] uppercase">Ubicación del Local</div>
                  <div className="font-bold">Av. Primavera 1280, Santiago de Surco, Lima</div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs font-mono-tag uppercase text-[#e2c471] block mb-3">
                Síguenos en Redes Sociales:
              </span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-sm bg-[#3a1734] border border-[#f5efe3]/20 flex items-center justify-center text-xs font-bold text-[#f5efe3] hover:border-[#e2c471] hover:text-[#e2c471] transition-colors"
                >
                  IG
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-sm bg-[#3a1734] border border-[#f5efe3]/20 flex items-center justify-center text-xs font-bold text-[#f5efe3] hover:border-[#e2c471] hover:text-[#e2c471] transition-colors"
                >
                  FB
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-sm bg-[#3a1734] border border-[#f5efe3]/20 flex items-center justify-center text-xs font-bold text-[#f5efe3] hover:border-[#e2c471] hover:text-[#e2c471] transition-colors"
                >
                  TT
                </a>
              </div>
            </div>

          </div>

          {/* Right Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#3a1734]/30 border border-[#f5efe3]/15 rounded-sm p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#2c4636] text-[#e2c471] rounded-full flex items-center justify-center mx-auto border border-[#e2c471]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#f5efe3]">
                  ¡Solicitud Recibida con Éxito!
                </h3>
                <p className="text-xs sm:text-sm text-[#e9e0cd]/90 max-w-md mx-auto leading-relaxed">
                  Gracias <strong className="text-[#e2c471]">{formData.name}</strong>. Un Event Planner dedicado se comunicará contigo vía WhatsApp en un plazo de 15 minutos con la propuesta y dossier de REGIA.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#1c1220] border border-[#e2c471] text-[#e2c471] text-xs font-bold rounded-sm hover:bg-[#e2c471] hover:text-[#1c1220] transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#f5efe3]/10 pb-3 mb-4">
                  <h3 className="text-xl font-serif font-bold text-[#f5efe3]">
                    Solicita una Cotización Formal por Escrito
                  </h3>
                  <p className="text-xs text-[#e9e0cd]/70">
                    Completa tus datos y te enviaremos la propuesta en PDF a tu correo y WhatsApp.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tag text-[#e2c471] uppercase mb-1">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. María Elena Torres"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1c1220] border border-[#f5efe3]/20 rounded-sm p-3 text-xs text-[#f5efe3] focus:border-[#e2c471] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tag text-[#e2c471] uppercase mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+51 987 654 321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1c1220] border border-[#f5efe3]/20 rounded-sm p-3 text-xs text-[#f5efe3] focus:border-[#e2c471] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tag text-[#e2c471] uppercase mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tu@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1c1220] border border-[#f5efe3]/20 rounded-sm p-3 text-xs text-[#f5efe3] focus:border-[#e2c471] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tag text-[#e2c471] uppercase mb-1">
                      Tipo de Evento
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#1c1220] border border-[#f5efe3]/20 rounded-sm p-3 text-xs text-[#f5efe3] focus:border-[#e2c471] focus:outline-none"
                    >
                      <option value="Boda">Boda Nupcial</option>
                      <option value="Quinceañero">Quinceañero</option>
                      <option value="Despedida">Despedida de Soltera/o</option>
                      <option value="Cumpleaños">Cumpleaños / Aniversario</option>
                      <option value="Corporativo">Evento Corporativo</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tag text-[#e2c471] uppercase mb-1">
                      Nº Estimado de Invitados
                    </label>
                    <input
                      type="number"
                      placeholder="Ej. 120"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full bg-[#1c1220] border border-[#f5efe3]/20 rounded-sm p-3 text-xs text-[#f5efe3] focus:border-[#e2c471] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tag text-[#e2c471] uppercase mb-1">
                      Fecha Tentativa
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-[#1c1220] border border-[#f5efe3]/20 rounded-sm p-3 text-xs text-[#f5efe3] focus:border-[#e2c471] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-tag text-[#e2c471] uppercase mb-1">
                    Comentarios o Requerimientos Especiales
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos si deseas orquesta, hora loca temática, catering específico..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1c1220] border border-[#f5efe3]/20 rounded-sm p-3 text-xs text-[#f5efe3] focus:border-[#e2c471] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#c9a13a] to-[#e2c471] text-[#1c1220] font-bold text-xs uppercase tracking-wider rounded-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar y Recibir Propuesta en PDF</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
