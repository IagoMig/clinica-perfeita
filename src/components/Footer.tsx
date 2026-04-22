import React from 'react';
import { Link } from 'react-router-dom';
import { BotanicalMotif } from './BotanicalMotif';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f8f4ef] text-dark border-t border-gold/15">
      {/* fundo sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[680px] h-[260px] rounded-full bg-gold/8 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-60px] w-[280px] h-[220px] rounded-full bg-sage/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.45),transparent_30%,rgba(0,0,0,0.015)_100%)]" />
      </div>

      {/* topo decorativo */}
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="w-full h-[1px] bg-gold/15 absolute top-1/2 -translate-y-1/2" />
        <div className="bg-[#f8f4ef] px-4 relative z-10 -mt-5">
          <div className="w-12 h-12 rounded-full border border-gold/20 bg-white/70 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
            <BotanicalMotif size={22} color="#C9A96E" />
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-20 md:pt-24 pb-8">
        {/* topo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pb-12 md:pb-14">
          {/* marca */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <img
              src="/logo.png"
              alt="Clínica Perfeita"
              className="h-10 md:h-11 w-auto object-contain opacity-95 mb-5"
            />

            <h3 className="text-[1.2rem] md:text-[1.35rem] font-serif tracking-[0.08em] text-dark">
              Clínica Perfeita
            </h3>

            <div className="mt-3 flex items-center gap-3">
              <div className="w-10 h-[1px] bg-gold/55" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-dark/40">
                Estética avançada
              </span>
            </div>

            <p className="mt-6 max-w-md text-sm md:text-[15px] text-dark/62 font-light leading-relaxed">
              Um espaço pensado para oferecer beleza com naturalidade,
              sofisticação e acolhimento, transformando o autocuidado em uma
              experiência mais elegante e personalizada.
            </p>
          </div>

          {/* navegação */}
          <div className="lg:col-span-3 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-[10px] uppercase tracking-[0.32em] text-gold-dark mb-5">
              Navegação
            </span>

            <div className="flex flex-col gap-3">
              <Link
                to="/sobre"
                className="text-sm text-dark/60 hover:text-gold-dark transition-colors"
              >
                Sobre
              </Link>

              <a
                href="/#services"
                className="text-sm text-dark/60 hover:text-gold-dark transition-colors"
              >
                Tratamentos
              </a>

              <a
                href="/#gallery"
                className="text-sm text-dark/60 hover:text-gold-dark transition-colors"
              >
                Galeria
              </a>

              <a
                href="/#reviews"
                className="text-sm text-dark/60 hover:text-gold-dark transition-colors"
              >
                Avaliações
              </a>

              <a
                href="/#contact"
                className="text-sm text-dark/60 hover:text-gold-dark transition-colors"
              >
                Contato
              </a>
            </div>
          </div>

          {/* contato */}
          <div className="lg:col-span-4 text-center lg:text-right flex flex-col items-center lg:items-end">
            <span className="text-[10px] uppercase tracking-[0.32em] text-gold-dark mb-5">
              Contato
            </span>

            <a
              href="https://wa.me/5541999999999"
              className="text-sm md:text-[15px] text-dark/70 hover:text-gold-dark transition-colors"
            >
              +55 41 99999-9999
            </a>

            <a
              href="https://maps.google.com/?q=Avenida+Visconde+de+Guarapuava+2764+Curitiba"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-sm text-dark/55 hover:text-gold-dark transition-colors leading-relaxed"
            >
              Avenida Visconde de Guarapuava 2764
              <br />
              Conj. 1006, Centro — Curitiba, PR
            </a>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/15 bg-white/60 flex items-center justify-center text-dark/55 hover:text-gold-dark hover:border-gold/35 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/15 bg-white/60 flex items-center justify-center text-dark/55 hover:text-gold-dark hover:border-gold/35 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* divisor */}
        <div className="w-full h-[1px] bg-gold/12" />

        {/* base */}
        <div className="pt-7 md:pt-8 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="text-center lg:text-left">
            <p className="text-[10px] uppercase tracking-[0.24em] text-dark/35 mb-2">
              Responsável Técnico
            </p>
            <p className="text-sm text-dark/55 font-light leading-relaxed">
              Dra Paula Gabriela de Souza — CRBM-6 N6454
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-dark/42 font-light">
              © {new Date().getFullYear()} Clínica Perfeita. Todos os direitos reservados.
            </p>
          </div>

          <div className="text-center lg:text-right">
            <a
              href="https://up3-jade.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.24em] text-dark/28 hover:text-dark/45 transition-all duration-300"
            >
              desenvolvido por UP3
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}