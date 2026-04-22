import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    id: 'harmonizacao',
    title: 'Harmonização Facial',
    description:
      'Um conjunto de procedimentos estéticos combinados para melhorar a simetria do rosto, transformar algumas características e retardar o envelhecimento da pele, sempre respeitando seus traços naturais.',
    image: '/services/facial.jpeg',
    imageFit: 'contain',
    imagePosition: 'center center',
  },
  {
    id: 'bioestimuladores',
    title: 'Bioestimuladores',
    description:
      'Substâncias injetáveis que estimulam as células do próprio corpo a produzir colágeno, promovendo um efeito rejuvenescedor natural, gradual e duradouro, restaurando a firmeza da pele.',
    image: '/services/bioestimuladores.jpeg',
    imageFit: 'cover',
    imagePosition: 'center center',
  },
  {
    id: 'preenchimento',
    title: 'Preenchimento Labial',
    description:
      'Técnica minimamente invasiva para delinear o contorno, aumentar o volume ou projetar os lábios, utilizando ácido hialurônico para um resultado elegante, hidratado e perfeitamente proporcional.',
    image: '/services/labial.jpeg',
    imageFit: 'cover',
    imagePosition: 'center center',
  },
  {
    id: 'botox',
    title: 'Toxina Botulínica',
    description:
      'O tratamento padrão-ouro para suavizar rugas e linhas de expressão dinâmicas.',
    image: '/services/botox.jpeg',
    imageFit: 'cover',
    imagePosition: 'center center',
  },
  {
    id: 'skinbooster',
    title: 'Skinbooster',
    description:
      'Hidratação profunda que melhora elasticidade e suaviza linhas.',
    image: '/services/skinbooster.jpeg',
    imageFit: 'cover',
    imagePosition: 'center center',
  },
  {
    id: 'limpeza',
    title: 'Limpeza de Pele',
    description:
      'Remove impurezas e melhora a textura da pele.',
    image: '/services/limpeza.jpeg',
    imageFit: 'cover',
    imagePosition: 'center center',
  },
] as const;

const premiumTreatments = [
  { title: 'Harmonização Facial', category: 'Face' },
  { title: 'Bioestimuladores', category: 'Colágeno' },
  { title: 'Preenchimento Labial', category: 'Lábios' },
  { title: 'Toxina Botulínica', category: 'Rejuvenescimento' },
  { title: 'Skinbooster', category: 'Hidratação' },
  { title: 'Limpeza de Pele', category: 'Cuidado facial' },
  { title: 'Laser CO₂', category: 'Renovação' },
  { title: 'Peeling Químico', category: 'Textura e viço' },
  { title: 'Microagulhamento', category: 'Estimulação' },
  { title: 'Ultraformer', category: 'Firmeza' },
  { title: 'Lavieen', category: 'Luminosidade' },
  { title: 'Fios de PDO', category: 'Sustentação' },
  { title: 'Rinomodelação', category: 'Harmonia facial' },
  { title: 'Tratamento de Melasma', category: 'Uniformização' },
];

const loopedTreatments = [...premiumTreatments, ...premiumTreatments];

const headerAnimation = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
};

function ServiceLuxuryCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const numberStr = `0${index + 1}`;
  const isContain = service.imageFit === 'contain';

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 20%'],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.18, 0.45], [0.4, 0.75, 1]);
  const sectionY = useTransform(scrollYProgress, [0, 1], [42, 0]);

  const cardOpacity = useTransform(scrollYProgress, [0.05, 0.28, 0.55], [0, 0.82, 1]);
  const cardX = useTransform(scrollYProgress, [0, 1], [-42, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], [22, 0]);

  const mediaOpacity = useTransform(scrollYProgress, [0.08, 0.3, 0.55], [0, 0.78, 1]);
  const mediaX = useTransform(scrollYProgress, [0, 1], [54, 0]);
  const mediaScale = useTransform(scrollYProgress, [0, 0.4, 1], [1.04, 1.015, 1]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [28, 0]);

  const badgeY = useTransform(scrollYProgress, [0, 1], [-18, 0]);
  const badgeOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

  const frameScale = useTransform(scrollYProgress, [0, 0.4], [0.96, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.1, 0.18, 0.12]);

  return (
    <motion.article
      ref={ref}
      style={{ opacity: sectionOpacity, y: sectionY }}
      className="relative py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] border border-[#dcc6a7]/30 bg-[linear-gradient(180deg,rgba(255,253,250,0.96),rgba(248,242,235,0.90))] shadow-[0_30px_90px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.88),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(205,170,121,0.12),transparent_24%)]" />
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(120deg,transparent_0%,rgba(201,169,110,0.32)_22%,transparent_40%,transparent_100%)]" />
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:28px_28px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.32),transparent_26%,rgba(255,255,255,0.08)_100%)]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 items-stretch gap-0">
            <motion.div
              style={{ opacity: cardOpacity, x: cardX, y: cardY }}
              className="xl:col-span-5 p-5 md:p-8 lg:p-10"
            >
              <div className="relative h-full min-h-[520px] rounded-[1.8rem] border border-[#d9c6a8]/35 bg-[rgba(255,252,248,0.86)] backdrop-blur-md shadow-[0_20px_55px_rgba(0,0,0,0.045)] overflow-hidden flex flex-col">
                <div className="absolute inset-[1px] rounded-[1.72rem] border border-white/55 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />

                <span className="absolute top-3 right-3 md:top-5 md:right-6 text-[86px] md:text-[118px] lg:text-[140px] font-serif leading-none text-[#d9c6a8]/15 select-none pointer-events-none">
                  {numberStr}
                </span>

                <div className="relative z-10 p-6 md:p-8 lg:p-10 flex flex-col h-full">
                  <div className="mb-8">
                    <div className="inline-flex items-center rounded-full border border-[#d5bb93]/35 bg-white/78 px-4 py-2 shadow-[0_8px_22px_rgba(0,0,0,0.03)]">
                      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#b88f57] font-medium">
                        {numberStr} • Especialidade
                      </span>
                    </div>
                  </div>

                  <div className="max-w-[440px]">
                    <h3 className="text-[2.2rem] md:text-[3rem] lg:text-[3.55rem] font-serif text-[#2c241f] leading-[0.96] mb-6">
                      {service.title}
                    </h3>

                    <div className="w-14 h-[1px] bg-[#c7a46a] mb-7" />

                    <p className="text-[15px] md:text-lg leading-relaxed text-[#6d6258] font-light">
                      {service.description}
                    </p>

                    <div className="mt-8">
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d3a05d] text-white px-6 md:px-8 py-3.5 text-[11px] md:text-xs uppercase tracking-[0.24em] shadow-[0_16px_35px_rgba(211,160,93,0.28)] hover:translate-y-[-1px] hover:shadow-[0_20px_40px_rgba(211,160,93,0.35)] transition-all duration-500"
                      >
                        Agendar avaliação
                        <span className="text-base leading-none">→</span>
                      </a>
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-[#e7ddd0] pt-6">
                      <div className="text-center md:text-left">
                        <p className="text-[11px] md:text-xs text-[#b88f57] uppercase tracking-[0.18em] mb-2">
                          Resultado
                        </p>
                        <p className="text-sm md:text-[15px] text-[#5f5449] leading-snug">
                          Naturalidade
                        </p>
                      </div>

                      <div className="text-center md:text-left">
                        <p className="text-[11px] md:text-xs text-[#b88f57] uppercase tracking-[0.18em] mb-2">
                          Técnica
                        </p>
                        <p className="text-sm md:text-[15px] text-[#5f5449] leading-snug">
                          Precisão
                        </p>
                      </div>

                      <div className="text-center md:text-left">
                        <p className="text-[11px] md:text-xs text-[#b88f57] uppercase tracking-[0.18em] mb-2">
                          Cuidado
                        </p>
                        <p className="text-sm md:text-[15px] text-[#5f5449] leading-snug">
                          Personalização
                        </p>
                      </div>

                      <div className="text-center md:text-left">
                        <p className="text-[11px] md:text-xs text-[#b88f57] uppercase tracking-[0.18em] mb-2">
                          Experiência
                        </p>
                        <p className="text-sm md:text-[15px] text-[#5f5449] leading-snug">
                          Sofisticação
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: mediaOpacity, x: mediaX, scale: mediaScale, y: mediaY }}
              className="xl:col-span-7 p-5 md:p-8 lg:p-10 pt-0 xl:pt-10"
            >
              <div className="relative h-full flex items-center">
                <motion.div
                  style={{ scale: frameScale }}
                  className="relative w-full rounded-[1.9rem] overflow-hidden border border-[#d4be9c]/45 bg-[#efe7dd] shadow-[0_30px_80px_rgba(0,0,0,0.08)] min-h-[420px] md:min-h-[520px]"
                >
                  <motion.div
                    style={{ opacity: glowOpacity }}
                    className="absolute inset-0 bg-[#d8b382]/20 blur-2xl scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.52),rgba(255,255,255,0.06))]" />

                  <div
                    className={`absolute inset-0 ${
                      isContain ? 'flex items-center justify-center bg-[#efe7dd]' : ''
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{ objectPosition: service.imagePosition }}
                      className={`w-full h-full transition-transform duration-700 ${
                        isContain ? 'object-contain scale-[0.98]' : 'object-cover scale-[1.02]'
                      }`}
                    />
                  </div>

                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,16,12,0.15),transparent_38%,rgba(255,255,255,0.14))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_54%,rgba(0,0,0,0.06)_100%)]" />

                  <motion.div
                    style={{ y: badgeY, opacity: badgeOpacity }}
                    className="absolute top-4 left-4 md:top-6 md:left-6"
                  >
                    <div className="rounded-full border border-white/45 bg-white/72 backdrop-blur-md px-4 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-[#72665d]">
                        {numberStr} • Especialidade
                      </span>
                    </div>
                  </motion.div>

                  <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="relative z-10 border-t border-[#e6dbce] bg-[rgba(255,255,255,0.46)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-10 lg:px-12 py-7 md:py-8">
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-full border border-[#d8c4a4]/45 bg-white/70 flex items-center justify-center text-[#c79d62] text-lg shadow-[0_8px_20px_rgba(0,0,0,0.03)]">
                  ✦
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#b88f57] mb-1">
                    Ambiente
                  </p>
                  <p className="text-[15px] text-[#5d5248]">
                    Sofisticado e acolhedor
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="text-center"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#b88f57] mb-3">
                  Nossa essência
                </p>
                <p className="text-[1.7rem] md:text-[2.2rem] font-serif leading-[1.1] text-[#322922]">
                  Beleza que respeita sua{' '}
                  <span className="italic text-[#c79d62]">essência.</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="flex items-center justify-start md:justify-end gap-4"
              >
                <div className="w-11 h-11 rounded-full border border-[#d8c4a4]/45 bg-white/70 flex items-center justify-center text-[#c79d62] text-lg shadow-[0_8px_20px_rgba(0,0,0,0.03)]">
                  ❀
                </div>
                <div className="text-left">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#b88f57] mb-1">
                    Cuidado
                  </p>
                  <p className="text-[15px] text-[#5d5248]">
                    Vai além do estético
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Infinite3DServicesCarousel() {
  return (
    <div className="relative mt-20 md:mt-24 lg:mt-28">
      <motion.div
        {...headerAnimation}
        className="text-center max-w-4xl mx-auto mb-12 md:mb-14"
      >
        <div className="flex items-center justify-center gap-4 mb-5">
          <span className="text-[#c79d62] text-xs tracking-[0.3em]">●●●</span>
          <span className="uppercase tracking-[0.22em] text-xs md:text-sm text-[#8e7d6b] font-medium">
            Todos os nossos serviços
          </span>
          <span className="text-[#c79d62] text-xs tracking-[0.3em]">●●●</span>
        </div>

        <h3 className="text-3xl md:text-5xl lg:text-[4rem] font-serif text-[#2f2822] leading-[0.98]">
          Um portfólio completo de
          <span className="block italic text-[#c79d62]">estética premium.</span>
        </h3>

        <p className="mt-6 text-base md:text-lg text-[#6d6258] font-light leading-relaxed max-w-2xl mx-auto">
          Tratamentos selecionados para valorizar beleza, viço, firmeza,
          rejuvenescimento e harmonia com sofisticação.
        </p>
      </motion.div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#fbf8f4] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#fbf8f4] to-transparent z-10" />

        <motion.div
          className="flex w-max gap-4 md:gap-5 py-3"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {loopedTreatments.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="group relative w-[220px] md:w-[250px] lg:w-[270px] shrink-0"
            >
              <div className="relative rounded-[1.7rem] border border-[#dcc6a7]/30 bg-[linear-gradient(180deg,rgba(255,253,250,0.96),rgba(248,242,235,0.92))] shadow-[0_16px_40px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_22px_50px_rgba(0,0,0,0.06)]">
                <div className="absolute inset-[1px] rounded-[1.62rem] border border-white/50 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />

                <div className="relative px-5 py-6 md:px-6 md:py-7">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#b88f57] mb-3">
                    {item.category}
                  </p>

                  <h4 className="text-[1.25rem] md:text-[1.45rem] font-serif text-[#2f2822] leading-[1.05] min-h-[3.1rem] flex items-end">
                    {item.title}
                  </h4>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="w-10 h-[1px] bg-[#d6b382]/55" />
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#8f7b68]">
                      Premium
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-28 lg:py-32 bg-[#fbf8f4] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[320px] rounded-full bg-[#d9b98d]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[380px] h-[260px] rounded-full bg-[#c8d6c4]/12 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 mb-16 md:mb-20">
        <motion.div
          {...headerAnimation}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-[#c79d62] text-xs tracking-[0.3em]">●●●</span>
            <span className="uppercase tracking-[0.22em] text-xs md:text-sm text-[#8e7d6b] font-medium">
              Especialidades
            </span>
            <span className="text-[#c79d62] text-xs tracking-[0.3em]">●●●</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-[4.6rem] font-serif text-[#2f2822] mb-6 leading-[0.96]">
            Tratamentos de
            <span className="block italic text-[#c79d62]">
              excelência estética.
            </span>
          </h2>

          <p className="text-base md:text-lg text-[#6d6258] font-light leading-relaxed max-w-2xl mx-auto">
            Procedimentos pensados para valorizar sua beleza com técnica,
            elegância e naturalidade, em uma experiência visual mais refinada,
            acolhedora e premium.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col gap-10 md:gap-12">
        {services.map((service, index) => (
          <ServiceLuxuryCard
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <Infinite3DServicesCarousel />
      </div>
    </section>
  );
}