import React from 'react';
import { CalendarIcon, MapPinIcon } from './Icons';
import heroBackground from '../images/A72A0222.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center pt-12 pb-16 md:pt-12 md:pb-12 overflow-hidden">
      
      {/* Фоновое изображение с фильтрами */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply z-10" /> 
        <img 
          src={heroBackground}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'contrast(120%) brightness(1) saturate(60%)',
          }}
          role="presentation"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex-1 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Заголовок в верхней части */}
          <div className="mb-auto pt-8 md:pt-12">
            <h1 className="font-display font-black text-white text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] leading-[1] md:leading-[0.9] uppercase tracking-tighter text-black mix-blend-multiply break-words">
              <div 
                className="inline-block text-white text-6xl sm:text-6xl md:text-8xl lg:text-9xl"
                style={{
                  WebkitTextStroke: '3px black',
                  textStroke: '3px black',
                  textShadow: '3px 3px 0 rgba(0,0,0,0.6)'
                }}
              >
                VI Школа ИТ
              </div>
              <br/>
              <div className="relative inline-block text-white mt-2 sm:mt-0 text-[1.8rem] sm:text-4xl md:text-5xl lg:text-[4.5rem]">
                <span className="absolute inset-0 bg-brand-blue border-4 border-black shadow-neo rotate-1 transform-gpu"></span>
                <span className="relative z-10 px-3 py-1 sm:px-4 sm:py-2 block">математического моделирования</span>
              </div>
            </h1>
          </div>

          {/* Пустое пространство в центре (можно добавить какой-то визуальный элемент при необходимости) */}
          <div className="flex-grow py-32"></div>

          {/* Дата и место в нижней части */}
          <div className="mt-auto pb-8 md:pb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 font-display font-bold text-base sm:text-lg md:text-xl w-full sm:w-auto">
              <div className="flex items-center justify-center gap-3 bg-brand-green border-4 border-black px-6 py-3 shadow-neo hover:-translate-y-1 transition-transform w-full sm:w-auto">
                <CalendarIcon className="w-6 h-6 shrink-0" />
                <span>13 - 22 мая 2026</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-brand-yellow border-4 border-black px-6 py-3 shadow-neo hover:-translate-y-1 transition-transform w-full sm:w-auto">
                <MapPinIcon className="w-6 h-6 shrink-0" />
                <span className="hidden sm:inline">ОУЦ «Ярополец», Московская область</span>
                <span className="inline sm:hidden">Московская область</span>
              </div>
            </div>
          </div>

          {/* Комментированная кнопка регистрации и текст */}
        </div>
      </div>

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