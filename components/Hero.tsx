import React from 'react';
import { CalendarIcon, MapPinIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center pt-24 pb-16 md:pt-20 md:pb-12 overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')]">
      
      {/* Floating scattered photos (simulating past years media) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden lg:block">
        <img src="https://picsum.photos/seed/hack1/400/300" className="absolute top-32 left-10 w-64 h-48 object-cover border-4 border-black shadow-neo -rotate-6 animate-float" alt="Past event 1" />
        <img src="https://picsum.photos/seed/hack2/400/300" className="absolute bottom-40 right-10 w-72 h-56 object-cover border-4 border-black shadow-neo rotate-3 animate-float-delayed" alt="Past event 2" />
        <img src="https://picsum.photos/seed/hack3/300/400" className="absolute top-40 right-20 w-48 h-64 object-cover border-4 border-black shadow-neo rotate-12 animate-float" alt="Past event 3" />
        <img src="https://picsum.photos/seed/hack4/400/300" className="absolute bottom-20 left-20 w-64 h-48 object-cover border-4 border-black shadow-neo -rotate-3 animate-float-delayed" alt="Past event 4" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex-1 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
          
          <div className="inline-block animate-bounce mt-4 md:mt-0">
            <div className="font-display font-black uppercase text-base sm:text-xl md:text-2xl px-4 py-2 bg-brand-pink border-4 border-black shadow-neo -rotate-2 inline-block">
              Набор на Весну 2026 скоро будет открыт!
            </div>
          </div>
          
          <h1 className="font-display font-black text-[2.2rem] sm:text-6xl md:text-8xl lg:text-[9rem] leading-[1] md:leading-[0.9] uppercase tracking-tighter text-black mix-blend-multiply break-words">
            VI Школа ИТ <br className="hidden sm:block"/>
            <span className="relative inline-block text-white mt-2 sm:mt-0">
              <span className="absolute inset-0 bg-brand-blue border-4 border-black shadow-neo rotate-1 transform-gpu"></span>
              <span className="relative z-10 px-3 py-1 sm:px-4 sm:py-2 block">и математического моделирования</span>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-3xl font-bold font-display max-w-3xl mx-auto bg-white border-4 border-black p-4 sm:p-6 shadow-neo rotate-1 mt-6">
            Проектно-образовательный интенсив. <br className="hidden md:block"/> 
            Формат выездного хакатона для студентов МАИ.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 font-display font-bold text-base sm:text-lg md:text-xl w-full sm:w-auto">
            <div className="flex items-center justify-center gap-3 bg-brand-green border-4 border-black px-6 py-3 shadow-neo hover:-translate-y-1 transition-transform w-full sm:w-auto">
              <CalendarIcon className="w-6 h-6 shrink-0" />
              <span>13 мая - 22 мая 2026</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-brand-yellow border-4 border-black px-6 py-3 shadow-neo hover:-translate-y-1 transition-transform w-full sm:w-auto">
              <MapPinIcon className="w-6 h-6 shrink-0" />
              <span>ОУЦ «Ярополец»</span>
            </div>
          </div>

          <div className="pt-8 pb-12 md:pb-0">
            <a 
              href="#register" 
              className="inline-block w-full sm:w-auto px-8 py-4 md:px-12 md:py-5 text-xl sm:text-2xl md:text-4xl font-display font-black uppercase text-white bg-black border-4 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 md:hover:translate-x-2 md:hover:translate-y-2 hover:shadow-none md:hover:shadow-neo hover:bg-brand-pink hover:text-black transition-all"
            >
              Подать заявку
            </a>
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-yellow border-y-4 border-black overflow-hidden py-2 md:py-3 flex z-20">
        <div className="marquee-container animate-marquee whitespace-nowrap flex font-display font-black text-lg md:text-3xl uppercase tracking-widest">
          <span className="mx-4">ХАКАТОН МАИ 2026</span><span className="mx-4">•</span>
          <span className="mx-4">РЕАЛЬНЫЕ ЗАДАЧИ</span><span className="mx-4">•</span>
          <span className="mx-4">ИНДУСТРИАЛЬНЫЕ ПАРТНЕРЫ</span><span className="mx-4">•</span>
          <span className="mx-4">ВЫЕЗДНОЙ ИНТЕНСИВ</span><span className="mx-4">•</span>
          <span className="mx-4">ХАКАТОН МАИ 2026</span><span className="mx-4">•</span>
          <span className="mx-4">РЕАЛЬНЫЕ ЗАДАЧИ</span><span className="mx-4">•</span>
          <span className="mx-4">ИНДУСТРИАЛЬНЫЕ ПАРТНЕРЫ</span><span className="mx-4">•</span>
          <span className="mx-4">ВЫЕЗДНОЙ ИНТЕНСИВ</span><span className="mx-4">•</span>
        </div>
      </div>
    </section>
  );
};
