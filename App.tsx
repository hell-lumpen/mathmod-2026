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
      <main 
        className="min-h-screen [background-size:60px_60px] [background-image:linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)]"
      >
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
