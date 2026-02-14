import React from 'react';
import itcLogo from '../images/itc-logo.png';
import Logo8 from '../images/8inst-logo.png';


export const Partners: React.FC = () => {
  const currentPartners = [
    { name: 'ЯНДЕКС', logo: 'https://mathmod-2026.vercel.app/images/partners/yandex.svg', color: 'from-[#FC3F1D] to-[#FFD500]' },
    { name: 'VK', logo: 'https://mathmod-2026.vercel.app/images/partners/vk.svg', color: 'from-[#0077FF] to-[#0057B3]' },
    { name: 'СБЕР', logo: 'https://mathmod-2026.vercel.app/images/partners/sber.svg', color: 'from-[#2DB72B] to-[#1E7B1C]' },
    { name: 'Т1 ХОЛДИНГ', logo: 'https://mathmod-2026.vercel.app/images/partners/t1.svg', color: 'from-[#8A2BE2] to-[#4B0082]' },
    { name: 'ПСБ', logo: 'https://mathmod-2026.vercel.app/images/partners/psb.svg', color: 'from-[#FDB913] to-[#DAA520]' },
  ];

  const pastPartners = [
    'Т1 ХОЛДИНГ',
    'ПСБ',
    'GLOWBYTE',
    'БИЛАЙН',
    'FRIFLEX',
    'YANDEX CLOUD',
    'VK',
    'РОСТЕЛЕКОМ',
  ];

  return (
    <section id="partners" className="py-16 md:py-24 border-b-4 border-black bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBsNDA0ME0wIDQwbDQwLTQwIiBzdHJva2U9IiNFMkU4RjAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Партнеры этого года */}
        <div className="mb-24 md:mb-32">
          <div className="max-w-4xl mb-12 md:mb-16">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase mb-4 md:mb-6 drop-shadow-neo">
              Партнеры
            </h2>
            <div className="w-32 h-2 bg-black mb-6 md:mb-8" />
            <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-2xl border-l-4 sm:border-l-8 border-black pl-4 sm:pl-6">
              Ведущие технологические компании поддерживают школу
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {currentPartners.map((partner, index) => (
              <div 
                key={index}
                className="group relative bg-white border-4 border-black p-6 shadow-neo hover:translate-x-1 hover:-translate-y-2 hover:shadow-neo-hover transition-all duration-200"
              >
                {/* Градиентный акцент при ховере */}
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                {/* Декоративный уголок */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-yellow border-2 border-black rotate-12 group-hover:rotate-45 transition-transform" />
                
                {/* Логотип */}
                <div className="h-20 flex items-center justify-center mb-4">
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-16 w-auto object-contain"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-black text-3xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,230,0,1)]">
                      {partner.name[0]}
                    </div>
                  )}
                </div>
                
                <h3 className="font-display font-black text-lg text-center uppercase tracking-tight border-t-2 border-black pt-4">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center m-24">
          <div className="inline-block bg-black text-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(255,230,0,1)] max-w-3xl mx-auto transform hover:translate-x-1 hover:-translate-y-1 transition-transform">
            <p className="font-display font-bold text-xl md:text-2xl">
              🚀 Лучшие участники приглашаются на стажировки и получают{' '}
              <span className="text-brand-yellow decoration-4 underline-offset-4">
                фаст-трек
              </span>{' '}
              на собеседования
            </p>
          </div>
        </div>

        <div className="mb-24 md:mb-32">
          <div className="max-w-4xl mb-12 md:mb-16">
            <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase mb-4 md:mb-6 drop-shadow-neo">
              Организаторы
            </h3>
            <div className="w-32 h-2 bg-black mb-6 md:mb-8" />
            <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-2xl border-l-4 sm:border-l-8 border-black pl-4 sm:pl-6">
              Постоянные организаторы Школы ИТ и математического моделирования
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 md:gap-12 max-w-6xl">
            <div className="flex items-center gap-4 shrink-0">
              <img
                src={Logo8}
                alt="Логотип Институт №8"
                className="w-[100px] h-[100px] object-contain"
              />
              <div className="block leading-none font-display">
                <div className="font-black text-xl md:text-2xl uppercase tracking-tight">Институт №8</div>
                <div className="text-sm md:text-base font-bold">Компьютерные науки<br/>и прикладная математика</div>
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <img
                src={itcLogo}
                alt="Логотип ИТ-центра МАИ"
                className="w-[120px] h-[120px] object-contain"
              />
              <div className="block leading-none font-display">
                <div className="font-black text-xl md:text-2xl uppercase tracking-tight">IT-центр МАИ</div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
};