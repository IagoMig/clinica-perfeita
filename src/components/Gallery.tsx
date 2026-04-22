import React from 'react';
import { motion } from 'framer-motion';
import { BotanicalMotif } from './BotanicalMotif';

const galleryImages = [
  {
    src: '/galeria/2.mp4',
    alt: 'Ambiente da clínica',
    className:
      'col-span-1 md:col-span-1 row-span-2 aspect-[3/4] md:aspect-auto',
    type: 'video',
  },
  {
    src: '/galeria/1.jpg',
    alt: 'Produtos utilizados',
    className: 'col-span-1 md:col-span-1 row-span-1 aspect-square',
    type: 'image',
  },
  {
    src: '/galeria/3.jpg',
    alt: 'Detalhe botânico',
    className: 'col-span-1 md:col-span-1 row-span-1 aspect-square',
    type: 'image',
  },
  {
    src: '/galeria/4.jpg',
    alt: 'Sala de atendimento',
    className: 'col-span-1 md:col-span-2 row-span-1 aspect-[16/9]',
    type: 'image',
  },
  {
    src: '/galeria/5.mp4',
    alt: 'Procedimento',
    className: 'col-span-1 md:col-span-1 row-span-1 aspect-square',
    type: 'video',
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-32 md:py-40 bg-[#fbf7f2] overflow-hidden"
    >
      {/* fundo sofisticado */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-gold/8 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-60px] w-[300px] h-[220px] rounded-full bg-sage/8 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.45),transparent_28%,rgba(0,0,0,0.015)_100%)]" />
      </div>

      {/* marca d’água */}
      <div className="absolute top-1/2 right-[-120px] -translate-y-1/2 opacity-[0.05] pointer-events-none hidden lg:block">
        <BotanicalMotif size={420} color="#B89B72" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {/* topo */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <div className="flex flex-col items-center">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-gold text-xs tracking-[0.3em]">●●●</span>
              <span className="uppercase tracking-[0.22em] text-xs md:text-sm text-sage-dark font-medium">
                O Espaço
              </span>
              <span className="text-gold text-xs tracking-[0.3em]">●●●</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[4.2rem] font-serif text-dark leading-[1.02]">
              Um ambiente de
              <span className="block italic text-gold-dark">
                calma e elegância.
              </span>
            </h2>

            <div className="w-20 h-[1px] bg-gold mt-8 mb-7" />

            <p className="text-base md:text-lg text-dark/70 font-light leading-relaxed max-w-2xl">
              Cada detalhe foi pensado para transmitir acolhimento, sofisticação
              e bem-estar, criando uma atmosfera serena para uma experiência
              estética mais exclusiva.
            </p>
          </div>
        </motion.div>

        {/* galeria */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.85,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={item.className}
              >
                <div className="group relative h-full">
                  {/* moldura deslocada */}
                  <div className="absolute inset-0 rounded-[1.6rem] border border-gold/20 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4" />

                  {/* card */}
                  <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-[#d9c6a8]/25 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-10" />

                    <div className="relative w-full h-full bg-[#eef1ec] overflow-hidden">
                      {item.type === 'video' ? (
                        <video
                          src={item.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:brightness-[1.03]"
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          className="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:brightness-[1.03]"
                        />
                      )}

                      {/* overlay refinado */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,14,14,0.16),transparent_35%,rgba(255,255,255,0.05))]" />
                      <div className="absolute inset-0 bg-sage/5 mix-blend-multiply opacity-80" />

                      {/* label */}
                      <div className="absolute left-4 right-4 bottom-4 md:left-5 md:right-5 md:bottom-5 z-20">
                        <div className="rounded-full border border-white/35 bg-white/18 backdrop-blur-xl px-4 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.08)] w-fit max-w-full">
                          <span className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/95">
                            {item.alt}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* detalhe inferior */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="flex items-center gap-4 mt-12 md:mt-14"
        >
          <div className="w-12 h-[1px] bg-gold/40" />
          <span className="text-[10px] uppercase tracking-[0.28em] text-dark/40">
            Clínica Perfeita
          </span>
          <div className="flex-1 h-[1px] bg-gold/15" />
        </motion.div>
      </div>
    </section>
  );
}