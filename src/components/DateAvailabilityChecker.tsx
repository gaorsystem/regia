import React, { useState } from 'react';
import { Calendar as CalendarIcon, Sparkles, CheckCircle2, Clock, MapPin, Wine } from 'lucide-react';

export const DateAvailabilityChecker: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('Agosto 2026');
  const [selectedShift, setSelectedShift] = useState<'noche' | 'tarde'>('noche');
  const [selectedDay, setSelectedDay] = useState<number | null>(15);

  const months = [
    'Agosto 2026',
    'Septiembre 2026',
    'Octubre 2026',
    'Noviembre 2026',
    'Diciembre 2026',
    'Enero 2027'
  ];

  // Simulated calendar days for demo
  const sampleDays = [
    { day: 1, available: true, status: 'Disponible' },
    { day: 7, available: false, status: 'Reservado' },
    { day: 8, available: true, status: 'Disponible' },
    { day: 14, available: false, status: 'Reservado' },
    { day: 15, available: true, status: 'Disponible' },
    { day: 21, available: true, status: 'Disponible' },
    { day: 22, available: false, status: 'Reservado' },
    { day: 28, available: true, status: 'Disponible' },
    { day: 29, available: true, status: 'Disponible' }
  ];

  return (
    <section id="disponibilidad" className="py-24 bg-gradient-to-b from-[#1c1220] via-[#3a1734]/40 to-[#1c1220] relative border-t border-[#f5efe3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a13a]/15 border border-[#c9a13a]/30 text-[#e2c471] text-xs font-mono-tag uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#e2c471]" />
            <span>Calendario Abierto 2026 / 2027</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f5efe3]">
            Consulta Disponibilidad de Fechas
          </h2>
          <p className="mt-4 text-[#e9e0cd]/80 text-base leading-relaxed">
            Verifica el estado de los fines de semana y reserva una visita presencial con degustación de champagne de bienvenida sin costo.
          </p>
        </div>

        {/* Interactive Calendar Card */}
        <div className="bg-[#1c1220] border border-[#f5efe3]/15 rounded-sm p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div>
                <label className="text-xs font-mono-tag text-[#e2c471] uppercase block mb-1">
                  Selecciona el Mes
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="bg-[#3a1734] border border-[#f5efe3]/20 text-[#f5efe3] text-sm rounded-sm p-2.5 focus:outline-none focus:border-[#e2c471]"
                >
                  {months.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2 bg-[#3a1734]/60 p-1 rounded-sm border border-[#f5efe3]/10">
                <button
                  type="button"
                  onClick={() => setSelectedShift('noche')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xs transition-all ${
                    selectedShift === 'noche' ? 'bg-[#c9a13a] text-[#1c1220]' : 'text-[#f5efe3]/70'
                  }`}
                >
                  Turno Noche
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedShift('tarde')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xs transition-all ${
                    selectedShift === 'tarde' ? 'bg-[#c9a13a] text-[#1c1220]' : 'text-[#f5efe3]/70'
                  }`}
                >
                  Turno Día/Tarde
                </button>
              </div>
            </div>

            {/* Simulated Weekend Grid */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono-tag text-[#e2c471] uppercase block">
                Fines de Semana Disponibles para {selectedMonth}:
              </span>

              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                {sampleDays.map((item) => {
                  const isSelected = selectedDay === item.day;
                  return (
                    <button
                      key={item.day}
                      disabled={!item.available}
                      onClick={() => setSelectedDay(item.day)}
                      className={`p-3.5 rounded-sm border text-left transition-all flex flex-col justify-between ${
                        !item.available
                          ? 'bg-[#1c1220]/40 border-[#f5efe3]/5 text-[#f5efe3]/30 cursor-not-allowed line-through'
                          : isSelected
                          ? 'bg-[#c9a13a] text-[#1c1220] border-[#e2c471] shadow-lg scale-105'
                          : 'bg-[#3a1734]/50 border-[#f5efe3]/15 text-[#f5efe3] hover:border-[#e2c471]'
                      }`}
                    >
                      <div className="text-xs font-mono-tag font-bold">
                        Día {item.day}
                      </div>
                      <div
                        className={`text-[10px] font-mono-tag mt-2 ${
                          !item.available
                            ? 'text-red-400'
                            : isSelected
                            ? 'text-[#1c1220] font-bold'
                            : 'text-[#e2c471]'
                        }`}
                      >
                        {item.status}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#e9e0cd]/70 pt-2 border-t border-[#f5efe3]/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c9a13a]" />
                <span>Disponible</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <span>Reservado</span>
              </div>
            </div>
          </div>

          {/* Right Action Box (5 cols) */}
          <div className="lg:col-span-5 bg-[#3a1734] border border-[#e2c471]/40 rounded-sm p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono-tag text-[#e2c471]">
              <Wine className="w-4 h-4" />
              <span>Visita Guiada VIP Incluida</span>
            </div>

            <h3 className="text-xl font-serif font-bold text-[#f5efe3]">
              Agenda Tu Visita Presencial
            </h3>

            <p className="text-xs text-[#e9e0cd]/90 leading-relaxed">
              Reserva 30 minutos para recorrer el Gran Salón Imperial, el Jardín Botánico y disfrutar de una degustación de espumante mientras revisamos tu fecha elegida.
            </p>

            <div className="bg-[#1c1220] p-4 rounded-sm border border-[#f5efe3]/10 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#e2c471]">
                <CalendarIcon className="w-4 h-4" />
                <span>Fecha propuesta: {selectedDay ? `Día ${selectedDay} de ${selectedMonth}` : 'Por definir'}</span>
              </div>
              <div className="flex items-center gap-2 text-[#e2c471]">
                <Clock className="w-4 h-4" />
                <span>Turno: {selectedShift === 'noche' ? 'Noche' : 'Día / Tarde'}</span>
              </div>
            </div>

            <a
              href={`https://wa.me/51999999999?text=Hola%20REGIA%20Eventos%2C%20quisiera%20agendar%20una%20visita%20guiada%20presencial%20para%20la%20fecha%20tentativa%20D%C3%ADa%20${selectedDay}%20de%20${encodeURIComponent(selectedMonth)}%20(${selectedShift}).`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-gradient-to-r from-[#c9a13a] to-[#e2c471] text-[#1c1220] font-bold text-xs rounded-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Confirmar Visita por WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
