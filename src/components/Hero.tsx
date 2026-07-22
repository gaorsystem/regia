import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Award, Users, CalendarDays, Star, Heart, Music, GlassWater, Clock, ChevronRight, Play } from 'lucide-react';
import heroBallroomImg from '../assets/images/regia_hero_ballroom_1784746564893.jpg';
import weddingHallImg from '../assets/images/regia_wedding_hall_1784746580931.jpg';
import partyJoyImg from '../assets/images/regia_party_joy_1784746951411.jpg';
import unionToastImg from '../assets/images/regia_union_toast_1784746967357.jpg';
import gardenTerraceImg from '../assets/images/regia_garden_terrace_1784746595050.jpg';

interface HeroProps {
  onOpenAppointment: () => void;
  onOpenLeadModal: (summary?: string) => void;
}

interface SlideItem {
  id: string;
  title: string;
  tagline: string;
  image: string;
  emotion: string;
  icon: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onOpenLeadModal }) => {
  const heroSlides: SlideItem[] = [
    {
      id: 'party',
      title: 'Fiesta & Diversión Total',
      tagline: 'Pista de baile illuminada, DJ en vivo y momentos de euforia pura',
      image: partyJoyImg,
      emotion: '🎉 ¡Energía, Música & Alegría Sin Límites!',
      icon: <Music className="w-4 h-4 text-[#e2c471]" />
    },
    {
      id: 'union',
      title: 'Unión & Brindis de Familia',
      tagline: 'Abrazos sinceros, emociones a flor de piel y copas en alto con tus seres queridos',
      image: unionToastImg,
      emotion: '🥂 ¡Conectando Familias & Amigos para Siempre!',
      icon: <Heart className="w-4 h-4 text-[#e2c471]" />
    },
    {
      id: 'ballroom',
      title: 'Salón Imperial de Gala',
      tagline: 'Elegancia arquitectónica, candelabros dorados y ambientación de alta gama',
      image: heroBallroomImg,
      emotion: '✨ ¡Lujo & Distinción Que Enamora!',
      icon: <Award className="w-4 h-4 text-[#e2c471]" />
    },
    {
      id: 'garden',
      title: 'Jardín Botánico Nocturno',
      tagline: 'Luces cálidas, pérgola romántica y aire libre bajo las estrellas',
      image: gardenTerraceImg,
      emotion: '🌙 ¡Atmósfera Mágica e Inolvidable!',
      icon: <GlassWater className="w-4 h-4 text-[#e2c471]" />
    }
  ];

  const phrases = [
    'tu boda nupcial inolvidable',
    'tu fiesta de quinceañero estelar',
    'tu gran gala de graduación',
    'tu fiesta de aniversario o 50 años',
    'tu evento corporativo o fiesta de fin de año'
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  // Auto slide image background
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  // Dynamic phrase rotation
  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setFadeState(true);
      }, 250);
    }, 2800);
    return () => clearInterval(phraseInterval);
  }, [phrases.length]);

  const currentSlide = heroSlides[activeSlideIndex];

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden bg-[#1c1220]">
      {/* Dynamic Background Image Carousel Layer */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === activeSlideIndex ? 'opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-[10000ms] ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layer Gradient Overlays for perfect legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1220] via-[#1c1220]/85 to-[#1c1220]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1220] via-transparent to-[#1c1220]/70" />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        
        {/* Top Urgency & High-Conversion Sales Banner */}
        <div className="mb-8 inline-flex flex-wrap items-center gap-3 px-4 py-2 rounded-full bg-[#c9a13a]/20 border border-[#c9a13a]/60 backdrop-blur-md text-[#e2c471] text-xs sm:text-sm font-semibold shadow-lg animate-pulse">
          <span className="flex items-center gap-1.5 bg-[#e2c471] text-[#1c1220] px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
            🔥 Promoción Limitada
          </span>
          <span>¡Congela tus precios 2026/2027 reservando este mes con solo 20%!</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Main Hero Copy - High Sales Persuasion */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Dynamic Emotion Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#3a1734]/90 border border-[#e2c471]/40 text-[#f5efe3] text-xs font-semibold">
              {currentSlide.icon}
              <span className="text-[#e2c471] font-mono-tag">{currentSlide.emotion}</span>
            </div>

            {/* Dynamic Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#f5efe3] leading-[1.08] tracking-tight">
              Vive la fiesta de tu vida, <br className="hidden sm:inline" />
              llena de alegría, unión y <br className="hidden sm:inline" />
              <span className="relative inline-block text-[#e2c471] italic font-normal">
                <span
                  className={`transition-opacity duration-300 ${
                    fadeState ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {phrases[phraseIndex]}
                </span>
              </span>
            </h1>

            {/* Sales Narrative Subtitle */}
            <p className="text-base sm:text-lg text-[#e9e0cd]/95 max-w-2xl leading-relaxed">
              En <strong className="text-[#e2c471] font-semibold">REGIA Casa de Eventos</strong> transformamos tus sueños en celebraciones inolvidables. Te entregamos un local exclusivo con jardín botánico, banquetaría gourmet, iluminación de discoteca, barra libre VIP y producción integral. <em className="text-[#f5efe3] not-italic underline decoration-[#c9a13a]/60">Sin estrés, sin sorpresas y 100% garantizado.</em>
            </p>

            {/* Trust Guarantee Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#f5efe3]/90 pt-1">
              <div className="flex items-center gap-2.5 bg-[#1c1220]/60 p-2 rounded border border-[#f5efe3]/10">
                <CheckCircle2 className="w-4 h-4 text-[#e2c471] shrink-0" />
                <span><strong>Salón Acondicionado + Jardín Botánico</strong></span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#1c1220]/60 p-2 rounded border border-[#f5efe3]/10">
                <CheckCircle2 className="w-4 h-4 text-[#e2c471] shrink-0" />
                <span><strong>Catering Gourmet & Bar Abierto VIP</strong></span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#1c1220]/60 p-2 rounded border border-[#f5efe3]/10">
                <CheckCircle2 className="w-4 h-4 text-[#e2c471] shrink-0" />
                <span><strong>Planta Eléctrica de Respaldo 100%</strong></span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#1c1220]/60 p-2 rounded border border-[#f5efe3]/10">
                <CheckCircle2 className="w-4 h-4 text-[#e2c471] shrink-0" />
                <span><strong>Coordinador de Evento & Seguridad Privada</strong></span>
              </div>
            </div>

            {/* High Impact Primary Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/51999999999?text=Hola%20REGIA%20Eventos%2C%20vi%20sus%20fotos%20de%20fiesta%20y%20alegr%C3%ADa.%20Quisiera%20cotizar%20mi%20evento%20y%20consultar%20fechas."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-base font-bold bg-gradient-to-r from-[#c9a13a] via-[#e2c471] to-[#c9a13a] hover:brightness-110 text-[#1c1220] rounded-sm shadow-2xl transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5 cursor-pointer font-serif"
              >
                <span>¡Cotizar Mi Evento por WhatsApp!</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={() => onOpenLeadModal('Solicitud de Visita Guiada con Brindis')}
                className="px-6 py-4 text-sm font-bold text-[#f5efe3] bg-[#3a1734]/80 border border-[#e2c471]/60 hover:bg-[#3a1734] hover:border-[#e2c471] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-[#e2c471]" />
                <span>Agendar Visita + Brindis Gratis</span>
              </button>
            </div>

            {/* Social Proof Rating */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#e9e0cd]/90 border-t border-[#f5efe3]/15">
              <div className="flex items-center gap-1 text-[#e2c471]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#e2c471] text-[#e2c471]" />
                ))}
              </div>
              <div>
                <strong className="text-[#f5efe3] font-bold">4.9/5 Estrellas</strong> en más de <strong className="text-[#e2c471]">350 eventos reales</strong> realizados con éxito.
              </div>
            </div>

          </div>

          {/* Right Visual Interactive Showcase - Real Moments Slider Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Live Interactive Featured Experience Card */}
            <div className="relative rounded-lg overflow-hidden border border-[#e2c471]/40 bg-[#1c1220]/90 shadow-2xl p-1 group">
              
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1220] via-transparent to-transparent opacity-90" />
                
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 bg-[#1c1220]/90 border border-[#e2c471]/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#e2c471] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>REGIA Moments</span>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h3 className="text-xl font-serif font-bold text-[#f5efe3] leading-tight">
                    {currentSlide.title}
                  </h3>
                  <p className="text-xs text-[#e9e0cd]/90 mt-1 line-clamp-2">
                    {currentSlide.tagline}
                  </p>
                </div>
              </div>

              {/* Slider Controls / Thumbnails */}
              <div className="p-3 bg-[#1c1220] flex items-center justify-between gap-2 border-t border-[#f5efe3]/10">
                <div className="flex items-center gap-1.5">
                  {heroSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === activeSlideIndex
                          ? 'w-7 bg-[#e2c471]'
                          : 'w-2 bg-[#f5efe3]/30 hover:bg-[#f5efe3]/60'
                      }`}
                      title={slide.title}
                    />
                  ))}
                </div>
                <button
                  onClick={() => onOpenLeadModal('Solicitud de Visita Guiada Personalizada')}
                  className="text-xs font-bold text-[#e2c471] hover:text-[#f5efe3] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Agendar Visita Personalizada</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Quick Stats Grid under image */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#3a1734]/70 border border-[#e2c471]/30 p-2.5 rounded-sm">
                <div className="text-lg font-serif font-bold text-[#e2c471]">350 pax</div>
                <div className="text-[10px] text-[#e9e0cd]/80 uppercase tracking-wider">Capacidad Max</div>
              </div>
              <div className="bg-[#2c4636]/70 border border-[#e2c471]/30 p-2.5 rounded-sm">
                <div className="text-lg font-serif font-bold text-[#e2c471]">100%</div>
                <div className="text-[10px] text-[#e9e0cd]/80 uppercase tracking-wider">Todo Incluido</div>
              </div>
              <div className="bg-[#3a1734]/70 border border-[#e2c471]/30 p-2.5 rounded-sm">
                <div className="text-lg font-serif font-bold text-[#e2c471]">5 Estrellas</div>
                <div className="text-[10px] text-[#e9e0cd]/80 uppercase tracking-wider">Calidad Premium</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

