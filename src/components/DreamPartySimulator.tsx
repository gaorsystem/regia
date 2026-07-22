import React, { useState } from 'react';
import { Sparkles, Gift, Check, Flame, ArrowRight, ShieldCheck, Star } from 'lucide-react';

import coldSparksImg from '../assets/images/regia_cold_sparks_1784747000000_1784747152280.jpg';
import cocktailBarImg from '../assets/images/regia_cocktail_bar_1784747000001_1784747168283.jpg';
import heroBallroomImg from '../assets/images/regia_hero_ballroom_1784746564893.jpg';
import gardenTerraceImg from '../assets/images/regia_garden_terrace_1784746595050.jpg';

interface DreamPartySimulatorProps {
  onOpenLeadModal: (summary: string) => void;
}

export const DreamPartySimulator: React.FC<DreamPartySimulatorProps> = ({ onOpenLeadModal }) => {
  const [selectedVibe, setSelectedVibe] = useState<'party' | 'bar' | 'imperial' | 'garden'>('party');
  const [activeEffects, setActiveEffects] = useState<string[]>(['sparks', 'led_floor', 'cocktails']);

  const vibes = [
    {
      id: 'party',
      name: 'Fiesta & Euforia Neón',
      subtitle: 'Pista LED 3D + Chispas Frías + Hora Loca VIP',
      image: coldSparksImg,
      description: 'Fiesta vibrante con luces robotizadas DMX, pantalla LED gigante, DJ profesional y efectos especiales para momentos culminantes.'
    },
    {
      id: 'bar',
      name: 'Barra Libre & Coctelería de Autor',
      subtitle: 'Mixología Ilimitada + Show Bartender',
      image: cocktailBarImg,
      description: 'Bebidas de autor con nitrógeno y fuego, barra de macerados artesanales, gin tonics y cócteles clásicos preparados al instante.'
    },
    {
      id: 'imperial',
      name: 'Gala Imperial Glamour',
      subtitle: 'Arquitectura Barroca + Candelabros Dorados',
      image: heroBallroomImg,
      description: 'Sofisticación máxima con vajilla fina de plata, cristalería importada, mozos de etiqueta y banquete gourmet en 4 tiempos.'
    },
    {
      id: 'garden',
      name: 'Jardín Botánico Romántico',
      subtitle: 'Recepción al Aire Libre + Pérgola Iluminada',
      image: gardenTerraceImg,
      description: 'Recepción mágica entre vegetación natural, iluminación cálida tipo guirnalda y coctelería de bienvenida bajo las estrellas.'
    }
  ];

  const availableEffects = [
    { id: 'sparks', name: '💥 Fuentes de Chispas Frías (4 torres de fuegos)', value: 'S/ 900' },
    { id: 'led_floor', name: '🪩 Pista de Baile LED 3D Estelar Acondicionada', value: 'S/ 1,200' },
    { id: 'cocktails', name: '🍸 Barra Libre Abierta VIP (Pisco, Gin & Rones)', value: 'S/ 1,500' },
    { id: 'donuts', name: '🍩 Pared Gourmet de Postres Fines & Donas', value: 'S/ 600' },
    { id: 'robot', name: '🤖 Show de Robot LED Neón + Disparador CO2', value: 'S/ 800' }
  ];

  const toggleEffect = (id: string) => {
    if (activeEffects.includes(id)) {
      setActiveEffects(activeEffects.filter(e => e !== id));
    } else {
      setActiveEffects([...activeEffects, id]);
    }
  };

  const currentVibeData = vibes.find(v => v.id === selectedVibe) || vibes[0];

  const totalBonusValue = activeEffects.reduce((acc, currId) => {
    const item = availableEffects.find(e => e.id === currId);
    if (!item) return acc;
    const num = parseInt(item.value.replace(/[^0-9]/g, ''), 10);
    return acc + num;
  }, 0);

  const handleClaimBonus = () => {
    const effectNames = activeEffects.map(id => availableEffects.find(e => e.id === id)?.name).join(', ');
    const summary = `SOLICITUD CONFIGURACIÓN VIP REGIA: Estilo [${currentVibeData.name}] con add-ons incluidos [${effectNames}] - Valor estimado bonificado: S/ ${totalBonusValue}`;
    onOpenLeadModal(summary);
  };

  return (
    <section className="py-20 bg-[#1c1220] relative overflow-hidden border-t border-b border-[#e2c471]/20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c9a13a]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3a1734] border border-[#e2c471]/40 text-[#e2c471] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Configurador de Experiencia Personalizada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f5efe3] leading-tight">
            Diseña Tu Evento a Medida <br />
            <span className="text-[#e2c471] italic font-normal">
              & Desbloquea Beneficios Exclusivos
            </span>
          </h2>
          <p className="text-[#e9e0cd]/90 text-sm sm:text-base mt-4">
            Explora las diferentes atmósferas y añade los efectos especiales deseados para personalizar tu propuesta con REGIA Casa de Eventos.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Style & Addon Selectors */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Step 1: Estilo */}
            <div className="bg-[#2a1728]/80 border border-[#e2c471]/30 p-5 rounded-lg shadow-xl">
              <h3 className="text-xs font-mono-tag uppercase tracking-widest text-[#e2c471] mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#e2c471] text-[#1c1220] flex items-center justify-center font-bold text-xs">1</span>
                Selecciona la Atmósfera Principal:
              </h3>

              <div className="grid grid-cols-1 gap-2.5">
                {vibes.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVibe(v.id as unknown as 'party' | 'bar' | 'imperial' | 'garden')}
                    className={`p-3.5 rounded-md text-left transition-all border flex items-center justify-between cursor-pointer ${
                      selectedVibe === v.id
                        ? 'bg-[#3a1734] border-[#e2c471] shadow-lg ring-1 ring-[#e2c471]/50'
                        : 'bg-[#1c1220]/80 border-[#f5efe3]/10 hover:border-[#e2c471]/40'
                    }`}
                  >
                    <div>
                      <div className="font-serif font-bold text-sm text-[#f5efe3] flex items-center gap-2">
                        <span>{v.name}</span>
                        {selectedVibe === v.id && <Check className="w-4 h-4 text-[#e2c471]" />}
                      </div>
                      <div className="text-xs text-[#e2c471] mt-0.5">{v.subtitle}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Complementos WOW */}
            <div className="bg-[#2a1728]/80 border border-[#e2c471]/30 p-5 rounded-lg shadow-xl">
              <h3 className="text-xs font-mono-tag uppercase tracking-widest text-[#e2c471] mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#e2c471] text-[#1c1220] flex items-center justify-center font-bold text-xs">2</span>
                Añade Efectos de Producción Destacados:
              </h3>

              <div className="space-y-2">
                {availableEffects.map((eff) => {
                  const isChecked = activeEffects.includes(eff.id);
                  return (
                    <button
                      key={eff.id}
                      onClick={() => toggleEffect(eff.id)}
                      className={`w-full p-2.5 rounded border text-xs text-left transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? 'bg-[#2c4636] border-[#e2c471] text-[#f5efe3]'
                          : 'bg-[#1c1220] border-[#f5efe3]/10 text-[#e9e0cd]/70 hover:border-[#f5efe3]/30'
                      }`}
                    >
                      <span className="font-semibold">{eff.name}</span>
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        isChecked ? 'bg-[#e2c471] text-[#1c1220]' : 'bg-[#1c1220] text-[#e2c471]'
                      }`}>
                        {isChecked ? 'INCLUIDO' : eff.value}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Visual Stage & Summary Box */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Visual Canvas */}
            <div className="relative rounded-xl overflow-hidden border border-[#e2c471]/50 shadow-2xl bg-[#1c1220]">
              
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={currentVibeData.image}
                  alt={currentVibeData.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1220] via-transparent to-[#1c1220]/40" />

                <div className="absolute top-4 left-4 bg-[#1c1220]/90 border border-[#e2c471] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#e2c471] flex items-center gap-2 backdrop-blur-md">
                  <Flame className="w-4 h-4 text-[#e2c471]" />
                  <span>Configuración: {currentVibeData.name}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-xs text-[#e2c471] font-mono-tag uppercase tracking-wider">
                    Infraestructura & Producción REGIA
                  </p>
                  <p className="text-sm text-[#f5efe3] mt-1 font-serif leading-relaxed">
                    {currentVibeData.description}
                  </p>
                </div>
              </div>

              {/* Unlocked Value Banner */}
              <div className="p-6 bg-gradient-to-r from-[#2c1328] via-[#3a1734] to-[#1c1220] border-t border-[#e2c471]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                <div className="text-center sm:text-left">
                  <div className="text-xs text-[#e2c471] font-bold uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
                    <Gift className="w-4 h-4" />
                    <span>Valor Estimado de Bonificación Incluida:</span>
                  </div>
                  <div className="text-3xl font-serif font-extrabold text-[#f5efe3] mt-0.5">
                    S/ {totalBonusValue.toLocaleString()} <span className="text-xs text-[#e2c471] font-normal">Sugerido</span>
                  </div>
                  <div className="text-[11px] text-[#e9e0cd]/80">
                    *Aplica a reservas confirmadas este mes
                  </div>
                </div>

                <button
                  onClick={handleClaimBonus}
                  className="w-full sm:w-auto px-7 py-4 text-sm font-bold bg-gradient-to-r from-[#c9a13a] via-[#e2c471] to-[#c9a13a] hover:brightness-110 text-[#1c1220] rounded-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer font-serif shrink-0 transform hover:-translate-y-0.5"
                >
                  <Sparkles className="w-4.5 h-4.5" />
                  <span>Solicitar Cotización de este Paquete</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>

            </div>

            {/* Guarantee */}
            <div className="p-4 rounded-lg bg-[#2c4636]/40 border border-[#2c4636] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#e2c471] shrink-0 mt-0.5" />
              <p className="text-xs text-[#e9e0cd]/90 leading-relaxed">
                <strong>Compromiso REGIA de Excelencia:</strong> Todo evento cuenta con asesoría personalizada, personal operativo capacitado, contratos transparentes sin cargos ocultos y grupo electrógeno propio de respaldo.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

