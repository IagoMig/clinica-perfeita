import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BotanicalMotif } from './BotanicalMotif';

export function Hero() {
  const { scrollY } = useScroll();

  /**
   * MOVIMENTO GERAL
   * Mantido suave para desktop e sem exagero para mobile.
   */
  const contentY = useTransform(scrollY, [0, 700], [0, -60]);
  const contentOpacity = useTransform(scrollY, [0, 180, 520, 760], [1, 1, 0.82, 0]);
  const contentScale = useTransform(scrollY, [0, 700], [1, 0.965]);

  const imageY = useTransform(scrollY, [0, 700], [0, -40]);
  const imageScale = useTransform(scrollY, [0, 700], [1, 0.94]);
  const imageOpacity = useTransform(scrollY, [0, 240, 560, 760], [1, 1, 0.88, 0]);

  /**
   * EFEITO CINEMATOGRÁFICO DE SAÍDA
   * Um véu sobe no final da hero, criando uma transição mais nobre
   * para a próxima section.
   */
  const cinematicOverlayOpacity = useTransform(
    scrollY,
    [220, 520, 820],
    [0, 0.08, 0.22]
  );

  const cinematicOverlayY = useTransform(scrollY, [0, 800], [40, -40]);

  /**
   * FUNDO E ELEMENTOS DECORATIVOS
   */
  const glowTopOpacity = useTransform(scrollY, [0, 700], [0.12, 0.04]);
  const glowBottomOpacity = useTransform(scrollY, [0, 700], [0.08, 0.02]);

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-offwhite"
    >
      {/* FUNDO CLEAN E SOFISTICADO */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ opacity: glowTopOpacity }}
          className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[680px] h-[320px] bg-gold blur-3xl rounded-full"
        />

        <motion.div
          style={{ opacity: glowBottomOpacity }}
          className="absolute bottom-[-60px] right-[-60px] w-[380px] h-[280px] bg-sage blur-3xl rounded-full"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.75),rgba(255,255,255,0.35)_34%,rgba(0,0,0,0.02)_100%)]" />

        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_top,rgba(201,169,110,0.28),transparent_34%)]" />
      </div>

      {/* OVERLAY DE SAÍDA CINEMATOGRÁFICA */}
      <motion.div
        style={{
          opacity: cinematicOverlayOpacity,
          y: cinematicOverlayY,
        }}
        className="absolute inset-0 pointer-events-none z-[1]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_45%,rgba(28,28,28,0.08)_72%,rgba(28,28,28,0.16)_100%)]" />
      </motion.div>

      {/* VINHETA SUAVE PARA DAR MAIS PRESENÇA */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.04)_100%)]" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* ESQUERDA */}
          <motion.div
            style={{
              y: contentY,
              opacity: contentOpacity,
              scale: contentScale,
            }}
            className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1 origin-left"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-white/75 backdrop-blur-md px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                <BotanicalMotif size={18} className="opacity-70" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-dark/60">
                  Estética avançada • cuidado individualizado
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.2rem] font-serif text-dark leading-[0.96] mb-5 max-w-4xl"
            >
              Beleza refinada,
              <span className="block text-gold">resultado natural</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-2xl lg:text-[1.8rem] font-serif italic text-dark/70 mb-6 max-w-2xl"
            >
              Uma experiência estética pensada para valorizar sua essência com
              técnica, elegância e precisão.
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 88 }}
              transition={{ duration: 0.9, delay: 0.34 }}
              className="h-[1px] bg-gold mb-7"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-base md:text-lg text-dark/75 max-w-2xl font-light mb-10 leading-relaxed"
            >
              Na Clínica Perfeita, cada atendimento é conduzido com atenção aos
              detalhes, escuta cuidadosa e protocolos modernos. Um espaço criado
              para unir conforto, segurança e sofisticação em cada etapa da sua
              jornada estética.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-dark text-offwhite rounded-full text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-dark/90 transition-all duration-500 shadow-[0_14px_40px_rgba(0,0,0,0.12)]"
              >
                Conheça os tratamentos
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-gold text-gold rounded-full text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-dark transition-all duration-500"
              >
                Agendar avaliação
              </a>
            </motion.div>

            {/* CARDS */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.52 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl"
            >
              <div className="rounded-[26px] border border-dark/8 bg-white/70 backdrop-blur-md px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                <p className="text-[10px] uppercase tracking-[0.22em] text-dark/45 mb-2">
                  Atendimento
                </p>
                <p className="text-dark text-sm md:text-base font-medium">
                  Exclusivo e humanizado
                </p>
              </div>

              <div className="rounded-[26px] border border-dark/8 bg-white/70 backdrop-blur-md px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                <p className="text-[10px] uppercase tracking-[0.22em] text-dark/45 mb-2">
                  Estrutura
                </p>
                <p className="text-dark text-sm md:text-base font-medium">
                  Ambiente sereno e sofisticado
                </p>
              </div>

              <div className="rounded-[26px] border border-dark/8 bg-white/70 backdrop-blur-md px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                <p className="text-[10px] uppercase tracking-[0.22em] text-dark/45 mb-2">
                  Resultado
                </p>
                <p className="text-dark text-sm md:text-base font-medium">
                  Harmonia, leveza e naturalidade
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* DIREITA */}
          <motion.div
            style={{
              y: imageY,
              opacity: imageOpacity,
              scale: imageScale,
            }}
            className="lg:col-span-5 relative order-1 lg:order-2 w-full max-w-sm mx-auto lg:max-w-none"
          >
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.985 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full"
            >
              {/* Moldura deslocada */}
              <div className="absolute inset-0 rounded-[2rem] border border-gold/30 translate-x-4 translate-y-4" />

              {/* Glow nobre */}
              <div className="absolute inset-0 rounded-[2rem] bg-gold/10 blur-2xl scale-[0.94]" />

              {/* Card principal */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-white border border-dark/5 shadow-[0_30px_90px_rgba(0,0,0,0.10)]">
                {/* brilho superior */}
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/90 to-transparent z-10" />

                {/* selo */}
                <div className="absolute top-5 left-5 z-20">
                  <div className="rounded-full border border-white/60 bg-white/80 backdrop-blur-md px-4 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.05)]">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-dark/60">
                      Clínica Perfeita
                    </span>
                  </div>
                </div>

                {/* imagem / logo */}
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-10">
                  <motion.img
                    src="/logo.png"
                    alt="Logo Clínica Perfeita"
                    className="w-full h-full object-contain opacity-95 drop-shadow-[0_18px_35px_rgba(0,0,0,0.06)]"
                  />
                </div>

                {/* overlay refinado */}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(201,169,110,0.06),transparent_40%)]" />

                {/* info bottom */}
                <div className="absolute left-5 right-5 bottom-5 z-20">
                  <div className="rounded-[1.5rem] border border-white/60 bg-white/78 backdrop-blur-xl px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.07)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-dark/45 mb-2">
                          Excelência em estética
                        </p>
                        <p className="text-dark text-sm md:text-base leading-relaxed">
                          Procedimentos pensados para valorizar sua beleza com
                          sofisticação e equilíbrio.
                        </p>
                      </div>

                      <div className="hidden sm:flex h-10 w-10 shrink-0 rounded-full border border-gold/35 items-center justify-center text-gold">
                        <BotanicalMotif size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* FADE DE SAÍDA PARA A PRÓXIMA SECTION */}
      <motion.div
        style={{ opacity: cinematicOverlayOpacity }}
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-[2] bg-gradient-to-t from-offwhite via-offwhite/82 to-transparent"
      />

      {/* Indicador sutil de continuidade */}
      <motion.div
        style={{ opacity: useTransform(scrollY, [0, 120, 320], [1, 0.8, 0]) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] hidden md:flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.28em] text-dark/35">
          Continue descendo
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </motion.div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold/20" />
    </section>
  );
}