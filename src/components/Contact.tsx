import React from 'react';
import { motion } from 'framer-motion';
import { BotanicalMotif } from './BotanicalMotif';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 bg-[#f6f1eb] overflow-hidden"
    >
      {/* Fundo sofisticado */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[760px] h-[320px] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[380px] h-[280px] rounded-full bg-sage/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.4),transparent_28%,rgba(0,0,0,0.02)_100%)]" />
      </div>

      {/* Marca d’água */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none">
        <BotanicalMotif size={760} color="#B89B72" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-[#d8c3a3]/30 bg-[rgba(255,252,248,0.78)] backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.08)]">
            {/* brilho topo */}
            <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />

            {/* moldura interna */}
            <div className="absolute inset-[14px] md:inset-[18px] rounded-[1.5rem] md:rounded-[2rem] border border-gold/15 pointer-events-none" />

            {/* cantos */}
            <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-gold/35" />
            <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-gold/35" />
            <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-gold/35" />
            <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-gold/35" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 px-8 py-12 md:px-14 md:py-16 lg:px-16 lg:py-20">
              {/* Coluna esquerda */}
              <motion.div
                initial={{ opacity: 0, x: -26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-gold text-xs tracking-[0.3em]">●●●</span>
                    <span className="uppercase tracking-[0.22em] text-xs md:text-sm text-gold-dark font-medium">
                      Visite-nos
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-[4.4rem] font-serif text-dark leading-[0.98] mb-6">
                    Sua jornada
                    <span className="block italic text-sage-dark">começa aqui.</span>
                  </h2>

                  <div className="w-20 h-[1px] bg-gold mb-7" />

                  <p className="text-base md:text-lg text-dark/70 font-light leading-relaxed max-w-md">
                    Um ambiente pensado para acolher você com discrição,
                    sofisticação e tranquilidade, transformando cada visita em
                    uma experiência mais refinada e segura.
                  </p>
                </div>

                <div className="mt-10 lg:mt-14 space-y-4">
                  <a
                    href="https://wa.me/554132060016"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-dark text-offwhite text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-dark/90 transition-all duration-500 shadow-[0_14px_35px_rgba(0,0,0,0.10)]"
                  >
                    Agendar consulta
                  </a>

                  <p className="text-sm text-dark/45 uppercase tracking-[0.22em]">
                    Atendimento personalizado
                  </p>
                </div>
              </motion.div>

              {/* Coluna direita */}
              <motion.div
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-7"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-6">
                  {/* MAPA */}
                  <div className="md:col-span-3 rounded-[1.5rem] overflow-hidden border border-dark/6 bg-white/55 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                    <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4">
                      <h4 className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-muted mb-3">
                        Localização
                      </h4>

                      <p className="text-xl md:text-2xl lg:text-[1.9rem] font-serif text-dark leading-relaxed">
                        Avenida Visconde de Guarapuava 2764
                        <br />
                        Conj. 1006, Centro
                        <br />
                        Curitiba - PR
                      </p>
                    </div>

                    <div className="px-4 md:px-5 pb-4 md:pb-5">
                      <div className="overflow-hidden rounded-[1.25rem] border border-gold/15 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                        <iframe
                          title="Mapa Clínica Perfeita"
                          src="https://www.google.com/maps?q=Avenida+Visconde+de+Guarapuava+2764+Curitiba&z=16&output=embed"
                          className="w-full h-[260px] md:h-[320px]"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>

                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <a
                        href="https://maps.google.com/?q=Avenida+Visconde+de+Guarapuava+2764+Curitiba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-dark transition-colors border-b border-gold/30 pb-1"
                      >
                        Ver no Google Maps
                      </a>
                    </div>
                  </div>

                  {/* Contato */}
                  <div className="rounded-[1.5rem] border border-dark/6 bg-white/55 backdrop-blur-md p-6 md:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                    <div className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center mb-4 text-gold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v13.5A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75V5.25z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.5 9.75l4.5 3 4.5-3"
                        />
                      </svg>
                    </div>

                    <h4 className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-muted mb-4">
                      Contato
                    </h4>

                    <p className="text-lg md:text-xl font-serif text-dark leading-relaxed">
                      <a
                        href="https://wa.me/554132060016"
                        className="hover:text-gold transition-colors duration-300"
                      >
                        55 41 3206-0016
                      </a>
                    </p>
                  </div>

                  {/* Horário */}
                  <div className="md:col-span-2 rounded-[1.5rem] border border-dark/6 bg-white/55 backdrop-blur-md p-6 md:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                    <div className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center mb-4 text-gold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <circle cx="12" cy="12" r="8.25" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 7.75v4.75l3 1.75"
                        />
                      </svg>
                    </div>

                    <h4 className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-muted mb-4">
                      Horário de Atendimento
                    </h4>

                    <p className="text-base md:text-lg font-light text-dark leading-relaxed">
                      Segunda a Sexta: 09h às 19h
                      <br />
                      Sábados: 09h às 13h
                    </p>
                  </div>
                </div>

                {/* linha inferior */}
                <div className="flex items-center gap-4 mt-8 md:mt-10">
                  <div className="w-12 h-[1px] bg-gold/40" />
                  <span className="text-[10px] uppercase tracking-[0.28em] text-dark/40">
                    Clínica Perfeita
                  </span>
                  <div className="flex-1 h-[1px] bg-gold/15" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}