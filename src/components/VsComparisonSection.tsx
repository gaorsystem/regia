import React from 'react';
import { XCircle, CheckCircle2, Clock, DollarSign, ShieldAlert, Heart, Sparkles, ArrowRight } from 'lucide-react';

interface VsComparisonSectionProps {
  onOpenLeadModal: (summary: string) => void;
}

export const VsComparisonSection: React.FC<VsComparisonSectionProps> = ({ onOpenLeadModal }) => {
  const comparisonRows = [
    {
      title: 'Tranquilidad & Gestión',
      yourself: 'Lidiar con 12 a 15 proveedores independientes (Local, Catering, DJ, Luces, Mozos, Limpieza, Bar, Torta).',
      regia: 'Un solo Asesor de Bodas/Eventos que se encarga de TODO el protocolo de inicio a fin.',
      highlight: true
    },
    {
      title: 'Costos & Imprevistos',
      yourself: 'Gastos sorpresa al final (cargo extra por potencia eléctrica, descorche, alquiler de vajilla, horas extras).',
      regia: 'Presupuesto 100% cerrado sin sorpresas ni cobros ocultos. Todo cotizado con claridad.',
      highlight: false
    },
    {
      title: 'Respaldo Eléctrico & Clima',
      yourself: 'Riesgo total de corte de luz, apagones en pleno baile o fallas de sonido sin repuesto.',
      regia: 'Planta Eléctrica de Respaldo propia (100% potencia) con encendido automático en 5 segundos.',
      highlight: true
    },
    {
      title: 'Calidad Gourmet & Coctelería',
      yourself: 'Comida fría por traslados, meseros sin uniformar y bar sin insumos suficientes.',
      regia: 'Cocina gourmet en el propio local, platos servidos calientes en su punto y coctelería ilimitada.',
      highlight: false
    },
    {
      title: 'Tiempo Invertido',
      yourself: 'Más de 120 horas perdidas en reuniones, llamadas de emergencia y cotizaciones contradictorias.',
      regia: 'Solo realizas 2 a 3 degustaciones y pruebas divertidas. ¡El resto es relajarte y disfrutar!',
      highlight: true
    }
  ];

  return (
    <section className="py-20 bg-[#1c1220] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3a1734] border border-[#e2c471]/40 text-[#e2c471] text-xs font-bold uppercase tracking-widest mb-3">
            <Clock className="w-4 h-4" />
            <span>Comparativo de Valor Indiscutible</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f5efe3] leading-tight">
            ¿Por Qué Elegir REGIA Casa de Eventos? <br />
            <span className="text-[#e2c471] italic font-normal">
              Organizarlo por Tu Cuenta vs. Solución Integral
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#e9e0cd]/80 mt-4">
            Comparado contra contratar múltiples proveedores por separado, REGIA te ahorra dinero, evita imprevistos y te asegura una fiesta inolvidable sin dolor de cabeza.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Option A: Organizarlo por separado (The Painful Way) */}
          <div className="bg-[#2a1b24]/60 border border-red-500/20 rounded-xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
                <div>
                  <h3 className="text-xl font-serif font-bold text-red-300">
                    Organizarlo Por Tu Cuenta
                  </h3>
                  <p className="text-xs text-red-200/60">Contratando 12+ proveedores independientes</p>
                </div>
                <XCircle className="w-8 h-8 text-red-400 shrink-0" />
              </div>

              <div className="mt-6 space-y-5 text-xs sm:text-sm text-[#e9e0cd]/70">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400/80 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-red-200 block mb-0.5">{row.title}:</strong>
                      <span>{row.yourself}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded bg-red-950/30 border border-red-500/30 text-center text-xs text-red-300">
              ⚠️ Estrés asegurado, 120+ horas gastadas y alto riesgo de fallas el día de la fiesta.
            </div>
          </div>

          {/* Option B: REGIA Casa de Eventos (The Dream Solution) */}
          <div className="bg-gradient-to-b from-[#3a1734] via-[#2c1328] to-[#1c1220] border-2 border-[#e2c471] rounded-xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xl relative">
            
            {/* VIP Winner Badge */}
            <div className="absolute -top-3 right-6 bg-[#e2c471] text-[#1c1220] font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
              ✨ La Opción Recomendada
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#e2c471]/30">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#f5efe3] flex items-center gap-2">
                    <span>REGIA Casa de Eventos</span>
                    <Sparkles className="w-5 h-5 text-[#e2c471]" />
                  </h3>
                  <p className="text-xs text-[#e2c471]">Servicio Integral "Llave en Mano" Todo Incluido</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-[#e2c471] shrink-0" />
              </div>

              <div className="mt-6 space-y-5 text-xs sm:text-sm text-[#f5efe3]/90">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#e2c471] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#e2c471] block mb-0.5">{row.title}:</strong>
                      <span>{row.regia}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded bg-[#e2c471]/10 border border-[#e2c471]/40 text-center text-xs text-[#e2c471]">
              🎉 Garantía de satisfacción, ahorro promedio de S/ 4,500 y disfrute total para ti y tus invitados.
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center pt-2">
          <button
            onClick={() => onOpenLeadModal('Consulta por Asesoría Integral REGIA Todo Incluido')}
            className="px-8 py-4 bg-gradient-to-r from-[#c9a13a] via-[#e2c471] to-[#c9a13a] text-[#1c1220] text-sm sm:text-base font-bold font-serif rounded-sm shadow-xl hover:brightness-110 transition-all inline-flex items-center gap-3 cursor-pointer"
          >
            <span>Asegurar Mi Evento Sin Estrés en REGIA</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
