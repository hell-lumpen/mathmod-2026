import React, { useState } from 'react';
import { TrophyIcon } from './Icons';

export const Registration: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section id="register" className="py-16 md:py-24 border-b-4 border-black bg-brand-green relative overflow-hidden">
    
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white border-4 border-black shadow-neo-xl flex flex-col lg:flex-row">
          
          {/* Info Side */}
          <div className="lg:w-2/5 bg-black text-white p-6 sm:p-10 md:p-16 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-brand-yellow rounded-bl-full border-b-4 border-l-4 border-black"></div>
            
            <div className="relative z-10">
              <TrophyIcon className="w-16 h-16 md:w-20 md:h-20 text-brand-yellow mb-6 md:mb-8" />
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase mb-4 md:mb-6 leading-none text-brand-yellow">Прими<br/>вызов!</h2>
              <p className="font-bold text-lg md:text-xl mb-8 md:mb-10 leading-relaxed">
                Количество мест ограничено. Успей занять свое.
              </p>
              
              <ul className="space-y-4 md:space-y-6 font-bold text-base md:text-lg">
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-3 h-3 md:w-4 md:h-4 mt-1.5 bg-brand-pink border-2 border-black flex-shrink-0"></div>
                  <span>Обязательно укажи актуальный Telegram</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-3 h-3 md:w-4 md:h-4 mt-1.5 bg-brand-blue border-2 border-black flex-shrink-0"></div>
                  <span>Можно готовой командой или найти на месте</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-3 h-3 md:w-4 md:h-4 mt-1.5 bg-brand-green border-2 border-black flex-shrink-0"></div>
                  <span>Студенты МАИ любых курсов и институтов</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t-4 border-white/20 relative z-10">
              <p className="font-display font-bold text-lg md:text-xl uppercase text-brand-pink">
                + Симуляторы собеседований от выпускников МАИ
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-6 sm:p-10 md:p-16 bg-brand-bg">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 animate-[fadeIn_0.5s_ease-out] py-10">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-brand-green border-4 border-black rounded-full flex items-center justify-center shadow-neo">
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase">Заявка принята!</h3>
                <p className="font-bold text-lg md:text-2xl max-w-md">
                  Жди сообщение в Telegram для подтверждения участия.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 md:px-8 md:py-4 font-display font-black text-lg md:text-xl uppercase bg-white border-4 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover hover:bg-brand-yellow transition-all mt-4"
                >
                  Подать еще заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                
                <div className="space-y-2 md:space-y-3">
                  <label className="font-display font-black text-lg md:text-xl uppercase block">Имя и Фамилия</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 md:px-6 md:py-4 bg-white border-4 border-black text-base md:text-xl font-bold placeholder-gray-400 focus:outline-none focus:bg-brand-yellow focus:shadow-neo transition-all rounded-none"
                  />
                </div>
                
                <div className="space-y-2 md:space-y-3">
                  <label className="font-display font-black text-lg md:text-xl uppercase block">Telegram (через @)</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="@username"
                    className="w-full px-4 py-3 md:px-6 md:py-4 bg-white border-4 border-black text-base md:text-xl font-bold placeholder-gray-400 focus:outline-none focus:bg-brand-pink focus:shadow-neo transition-all rounded-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2 md:space-y-3">
                    <label className="font-display font-black text-lg md:text-xl uppercase block">Институт</label>
                    <select required className="w-full px-4 py-3 md:px-6 md:py-4 bg-white border-4 border-black text-base md:text-xl font-bold appearance-none focus:outline-none focus:bg-brand-blue focus:shadow-neo transition-all cursor-pointer rounded-none">
                      <option value="">Выбери...</option>
                      <option value="8">Институт №8</option>
                      <option value="1">Институт №1</option>
                      <option value="other">Другой</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="font-display font-black text-lg md:text-xl uppercase block">Курс</label>
                    <select required className="w-full px-4 py-3 md:px-6 md:py-4 bg-white border-4 border-black text-base md:text-xl font-bold appearance-none focus:outline-none focus:bg-brand-blue focus:shadow-neo transition-all cursor-pointer rounded-none">
                      <option value="">Выбери...</option>
                      <option value="1">1 курс</option>
                      <option value="2">2 курс</option>
                      <option value="3">3 курс</option>
                      <option value="4">4 курс</option>
                      <option value="5">Магистратура</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <label className="font-display font-black text-lg md:text-xl uppercase block">Стек / Навыки</label>
                  <input 
                    type="text" 
                    placeholder="Python, ML, React..."
                    className="w-full px-4 py-3 md:px-6 md:py-4 bg-white border-4 border-black text-base md:text-xl font-bold placeholder-gray-400 focus:outline-none focus:bg-brand-green focus:shadow-neo transition-all rounded-none"
                  />
                </div>

                <div className="space-y-2 md:space-y-3">
                  <label className="font-display font-black text-lg md:text-xl uppercase block">Команда</label>
                  <select className="w-full px-4 py-3 md:px-6 md:py-4 bg-white border-4 border-black text-base md:text-xl font-bold appearance-none focus:outline-none focus:bg-brand-yellow focus:shadow-neo transition-all cursor-pointer rounded-none">
                    <option value="no">Ищу команду</option>
                    <option value="yes">Уже есть команда</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-2 md:mt-4 px-6 py-4 md:px-8 md:py-6 font-display font-black text-xl md:text-3xl uppercase bg-black text-white border-4 border-black shadow-neo md:shadow-neo-xl hover:translate-x-1 hover:translate-y-1 md:hover:translate-x-2 md:hover:translate-y-2 hover:shadow-none md:hover:shadow-neo hover:bg-brand-orange hover:text-black transition-all"
                >
                  Отправить
                </button>
                
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
