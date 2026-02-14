import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          
          <div className="flex items-center gap-3">
          <div className="block leading-none font-display">
            <div className="font-black text-xl uppercase tracking-tight">VI Школа ИТ</div>
            <div className="text-sm font-bold">и математического моделирования</div>
          </div>
        </div>

          <div className="flex flex-wrap justify-center gap-6 font-display font-black text-xl uppercase">
            <a href="https://itmai.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow hover:underline decoration-4 underline-offset-4 transition-all">Сайт IT-центра</a>
            <a href="https://itmai.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue hover:underline decoration-4 underline-offset-4 transition-all">Институт №8</a>
            <a href="#" className="hover:text-brand-green hover:underline decoration-4 underline-offset-4 transition-all">Группа VK</a>
          </div>

        </div>
        
        <div className="border-t-4 border-white pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-bold text-lg">
          <p>© 2026 Московский авиационный институт.</p>
          <p className="bg-white text-black px-4 py-2 border-2 border-white transform -rotate-1 font-display uppercase black">
            До встречи весной 2026!
          </p>
        </div>

      </div>
    </footer>
  );
};
