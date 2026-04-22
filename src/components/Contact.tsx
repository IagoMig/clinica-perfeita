import React from 'react';
import { FadeIn } from './FadeIn';
import { BotanicalMotif } from './BotanicalMotif';
export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-sage-light relative overflow-hidden">
      
      {/* Large background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <BotanicalMotif size={600} color="#A3BBAA" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto bg-offwhite p-12 md:p-20 shadow-xl border border-gold/20 text-center relative">
            {/* Decorative corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/40"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/40"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold/40"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/40"></div>

            <span className="uppercase tracking-[0.2em] text-sm text-gold-dark font-medium mb-6 block">
              Visite-nos
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark leading-tight mb-12">
              Sua jornada <br />
              <span className="italic text-sage-dark">começa aqui.</span>
            </h2>

            <div className="w-24 h-[1px] bg-gold mx-auto mb-12"></div>

            <div className="space-y-10">
              <div>
                <h4 className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
                  Endereço
                </h4>
                <p className="text-xl md:text-2xl font-serif text-dark leading-relaxed">
                  Avenida Visconde de Guarapuava 2764
                  <br />
                  Conj. 1006, Centro
                  <br />
                  Curitiba - PR
                </p>
                <a
                  href="https://maps.google.com/?q=Avenida+Visconde+de+Guarapuava+2764+Curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-gold hover:text-gold-dark transition-colors border-b border-gold/30 pb-1">
                  
                  Ver no Google Maps
                </a>
              </div>

              <div className="w-12 h-[1px] bg-gold/30 mx-auto"></div>

              <div>
                <h4 className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
                  Contato
                </h4>
                <p className="text-xl md:text-2xl font-serif text-dark leading-relaxed">
                  <a
                    href="https://wa.me/5541999999999"
                    className="hover:text-gold transition-colors duration-300">
                    
                    +55 41 99999-9999
                  </a>
                </p>
              </div>

              <div className="w-12 h-[1px] bg-gold/30 mx-auto"></div>

              <div>
                <h4 className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
                  Horário de Atendimento
                </h4>
                <p className="text-lg font-light text-dark leading-relaxed">
                  Segunda a Sexta: 09h às 19h
                  <br />
                  Sábados: 09h às 13h
                </p>
              </div>
            </div>

            <div className="w-24 h-[1px] bg-gold mx-auto mt-12"></div>
          </div>
        </FadeIn>
      </div>
    </section>);

}