import React from 'react';
import { ChevronRightIcon } from './Icons';

export const Cases: React.FC = () => {
  const cases = [
    {
      title: "Распознавание рукописного текста",
      client: "Т1",
      desc: "Создание ML-модели для OCR рукописного текста в сложных банковских документах.",
      color: "bg-white",
      tagColor: "bg-brand-pink"
    },
    {
      title: "AI-ассистент скоринга юридических лиц",
      client: "ПСБ",
      desc: "Разработка интеллектуального помощника для оценки рисков и кредитоспособности бизнеса.",
      color: "bg-white",
      tagColor: "bg-brand-blue"
    },
    {
      title: "Предсказание самовозгорания угля",
      client: "GlowByte",
      desc: "Построение предиктивной модели на основе IoT датчиков для предотвращения ЧС на складе.",
      color: "bg-white",
      tagColor: "bg-black text-white"
    },
    {
      title: "Спортивный AI-комментатор",
      client: "Friflex",
      desc: "Проектирование системы генерации осмысленных комментариев спортивных матчей в реальном времени.",
      color: "bg-white",
      tagColor: "bg-brand-green"
    },
    {
      title: "Реверс-инжиниринг архитектуры",
      client: "билайн",
      desc: "Анализ и восстановление архитектуры масштабной кодовой базы телеком-компании.",
      color: "bg-white",
      tagColor: "bg-brand-orange"
    },
    {
      title: "AI-помощник для абитуриента",
      client: "Институт №8",
      desc: "Создание умного чат-бота для помощи абитуриентам во время приемной кампании.",
      color: "bg-white",
      tagColor: "bg-brand-mai"
    }
  ];

  return (
    <section id="cases" className="py-16 md:py-24 border-b-4 border-black bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBsNDA0ME0wIDQwbDQwLTQwIiBzdHJva2U9IiNFMkU4RjAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-7xl uppercase mb-4 md:mb-6 drop-shadow-neo">
              Примеры кейсов 2025
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-4xl border-l-4 sm:border-l-8 border-black pl-4 sm:pl-6 mt-6 md:mt-8">
            Какое-то описание кейсов. Инфа о том, что кейсы этого года будут известы только в начале хакатона
          </p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
