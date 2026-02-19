import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { Services } from './components/Services';
import { Roadmap } from './components/Roadmap';
import { Partners } from './components/Partners';
import { DueDiligence } from './components/DueDiligence';
import { BuyersAdvantage } from './components/BuyersAdvantage';
import { ExpertEcosystem } from './components/ExpertEcosystem';
import { TransmissionNote } from './components/TransmissionNote';
import { Concierge } from './components/Concierge';
import { TransitionSection } from './components/TransitionSection';
import { NetworkTransitionSection } from './components/NetworkTransitionSection';
import { Destinations } from './components/Destinations';
import { Footer } from './components/Footer';
import { GeminiAdvisor } from './components/GeminiAdvisor';
import { Legal } from './components/Legal';
import { Privacy } from './components/Privacy';
import { ServiceDetail } from './components/ServiceDetail';
import { DestinationDetail } from './components/DestinationDetail';
import { PromoterLP } from './components/PromoterLP';
import { PageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'legal':
        return <Legal />;
      case 'privacy':
        return <Privacy />;
      case 'service-acquisition':
        return <ServiceDetail type="acquisition" onNavigate={setCurrentPage} />;
      case 'service-build':
        return <ServiceDetail type="build" onNavigate={setCurrentPage} />;
      case 'service-management':
        return <ServiceDetail type="management" onNavigate={setCurrentPage} />;
      case 'destination-casablanca':
        return <DestinationDetail city="casablanca" onNavigate={setCurrentPage} />;
      case 'destination-marrakech':
        return <DestinationDetail city="marrakech" onNavigate={setCurrentPage} />;
      case 'destination-essaouira':
        return <DestinationDetail city="essaouira" onNavigate={setCurrentPage} />;
      case 'promoter-lp':
        return <PromoterLP onNavigate={setCurrentPage} />;
      case 'home':
      default:
        return (
          <main>
            <Hero />
            <InfiniteMarquee />
            <Destinations onNavigate={setCurrentPage} />
            <Services onNavigate={setCurrentPage} />
            <Roadmap />
            <Partners onNavigate={setCurrentPage} />
            <DueDiligence />
            <BuyersAdvantage />
            <NetworkTransitionSection />
            <ExpertEcosystem />
            <TransmissionNote />
            <Concierge />
            <TransitionSection />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background-light overflow-x-hidden flex flex-col justify-between">
      <Header onNavigate={setCurrentPage} />
      {renderContent()}
      <Footer onNavigate={setCurrentPage} />
      <GeminiAdvisor />
    </div>
  );
}

export default App;