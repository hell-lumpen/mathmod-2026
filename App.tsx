import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Cases } from './components/Cases';
import { Partners } from './components/Partners';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Cases />
        <Partners />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
