import React from 'react';

export const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-16 md:py-24 border-b-4 border-black bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Organizers */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase mb-8 md:mb-12 text-center">Организаторы</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            
            <div className="bg-brand-yellow border-4 border-black p-6 md:p-8 shadow-neo flex flex-col items-center text-center hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-black rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-black text-3xl md:text-4xl">IT</span>
              </div>
              <h3 className="font-display font-black text-2xl md:text-3xl uppercase mb-2 md:mb-4">IT-центр</h3>
              <p className="font-bold text-base md:text-lg">Главный инициатор цифровых проектов МАИ</p>
            </div>
            
            <div className="bg-brand-pink border-4 border-black p-6 md:p-8 shadow-neo flex flex-col items-center text-center hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform md:-translate-y-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-black rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-black text-3xl md:text-4xl">№8</span>
              </div>
              <h3 className="font-display font-black text-2xl md:text-3xl uppercase mb-2 md:mb-4">Институт 8</h3>
              <p className="font-bold text-base md:text-lg">Компьютерные науки и прикладная математика</p>
            </div>

            <div className="bg-brand-blue border-4 border-black p-6 md:p-8 shadow-neo flex flex-col items-center text-center hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform sm:col-span-2 md:col-span-1">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-black rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display font-black text-3xl md:text-4xl">806</span>
              </div>
              <h3 className="font-display font-black text-2xl md:text-3xl uppercase mb-2 md:mb-4">Кафедра 806</h3>
              <p className="font-bold text-base md:text-lg">Вычислительная математика и программирование</p>
            </div>
            
          </div>
        </div>

      </div>

      {/* Partners Marquee */}
      <div className="bg-black py-6 md:py-8 border-y-4 border-black transform -rotate-2 scale-105 my-8 md:my-12">
        <div className="marquee-container animate-marquee flex items-center text-white font-display font-black text-3xl sm:text-5xl md:text-7xl uppercase whitespace-nowrap">
           <span className="mx-6 md:mx-8">Т1 ХОЛДИНГ</span>
           <span className="mx-6 md:mx-8 text-brand-yellow">ПСБ</span>
           <span className="mx-6 md:mx-8">GLOWBYTE</span>
           <span className="mx-6 md:mx-8 text-brand-pink">БИЛАЙН</span>
           <span className="mx-6 md:mx-8">FRIFLEX</span>
           <span className="mx-6 md:mx-8 text-brand-blue">YANDEX CLOUD</span>
           {/* Duplicate for infinite effect */}
           <span className="mx-6 md:mx-8">Т1 ХОЛДИНГ</span>
           <span className="mx-6 md:mx-8 text-brand-yellow">ПСБ</span>
           <span className="mx-6 md:mx-8">GLOWBYTE</span>
           <span className="mx-6 md:mx-8 text-brand-pink">БИЛАЙН</span>
           <span className="mx-6 md:mx-8">FRIFLEX</span>
           <span className="mx-6 md:mx-8 text-brand-blue">YANDEX CLOUD</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center mt-12 md:mt-16">
        <p className="font-display font-bold text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto bg-brand-bg border-4 border-black p-4 md:p-6 shadow-neo inline-block">
          Лучшие участники приглашаются на стажировки и получают <span className="text-brand-pink underline">фаст-трек</span> на собеседования.
        </p>
      </div>

    </section>
  );
};
