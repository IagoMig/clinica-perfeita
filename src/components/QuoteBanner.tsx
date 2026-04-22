import React from 'react';
import { FadeIn } from './FadeIn';
import {
  Camera,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Play,
  CheckCircle2,
  Grid3X3,
  Clapperboard,
  UserSquare2
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
    title:
      'No Dia do Beijo, celebramos mais do que um gesto… celebramos a beleza dos detalhes. 💋',
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

const stories = [
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
];

export function QuoteBanner() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-[#f5efe8]">
      {/* FUNDO PREMIUM */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_34%),radial-gradient(circle_at_top_right,rgba(207,173,119,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(97,122,101,0.14),transparent_32%),linear-gradient(180deg,#f8f3ee_0%,#f1ebe3_45%,#efe7de_100%)]" />

        <div className="absolute -top-24 left-[8%] w-[26rem] h-[26rem] rounded-full bg-white/60 blur-3xl" />
        <div className="absolute top-[12%] right-[-6rem] w-[28rem] h-[28rem] rounded-full bg-[#d8b98a]/18 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[-5rem] w-[24rem] h-[24rem] rounded-full bg-[#93a08a]/14 blur-3xl" />
        <div className="absolute bottom-[5%] right-[10%] w-[18rem] h-[18rem] rounded-full bg-white/40 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.16] mix-blend-soft-light bg-[linear-gradient(rgba(120,96,72,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(120,96,72,0.22)_1px,transparent_1px)] bg-[size:28px_28px]" />

        <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] bg-[size:22px_22px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.5),transparent_18%,transparent_82%,rgba(255,255,255,0.34))]" />
      </div>

      {/* MOLDURAS DECORATIVAS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-6 md:left-12 w-20 md:w-28 h-20 md:h-28 rounded-[2rem] border border-white/40 bg-white/10 backdrop-blur-sm rotate-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)]" />
        <div className="absolute bottom-16 right-6 md:right-12 w-24 md:w-36 h-24 md:h-36 rounded-[2.4rem] border border-[#cdae80]/30 bg-gradient-to-br from-white/20 to-transparent rotate-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
        <FadeIn>
          <div className="max-w-7xl mx-auto">
            {/* TOPO */}
            <div className="text-center mb-10 md:mb-14 lg:mb-16">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.05)] mb-6">
                <Camera className="w-4 h-4 text-[#9f7a45]" />
                <span className="text-[11px] md:text-sm uppercase tracking-[0.24em] text-dark/70 font-medium">
                  Instagram
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-serif text-dark leading-[1.05] mb-5">
                Conteúdo que traduz
                <br />
                <span className="italic text-sage-dark">
                  beleza, cuidado e presença.
                </span>
              </h2>

              <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-dark/70 font-light leading-relaxed">
                Uma vitrine viva da clínica, com estética refinada, linguagem
                visual contemporânea e uma experiência inspirada no universo do
                Instagram.
              </p>
            </div>

            {/* BLOCO PREMIUM */}
            <div className="relative">
              {/* GLOW EXTERNO */}
              <div className="absolute -inset-4 md:-inset-6 rounded-[2.2rem] md:rounded-[2.8rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),rgba(255,255,255,0.1)_45%,transparent_72%)] blur-2xl" />

              {/* BORDA DE FUNDO */}
              <div className="absolute inset-0 rounded-[2rem] md:rounded-[2.6rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.22))] translate-y-3 md:translate-y-4 scale-[0.985] opacity-60" />

              <div className="relative rounded-[2rem] md:rounded-[2.6rem] border border-white/55 bg-white/72 backdrop-blur-[22px] shadow-[0_25px_100px_rgba(70,52,35,0.10)] overflow-hidden">
                {/* BRILHO TOPO */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/40 to-transparent pointer-events-none z-10" />

                {/* ========================= */}
                {/* MOBILE LAYOUT - INSTAGRAM */}
                {/* ========================= */}
                <div className="block md:hidden">
                  {/* top bar */}
                  <div className="px-4 pt-4 pb-3 bg-white/88 border-b border-black/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="relative shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px]">
                            <div className="w-full h-full rounded-full bg-white p-[2px]">
                              <div className="w-full h-full rounded-full overflow-hidden">
                                <img
                                  src="/logo2.png"
                                  alt="Perfil da clínica"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-[15px] font-semibold text-dark truncate">
                              clinicaperfeita
                            </h3>
                            <CheckCircle2 className="w-4 h-4 text-sky-500 fill-sky-500/10 shrink-0" />
                          </div>
                          <p className="text-[11px] text-dark/55 truncate">
                            Clínica e Estética Avançada em Curitiba
                          </p>
                        </div>
                      </div>

                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 rounded-full border border-black/10 bg-white px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-dark/70 font-medium"
                      >
                        Ver perfil
                      </a>
                    </div>
                  </div>

                  {/* bio mobile */}
                  <div className="px-4 pt-4 pb-3 bg-white/70">
                    <div className="grid grid-cols-3 gap-2 text-center mb-4">
                      <div className="rounded-2xl bg-white/70 border border-black/5 py-3">
                        <div className="text-dark font-semibold text-base leading-none">
                          256
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-dark/45 mt-1">
                          Posts
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/70 border border-black/5 py-3">
                        <div className="text-dark font-semibold text-base leading-none">
                          3.679
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-dark/45 mt-1">
                          Seguidores
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/70 border border-black/5 py-3">
                        <div className="text-dark font-semibold text-base leading-none">
                          185
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-dark/45 mt-1">
                          Seguindo
                        </div>
                      </div>
                    </div>

                    <div className="text-[13px] leading-relaxed text-dark/85">
                      <p className="font-semibold text-dark">
                        Perfeita | Clínica e Estética Avançada em Curitiba
                      </p>
                      <p className="mt-1">🌸 Realçando sua melhor versão</p>
                      <p>🤝 Atendimento personalizado e resultados que surpreendem</p>
                      <p className="mt-1 text-dark/60">wa.me/554132060016</p>
                    </div>
                  </div>

                  {/* stories mobile */}
                  <div className="px-4 pt-3 pb-4 bg-white/55">
                    <div className="flex gap-4 overflow-x-auto no-scrollbar">
                      {stories.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center gap-1.5 min-w-[72px] max-w-[72px]"
                        >
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px] shrink-0">
                            <div className="w-full h-full rounded-full bg-white p-[2px]">
                              <div className="w-full h-full rounded-full overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </div>

                          <span className="text-[11px] text-dark/70 whitespace-nowrap overflow-hidden text-ellipsis w-full text-center">
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* tabs mobile */}
                  <div className="border-t border-black/8 bg-white/72">
                    <div className="grid grid-cols-3 items-center text-center">
                      <button className="relative flex items-center justify-center py-3 text-dark">
                        <Grid3X3 className="w-4 h-4" />
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-dark" />
                      </button>
                      <button className="flex items-center justify-center py-3 text-dark/40">
                        <Clapperboard className="w-4 h-4" />
                      </button>
                      <button className="flex items-center justify-center py-3 text-dark/40">
                        <UserSquare2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* posts mobile */}
                  <div className="grid grid-cols-3 gap-[2px] bg-black/5">
                    {instagramPosts.map((post) => (
                      <article
                        key={post.id}
                        className="relative aspect-square overflow-hidden bg-[#e8ece7]"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />

                        {post.type === 'reel' && (
                          <div className="absolute top-2 right-2">
                            <Play className="w-4 h-4 text-white fill-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]" />
                          </div>
                        )}

                        <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/50 to-transparent">
                          <p className="text-[10px] leading-snug text-white/92 line-clamp-2">
                            {post.title}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* ========================= */}
                {/* DESKTOP / TABLET PREMIUM */}
                {/* ========================= */}
                <div className="hidden md:block">
                  {/* PROFILE BAR */}
                  <div className="border-b border-dark/10 px-6 lg:px-8 py-6 lg:py-7 bg-white/64">
                    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-7">
                      <div className="flex items-center gap-5 lg:gap-6">
                        <div className="relative shrink-0">
                          <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-br from-[#f9ce34]/25 via-[#ee2a7b]/20 to-[#6228d7]/25" />
                          <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-[2px]">
                              <img
                                src="/logo2.png"
                                alt="Perfil da clínica"
                                className="w-full h-full object-cover rounded-full"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-xl lg:text-2xl font-medium text-dark">
                              clinicaperfeita
                            </h3>
                            <CheckCircle2 className="w-4 h-4 text-sky-500 fill-sky-500/10" />
                          </div>

                          <p className="text-sm lg:text-[15px] text-dark/60 mt-1">
                            Perfeita | Clínica e Estética Avançada em Curitiba
                          </p>

                          <p className="text-sm lg:text-[15px] text-dark/82 mt-3 max-w-2xl leading-relaxed">
                            🌸 Realçando sua melhor versão <br />
                            🤝 Atendimento personalizado e resultados que surpreendem <br />
                            Agende agora sua avaliação 👇🏻 <br />
                            wa.me/554132060016
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 lg:gap-5">
                        {[
                          { value: '256', label: 'Posts' },
                          { value: '3.679', label: 'Seguidores' },
                          { value: '185', label: 'Seguindo' }
                        ].map((stat) => (
                          <div
                            key={stat.label}
                            className="min-w-[112px] lg:min-w-[128px] rounded-[1.4rem] border border-white/60 bg-white/62 backdrop-blur-lg px-5 py-4 text-center shadow-[0_10px_35px_rgba(0,0,0,0.04)]"
                          >
                            <div className="text-dark font-semibold text-xl leading-none">
                              {stat.value}
                            </div>
                            <div className="text-[11px] uppercase tracking-[0.18em] text-dark/45 mt-2">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* STORIES */}
                  <div className="px-6 lg:px-8 pt-6 pb-3 bg-white/42">
                    <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
                      {stories.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center gap-2 min-w-[78px] cursor-pointer group"
                        >
                          <div className="relative">
                            <div className="absolute inset-0 rounded-full blur-lg bg-gradient-to-br from-[#f9ce34]/18 via-[#ee2a7b]/18 to-[#6228d7]/18 opacity-0 group-hover:opacity-100 transition duration-300" />
                            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px] shrink-0 transition-all duration-300 group-hover:scale-105">
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
                          </div>

                          <span className="text-xs text-dark/70 whitespace-nowrap group-hover:text-dark transition">
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* TABS */}
                  <div className="px-6 lg:px-8 pt-5">
                    <div className="flex items-center justify-center gap-10 border-t border-dark/10">
                      <button className="relative flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-dark font-medium py-4">
                        <Grid3X3 className="w-4 h-4" />
                        Publicações
                        <span className="absolute top-0 left-0 w-full h-[1.5px] bg-dark" />
                      </button>

                      <button className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-dark/45 font-medium py-4">
                        <Clapperboard className="w-4 h-4" />
                        Reels
                      </button>

                      <button className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-dark/45 font-medium py-4">
                        <UserSquare2 className="w-4 h-4" />
                        Marcados
                      </button>
                    </div>
                  </div>

                  {/* GRID */}
                  <div className="px-6 lg:px-8 pb-8 lg:pb-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
                      {instagramPosts.map((post, index) => (
                        <FadeIn key={post.id} delay={index * 0.08}>
                          <article className="group rounded-[1.8rem] overflow-hidden bg-white/88 border border-dark/8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_60px_rgba(0,0,0,0.10)] transition-all duration-500">
                            {/* IMAGE */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-[#edf1eb]">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                              />

                              <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-black/8 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-400" />

                              {post.type === 'reel' && (
                                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/55 text-white px-3 py-1.5 backdrop-blur-sm border border-white/10">
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
                                    <span className="text-sm font-medium">
                                      {post.likes}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <MessageCircle className="w-5 h-5" />
                                    <span className="text-sm font-medium">
                                      {post.comments}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* ACTIONS */}
                            <div className="p-4 lg:p-5">
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
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 md:mt-10 flex justify-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 md:px-7 py-3.5 md:py-4 rounded-full border border-[#c39c63] text-[#8b6735] hover:bg-[#caa56f] hover:text-[#1e1e1e] transition-all duration-500 bg-white/60 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                <Camera className="w-4 h-4" />
                <span className="text-[11px] md:text-sm uppercase tracking-[0.2em] font-medium">
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