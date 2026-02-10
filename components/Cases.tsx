import React from 'react';
import { ChevronRightIcon } from './Icons';

export const Cases: React.FC = () => {
  const cases = [
    {
      title: "Распознавание рукописного текста",
      client: "Банковский сектор",
      desc: "Создание ML-модели для OCR рукописного текста в сложных банковских документах.",
      color: "bg-white",
      tagColor: "bg-brand-pink"
    },
    {
      title: "AI-ассистент скоринга юр. лиц",
      client: "Финтех",
      desc: "Разработка интеллектуального помощника для оценки рисков и кредитоспособности бизнеса.",
      color: "bg-white",
      tagColor: "bg-brand-blue"
    },
    {
      title: "Предсказание самовозгорания угля",
      client: "GlowByte",
      desc: "Построение предиктивной модели на основе IoT датчиков для предотвращения ЧС на складе.",
      color: "bg-brand-yellow",
      tagColor: "bg-black text-white"
    },
    {
      title: "Спортивный AI-комментатор",
      client: "Media Tech",
      desc: "Проектирование системы генерации осмысленных комментариев спортивных матчей в реальном времени.",
      color: "bg-white",
      tagColor: "bg-brand-green"
    },
    {
      title: "Реверс-инжиниринг архитектуры",
      client: "Телеком",
      desc: "Анализ и восстановление архитектуры масштабной кодовой базы телеком-компании.",
      color: "bg-white",
      tagColor: "bg-brand-orange"
    },
    {
      title: "Разговорный помощник МАИ",
      client: "Институт №8",
      desc: "Создание умного чат-бота для помощи студентам и абитуриентам в навигации по процессам ВУЗа.",
      color: "bg-brand-purple",
      tagColor: "bg-white"
    }
  ];

  return (
    <section id="cases" className="py-16 md:py-24 border-b-4 border-black bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBsNDA0ME0wIDQwbDQwLTQwIiBzdHJva2U9IiNFMkU4RjAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-7xl uppercase mb-4 md:mb-6 drop-shadow-neo">
              Примеры<br/>кейсов
            </h2>
            <p className="text-lg md:text-xl font-bold bg-white border-4 border-black p-3 md:p-4 shadow-neo inline-block">
              Не синтетические тесты, а реальные вызовы.
            </p>
          </div>
          <div className="hidden md:flex">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-black flex items-center justify-center animate-spin-slow bg-brand-yellow shadow-neo">
              <span className="font-display font-black text-lg md:text-xl text-center leading-none">6<br/>ЗАДАЧ</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c, idx) => (
            <div 
              key={idx} 
              className={`group ${c.color} border-4 border-black p-5 md:p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover transition-all flex flex-col justify-between h-full`}
            >
              <div>
                <div className={`inline-block font-display font-black uppercase text-xs sm:text-sm border-2 border-black px-2 py-1 md:px-3 md:py-1 mb-4 ${c.tagColor} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                  {c.client}
                </div>
                <h3 className="font-display font-black text-xl md:text-2xl uppercase mb-3 md:mb-4 leading-tight">{c.title}</h3>
                <p className="font-bold text-base md:text-lg mb-6 md:mb-8">
                  {c.desc}
                </p>
              </div>
              <div className="flex items-center font-display font-black uppercase text-base md:text-lg cursor-pointer group-hover:text-brand-blue transition-colors">
                <span>Подробнее</span>
                <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6 ml-1 md:ml-2 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
