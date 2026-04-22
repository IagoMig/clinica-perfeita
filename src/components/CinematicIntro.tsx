import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BotanicalMotif } from './BotanicalMotif';

export function CinematicIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.38, 0.52],
    [1, 1, 0.55, 0]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.52],
    [1, 0.985, 0.945]
  );

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.52],
    [0, -24, -84]
  );

  const heroBlur = useTransform(
    scrollYProgress,
    [0.28, 0.52],
    [0, 8]
  );

  const heroBgScale = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 1.035]
  );

  const heroBgOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.55],
    [1, 0.94, 0.56]
  );

  const aboutOpacity = useTransform(
    scrollYProgress,
    [0.34, 0.52, 0.74],
    [0, 0.82, 1]
  );

  const aboutY = useTransform(
    scrollYProgress,
    [0.34, 0.74],
    [90, 0]
  );

  const aboutScale = useTransform(
    scrollYProgress,
    [0.34, 0.74],
    [0.975, 1]
  );

  const aboutBlur = useTransform(
    scrollYProgress,
    [0.34, 0.56],
    [8, 0]
  );

  const veilOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.42, 0.62],
    [0, 0.12, 0]
  );

  const veilScale = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [1, 1.03]
  );

  const mediaY = useTransform(
    scrollYProgress,
    [0.4, 0.72],
    [55, 0]
  );

  const mediaScale = useTransform(
    scrollYProgress,
    [0.4, 0.72],
    [0.97, 1]
  );

  const mediaOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.58, 0.72],
    [0, 0.8, 1]
  );

  return (
    <>
      {/* ========================= DESKTOP / TABLET ========================= */}
      <section
        ref={sectionRef}
        className="relative hidden md:block h-[210vh] bg-[#f8f5f1]"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[#f8f5f1]" />

          {/* FUNDO */}
          <motion.div
            style={{ scale: heroBgScale, opacity: heroBgOpacity }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[760px] h-[300px] rounded-full bg-gold/6 blur-3xl" />
            <div className="absolute bottom-[-90px] right-[-10px] w-[320px] h-[220px] rounded-full bg-[#d8c8b4]/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.95),rgba(248,245,241,0.92)_44%,rgba(0,0,0,0.015)_100%)]" />
          </motion.div>

          {/* HERO */}
          <motion.div
            style={{
              opacity: heroOpacity,
              scale: heroScale,
              y: heroY,
              filter: useTransform(heroBlur, (v) => `blur(${v}px)`),
            }}
            className="absolute inset-0 z-10 flex items-center"
          >
            <div className="container mx-auto px-8 lg:px-12 pt-24 pb-16">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
                  {/* TEXTO */}
                  <div className="lg:col-span-6 flex flex-col items-start text-left">
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-3 rounded-full border border-gold/15 bg-white/80 px-4 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
                        <BotanicalMotif size={16} className="opacity-45" />
                        <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.26em] text-dark/50">
                          Estética avançada • cuidado individualizado
                        </span>
                      </div>
                    </div>

                    <h1 className="text-5xl lg:text-[5rem] font-serif text-dark leading-[0.96] mb-5 max-w-3xl">
                      Beleza refinada,
                      <span className="block text-gold">
                        resultado natural
                      </span>
                    </h1>

                    <p className="text-lg lg:text-[1.28rem] font-serif italic text-dark/68 mb-8 max-w-xl leading-relaxed">
                      Estética avançada com leveza, precisão e uma experiência
                      pensada para acolher você.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-7 py-3.5 bg-dark text-offwhite rounded-full text-xs uppercase tracking-[0.18em] hover:bg-dark/90 transition-all duration-500 shadow-[0_14px_36px_rgba(0,0,0,0.10)]"
                      >
                        Agendar avaliação
                      </a>

                      <a
                        href="#services"
                        className="inline-flex items-center justify-center px-7 py-3.5 border border-gold/80 text-gold rounded-full text-xs uppercase tracking-[0.18em] hover:bg-gold hover:text-dark transition-all duration-500"
                      >
                        Ver tratamentos
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-dark/42">
                      <span>Naturalidade</span>
                      <span className="text-gold/70">•</span>
                      <span>Sofisticação</span>
                      <span className="text-gold/70">•</span>
                      <span>Acolhimento</span>
                    </div>
                  </div>

                  {/* IMAGEM */}
                  <div className="lg:col-span-6 relative w-full">
                    <div className="relative max-w-[520px] ml-auto">
                      <div className="absolute inset-0 rounded-[2.2rem] border border-gold/20 translate-x-4 translate-y-4" />
                      <div className="absolute inset-0 rounded-[2.2rem] bg-gold/6 blur-2xl scale-[0.98]" />

                      <div className="relative aspect-[4/5] rounded-[2.2rem] overflow-hidden border border-dark/5 bg-white/85 shadow-[0_28px_75px_rgba(0,0,0,0.08)]">
                        <video
                        src="/1.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        >
                        Seu navegador não suporta vídeo.
                        </video>

                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_35%,rgba(30,24,18,0.18)_100%)]" />

                        <div className="absolute top-5 left-5">
                          <div className="rounded-full border border-white/55 bg-white/76 backdrop-blur-md px-4 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                            <span className="text-[9px] uppercase tracking-[0.24em] text-dark/50">
                              Clínica Perfeita
                            </span>
                          </div>
                        </div>

                        <div className="absolute left-5 right-5 bottom-5">
                          <div className="rounded-[1.35rem] border border-white/40 bg-white/72 backdrop-blur-xl px-5 py-4 shadow-[0_14px_32px_rgba(0,0,0,0.06)]">
                            <p className="text-[10px] uppercase tracking-[0.22em] text-dark/42 mb-2">
                              Um espaço pensado para cuidar
                            </p>
                            <p className="text-dark/72 text-sm leading-relaxed">
                              Uma estética mais leve, sensível e elegante em cada detalhe.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VÉU */}
          <motion.div
            style={{ opacity: veilOpacity, scale: veilScale }}
            className="absolute inset-0 z-20 pointer-events-none"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.48)_42%,rgba(248,245,241,0.93)_100%)]" />
          </motion.div>

          {/* ABOUT */}
          <motion.div
            style={{
              opacity: aboutOpacity,
              y: aboutY,
              scale: aboutScale,
              filter: useTransform(aboutBlur, (v) => `blur(${v}px)`),
            }}
            className="absolute inset-0 z-30 flex items-center"
          >
            <div className="container mx-auto px-8 lg:px-12 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
                {/* VIDEO */}
                <motion.div
                  style={{
                    y: mediaY,
                    scale: mediaScale,
                    opacity: mediaOpacity,
                  }}
                  className="order-2 lg:order-1"
                >
                  <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
                    <div className="absolute inset-0 rounded-[2rem] border border-gold/22 -translate-x-3 translate-y-3 z-0" />

                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden z-10 bg-sage-light shadow-[0_24px_70px_rgba(0,0,0,0.08)] border border-dark/5">
                      <video
                        src="/vid1.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-sage/10 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.05),transparent_42%)]" />
                    </div>
                  </div>
                </motion.div>

                {/* TEXT */}
                <div className="order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="uppercase tracking-[0.2em] text-sm text-gold-dark font-medium">
                      Nossa Filosofia
                    </span>
                    <span className="text-gold/70 text-xs tracking-[0.3em]">
                      ●●●
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark leading-[1.08] mb-8 max-w-xl">
                    A naturalidade como
                    <span className="block italic text-sage-dark">
                      assinatura.
                    </span>
                  </h2>

                  <div className="space-y-6 text-lg text-muted font-light max-w-xl leading-[1.95]">
                    <p>
                      Na Clínica Perfeita, acreditamos que a verdadeira beleza
                      reside na harmonia e na preservação da sua essência.
                    </p>
                    <p>
                      Sob a direção técnica da Dra. Paula Gabriela de Souza, unimos
                      ciência avançada, tecnologia de ponta e um olhar refinado
                      para entregar resultados que inspiram confiança e bem-estar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================= MOBILE SEM ANIMAÇÃO ========================= */}
      <section className="relative md:hidden bg-[#f8f5f1] overflow-hidden">
        <div className="absolute inset-0 bg-[#f8f5f1]" />
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[320px] h-[180px] rounded-full bg-gold/6 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-40px] right-[-20px] w-[180px] h-[140px] rounded-full bg-[#d8c8b4]/20 blur-3xl pointer-events-none" />

        <div className="relative container mx-auto px-6 pt-28 pb-16">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/15 bg-white/85 px-3.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
                <BotanicalMotif size={15} className="opacity-45" />
                <span className="text-[9px] uppercase tracking-[0.22em] text-dark/55">
                  Estética avançada
                </span>
              </div>
            </div>

            <h1 className="text-[2.7rem] leading-[1.02] font-serif text-dark mb-4 max-w-sm">
              Beleza refinada,
              <span className="block text-gold">resultado natural</span>
            </h1>

            <p className="text-base font-serif italic text-dark/68 mb-7 max-w-[19rem] leading-relaxed">
              Estética avançada com leveza, precisão e uma experiência acolhedora.
            </p>

            <div className="w-full flex flex-col gap-3 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-dark text-offwhite rounded-full text-[11px] uppercase tracking-[0.18em] shadow-[0_12px_28px_rgba(0,0,0,0.09)]"
              >
                Agendar avaliação
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-gold/80 text-gold rounded-full text-[11px] uppercase tracking-[0.18em]"
              >
                Ver tratamentos
              </a>
            </div>

            <div className="relative w-full max-w-[340px] mx-auto mb-8">
              <div className="relative aspect-[4/5] w-full">
                <div className="absolute inset-0 rounded-[1.8rem] border border-gold/18 translate-x-2.5 translate-y-2.5" />
                <div className="absolute inset-0 rounded-[1.8rem] overflow-hidden bg-white/90 border border-dark/5 shadow-[0_18px_48px_rgba(0,0,0,0.07)]">
                  <img
                    src="/hero-clinic.jpg"
                    alt="Ambiente sofisticado da Clínica Perfeita"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_35%,rgba(30,24,18,0.18)_100%)]" />

                  <div className="absolute left-4 right-4 bottom-4">
                    <div className="rounded-[1.2rem] border border-white/55 bg-white/78 backdrop-blur-xl px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                      <p className="text-[9px] uppercase tracking-[0.22em] text-dark/40 mb-1.5 text-center">
                        Cuidado, leveza e sofisticação
                      </p>
                      <p className="text-dark/72 text-sm leading-relaxed text-center">
                        Uma experiência estética mais acolhedora em cada detalhe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.22em] text-dark/42 mb-14 flex-wrap">
              <span>Naturalidade</span>
              <span className="text-gold/70">•</span>
              <span>Sofisticação</span>
              <span className="text-gold/70">•</span>
              <span>Acolhimento</span>
            </div>

            <div className="w-full">
              <div className="relative aspect-[4/5] w-full max-w-[320px] mx-auto mb-8">
                <div className="absolute inset-0 rounded-[1.8rem] border border-gold/20 -translate-x-2 translate-y-2" />
                <div className="absolute inset-0 rounded-[1.8rem] overflow-hidden bg-sage-light border border-dark/5 shadow-[0_18px_48px_rgba(0,0,0,0.07)]">
                  <video
                    src="/vid1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-sage/10 mix-blend-multiply" />
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className="uppercase tracking-[0.2em] text-xs text-gold-dark font-medium">
                    Nossa Filosofia
                  </span>
                  <span className="text-gold/70 text-[10px] tracking-[0.3em]">
                    ●●●
                  </span>
                </div>

                <h2 className="text-[2.15rem] font-serif text-dark leading-[1.08] mb-6 max-w-sm">
                  A naturalidade como
                  <span className="block italic text-sage-dark">
                    assinatura.
                  </span>
                </h2>

                <div className="space-y-5 text-[15px] text-muted font-light leading-7 max-w-sm">
                  <p>
                    Na Clínica Perfeita, acreditamos na harmonia e na preservação
                    da sua essência.
                  </p>
                  <p>
                    Unimos técnica, tecnologia e sensibilidade para entregar
                    resultados sofisticados e confiantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}