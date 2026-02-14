import React, { useState } from 'react';
import { MenuIcon, XIcon } from './Icons';
import maiLogo from '../images/mai-logo.png';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'О школе', href: '#about', color: 'bg-brand-yellow' },
    { name: 'Кейсы', href: '#cases', color: 'bg-brand-pink' },
    { name: 'Партнеры', href: '#partners', color: 'bg-brand-blue' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg border-b-4 border-black">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-20">
        
        <div className="flex items-center gap-3">
          <img
            src={maiLogo}
            alt="Логотип МАИ"
            className="w-12 h-12 object-contain"
          />
          <div className="block leading-none font-display">
            <div className="font-black text-xl uppercase tracking-tight">VI Школа ИТ</div>
            <div className="text-sm font-bold">и мат. моделирования</div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-display font-bold text-lg uppercase px-3 py-1 border-2 border-transparent hover:border-black transition-all hover:-translate-y-1 hover:shadow-neo"
              style={{ '--tw-hover-bg': link.color } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = link.color}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#register" 
            className="hidden md:inline-flex items-center justify-center px-6 py-2 font-display font-black text-lg uppercase bg-brand-yellow border-4 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover transition-all"
          >
            Регистрация
          </a>
          
          <button 
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-brand-yellow border-4 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-bg border-b-4 border-black border-t-4">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`font-display font-black text-2xl uppercase p-4 border-4 border-black shadow-neo ${link.color}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#register" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-6 py-4 font-display font-black text-2xl uppercase bg-black text-white border-4 border-black shadow-neo"
            >
              Зарегистрироваться
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
