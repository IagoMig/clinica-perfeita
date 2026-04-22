import React from 'react';
import { FadeIn } from './FadeIn';

export function About() {
  return (
    <section
      id="about"
      className="py-32 md:py-48 bg-offwhite relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* VIDEO */}
          <div className="order-2 lg:order-1">
            <FadeIn direction="right">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none lg:ml-auto">
                
                {/* Moldura */}
                <div className="absolute inset-0 border border-gold -translate-x-3 translate-y-3 z-0"></div>

                {/* Container */}
                <div className="absolute inset-0 overflow-hidden z-10 bg-sage-light">
                  
                  <video
                    src="/vid1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay leve */}
                  <div className="absolute inset-0 bg-sage/10 mix-blend-multiply"></div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* TEXTO */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <FadeIn delay={0.2}>
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
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}