import React from 'react';
import { FadeIn } from './FadeIn';
const services = [
  {
    id: 'harmonizacao',
    title: 'Harmonização Facial',
    description:
      'Um conjunto de procedimentos estéticos combinados para melhorar a simetria do rosto, transformar algumas características e retardar o envelhecimento da pele, sempre respeitando seus traços naturais.',
    image: '/services/harmonizacao.PNG'
  },
  {
    id: 'bioestimuladores',
    title: 'Bioestimuladores',
    description:
      'Substâncias injetáveis que estimulam as células do próprio corpo a produzir colágeno, promovendo um efeito rejuvenescedor natural, gradual e duradouro, restaurando a firmeza da pele.',
    image: '/services/bioestimuladores.jpg'
  },
  {
    id: 'preenchimento',
    title: 'Preenchimento Labial',
    description:
      'Técnica minimamente invasiva para delinear o contorno, aumentar o volume ou projetar os lábios, utilizando ácido hialurônico para um resultado elegante, hidratado e perfeitamente proporcional.',
    image: '/services/preenchimento.jpg'
  },
  {
    id: 'botox',
    title: 'Toxina Botulínica',
    description:
      'O tratamento padrão-ouro para suavizar rugas e linhas de expressão dinâmicas.',
    image: '/services/botox.jpg'
  },
  {
    id: 'skinbooster',
    title: 'Skinbooster',
    description:
      'Hidratação profunda que melhora elasticidade e suaviza linhas.',
    image: '/services/skinbooster.jpg'
  },
  {
    id: 'limpeza',
    title: 'Limpeza de Pele',
    description:
      'Remove impurezas e melhora a textura da pele.',
    image: '/services/limpeza.jpg'
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-offwhite">
      <div className="container mx-auto px-6 md:px-12 mb-24">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-gold text-xs tracking-[0.3em]">●●●</span>
              <span className="uppercase tracking-[0.2em] text-sm text-sage-dark font-medium">
                Especialidades
              </span>
              <span className="text-gold text-xs tracking-[0.3em]">●●●</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-dark mb-8">
              Tratamentos de{' '}
              <span className="italic text-gold-dark">excelência.</span>
            </h2>
          </div>
        </FadeIn>
      </div>

      <div className="flex flex-col w-full">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const numberStr = `0${index + 1}`;
          return (
            <div
              key={service.id}
              className="relative w-full py-16 md:py-24 border-t border-gold/20">
              
              <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row relative items-center">
                  {/* Image Container (65% on desktop) */}
                  <div
                    className={`w-full lg:w-[65%] relative z-0 ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                    
                    <FadeIn direction={isEven ? 'left' : 'right'}>
                      <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] w-full overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                        
                        <div className="absolute inset-0 bg-sage/5 mix-blend-multiply"></div>
                      </div>
                    </FadeIn>
                  </div>

                  {/* Text Card Container (Overlapping) */}
                  <div
                    className={`w-full lg:w-[45%] lg:absolute z-10 mt-[-10%] lg:mt-0 ${isEven ? 'lg:left-0' : 'lg:right-0'}`}>
                    
                    <FadeIn direction={isEven ? 'right' : 'left'} delay={0.2}>
                      <div className="bg-offwhite p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
                        {/* Large Background Number */}
                        <span className="absolute -top-10 -right-4 text-[150px] font-serif text-gold/10 leading-none select-none pointer-events-none">
                          {numberStr}
                        </span>

                        <div className="relative z-10">
                          <span className="text-gold font-serif text-xl mb-4 block">
                            {numberStr}.
                          </span>
                          <h3 className="text-3xl md:text-4xl font-serif text-dark mb-6 leading-tight">
                            {service.title}
                          </h3>
                          <p className="text-base md:text-lg text-muted font-light leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </div>);

        })}
      </div>

      <div className="w-full h-[1px] bg-gold/20"></div>
    </section>);

}