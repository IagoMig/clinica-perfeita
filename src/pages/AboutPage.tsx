import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { BotanicalMotif } from '../components/BotanicalMotif';
import { Footer } from '../components/Footer';

const fadeUp = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const differentials = [
  {
    number: '01',
    title: 'Atendimento com escuta real',
    description:
      'Cada paciente é recebida de forma individual, com atenção genuína, orientação clara e uma experiência mais próxima e personalizada.',
  },
  {
    number: '02',
    title: 'Naturalidade como assinatura',
    description:
      'Valorizamos resultados sofisticados e harmônicos, preservando a essência de cada rosto com equilíbrio e bom senso estético.',
  },
  {
    number: '03',
    title: 'Ambiente pensado nos detalhes',
    description:
      'A clínica foi concebida para transmitir serenidade, conforto e sofisticação em cada textura, forma e atmosfera.',
  },
  {
    number: '04',
    title: 'Excelência com sensibilidade',
    description:
      'Unimos cuidado técnico, delicadeza e atenção ao processo para transformar o autocuidado em uma experiência mais elevada.',
  },
];

const pillars = [
  'Sofisticação discreta',
  'Resultados naturais',
  'Cuidado individualizado',
  'Experiência acolhedora',
];

type MediaType = 'image' | 'video';

type MediaAsset = {
  type: MediaType;
  src: string;
  alt?: string;
  poster?: string;
};

const mediaAssets = {
  heroMain: {
    type: 'video',
    src: '/about/1.mp4',
    alt: 'Ambiente elegante da Clínica Perfeita',
  } as MediaAsset,

  sideRoom: {
    type: 'image',
    src: '/about/2.jpg',
    alt: 'Interior luxuoso da clínica',
  } as MediaAsset,

  editorialDetail: {
    type: 'video',
    src: '/about/3.mp4',
    alt: 'Detalhes sofisticados da clínica',
  } as MediaAsset,

  doctor: {
    type: 'image',
    src: '/about/1.jpg',
    alt: 'Profissional da Clínica Perfeita',
  } as MediaAsset,
};

function MediaRenderer({
  media,
  className = '',
}: {
  media: MediaAsset;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || media.type !== 'video') return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const tryPlay = async () => {
      try {
        await video.play();
      } catch (error) {
        console.warn('Autoplay bloqueado no mobile:', error);
      }
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('canplay', tryPlay);
      video.addEventListener('loadeddata', tryPlay);

      return () => {
        video.removeEventListener('canplay', tryPlay);
        video.removeEventListener('loadeddata', tryPlay);
      };
    }
  }, [media]);

  if (media.type === 'video') {
    return (
      <video
        ref={videoRef}
        src={media.src}
        poster={media.poster}
        autoPlay
        muted
        defaultMuted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className={className}
      >
        <source src={media.src} type="video/mp4" />
      </video>
    );
  }

  return (
    <img
      src={media.src}
      alt={media.alt || 'Mídia da Clínica Perfeita'}
      className={className}
      loading="lazy"
    />
  );
}

export function AboutPage() {
  return (
    <main className="bg-[#fbf7f2] text-dark overflow-hidden">
      <div className="fixed top-5 left-5 md:top-7 md:left-7 z-[60]">
        <a
          href="/"
          className="group inline-flex items-center gap-3 rounded-full border border-[#d9c6a8]/35 bg-white/82 backdrop-blur-xl px-4 py-3 text-dark/80 shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-[1px] hover:bg-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]"
          aria-label="Voltar para a página inicial"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 bg-[#faf5ee] text-gold-dark transition-all duration-500 group-hover:bg-gold/10">
            <ArrowLeft size={16} />
          </span>

          <span className="text-[11px] md:text-xs uppercase tracking-[0.22em] font-medium">
            Voltar
          </span>
        </a>
      </div>

      <section className="relative pt-36 md:pt-44 lg:pt-48 pb-20 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[780px] h-[340px] rounded-full bg-gold/8 blur-3xl" />
          <div className="absolute right-[-100px] bottom-[-80px] w-[340px] h-[260px] rounded-full bg-sage/8 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.42),transparent_30%,rgba(0,0,0,0.015)_100%)]" />
          <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] [background-size:22px_22px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <BotanicalMotif size={36} className="opacity-80" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold text-xs tracking-[0.3em]">●●●</span>
                <span className="uppercase tracking-[0.22em] text-xs md:text-sm text-sage-dark font-medium">
                  Sobre a Clínica
                </span>
                <span className="text-gold text-xs tracking-[0.3em]">●●●</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[6.2rem] font-serif leading-[0.94] text-dark max-w-5xl">
                Estética pensada
                <span className="block italic text-gold-dark">
                  com delicadeza, técnica e presença.
                </span>
              </h1>

              <div className="w-24 h-[1px] bg-gold mt-8 mb-8" />

              <p className="max-w-3xl text-base md:text-xl text-dark/70 font-light leading-relaxed">
                A Clínica Perfeita nasceu para oferecer uma experiência estética
                mais refinada, onde acolhimento, naturalidade e sofisticação caminham
                juntos em cada detalhe.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <motion.div {...fadeUp} className="xl:col-span-7">
              <div className="relative h-full min-h-[560px] md:min-h-[680px]">
                <div className="absolute inset-0 rounded-[2.2rem] border border-gold/25 translate-x-4 translate-y-4" />

                <div className="relative h-full rounded-[2.2rem] overflow-hidden border border-dark/6 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.08)]">
                  <div className="absolute inset-0">
                    <MediaRenderer
                      media={mediaAssets.heroMain}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,20,0.12)_0%,rgba(20,20,20,0.18)_30%,rgba(20,20,20,0.42)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.32),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(184,155,114,0.18),transparent_24%)]" />

                  <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10 lg:p-12">
                    <div className="flex items-center justify-between gap-6">
                      <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/12 backdrop-blur-md px-4 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
                        <div className="w-2 h-2 rounded-full bg-gold/80" />
                        <span className="text-[10px] uppercase tracking-[0.24em] text-white/90">
                          Clínica Perfeita
                        </span>
                      </div>

                      <span className="text-[10px] uppercase tracking-[0.26em] text-white/65">
                        Estética avançada
                      </span>
                    </div>

                    <div className="max-w-2xl">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-white/70 mb-5">
                        Um espaço onde o cuidado encontra a beleza
                      </p>

                      <h2 className="text-3xl md:text-5xl lg:text-[4.4rem] font-serif text-white leading-[0.98] drop-shadow-[0_6px_20px_rgba(0,0,0,0.28)]">
                        Sofisticação,
                        <span className="block italic text-[#e4cfb2]">
                          leveza e acolhimento.
                        </span>
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="rounded-[1.4rem] border border-white/15 bg-white/10 backdrop-blur-md px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                        <p className="text-[10px] uppercase tracking-[0.24em] text-white/60 mb-2">
                          Essência
                        </p>
                        <p className="text-white text-lg font-serif leading-snug">
                          Naturalidade
                        </p>
                      </div>

                      <div className="rounded-[1.4rem] border border-white/15 bg-white/10 backdrop-blur-md px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                        <p className="text-[10px] uppercase tracking-[0.24em] text-white/60 mb-2">
                          Experiência
                        </p>
                        <p className="text-white text-lg font-serif leading-snug">
                          Acolhimento
                        </p>
                      </div>

                      <div className="rounded-[1.4rem] border border-white/15 bg-white/10 backdrop-blur-md px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                        <p className="text-[10px] uppercase tracking-[0.24em] text-white/60 mb-2">
                          Resultado
                        </p>
                        <p className="text-white text-lg font-serif leading-snug">
                          Harmonia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="xl:col-span-5">
              <div className="h-full flex flex-col gap-6">
                <div className="rounded-[2rem] border border-[#d9c6a8]/25 bg-[rgba(255,252,248,0.82)] backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                  <span className="uppercase tracking-[0.22em] text-xs md:text-sm text-gold-dark font-medium mb-5 block">
                    Nossa proposta
                  </span>

                  <h3 className="text-3xl md:text-4xl lg:text-[3rem] font-serif text-dark leading-[1.02] mb-6">
                    Cuidar da beleza é também
                    <span className="block italic text-sage-dark">
                      cuidar da confiança.
                    </span>
                  </h3>

                  <p className="text-base md:text-lg text-dark/70 font-light leading-relaxed">
                    Mais do que realizar procedimentos, acreditamos em uma jornada
                    estética construída com atenção, escuta e um olhar sensível para
                    o que torna cada paciente única.
                  </p>
                </div>

                <div className="relative rounded-[2rem] overflow-hidden border border-dark/6 min-h-[320px] shadow-[0_20px_55px_rgba(0,0,0,0.08)]">
                  <MediaRenderer
                    media={mediaAssets.sideRoom}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.02)_0%,rgba(10,10,10,0.38)_100%)]" />
                  <div className="relative z-10 h-full flex items-end p-7 md:p-8">
                    <div className="rounded-[1.4rem] border border-white/15 bg-white/12 backdrop-blur-md p-5 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white">
                          <BotanicalMotif size={18} />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.26em] text-white/70">
                          Luxo discreto
                        </span>
                      </div>

                      <p className="text-lg md:text-xl font-serif text-white leading-relaxed">
                        Um ambiente projetado para transmitir calma, bom gosto e bem-estar
                        desde o primeiro contato.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-24 bg-[#f6f1eb] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-80px] left-[-80px] w-[260px] h-[220px] rounded-full bg-gold/7 blur-3xl" />
          <div className="absolute bottom-[-80px] right-[-70px] w-[280px] h-[220px] rounded-full bg-sage/8 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-5xl mx-auto text-center">
            <p className="text-2xl md:text-4xl lg:text-[3.4rem] font-serif text-dark leading-[1.12]">
              Na Clínica Perfeita, a beleza é tratada com
              <span className="italic text-gold-dark"> equilíbrio, respeito e intenção.</span>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-stretch">
            <motion.div {...fadeUp} className="lg:col-span-5">
              <div className="h-full rounded-[2rem] overflow-hidden border border-dark/6 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <div className="aspect-[4/5]">
                  <MediaRenderer
                    media={mediaAssets.editorialDetail}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="lg:col-span-7">
              <div className="h-full rounded-[2rem] border border-[#d9c6a8]/25 bg-[rgba(255,252,248,0.84)] backdrop-blur-xl p-8 md:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col justify-center">
                <span className="uppercase tracking-[0.22em] text-xs md:text-sm text-sage-dark font-medium mb-5 block">
                  Experiência premium
                </span>

                <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-dark leading-[1.03] mb-7">
                  Beleza, ambiente e cuidado
                  <span className="block italic text-gold-dark">
                    em perfeita harmonia.
                  </span>
                </h2>

                <div className="space-y-6 text-base md:text-lg text-dark/72 font-light leading-relaxed">
                  <p>
                    Cada ambiente foi pensado para transmitir exclusividade, serenidade
                    e confiança. A experiência vai além do procedimento: ela começa
                    no primeiro olhar, no toque dos materiais, na iluminação suave e
                    na sensação de acolhimento.
                  </p>

                  <p>
                    Nossa proposta é unir técnica e sensibilidade em um espaço que
                    reflita cuidado genuíno, sofisticação e uma estética mais refinada,
                    leve e atemporal.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <span className="uppercase tracking-[0.22em] text-xs md:text-sm text-sage-dark font-medium mb-5 block">
              O que nos diferencia
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-dark leading-[1.04] mb-6">
              Uma clínica pensada
              <span className="block italic text-gold-dark">nos detalhes.</span>
            </h2>

            <p className="text-base md:text-lg text-dark/70 font-light leading-relaxed">
              Cada ponto da experiência foi desenhado para transmitir segurança,
              elegância e cuidado real em cada etapa.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          >
            {differentials.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-[1.8rem] border border-[#d9c6a8]/25 bg-[rgba(255,252,248,0.82)] backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_26px_65px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                <div className="absolute inset-[1px] rounded-[1.72rem] border border-white/35 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />

                <div className="relative p-7 md:p-9">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-dark/35 block mb-4">
                    {item.number}
                  </span>

                  <h3 className="text-2xl md:text-[2rem] font-serif text-dark leading-tight mb-4">
                    {item.title}
                  </h3>

                  <p className="text-base md:text-lg text-dark/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-[#f6f1eb] overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeUp} className="xl:col-span-4">
              <span className="uppercase tracking-[0.22em] text-xs md:text-sm text-gold-dark font-medium mb-5 block">
                Nossa filosofia
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-serif text-dark leading-[1.02] mb-6">
                Estética com
                <span className="block italic text-sage-dark">
                  intenção e equilíbrio.
                </span>
              </h2>

              <p className="text-base md:text-lg text-dark/70 font-light leading-relaxed">
                Acreditamos em uma beleza mais leve, segura e coerente com a identidade
                de cada paciente.
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="xl:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {pillars.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-dark/6 bg-white/70 backdrop-blur-sm px-6 py-6 md:px-7 md:py-7 shadow-[0_14px_35px_rgba(0,0,0,0.04)]"
                  >
                    <span className="text-[10px] uppercase tracking-[0.28em] text-dark/35 block mb-3">
                      0{index + 1}
                    </span>
                    <p className="text-xl md:text-2xl font-serif text-dark leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-14 md:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div {...fadeUp} className="lg:col-span-7 order-2 lg:order-1">
              <span className="uppercase tracking-[0.22em] text-xs md:text-sm text-sage-dark font-medium mb-5 block">
                Direção e cuidado
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-dark leading-[1.02] mb-7">
                Um olhar atento
                <span className="block italic text-gold-dark">
                  para cada detalhe.
                </span>
              </h2>

              <div className="space-y-6 text-base md:text-lg text-dark/72 font-light leading-relaxed max-w-2xl">
                <p>
                  A condução da clínica é guiada por responsabilidade, sensibilidade
                  e atenção individual, garantindo que cada experiência aconteça com
                  acolhimento, clareza e cuidado genuíno.
                </p>

                <p>
                  Mais do que resultados, valorizamos a confiança construída em cada
                  atendimento, em cada orientação e em cada decisão tomada junto de
                  quem nos procura.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] border border-gold/25 -translate-x-4 translate-y-4" />
                <div className="relative rounded-[2rem] overflow-hidden border border-dark/6 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.07)]">
                  <div className="aspect-[4/5] relative">
                    <MediaRenderer
                      media={mediaAssets.doctor}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,20,0.02)_0%,rgba(20,20,20,0.30)_100%)]" />
                    <div className="absolute left-6 right-6 bottom-6 rounded-[1.4rem] border border-white/15 bg-white/12 backdrop-blur-md p-5 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-white/70 mb-3">
                        Clínica Perfeita
                      </p>
                      <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed">
                        Excelência, acolhimento e naturalidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-[2.2rem] md:rounded-[2.6rem] border border-[#d8c3a3]/25 bg-[rgba(255,252,248,0.82)] backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.07)]">
              <div className="absolute inset-[1px] rounded-[2.1rem] md:rounded-[2.5rem] border border-white/35 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-sage/10 blur-3xl pointer-events-none" />

              <div className="relative z-10 px-8 py-12 md:px-14 md:py-16 lg:px-16 lg:py-20 text-center">
                <span className="uppercase tracking-[0.22em] text-xs md:text-sm text-gold-dark font-medium mb-5 block">
                  Conheça a experiência
                </span>

                <h2 className="text-4xl md:text-5xl lg:text-[4.4rem] font-serif text-dark leading-[1.02] mb-6">
                  Um cuidado pensado
                  <span className="block italic text-sage-dark">
                    para valorizar você.
                  </span>
                </h2>

                <p className="max-w-2xl mx-auto text-base md:text-lg text-dark/70 font-light leading-relaxed mb-9">
                  Descubra um espaço onde estética, acolhimento e sofisticação se
                  encontram para transformar o autocuidado em algo ainda mais especial.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-dark text-offwhite text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-dark/90 transition-all duration-500 shadow-[0_14px_35px_rgba(0,0,0,0.10)]"
                  >
                    Agendar avaliação
                  </a>

                  <a
                    href="/#services"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-gold text-gold text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-dark transition-all duration-500"
                  >
                    Ver tratamentos
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}