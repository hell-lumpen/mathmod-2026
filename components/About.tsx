import React from 'react';
import { UsersIcon, CodeIcon, BrainIcon, CheckCircleIcon } from './Icons';

export const About: React.FC = () => {
  const features = [
    {
      icon: <BrainIcon className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Погружение в задачи",
      description: "Машинное обучение, математическое моделирование и аналитика на реальных данных бизнеса.",
      color: "bg-brand-pink"
    },
    {
      icon: <CodeIcon className="w-8 h-8 md:w-10 md:h-10" />,
      title: "2 модуля, 6 кейсов",
      description: "Программа разбита на два модуля. В каждом модуле команды решают по 3 прикладных кейса.",
      color: "bg-brand-blue"
    },
    {
      icon: <UsersIcon className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Работа в команде",
      description: "Развитие коммуникации с заказчиком и навыков публичной защиты своих решений.",
      color: "bg-brand-green"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-b-4 border-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="mb-10 md:mb-16">
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-7xl uppercase mb-4 sm:mb-6 inline-block bg-brand-yellow px-4 py-2 border-4 border-black shadow-neo -rotate-1">
            О школе
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-4xl border-l-4 sm:border-l-8 border-black pl-4 sm:pl-6 mt-6 md:mt-8">
            Ежегодный проектно-образовательный интенсив, организованный IT-центром МАИ, кафедрой 806 и Центром компетенций «Математическое моделирование» при поддержке Института №8.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* Features */}
          <div className="space-y-4 md:space-y-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 md:p-6 border-4 border-black shadow-neo ${feature.color} hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-neo transition-all`}
              >
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-white border-4 border-black flex items-center justify-center rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-display font-black text-xl md:text-2xl uppercase mb-2">{feature.title}</h3>
                  <p className="font-bold text-base md:text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
            
            <div className="bg-white border-4 border-black p-5 md:p-6 shadow-neo mt-6 md:mt-8">
              <p className="font-display font-bold text-lg md:text-xl flex items-start sm:items-center gap-3 md:gap-4 uppercase">
                <CheckCircleIcon className="w-6 h-6 md:w-8 md:h-8 text-brand-orange shrink-0" />
                <span>Лекции и воркшопы от экспертов IT-компаний</span>
              </p>
            </div>
          </div>

          {/* Media Collage representing past years */}
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-brand-purple border-4 border-black translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 shadow-neo"></div>
            <div className="relative bg-white border-4 border-black p-3 sm:p-4 z-10 hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform">
              <div className="aspect-video relative overflow-hidden border-4 border-black group">
                {/* Simulate a video player or large photo */}
                <img 
                  src="https://picsum.photos/seed/mai-video/800/450" 
                  alt="Хакатон МАИ" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-yellow border-4 border-black rounded-full flex items-center justify-center shadow-neo cursor-pointer hover:scale-110 transition-transform">
                     <svg className="w-6 h-6 md:w-8 md:h-8 ml-1 md:ml-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                   </div>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 flex justify-between items-center font-display font-black uppercase">
                <span className="text-lg sm:text-xl">Как это было</span>
                <span className="bg-black text-white px-2 py-1 sm:px-3 sm:py-1 text-sm sm:text-base">Смотреть</span>
              </div>
            </div>

            {/* Scattered photos around the main one - hidden on very small screens */}
            <img src="https://picsum.photos/seed/p1/300/300" className="hidden sm:block absolute -left-6 -bottom-6 md:-left-12 md:-bottom-12 w-24 h-24 md:w-40 md:h-40 object-cover border-4 border-black shadow-neo rotate-6 z-20" alt="Photo 1" />
            <img src="https://picsum.photos/seed/p2/300/300" className="hidden sm:block absolute -right-4 -top-4 md:-right-8 md:-top-8 w-20 h-20 md:w-32 md:h-32 object-cover border-4 border-black shadow-neo -rotate-12 z-20" alt="Photo 2" />
          </div>

        </div>
      </div>
    </section>
  );
};
