import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Flavors } from './components/Flavors';
import { Gallery } from './components/Gallery';
import { Visit } from './components/Visit';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Flavors />
        <Gallery />
        <Visit />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
