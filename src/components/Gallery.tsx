import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import { BotanicalMotif } from './BotanicalMotif';
const galleryImages = [
{
  src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2940&auto=format&fit=crop',
  alt: 'Ambiente da clínica',
  className:
  'col-span-1 md:col-span-1 row-span-2 aspect-[3/4] md:aspect-auto'
},
{
  src: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2940&auto=format&fit=crop',
  alt: 'Produtos utilizados',
  className: 'col-span-1 md:col-span-1 row-span-1 aspect-square'
},
{
  src: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=2940&auto=format&fit=crop',
  alt: 'Detalhe botânico',
  className: 'col-span-1 md:col-span-1 row-span-1 aspect-square'
},
{
  src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2940&auto=format&fit=crop',
  alt: 'Sala de atendimento',
  className: 'col-span-1 md:col-span-2 row-span-1 aspect-[16/9]'
},
{
  src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2940&auto=format&fit=crop',
  alt: 'Procedimento',
  className: 'col-span-1 md:col-span-1 row-span-1 aspect-square'
}];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-20">
            <BotanicalMotif size={30} className="mb-6" />
            <span className="uppercase tracking-[0.2em] text-sm text-sage-dark font-medium mb-4 block">
              O Espaço
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-dark">
              Um refúgio de{' '}
              <span className="italic text-gold-dark">serenidade.</span>
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {galleryImages.map((image, index) =>
          <StaggerItem
            key={index}
            className={`overflow-hidden group border border-sage/30 ${image.className}`}>
            
              <div className="w-full h-full relative bg-sage-light">
                <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110" />
              
                <div className="absolute inset-0 bg-sage-dark/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </StaggerItem>
          )}
        </StaggerContainer>
      </div>
    </section>);

}