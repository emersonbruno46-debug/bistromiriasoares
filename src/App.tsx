import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Flavors } from './components/Flavors';
import { Tribute } from './components/Tribute';
import { Gallery } from './components/Gallery';
import { Visit } from './components/Visit';
import { Footer } from './components/Footer';
import { MobileBar } from './components/MobileBar';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export const App: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="app" id="inicio">
      <Header />
      <main id="main-content">
        <Hero />
        <Flavors />
        <Tribute />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
};

export default App;
