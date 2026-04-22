import React from 'react';
import { FadeIn } from './FadeIn';
import {
  Camera,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Play,
  CheckCircle2
} from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: '/instagram/post1.jpg',
    likes: '1.2 mil',
    comments: 38,
    title: '✨ Tecnologia que transforma, resultados que você sente',
    type: 'reel'
  },
  {
    id: 2,
    image: '/instagram/post2.jpg',
    likes: '982',
    comments: 24,
    title: 'No Dia do Beijo, celebramos mais do que um gesto… celebramos a beleza dos detalhes. 💋',
    type: 'reel'
  },
  {
    id: 3,
    image: '/instagram/post3.jpg',
    likes: '1.8 mil',
    comments: 51,
    title: 'Resultados sutis e elegantes',
    type: 'reel'
  }
];

export function QuoteBanner() {
  return (
    <section className="py-24 md:py-32 bg-sage relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <FadeIn>
          <div className="max-w-6xl mx-auto">
            {/* TOP */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-sm mb-6">
                <Camera className="w-4 h-4 text-gold-dark" />
                <span className="text-xs md:text-sm uppercase tracking-[0.24em] text-dark/70 font-medium">
                  Instagram
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark leading-tight mb-5">
                Conteúdo que traduz <br />
                <span className="italic text-sage-dark">beleza, cuidado e presença.</span>
              </h2>

              <p className="max-w-2xl mx-auto text-base md:text-lg text-dark/70 font-light leading-relaxed">
                Um espaço para apresentar vídeos, bastidores, resultados,
                orientações e a essência da clínica com uma estética inspirada
                no universo do Instagram.
              </p>
            </div>

            {/* INSTAGRAM CARD */}
            <div className="rounded-[2rem] border border-white/50 bg-white/70 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* PROFILE BAR */}
              <div className="border-b border-dark/10 px-5 md:px-8 py-5 md:py-6 bg-white/60">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex items-center gap-4 md:gap-5">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px]">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <img
                            src="/logo2.png"
                            alt="Perfil da clínica"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg md:text-xl font-medium text-dark">
                          clinicaperfeita
                        </h3>
                        <CheckCircle2 className="w-4 h-4 text-sky-500 fill-sky-500/10" />
                      </div>

                      <p className="text-sm text-dark/60 mt-1">
                        Perfeita | Clínica e Estética Avançada em Curitiba
                      </p>

                      <p className="text-sm md:text-[15px] text-dark/80 mt-2 max-w-xl leading-relaxed">
                        🌸 Realçando sua melhor versão <br />
                        🤝 Atendimento personalizado e resultados que surpreendem <br />
                        Agende agora sua avaliação 👇🏻 <br />
                        wa.me/554132060016
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 md:gap-8 text-center">
                    <div>
                      <div className="text-dark font-semibold text-lg">256</div>
                      <div className="text-xs uppercase tracking-[0.18em] text-dark/50">
                        Posts
                      </div>
                    </div>

                    <div>
                      <div className="text-dark font-semibold text-lg">3.679</div>
                      <div className="text-xs uppercase tracking-[0.18em] text-dark/50">
                        Seguidores
                      </div>
                    </div>

                    <div>
                      <div className="text-dark font-semibold text-lg">185</div>
                      <div className="text-xs uppercase tracking-[0.18em] text-dark/50">
                        Seguindo
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* STORIES */}
              <div className="px-5 md:px-8 pt-6 pb-2 bg-white/40">
                <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">

                  {[
                    {
                      title: 'Antes e Depois',
                      image: '/instagram/antes-depois.jpg'
                    },
                    {
                      title: 'Laser CO2',
                      image: '/instagram/laser-co2.jpg'
                    },
                    {
                      title: 'Rinomodelação',
                      image: '/instagram/rinomodelacao.jpg'
                    },
                    {
                      title: 'Lábios',
                      image: '/instagram/labios.jpg'
                    },
                    {
                      title: 'Vocês',
                      image: '/instagram/voces.jpg'
                    },
                    {
                      title: 'Massagens',
                      image: '/instagram/massagens.jpg'
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 min-w-[76px] cursor-pointer group"
                    >
                      {/* BORDA INSTAGRAM */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px] shrink-0 transition-all duration-300 group-hover:scale-105">
                        
                        {/* IMAGEM */}
                        <div className="w-full h-full rounded-full bg-white p-[2px]">
                          <div className="w-full h-full rounded-full overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        </div>
                      </div>

                      {/* TEXTO */}
                      <span className="text-xs text-dark/70 whitespace-nowrap group-hover:text-dark transition">
                        {item.title}
                      </span>
                    </div>
                  ))}
                  
                </div>
</div>

              {/* TABS */}
              <div className="px-5 md:px-8 pt-5">
                <div className="flex items-center justify-center gap-8 border-t border-dark/10">
                  <button className="relative text-xs uppercase tracking-[0.2em] text-dark font-medium py-4">
                    Publicações
                    <span className="absolute top-0 left-0 w-full h-[1.5px] bg-dark" />
                  </button>
                  <button className="text-xs uppercase tracking-[0.2em] text-dark/45 font-medium py-4">
                    Reels
                  </button>
                  <button className="text-xs uppercase tracking-[0.2em] text-dark/45 font-medium py-4">
                    Marcados
                  </button>
                </div>
              </div>

              {/* GRID */}
              <div className="px-5 md:px-8 pb-8 md:pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {instagramPosts.map((post, index) => (
                    <FadeIn key={post.id} delay={index * 0.08}>
                      <article className="group rounded-[1.6rem] overflow-hidden bg-white border border-dark/8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.1)] transition-all duration-500">
                        {/* IMAGE */}
                        <div className="relative aspect-[4/5] overflow-hidden bg-[#edf1eb]">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-400" />

                          {post.type === 'reel' && (
                            <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/55 text-white px-3 py-1.5 backdrop-blur-sm">
                              <Play className="w-3.5 h-3.5 fill-white" />
                              <span className="text-[11px] uppercase tracking-[0.18em]">
                                Reel
                              </span>
                            </div>
                          )}

                          <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-6 text-white">
                              <div className="flex items-center gap-2">
                                <Heart className="w-5 h-5 fill-white" />
                                <span className="text-sm font-medium">{post.likes}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MessageCircle className="w-5 h-5 fill-white/0" />
                                <span className="text-sm font-medium">{post.comments}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* ACTIONS */}
                        <div className="p-4 md:p-5">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-4 text-dark">
                              <Heart className="w-5 h-5" />
                              <MessageCircle className="w-5 h-5" />
                              <Send className="w-5 h-5" />
                            </div>
                            <Bookmark className="w-5 h-5 text-dark" />
                          </div>

                          <p className="text-sm font-medium text-dark mb-1">
                            {post.likes} curtidas
                          </p>

                          <p className="text-sm text-dark/80 leading-relaxed">
                            <span className="font-semibold text-dark mr-1">
                              clinicaperfeita
                            </span>
                            {post.title}
                          </p>

                          <p className="text-xs text-dark/45 mt-3 uppercase tracking-[0.18em]">
                            Ver todos os comentários
                          </p>
                        </div>
                      </article>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-gold text-gold-dark hover:bg-gold hover:text-dark transition-all duration-500 bg-white/50 backdrop-blur-sm"
              >
                <Camera className="w-4 h-4" />
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
                  Visitar Instagram
                </span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}