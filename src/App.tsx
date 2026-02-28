import { useEffect } from 'react';
import { GlobalSettingsProvider } from './context/GlobalSettingsContext';
import './styles/global.css';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

import { EntryEnvelope } from './components/EntryEnvelope';
import { FloatingControls } from './components/FloatingControls';
import { Hero } from './components/Hero';
import { InfoCard } from './components/InfoCard';
import { Itinerary } from './components/Itinerary';
import { ConfirmSection } from './components/RSVPModal';
import { GiftsSection, Footer } from './components/GiftsAndFooter';
import { useGlobalSettings } from './context/GlobalSettingsContext';

function AppContent() {
  const { settings: { isEnvelopeOpen }, setEnvelopeOpen } = useGlobalSettings();

  useEffect(() => {
    // Re-initialize AOS when the envelope is opened and content is revealed
    if (isEnvelopeOpen) {
      setTimeout(() => {
        AOS.init({
          duration: 600,
          once: false,
          offset: 100,
        });
      }, 500);
    }
  }, [isEnvelopeOpen]);

  return (
    <div className="min-h-screen w-full md:max-w-md md:mx-auto relative bg-white shadow-2xl overflow-hidden">
      {!isEnvelopeOpen && <EntryEnvelope onOpen={() => setEnvelopeOpen(true)} />}

      {isEnvelopeOpen && (
        <main className="animate-in fade-in duration-1000">
          <Hero
            names="Nuria & Juan"
            date="14. 09. 25"
            location="Palma de Mallorca"
          />

          <div className="bg-white py-16">
            <InfoCard
              title="Ceremonia"
              imageSrc="/assets/downloads/place1.jpg"
              locationName="CATEDRAL DE PALMA"
              addressLines={["Plaça de la Seu, Centro", "07001 Palma"]}
              time="18:00 h"
              mapUrl="https://maps.google.com/?q=Catedral+de+Palma"
            />

            <div className="flex justify-center my-16 opacity-50">
              <img src="/assets/downloads/flower2.png" alt="" className="w-16" />
            </div>

            <InfoCard
              title="Celebración"
              imageSrc="/assets/downloads/place2.jpg"
              locationName="RESTAURANTE S'OLIVARET"
              addressLines={["Carretera Alaró-Orient, KM 3,", "07340 Alaró"]}
              time="19:30 h"
              mapUrl="https://maps.google.com/?q=Restaurante+S+Olivaret"
            />
          </div>

          <Itinerary />
          <ConfirmSection />
          <GiftsSection />
          <Footer />
        </main>
      )}

      {isEnvelopeOpen && <FloatingControls />}
    </div>
  );
}

function App() {
  return (
    <GlobalSettingsProvider>
      <AppContent />
    </GlobalSettingsProvider>
  );
}

export default App;
