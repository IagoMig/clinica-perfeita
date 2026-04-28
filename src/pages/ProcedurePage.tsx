import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { FadeIn } from '../components/FadeIn';

const SITE_URL = 'https://www.clinicaperfeita.com.br';

const procedures = {
  'laser-co2-curitiba': {
    title: 'Laser CO₂ em Curitiba',
    eyebrow: 'Carro-chefe da Clínica Perfeita',
    subtitle:
      'Tratamento avançado para renovação da pele, melhora da textura, cicatrizes, poros, linhas finas e rejuvenescimento com alta precisão.',
    description:
      'Na Clínica Perfeita, o Laser CO₂ em Curitiba é realizado com avaliação criteriosa, tecnologia avançada e protocolo individualizado para promover renovação profunda da pele com segurança e sofisticação.',
    image: '/services/laser-co2.jpeg',
    slug: 'laser-co2-curitiba',
    keywords:
      'laser CO2 Curitiba, laser CO2 em Curitiba, laser fracionado Curitiba, tratamento para cicatriz Curitiba, rejuvenescimento laser Curitiba, clínica estética Curitiba',
    benefits: [
      'Renovação intensa da pele',
      'Melhora da textura e dos poros',
      'Auxilia no tratamento de cicatrizes de acne',
      'Estimula colágeno e melhora a firmeza'
    ],
    indications: [
      'Cicatrizes de acne',
      'Linhas finas',
      'Poros dilatados',
      'Textura irregular da pele',
      'Sinais de envelhecimento'
    ],
    faq: [
      {
        q: 'O Laser CO₂ é indicado para rejuvenescimento?',
        a: 'Sim. Ele é muito utilizado para renovação da pele, estímulo de colágeno e melhora da textura facial.'
      },
      {
        q: 'Precisa de avaliação antes do Laser CO₂?',
        a: 'Sim. A avaliação é essencial para definir indicação, preparo da pele, intensidade e cuidados pós-procedimento.'
      },
      {
        q: 'O resultado é imediato?',
        a: 'A pele passa por um processo de recuperação e renovação. A melhora costuma evoluir progressivamente após o procedimento.'
      }
    ]
  },

  'botox-curitiba': {
    title: 'Botox em Curitiba',
    eyebrow: 'Expressão leve e natural',
    subtitle:
      'Tratamento estético para suavizar linhas de expressão, prevenir marcas profundas e preservar uma aparência descansada com naturalidade.',
    description:
      'Na Clínica Perfeita, o Botox em Curitiba é realizado com avaliação individualizada, técnica refinada e foco em resultados elegantes, sem exageros.',
    image: '/services/botox.jpeg',
    slug: 'botox-curitiba',
    keywords:
      'botox Curitiba, botox em Curitiba, clínica de botox Curitiba, toxina botulínica Curitiba, estética facial Curitiba',
    benefits: [
      'Suaviza linhas de expressão',
      'Ajuda na prevenção de rugas profundas',
      'Resultado natural e discreto',
      'Procedimento rápido e minimamente invasivo'
    ],
    indications: [
      'Linhas na testa',
      'Rugas entre as sobrancelhas',
      'Pés de galinha',
      'Expressão cansada ou pesada'
    ],
    faq: [
      {
        q: 'O Botox deixa o rosto artificial?',
        a: 'Quando bem aplicado, o resultado é natural. A proposta da Clínica Perfeita é suavizar expressões, não congelar o rosto.'
      },
      {
        q: 'Quanto tempo dura o Botox?',
        a: 'A duração pode variar de pessoa para pessoa, mas geralmente os efeitos permanecem por alguns meses.'
      },
      {
        q: 'Preciso passar por avaliação?',
        a: 'Sim. A avaliação é essencial para entender suas necessidades e indicar a melhor estratégia.'
      }
    ]
  },

  'harmonizacao-facial-curitiba': {
    title: 'Harmonização Facial em Curitiba',
    eyebrow: 'Harmonia, proporção e elegância',
    subtitle:
      'Um plano estético personalizado para valorizar os traços do rosto, equilibrar proporções e realçar sua beleza com naturalidade.',
    description:
      'A Harmonização Facial na Clínica Perfeita é pensada de forma individual, respeitando anatomia, expressão, idade e identidade facial.',
    image: '/services/facial.jpeg',
    slug: 'harmonizacao-facial-curitiba',
    keywords:
      'harmonização facial Curitiba, harmonização em Curitiba, clínica de harmonização facial Curitiba, estética facial Curitiba',
    benefits: [
      'Melhora da harmonia facial',
      'Realce dos contornos naturais',
      'Planejamento personalizado',
      'Resultado sofisticado e equilibrado'
    ],
    indications: [
      'Assimetria facial',
      'Perda de volume',
      'Contorno facial pouco definido',
      'Desejo de rejuvenescimento natural'
    ],
    faq: [
      {
        q: 'Harmonização facial muda muito o rosto?',
        a: 'Não necessariamente. O objetivo é valorizar os traços existentes, mantendo naturalidade e equilíbrio.'
      },
      {
        q: 'Quais procedimentos fazem parte da harmonização?',
        a: 'Pode envolver preenchimentos, toxina botulínica, bioestimuladores e outros tratamentos conforme avaliação.'
      },
      {
        q: 'O tratamento é personalizado?',
        a: 'Sim. Cada plano é criado após avaliação facial detalhada.'
      }
    ]
  },

  'bioestimuladores-curitiba': {
    title: 'Bioestimuladores em Curitiba',
    eyebrow: 'Colágeno, firmeza e naturalidade',
    subtitle:
      'Tratamento para estimular a produção natural de colágeno, melhorar firmeza, qualidade da pele e promover rejuvenescimento gradual.',
    description:
      'Os bioestimuladores na Clínica Perfeita são indicados após avaliação individual, com foco em firmeza, sustentação e melhora progressiva da pele.',
    image: '/services/bioestimuladores.jpeg',
    slug: 'bioestimuladores-curitiba',
    keywords:
      'bioestimuladores Curitiba, bioestimulador de colágeno Curitiba, colágeno Curitiba, rejuvenescimento Curitiba',
    benefits: [
      'Estimula a produção de colágeno',
      'Melhora firmeza e sustentação',
      'Resultado gradual e natural',
      'Ajuda na qualidade geral da pele'
    ],
    indications: [
      'Flacidez facial',
      'Perda de firmeza',
      'Pele fina ou envelhecida',
      'Rejuvenescimento natural'
    ],
    faq: [
      {
        q: 'Bioestimulador dá volume?',
        a: 'O principal objetivo é estimular colágeno e melhorar firmeza, não necessariamente aumentar volume.'
      },
      {
        q: 'O resultado aparece na hora?',
        a: 'O resultado é progressivo, pois depende da produção natural de colágeno pelo organismo.'
      },
      {
        q: 'É indicado para flacidez?',
        a: 'Sim, pode ser indicado para melhorar firmeza e qualidade da pele.'
      }
    ]
  },

  'preenchimento-labial-curitiba': {
    title: 'Preenchimento Labial em Curitiba',
    eyebrow: 'Lábios naturais e sofisticados',
    subtitle:
      'Procedimento para hidratar, definir contorno, corrigir assimetrias e realçar o volume dos lábios com delicadeza.',
    description:
      'Na Clínica Perfeita, o preenchimento labial em Curitiba é feito com foco em proporção, suavidade e acabamento natural.',
    image: '/services/labial.jpeg',
    slug: 'preenchimento-labial-curitiba',
    keywords:
      'preenchimento labial Curitiba, preenchimento labial em Curitiba, lábios Curitiba, estética facial Curitiba',
    benefits: [
      'Melhora do contorno labial',
      'Mais hidratação e definição',
      'Correção de pequenas assimetrias',
      'Resultado delicado e natural'
    ],
    indications: [
      'Lábios finos',
      'Perda de volume',
      'Assimetria labial',
      'Desejo de definição sem exagero'
    ],
    faq: [
      {
        q: 'O preenchimento labial fica exagerado?',
        a: 'Não quando existe planejamento correto. A proposta é respeitar o formato natural dos lábios.'
      },
      {
        q: 'O resultado aparece na hora?',
        a: 'O volume inicial aparece logo após o procedimento, mas o resultado final é melhor avaliado após o período de acomodação.'
      },
      {
        q: 'Precisa de avaliação antes?',
        a: 'Sim. A avaliação define a melhor técnica, quantidade e objetivo estético.'
      }
    ]
  },

  'skinbooster-curitiba': {
    title: 'Skinbooster em Curitiba',
    eyebrow: 'Hidratação profunda e viço',
    subtitle:
      'Tratamento para melhorar hidratação, elasticidade, textura e luminosidade da pele de forma natural.',
    description:
      'O Skinbooster na Clínica Perfeita é indicado para quem busca uma pele mais hidratada, viçosa e com melhor qualidade, sem alterar os traços do rosto.',
    image: '/services/skinbooster.jpeg',
    slug: 'skinbooster-curitiba',
    keywords:
      'skinbooster Curitiba, hidratação facial Curitiba, tratamento para pele Curitiba, estética facial Curitiba',
    benefits: [
      'Hidratação profunda',
      'Melhora do viço da pele',
      'Suavização de linhas finas',
      'Mais elasticidade e luminosidade'
    ],
    indications: [
      'Pele ressecada',
      'Linhas finas',
      'Perda de viço',
      'Textura irregular'
    ],
    faq: [
      {
        q: 'Skinbooster aumenta volume?',
        a: 'Não é esse o objetivo principal. Ele atua na hidratação e qualidade da pele.'
      },
      {
        q: 'É indicado para pele sem brilho?',
        a: 'Sim. Pode ajudar a melhorar viço, hidratação e textura.'
      },
      {
        q: 'Precisa de manutenção?',
        a: 'A frequência ideal depende da avaliação e das necessidades da pele.'
      }
    ]
  },

  'limpeza-de-pele-curitiba': {
    title: 'Limpeza de Pele em Curitiba',
    eyebrow: 'Cuidado essencial da pele',
    subtitle:
      'Tratamento para remover impurezas, melhorar a textura, controlar oleosidade e deixar a pele mais limpa e preparada.',
    description:
      'A limpeza de pele na Clínica Perfeita é feita com cuidado, técnica e atenção ao tipo de pele, trazendo uma experiência acolhedora e eficaz.',
    image: '/services/limpeza.jpeg',
    slug: 'limpeza-de-pele-curitiba',
    keywords:
      'limpeza de pele Curitiba, limpeza facial Curitiba, clínica estética Curitiba, cuidados com a pele Curitiba',
    benefits: [
      'Remove impurezas',
      'Ajuda no controle da oleosidade',
      'Melhora textura e aparência da pele',
      'Prepara a pele para outros tratamentos'
    ],
    indications: [
      'Cravos e impurezas',
      'Oleosidade excessiva',
      'Pele opaca',
      'Manutenção dos cuidados faciais'
    ],
    faq: [
      {
        q: 'Limpeza de pele é indicada para todo tipo de pele?',
        a: 'Pode ser indicada para diversos tipos de pele, mas o protocolo deve ser adaptado após avaliação.'
      },
      {
        q: 'Com que frequência devo fazer?',
        a: 'A frequência varia conforme oleosidade, rotina e necessidade individual da pele.'
      },
      {
        q: 'Ajuda antes de outros tratamentos?',
        a: 'Sim. A limpeza pode preparar melhor a pele para protocolos estéticos.'
      }
    ]
  }
};

export function ProcedurePage() {
  const { slug } = useParams();
  const procedure = procedures[slug as keyof typeof procedures];

  if (!procedure) {
    return (
      <main className="min-h-screen bg-offwhite flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-dark mb-4">
            Procedimento não encontrado
          </h1>
          <Link to="/" className="text-gold-dark uppercase tracking-[0.2em] text-sm">
            Voltar para início
          </Link>
        </div>
      </main>
    );
  }

  const canonical = `${SITE_URL}/procedimentos/${procedure.slug}`;

  return (
    <>
      <SEOHead
        title={procedure.title}
        description={`${procedure.title} na Clínica Perfeita. Atendimento premium em Curitiba com foco em naturalidade, segurança e resultados personalizados.`}
        canonical={canonical}
        keywords={procedure.keywords}
      />

      <main className="bg-offwhite text-dark">
        <section className="pt-32 pb-24 md:pt-44 md:pb-32 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <span className="uppercase tracking-[0.28em] text-xs text-gold-dark font-medium">
                  {procedure.eyebrow}
                </span>

                <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-tight text-dark">
                  {procedure.title.split(' em ')[0]} <br />
                  <span className="italic text-sage-dark">em Curitiba</span>
                </h1>

                <p className="mt-8 text-muted text-lg md:text-xl font-light leading-relaxed">
                  {procedure.subtitle}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://wa.me/554132060016"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full bg-gold text-white uppercase tracking-[0.18em] text-xs hover:bg-gold-dark transition"
                  >
                    Agendar avaliação
                  </a>

                  <Link
                    to="/sobre"
                    className="px-8 py-4 rounded-full border border-gold/40 text-gold-dark uppercase tracking-[0.18em] text-xs hover:bg-white transition"
                  >
                    Conhecer a clínica
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="pb-28 md:pb-40">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto bg-white/70 border border-gold/20 rounded-[2rem] p-5 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <FadeIn direction="right">
                  <div className="p-8 md:p-10 border border-gold/20 rounded-[1.5rem] bg-offwhite">
                    <span className="uppercase tracking-[0.25em] text-xs text-gold-dark">
                      Tratamento personalizado
                    </span>

                    <h2 className="mt-5 text-3xl md:text-5xl font-serif text-dark leading-tight">
                      Beleza que respeita sua{' '}
                      <span className="italic text-sage-dark">essência.</span>
                    </h2>

                    <p className="mt-6 text-muted font-light leading-relaxed">
                      {procedure.description}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn direction="left" delay={0.2}>
                  <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-sage-light">
                    <img
                      src={procedure.image}
                      alt={procedure.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-sage/10 mix-blend-multiply" />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-28 md:pb-40">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn>
                <div className="bg-white/70 border border-gold/20 rounded-[2rem] p-8 md:p-10">
                  <span className="uppercase tracking-[0.25em] text-xs text-gold-dark">
                    Benefícios
                  </span>

                  <h2 className="mt-4 text-3xl md:text-4xl font-serif text-dark">
                    O que esse procedimento pode proporcionar
                  </h2>

                  <ul className="mt-8 space-y-4">
                    {procedure.benefits.map((item) => (
                      <li key={item} className="flex gap-4 text-muted font-light">
                        <span className="text-gold">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-white/70 border border-gold/20 rounded-[2rem] p-8 md:p-10">
                  <span className="uppercase tracking-[0.25em] text-xs text-gold-dark">
                    Indicações
                  </span>

                  <h2 className="mt-4 text-3xl md:text-4xl font-serif text-dark">
                    Para quem pode ser indicado
                  </h2>

                  <ul className="mt-8 space-y-4">
                    {procedure.indications.map((item) => (
                      <li key={item} className="flex gap-4 text-muted font-light">
                        <span className="text-gold">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="pb-28 md:pb-40">
          <div className="container mx-auto px-6 md:px-12">
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center mb-14">
                <span className="uppercase tracking-[0.25em] text-xs text-gold-dark">
                  Dúvidas frequentes
                </span>

                <h2 className="mt-5 text-4xl md:text-5xl font-serif text-dark">
                  Informações importantes antes da sua avaliação
                </h2>
              </div>
            </FadeIn>

            <div className="max-w-4xl mx-auto space-y-5">
              {procedure.faq.map((item, index) => (
                <FadeIn key={item.q} delay={index * 0.08}>
                  <div className="bg-white/70 border border-gold/20 rounded-[1.5rem] p-6 md:p-8">
                    <h3 className="font-serif text-2xl text-dark">{item.q}</h3>
                    <p className="mt-3 text-muted font-light leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-32 md:pb-48">
          <div className="container mx-auto px-6 md:px-12">
            <FadeIn>
              <div className="max-w-5xl mx-auto rounded-[2rem] bg-dark text-offwhite p-10 md:p-16 text-center">
                <span className="uppercase tracking-[0.25em] text-xs text-gold">
                  Clínica Perfeita em Curitiba
                </span>

                <h2 className="mt-5 text-4xl md:text-6xl font-serif leading-tight">
                  Agende sua avaliação com quem entende de naturalidade.
                </h2>

                <p className="mt-6 text-offwhite/70 font-light max-w-2xl mx-auto leading-relaxed">
                  Atendimento na Avenida Visconde de Guarapuava, Conjunto 1006,
                  Curitiba - PR.
                </p>

                <a
                  href="https://wa.me/554132060016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-10 px-9 py-4 rounded-full bg-gold text-white uppercase tracking-[0.18em] text-xs hover:bg-gold-dark transition"
                >
                  Falar pelo WhatsApp
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}