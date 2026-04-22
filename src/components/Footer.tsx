import React from 'react';
import { BotanicalMotif } from './BotanicalMotif';

export function Footer() {
  return (
    <footer className="bg-dark text-offwhite relative pt-20 pb-10">
      {/* Top Gold Line & Motif */}
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="w-full h-[1px] bg-gold/30 absolute top-1/2 -translate-y-1/2"></div>
        <div className="bg-dark px-4 relative z-10 -mt-6">
          <BotanicalMotif size={48} color="#C9A96E" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-16">
          
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            
            {/* LOGO */}
            <img
              src="/logo.png"
              alt="Clínica Perfeita"
              className="h-10 w-auto object-contain opacity-90"
            />

            <span className="text-sm text-offwhite/60 font-light tracking-widest uppercase">
              Clínica Perfeita
            </span>

            <p className="text-sm text-offwhite/40 font-light mt-2 max-w-xs">
              Elevando a estética a uma forma de arte. Tratamentos
              personalizados em Curitiba.
            </p>
          </div>

          {/* Center: Nav */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
              Navegação
            </h4>
            <a href="#about" className="text-sm text-offwhite/60 hover:text-gold transition-colors">
              Sobre
            </a>
            <a href="#services" className="text-sm text-offwhite/60 hover:text-gold transition-colors">
              Tratamentos
            </a>
            <a href="#gallery" className="text-sm text-offwhite/60 hover:text-gold transition-colors">
              Galeria
            </a>
            <a href="#contact" className="text-sm text-offwhite/60 hover:text-gold transition-colors">
              Contato
            </a>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
              Social
            </h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-offwhite/60 hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-offwhite/60 hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>

            <div className="text-xs text-offwhite/40 font-light text-center md:text-right mt-auto">
              <p className="mb-2">
                Responsável Técnico:
                <br />
                Dra Paula Gabriela de Souza CRBM-6 N6454
              </p>
              <p>
                &copy; {new Date().getFullYear()} Clínica Perfeita.
                <br />
                Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Assinatura UP3 */}
      <div className="absolute bottom-4 right-6 text-[10px] tracking-[0.2em] uppercase text-offwhite/20 hover:text-offwhite/40 transition-all duration-300">
        <a
          href="https://up3-jade.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:tracking-[0.3em] transition-all"
        >
          desenvolvido por UP3
        </a>
      </div>
    </footer>
  );
}