import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BotanicalMotif } from './BotanicalMotif';

export function CinematicIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);

  /**
   * A mágica está aqui:
   * - a section inteira tem altura maior que 100vh
   * - o conteúdo interno fica sticky em 100vh
   * - isso cria o efeito de "scroll travado"
   * - sem bloquear scroll real do navegador
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  /**
   * HERO — saída cinematográfica
   */
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.38, 0.52],
    [1, 1, 0.55, 0]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.52],
    [1, 0.975, 0.92]
  );

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.52],
    [0, -40, -120]
  );

  const heroBlur = useTransform(
    scrollYProgress,
    [0.28, 0.52],
    ['0px', '10px']
  );

  /**
   * FUNDO HERO
   */
  const heroBgScale = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 1.08]
  );

  const heroBgOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.55],
    [1, 0.9, 0.45]
  );

  /**
   * ABOUT — entrada cinematográfica
   */
  const aboutOpacity = useTransform(
    scrollYProgress,
    [0.32, 0.5, 0.7],
    [0, 0.75, 1]
  );

  const aboutY = useTransform(
    scrollYProgress,
    [0.32, 0.7],
    [120, 0]
  );

  const aboutScale = useTransform(
    scrollYProgress,
    [0.32, 0.7],
    [0.96, 1]
  );

  const aboutBlur = useTransform(
    scrollYProgress,
    [0.32, 0.55],
    ['10px', '0px']
  );

  /**
   * VÉU / TRANSIÇÃO ENTRE AS DUAS
   */
  const veilOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.42, 0.62],
    [0, 0.12, 0]
  );

  const veilScale = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [1, 1.06]
  );

  /**
   * PROGRESSO DO VIDEO / CARD ABOUT
   */
  const mediaY = useTransform(
    scrollYProgress,
    [0.38, 0.72],
    [80, 0]
  );

  const mediaScale = useTransform(
    scrollYProgress,
    [0.38, 0.72],
    [0.94, 1]
  );

  const mediaOpacity = useTransform(
    scrollYProgress,
    [0.38, 0.58, 0.72],
    [0, 0.75, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[230vh] bg-offwhite"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* BASE */}
        <div className="absolute inset-0 bg-offwhite" />

        {/* AMBIENTE SOFISTICADO */}
        <motion.div
          style={{ scale: heroBgScale, opacity: heroBgOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[340px] rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute bottom-[-80px] right-[-40px] w-[360px] h-[260px] rounded-full bg-sage/5 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.85),rgba(255,255,255,0.55)_36%,rgba(0,0,0,0.02)_100%)]" />
        </motion.div>

        {/* HERO */}
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
            filter: useTransform(heroBlur, (v) => `blur(${v})`),
          }}
          className="absolute inset-0 z-10 flex items-center"
        >
          <div className="container mx-auto px-6 md:px-12 pt-24 pb-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
              {/* LEFT */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-white/75 backdrop-blur-md px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                    <BotanicalMotif size={18} className="opacity-70" />
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-dark/60">
                      Estética avançada • cuidado individualizado
                    </span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-[5.2rem] font-serif text-dark leading-[0.96] mb-5 max-w-4xl">
                  Beleza refinada,
                  <span className="block text-gold">resultado natural</span>
                </h1>

                <h2 className="text-lg md:text-2xl lg:text-[1.8rem] font-serif italic text-dark/70 mb-6 max-w-2xl">
                  Uma experiência estética pensada para valorizar sua essência com
                  técnica, elegância e precisão.
                </h2>

                <div className="h-[1px] w-[88px] bg-gold mb-7" />

                <p className="text-base md:text-lg text-dark/75 max-w-2xl font-light mb-10 leading-relaxed">
                  Na Clínica Perfeita, cada atendimento é conduzido com atenção aos
                  detalhes, escuta cuidadosa e protocolos modernos. Um espaço criado
                  para unir conforto, segurança e sofisticação em cada etapa da sua
                  jornada estética.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
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
                </div>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-5 relative w-full max-w-sm mx-auto lg:max-w-none">
                <div className="relative aspect-[4/5] w-full">
                  <div className="absolute inset-0 rounded-[2rem] border border-gold/30 translate-x-4 translate-y-4" />
                  <div className="absolute inset-0 rounded-[2rem] bg-gold/10 blur-2xl scale-[0.94]" />

                  <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-white border border-dark/5 shadow-[0_30px_90px_rgba(0,0,0,0.10)]">
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/90 to-transparent z-10" />

                    <div className="absolute top-5 left-5 z-20">
                      <div className="rounded-full border border-white/60 bg-white/80 backdrop-blur-md px-4 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.05)]">
                        <span className="text-[10px] uppercase tracking-[0.22em] text-dark/60">
                          Clínica Perfeita
                        </span>
                      </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center p-8 md:p-10">
                      <img
                        src="/logo.png"
                        alt="Logo Clínica Perfeita"
                        className="w-full h-full object-contain opacity-95 drop-shadow-[0_18px_35px_rgba(0,0,0,0.06)]"
                      />
                    </div>

                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(201,169,110,0.06),transparent_40%)]" />

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
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* VÉU DE TRANSIÇÃO */}
        <motion.div
          style={{ opacity: veilOpacity, scale: veilScale }}
          className="absolute inset-0 z-20 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.55)_40%,rgba(255,255,255,0.92)_100%)]" />
        </motion.div>

        {/* ABOUT */}
        <motion.div
          style={{
            opacity: aboutOpacity,
            y: aboutY,
            scale: aboutScale,
            filter: useTransform(aboutBlur, (v) => `blur(${v})`),
          }}
          className="absolute inset-0 z-30 flex items-center"
        >
          <div className="container mx-auto px-6 md:px-12 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* VIDEO */}
              <motion.div
                style={{
                  y: mediaY,
                  scale: mediaScale,
                  opacity: mediaOpacity,
                }}
                className="order-2 lg:order-1"
              >
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none lg:ml-auto">
                  <div className="absolute inset-0 rounded-[2rem] border border-gold/30 -translate-x-3 translate-y-3 z-0" />

                  <div className="absolute inset-0 rounded-[2rem] overflow-hidden z-10 bg-sage-light shadow-[0_28px_90px_rgba(0,0,0,0.09)] border border-dark/5">
                    <video
                      src="/vid1.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-sage/10 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.06),transparent_40%)]" />
                  </div>
                </div>
              </motion.div>

              {/* TEXT */}
              <div className="order-1 lg:order-2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="uppercase tracking-[0.2em] text-sm text-gold-dark font-medium">
                    Nossa Filosofia
                  </span>
                  <span className="text-gold text-xs tracking-[0.3em]">●●●</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark leading-tight mb-8">
                  A naturalidade como <br />
                  <span className="italic text-sage-dark">assinatura.</span>
                </h2>

                <div className="space-y-6 text-lg text-muted font-light max-w-xl leading-relaxed">
                  <p>
                    Na Clínica Perfeita, acreditamos que a verdadeira beleza
                    reside na harmonia e na preservação da sua essência. Não
                    buscamos transformações radicais, mas sim o realce sutil do
                    que você já tem de melhor.
                  </p>
                  <p>
                    Sob a direção técnica da Dra. Paula Gabriela de Souza, unimos
                    ciência avançada, tecnologia de ponta e um olhar artístico
                    refinado para entregar resultados que inspiram confiança e
                    bem-estar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}