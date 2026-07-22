import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EventTypesSection } from './components/EventTypesSection';
import { DreamPartySimulator } from './components/DreamPartySimulator';
import { VenueSpacesTour } from './components/VenueSpacesTour';
import { ProcessTimeline } from './components/ProcessTimeline';
import { AllInclusivePackages } from './components/AllInclusivePackages';
import { VsComparisonSection } from './components/VsComparisonSection';
import { InteractiveGallery } from './components/InteractiveGallery';
import { DateAvailabilityChecker } from './components/DateAvailabilityChecker';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsAppWidget } from './components/FloatingWhatsAppWidget';
import { LeadModal } from './components/LeadModal';
import { Footer } from './components/Footer';
import { EventType } from './types';

export default function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [modalCustomSummary, setModalCustomSummary] = useState<string>('');
  const [, setSelectedEventType] = useState<EventType>('boda');

  const handleOpenLeadModal = (summary?: string) => {
    if (summary) setModalCustomSummary(summary);
    else setModalCustomSummary('');
    setIsLeadModalOpen(true);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1c1220] text-[#f5efe3] selection:bg-[#c9a13a] selection:text-[#1c1220] font-['Manrope',sans-serif]">
      {/* Navigation Header */}
      <Header
        onOpenLeadModal={() => handleOpenLeadModal()}
        onOpenAppointment={handleScrollToContact}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section with Dynamic Party & Joy Slides */}
        <Hero
          onOpenAppointment={handleScrollToContact}
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* Interactive Dream Party Experience Simulator */}
        <DreamPartySimulator
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* Venue Spaces Tour (Nuestros Espacios Exclusivos) */}
        <VenueSpacesTour />

        {/* Event Types Showcase (El Local, Listo Para Cada Ocasión) */}
        <EventTypesSection
          onSelectEventType={(type) => {
            setSelectedEventType(type);
          }}
        />

        {/* REGIA vs Organizarlo por Tu Cuenta Comparison */}
        <VsComparisonSection
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* How It Works Timeline */}
        <ProcessTimeline />

        {/* Interactive Photo Gallery */}
        <InteractiveGallery />

        {/* Real-time Date Availability & Visit Scheduler */}
        <DateAvailabilityChecker />

        {/* All Inclusive Packages (Paquetes Todo Incluido) */}
        <AllInclusivePackages
          onSelectPackage={(pkgName) =>
            handleOpenLeadModal(`Solicitud de asesoría para paquete: ${pkgName}`)
          }
        />

        {/* Reviews, Testimonials & Objections FAQ */}
        <TestimonialsFAQ />

        {/* Contact Form & Direct Actions */}
        <ContactSection />
      </main>

      {/* Floating Sticky WhatsApp Conversion Widget */}
      <FloatingWhatsAppWidget />

      {/* Lead Capture Modal */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        customSummary={modalCustomSummary}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}


