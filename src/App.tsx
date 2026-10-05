import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Flavors } from './components/Flavors';
import { Tribute } from './components/Tribute';
import { Gallery } from './components/Gallery';
import { Visit } from './components/Visit';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main id="main-content">
        <Hero />
        <Flavors />
        <Tribute />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </div>
  );
};

export default App;
