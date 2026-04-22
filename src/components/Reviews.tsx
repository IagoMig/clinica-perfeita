import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { BotanicalMotif } from './BotanicalMotif';

const reviews = [
  {
    name: 'Ana Couto Panificadora Ana Couto',
    time: 'Há 12 semanas',
    text: 'Clínica excelente! Atendimento maravilhoso.',
  },
  {
    name: 'Maria Das Gracas',
    time: 'Há 13 semanas',
    text: 'Super bem atendida',
  },
  {
    name: 'Andrys Zambrano',
    time: 'Há 15 semanas',
    text: 'Se você procura bons profissionais humanizados e maravilhosos, a Clínica Perfeita é pra você!',
  },
  {
    name: 'Keterlly Camargo',
    time: 'Há 18 semanas',
    text: 'Clínica perfeita e maravilhosa, profissional TDS queridos, resultados incríveis.',
  },
  {
    name: 'Angela Alves',
    time: 'Há 19 semanas',
    text: 'Profissional diferenciado! Competência e carinho em cada detalhe.',
  },
  {
    name: 'Márcia Machado',
    time: 'Há 20 semanas',
    text: 'Atendimento ótimo',
  },
  {
    name: 'Deise Leme Flores',
    time: 'Há 20 semanas',
    text: 'Fiz CO2. Atendimento ótimo. Aguardando bons resultados.',
  },
  {
    name: 'Ana Maria Pereira da Fonseca',
    time: 'Há 20 semanas',
    text: 'Experiência incrível. Com excelentes resultados. Profissionais super atenciosos. Recomendo. Realizei laser de CO2.',
  },
  {
    name: 'Danusa Nascimento',
    time: 'Há 24 semanas',
    text: 'Atendimento dos médicos excelente, ambiente aconchegante e higiênico. Voltarei mais vezes.',
  },
  {
    name: 'ALLYNE Nogueira',
    time: 'Há 24 semanas',
    text: 'Clínica com boa infraestrutura, bom atendimento, profissionais qualificados. Fui muito bem atendida e recomendo o procedimento laser CO2.',
  },
  {
    name: 'Willians Straub',
    time: 'Há 24 semanas',
    text: 'Ótimo atendimento, profissionais capacitados.',
  },
  {
    name: 'SUELI CRISTO',
    time: 'Há 24 semanas',
    text: 'Profissionais de excelência, atendimento VIP, atenciosos com o paciente, e o resultado melhor ainda. Agende sua avaliação, recomendo.',
  },
  {
    name: 'Danieli Ferreira',
    time: 'Há 24 semanas',
    text: 'Minha experiência foi muito satisfatória! Tive todo cuidado pré e pós procedimento! Recomendo a clínica!',
  },
  {
    name: 'Taba Muzillo',
    time: 'Há 24 semanas',
    text: 'A Clínica Perfeita faz jus ao nome, atendimento incrível e personalizado e o ambiente impecável tornam o momento de autocuidado uma experiência ainda mais especial.',
  },
  {
    name: 'ozana sarzi',
    time: 'Há 25 semanas',
    text: 'Estou fazendo CO2 e estou gostando dos resultados, equipe da clínica é muito atenciosa. Recomendo!',
  },
  {
    name: 'glaucimar santos',
    time: 'Há 25 semanas',
    text: 'Atendimento excelente! Com procedimentos da atualidade, com preços justos. Flexibilidade de horário, o que ajuda muito na correria do dia a dia.',
  },
  {
    name: 'Fabiana Nunes',
    time: 'Há 25 semanas',
    text: 'Atendimento impecável.',
  },
  {
    name: 'Sidnei Caetano',
    time: 'Há 25 semanas',
    text: 'Ótimo, muito bom, fiquei novo.',
  },
  {
    name: 'Angela Tissot',
    time: 'Há 25 semanas',
    text: 'Adorando a experiência! Recomendo toda a equipe!',
  },
  {
    name: 'Mari Machado',
    time: 'Há 25 semanas',
    text: 'Já sou cliente desde o início, os profissionais são ótimos, atendimento excelente e preço justo.',
  },
  {
    name: 'Denise Paiva',
    time: 'Há 25 semanas',
    text: 'Ótimo atendimento, profissionais competentes e atenciosos!',
  },
  {
    name: 'Maurício Vieira',
    time: 'Há 25 semanas',
    text: 'Atendimento tooop, o Dr. Eduardo é o melhor.',
  },
  {
    name: 'Juliano Veber',
    time: 'Há 25 semanas',
    text: 'Vim fazer uma sessão de CO₂ na clínica e adorei a experiência! A equipe foi super atenciosa, o ambiente é limpo e acolhedor. Dá pra ver que trabalham com muito profissionalismo e cuidado. Recomendo demais!',
  },
  {
    name: 'Heide Garden',
    time: 'Há 38 semanas',
    text: 'Perfeita mesmo. Atendimento ótimo desde o agendamento, profissionais muito competentes e atenciosos. Vale super a pena!',
  },
  {
    name: 'Roberta Rodrigues',
    time: '29 de mar. de 2025',
    text: 'Ótimos profissionais, tratamento impecável, clínica limpa. Simplesmente amei. Super indico.',
  },
  {
    name: 'Maria Eduarda Ricieri de Melo',
    time: '24 de fev. de 2025',
    text: 'Clínica Perfeita mesmo! Ótimo atendimento e resultados incríveis, amo.',
  },
];

function shuffleArray<T>(array: T[]) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function StarRow() {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-gold"
        >
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321 1.01l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.386a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.886a.562.562 0 01-.84-.611l1.285-5.386a.562.562 0 00-.182-.557L2.04 10.407a.562.562 0 01.321-1.01l5.518-.442a.563.563 0 00.475-.345l2.125-5.11z" />
        </svg>
      ))}
    </div>
  );
}

function getCardStyle(index: number) {
  const variants = [
    'md:translate-y-0',
    'md:translate-y-6',
    'md:-translate-y-4',
    'md:translate-y-3',
    'md:-translate-y-2',
    'md:translate-y-8',
  ];
  return variants[index % variants.length];
}

export function Reviews() {
  const randomizedReviews = useMemo(() => shuffleArray(reviews).slice(0, 6), []);

  return (
    <section
      id="reviews"
      className="relative py-32 md:py-40 bg-[#f8f3ed] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[720px] h-[280px] rounded-full bg-gold/8 blur-3xl" />
        <div className="absolute bottom-[-80px] left-[-60px] w-[280px] h-[240px] rounded-full bg-sage/8 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35),transparent_30%,rgba(0,0,0,0.015)_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <div className="flex flex-col items-center">
            <BotanicalMotif size={28} className="mb-6 opacity-80" />

            <div className="flex items-center gap-4 mb-5">
              <span className="text-gold text-xs tracking-[0.3em]">●●●</span>
              <span className="uppercase tracking-[0.22em] text-xs md:text-sm text-sage-dark font-medium">
                Avaliações reais
              </span>
              <span className="text-gold text-xs tracking-[0.3em]">●●●</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[4.1rem] font-serif text-dark leading-[1.02]">
              A confiança de quem
              <span className="block italic text-gold-dark">já viveu a experiência.</span>
            </h2>

            <div className="w-20 h-[1px] bg-gold mt-8 mb-7" />

            <p className="text-base md:text-lg text-dark/70 font-light leading-relaxed max-w-2xl">
              Depoimentos de pacientes que compartilharam suas experiências na Clínica Perfeita.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-white/65 backdrop-blur-md px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <StarRow />
              <span className="text-sm text-dark/70 tracking-[0.08em]">
                avaliações 5 estrelas no Google
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 items-start">
          {randomizedReviews.map((review, index) => {
            const featured = index === 0 || index === 4;

            return (
              <motion.article
                key={`${review.name}-${index}`}
                initial={{ opacity: 0, y: 35, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  rotate: featured ? 0 : index % 2 === 0 ? -0.35 : 0.35,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  'group relative overflow-hidden rounded-[1.9rem] border border-[#d9c6a8]/25',
                  'bg-[rgba(255,252,248,0.8)] backdrop-blur-xl',
                  'shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]',
                  'transition-shadow duration-500',
                  featured ? 'xl:col-span-1' : '',
                  getCardStyle(index),
                ].join(' ')}
              >
                <div className="absolute inset-[1px] rounded-[1.82rem] border border-white/40 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/65 to-transparent pointer-events-none" />
                <div className="absolute -top-3 -right-1 text-[88px] md:text-[110px] font-serif text-gold/10 leading-none pointer-events-none select-none">
                  ”
                </div>

                <div className="relative p-6 md:p-7 flex flex-col min-h-[280px] md:min-h-[310px]">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full border border-gold/20 bg-white/70 flex items-center justify-center shrink-0 shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                        <span className="text-sm font-serif text-gold-dark">
                          {review.name.charAt(0).toUpperCase()}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-serif text-dark leading-tight">
                          {review.name}
                        </h3>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-dark/40 mt-2">
                          Google Reviews
                        </p>
                      </div>
                    </div>

                    <span className="text-xs text-dark/45 whitespace-nowrap">
                      {review.time}
                    </span>
                  </div>

                  <div className="mb-5 flex items-center justify-between gap-4">
                    <StarRow />
                    <div className="w-10 h-[1px] bg-gold/25" />
                  </div>

                  <p
                    className={[
                      'text-dark/72 font-light leading-relaxed flex-1',
                      featured ? 'text-base md:text-[1.05rem]' : 'text-[15px] md:text-base',
                    ].join(' ')}
                  >
                    “{review.text}”
                  </p>

                  <div className="mt-6 pt-5 border-t border-dark/6 flex items-center justify-between gap-4">
                    <span className="text-[10px] uppercase tracking-[0.26em] text-dark/35">
                      Avaliação verificada
                    </span>

                    <div className="flex items-center gap-2 text-gold/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/70" />
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/55" />
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/35" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-[1.9rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.08),transparent_35%,rgba(184,155,114,0.08))]" />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1 }}
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