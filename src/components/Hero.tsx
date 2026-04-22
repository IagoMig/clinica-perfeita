import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BotanicalMotif } from './BotanicalMotif';

export function Hero() {
  const { scrollY } = useScroll();

  // Suavizado para mobile (menos deslocamento pesado)
  const y = useTransform(scrollY, [0, 800], [0, 80]);

  return (
    <section className="relative w-full min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 order-2 lg:order-1">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <BotanicalMotif size={40} className="mb-6 opacity-80" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-dark leading-[1.05] mb-4"
            >
              Clínica Perfeita
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-xl md:text-2xl lg:text-3xl font-serif italic text-dark/70 mb-8"
            >
              Beleza que inspira confiança.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 60 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className="h-[1px] bg-gold mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="text-base md:text-lg text-dark/80 max-w-md font-light mb-10 leading-relaxed"
            >
              Elevando a estética a uma forma de arte. Tratamentos
              personalizados em um ambiente de serenidade absoluta no coração de
              Curitiba.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.7,
              }}
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3 border border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-500 rounded-full text-xs md:text-sm uppercase tracking-widest"
              >
                Descubra Nossos Tratamentos
              </a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 w-full max-w-sm mx-auto lg:max-w-none">
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
              }}
              className="relative aspect-[3/4] w-full"
            >
              
              {/* Moldura */}
              <div className="absolute inset-0 border border-gold translate-x-3 translate-y-3 z-0"></div>

              {/* Container */}
              <div className="absolute inset-0 overflow-hidden z-10 bg-sage-light flex items-center justify-center p-6">
                
                <motion.img
                  style={{ y }}
                  src="/logo.png"
                  alt="Logo Clínica"
                  className="w-full h-full object-contain opacity-95"
                />

                {/* Overlay leve */}
                <div className="absolute inset-0 bg-sage/10 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold/30"></div>
    </section>
  );
}