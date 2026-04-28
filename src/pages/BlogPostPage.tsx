import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

const SITE_URL = 'https://www.clinicaperfeita.com.br';

const WHATSAPP_URL =
  'https://wa.me/554132060016?text=Olá! Vim pelo blog da Clínica Perfeita e gostaria de agendar uma avaliação.';

const posts = {
  'laser-co2-curitiba-renovacao-da-pele': {
    title: 'Laser CO₂ em Curitiba: renovação profunda da pele',
    description:
      'Entenda como o Laser CO₂ pode ajudar na renovação da pele, textura, poros, cicatrizes e rejuvenescimento facial.',
    category: 'Laser CO₂',
    date: '2026-04-28',
    readTime: '6 min de leitura',
    image: '../services/laser-co2.jpeg',
    keywords:
      'laser CO2 Curitiba, laser CO2 em Curitiba, rejuvenescimento laser Curitiba, tratamento para cicatriz Curitiba',
    relatedProcedure: '/procedimentos/laser-co2-curitiba',
    relatedProcedureTitle: 'Laser CO₂ em Curitiba',
    content: `
O Laser CO₂ é um dos tratamentos mais completos para quem busca renovação intensa da pele.

Na Clínica Perfeita, em Curitiba, ele é considerado um dos procedimentos de destaque por atuar na textura, poros, cicatrizes, linhas finas e sinais de envelhecimento.

## O que é o Laser CO₂?

O Laser CO₂ é uma tecnologia que promove uma renovação controlada da pele.

Ele pode auxiliar no estímulo de colágeno, melhora da firmeza, uniformização da textura e rejuvenescimento facial.

## Para quem pode ser indicado?

O procedimento pode ser indicado para quem deseja melhorar:

- Cicatrizes de acne
- Poros dilatados
- Textura irregular
- Linhas finas
- Flacidez leve
- Aspecto envelhecido da pele

## Por que fazer avaliação?

A avaliação é essencial para entender o tipo de pele, histórico, sensibilidade e objetivo do paciente.

Cada protocolo precisa ser personalizado para maior segurança e melhor resultado.

## Laser CO₂ em Curitiba

A Clínica Perfeita está localizada na Avenida Visconde de Guarapuava, Conjunto 1006, em Curitiba, com atendimento voltado para naturalidade, tecnologia e cuidado individual.
`
  },

  'bioestimuladores-colageno-curitiba': {
    title: 'Bioestimuladores em Curitiba: colágeno, firmeza e naturalidade',
    description:
      'Saiba como os bioestimuladores ajudam na produção de colágeno e na melhora gradual da firmeza da pele.',
    category: 'Bioestimuladores',
    date: '2026-04-28',
    readTime: '5 min de leitura',
    image: '../services/bioestimuladores.jpeg',
    keywords:
      'bioestimuladores Curitiba, bioestimulador de colágeno Curitiba, colágeno Curitiba, rejuvenescimento Curitiba',
    relatedProcedure: '/procedimentos/bioestimuladores-curitiba',
    relatedProcedureTitle: 'Bioestimuladores em Curitiba',
    content: `
Os bioestimuladores são indicados para quem busca melhorar firmeza, qualidade da pele e rejuvenescimento de forma gradual.

Diferente de procedimentos que oferecem mudança imediata de volume, os bioestimuladores atuam estimulando o próprio organismo a produzir colágeno.

## O que são bioestimuladores?

São substâncias aplicadas em pontos estratégicos para estimular a produção natural de colágeno.

Com o passar do tempo, a pele tende a ficar mais firme, com melhor sustentação e aparência mais jovem.

## Para quem pode ser indicado?

Os bioestimuladores podem ser indicados para:

- Flacidez facial
- Perda de firmeza
- Pele fina
- Sinais de envelhecimento
- Rejuvenescimento natural
- Melhora da qualidade da pele

## O resultado é imediato?

O resultado costuma ser progressivo.

Isso acontece porque o efeito depende da resposta do organismo e da produção natural de colágeno.

## Bioestimuladores em Curitiba

Na Clínica Perfeita, o tratamento é planejado de forma individual para respeitar a anatomia, a idade e a naturalidade de cada paciente.
`
  },

  'botox-curitiba-expressao-natural': {
    title: 'Botox em Curitiba: como suavizar rugas sem perder naturalidade',
    description:
      'Entenda como o Botox pode suavizar linhas de expressão mantendo um resultado leve, natural e elegante.',
    category: 'Botox',
    date: '2026-04-28',
    readTime: '5 min de leitura',
    image: '../services/botox.jpeg',
    keywords:
      'botox Curitiba, botox em Curitiba, toxina botulínica Curitiba, rugas Curitiba',
    relatedProcedure: '/procedimentos/botox-curitiba',
    relatedProcedureTitle: 'Botox em Curitiba',
    content: `
O Botox é um dos procedimentos mais conhecidos para suavizar linhas de expressão.

Na Clínica Perfeita, em Curitiba, a proposta é preservar a naturalidade do rosto, evitando um resultado artificial ou exagerado.

## Para que serve o Botox?

O Botox pode ajudar a suavizar marcas causadas pela movimentação facial.

Ele é muito usado em regiões como testa, entre as sobrancelhas e ao redor dos olhos.

## Quando pode ser indicado?

O procedimento pode ser indicado para:

- Linhas na testa
- Rugas entre as sobrancelhas
- Pés de galinha
- Expressão cansada
- Prevenção de marcas profundas

## Botox deixa o rosto artificial?

Quando bem planejado, não.

O objetivo é suavizar a expressão, mantendo leveza e movimento natural.

## Botox em Curitiba

A avaliação é essencial para definir pontos, quantidade e estratégia de aplicação conforme cada rosto.
`
  },

  'harmonizacao-facial-curitiba-naturalidade': {
    title: 'Harmonização facial em Curitiba: equilíbrio sem exageros',
    description:
      'Entenda como a harmonização facial pode valorizar traços, proporções e contornos mantendo a identidade do rosto.',
    category: 'Harmonização Facial',
    date: '2026-04-28',
    readTime: '7 min de leitura',
    image: '../services/facial.jpeg',
    keywords:
      'harmonização facial Curitiba, harmonização facial em Curitiba, estética facial Curitiba',
    relatedProcedure: '/procedimentos/harmonizacao-facial-curitiba',
    relatedProcedureTitle: 'Harmonização Facial em Curitiba',
    content: `
A harmonização facial é um conjunto de procedimentos planejados para melhorar proporção, equilíbrio e naturalidade.

Na Clínica Perfeita, o foco é valorizar o rosto sem descaracterizar a identidade facial.

## O que é harmonização facial?

Não se trata de um único procedimento.

A harmonização pode envolver diferentes técnicas, como preenchimentos, toxina botulínica, bioestimuladores e tratamentos para qualidade da pele.

## Para quem pode ser indicada?

Pode ser indicada para quem deseja melhorar:

- Contorno facial
- Assimetria
- Perda de volume
- Proporção do rosto
- Sinais de envelhecimento
- Harmonia geral da face

## O resultado precisa ser natural

O melhor resultado é aquele que parece pertencer ao rosto.

Por isso, a avaliação individual é fundamental para respeitar anatomia, expressão e personalidade.

## Harmonização facial em Curitiba

Na Clínica Perfeita, cada plano é construído com cuidado, técnica e olhar estético refinado.
`
  },

  'preenchimento-labial-curitiba-delicado': {
    title: 'Preenchimento labial em Curitiba: volume delicado e proporcional',
    description:
      'Saiba como o preenchimento labial pode melhorar contorno, hidratação e proporção dos lábios com naturalidade.',
    category: 'Preenchimento Labial',
    date: '2026-04-28',
    readTime: '5 min de leitura',
    image: '../services/labial.jpeg',
    keywords:
      'preenchimento labial Curitiba, preenchimento labial em Curitiba, lábios naturais Curitiba',
    relatedProcedure: '/procedimentos/preenchimento-labial-curitiba',
    relatedProcedureTitle: 'Preenchimento Labial em Curitiba',
    content: `
O preenchimento labial é indicado para quem busca lábios mais definidos, hidratados e proporcionais.

Na Clínica Perfeita, o foco é entregar um resultado elegante, respeitando o formato natural dos lábios.

## O que o preenchimento labial pode melhorar?

O procedimento pode auxiliar em:

- Definição do contorno
- Hidratação dos lábios
- Correção de assimetrias
- Volume delicado
- Proporção facial

## O resultado fica exagerado?

Não precisa ficar.

O resultado depende da técnica, da quantidade utilizada e do planejamento feito antes do procedimento.

## Antes do preenchimento

A avaliação é essencial para entender o formato dos lábios, o objetivo desejado e a harmonia com o restante do rosto.

## Preenchimento labial em Curitiba

Na Clínica Perfeita, o tratamento é conduzido com atenção à naturalidade e à estética individual de cada paciente.
`
  },

  'limpeza-de-pele-curitiba-cuidados-faciais': {
    title: 'Limpeza de pele em Curitiba: por que ela é essencial',
    description:
      'Entenda a importância da limpeza de pele para remover impurezas, melhorar textura e preparar a pele para outros tratamentos.',
    category: 'Limpeza de Pele',
    date: '2026-04-28',
    readTime: '4 min de leitura',
    image: '/services/limpeza.jpeg',
    keywords:
      'limpeza de pele Curitiba, limpeza facial Curitiba, cuidados com a pele Curitiba',
    relatedProcedure: '/procedimentos/limpeza-de-pele-curitiba',
    relatedProcedureTitle: 'Limpeza de Pele em Curitiba',
    content: `
A limpeza de pele é um cuidado essencial para manter a saúde, o viço e a qualidade da pele.

Ela ajuda a remover impurezas, controlar oleosidade e preparar a pele para outros tratamentos estéticos.

## Para que serve a limpeza de pele?

A limpeza de pele pode ajudar na remoção de cravos, resíduos, células mortas e excesso de oleosidade.

Além disso, contribui para uma pele com aparência mais limpa e uniforme.

## Para quem pode ser indicada?

Pode ser indicada para pessoas com:

- Cravos
- Oleosidade
- Pele opaca
- Textura irregular
- Acúmulo de impurezas
- Necessidade de manutenção facial

## Com que frequência fazer?

A frequência varia conforme o tipo de pele, rotina e necessidade individual.

Por isso, a avaliação profissional ajuda a definir o melhor intervalo.

## Limpeza de pele em Curitiba

Na Clínica Perfeita, o cuidado é feito com atenção ao tipo de pele e à experiência da paciente.
`
  },

  'skinbooster-curitiba-hidratacao-profunda': {
    title: 'Skinbooster em Curitiba: hidratação profunda para a pele',
    description:
      'Conheça o Skinbooster, tratamento indicado para melhorar hidratação, viço, elasticidade e linhas finas.',
    category: 'Skinbooster',
    date: '2026-04-28',
    readTime: '5 min de leitura',
    image: '/services/skinbooster.jpeg',
    keywords:
      'skinbooster Curitiba, hidratação facial Curitiba, pele viçosa Curitiba, tratamento para pele Curitiba',
    relatedProcedure: '/procedimentos/skinbooster-curitiba',
    relatedProcedureTitle: 'Skinbooster em Curitiba',
    content: `
O Skinbooster é um tratamento voltado para melhorar a hidratação profunda e a qualidade da pele.

Ele é indicado para quem sente a pele sem viço, ressecada ou com linhas finas.

## O que é Skinbooster?

É um procedimento que melhora a hidratação, elasticidade e luminosidade da pele.

Diferente de preenchimentos voltados para volume, o Skinbooster tem foco na qualidade da pele.

## Para quem pode ser indicado?

Pode ser indicado para:

- Pele ressecada
- Perda de viço
- Linhas finas
- Textura irregular
- Falta de luminosidade
- Melhora da qualidade da pele

## O Skinbooster muda o formato do rosto?

Não é esse o objetivo.

A proposta é melhorar hidratação e textura, mantendo os traços naturais.

## Skinbooster em Curitiba

Na Clínica Perfeita, o tratamento é indicado após avaliação para entender as necessidades da pele e o melhor protocolo.
`
  }
} as const;

type PostSlug = keyof typeof posts;

function formatContent(content: string) {
  return content
    .trim()
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line, index) => {
      const text = line.trim();

      if (text.startsWith('## ')) {
        return (
          <h2
            key={index}
            className="mt-12 mb-5 text-3xl md:text-4xl font-serif text-[#2f2822] leading-tight"
          >
            {text.replace('## ', '')}
          </h2>
        );
      }

      if (text.startsWith('- ')) {
        return (
          <li
            key={index}
            className="ml-5 pl-2 text-[#5f5449] font-light leading-relaxed"
          >
            {text.replace('- ', '')}
          </li>
        );
      }

      return (
        <p
          key={index}
          className="mb-5 text-[17px] md:text-lg text-[#5f5449] font-light leading-[1.9]"
        >
          {text}
        </p>
      );
    });
}

export function BlogPostPage() {
  const { slug } = useParams();
  const post = posts[slug as PostSlug];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' as ScrollBehavior
    });
  }, [slug]);

  if (!post) {
    return (
      <main className="min-h-screen bg-[#fbf8f4] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-[#2f2822]">
            Post não encontrado
          </h1>

          <Link
            to="/blog"
            className="inline-flex mt-8 px-8 py-4 rounded-full bg-[#d3a05d] text-white uppercase tracking-[0.18em] text-xs"
          >
            Voltar para o blog
          </Link>
        </div>
      </main>
    );
  }

  const canonical = `${SITE_URL}/blog/${slug}`;

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.description}
        canonical={canonical}
        image={`${SITE_URL}${post.image}`}
        type="article"
        keywords={post.keywords}
      />

      <main className="min-h-screen bg-[#fbf8f4] text-[#2f2822] overflow-hidden">
        <Link
          to="/blog"
          className="fixed top-5 left-5 z-[80] inline-flex items-center gap-3 rounded-full border border-[#d5bb93]/45 bg-white/80 backdrop-blur-md px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-[#9f7743] shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:bg-white transition"
        >
          <span className="text-base leading-none">←</span>
          Blog
        </Link>

        <article>
          <header className="relative pt-32 pb-16 md:pt-44 md:pb-24">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[-12rem] left-1/2 -translate-x-1/2 w-[56rem] h-[32rem] rounded-full bg-[#d9b98d]/20 blur-3xl" />
              <div className="absolute bottom-[-10rem] right-[-8rem] w-[32rem] h-[24rem] rounded-full bg-[#c8d6c4]/20 blur-3xl" />
              <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12">
              <div className="max-w-5xl mx-auto text-center">
                <span className="inline-flex rounded-full border border-[#d5bb93]/45 bg-white/70 px-5 py-2 text-[10px] uppercase tracking-[0.28em] text-[#9f7743]">
                  {post.category}
                </span>

                <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.98] text-[#2f2822]">
                  {post.title}
                </h1>

                <p className="mt-7 max-w-2xl mx-auto text-[#6d6258] font-light text-lg leading-relaxed">
                  {post.description}
                </p>

                <div className="mt-7 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#b88f57]">
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </span>
                </div>
              </div>
            </div>
          </header>

          <section className="pb-16 md:pb-24">
            <div className="container mx-auto px-6 md:px-12">
              <div className="relative max-w-6xl mx-auto">
                <div className="absolute inset-0 border border-[#c7a46a]/35 translate-x-3 translate-y-3 rounded-[2rem]" />

                <div className="relative rounded-[2rem] overflow-hidden border border-[#dcc6a7]/35 bg-white/70 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[16/7] object-cover"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(47,40,34,0.22),transparent_58%)]" />
                </div>
              </div>
            </div>
          </section>

          <section className="pb-24 md:pb-36">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">
                <div className="rounded-[2rem] border border-[#dcc6a7]/35 bg-white/72 p-7 md:p-12 shadow-[0_20px_55px_rgba(0,0,0,0.04)]">
                  <div className="prose max-w-none">
                    {formatContent(post.content)}
                  </div>
                </div>

                <aside className="lg:sticky lg:top-28 space-y-6">
                  <div className="rounded-[2rem] border border-[#dcc6a7]/35 bg-white/75 p-7 shadow-[0_18px_45px_rgba(0,0,0,0.04)]">
                    <span className="uppercase tracking-[0.24em] text-[10px] text-[#b88f57]">
                      Clínica Perfeita
                    </span>

                    <h2 className="mt-4 text-3xl font-serif leading-tight text-[#2f2822]">
                      Quer saber se esse tratamento é para você?
                    </h2>

                    <p className="mt-4 text-[#6d6258] font-light leading-relaxed">
                      Agende uma avaliação personalizada na Avenida Visconde de
                      Guarapuava, Conjunto 1006.
                    </p>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center w-full mt-7 px-7 py-4 rounded-full bg-[#d3a05d] text-white uppercase tracking-[0.16em] text-xs hover:bg-[#b88f57] transition"
                    >
                      Agendar avaliação
                    </a>
                  </div>

                  <div className="rounded-[2rem] border border-[#dcc6a7]/35 bg-[#2f2822] text-white p-7">
                    <span className="uppercase tracking-[0.24em] text-[10px] text-[#d3a05d]">
                      Tratamento relacionado
                    </span>

                    <h3 className="mt-4 text-2xl font-serif leading-tight">
                      {post.relatedProcedureTitle}
                    </h3>

                    <p className="mt-4 text-white/65 font-light leading-relaxed">
                      Conheça a página completa do procedimento, indicações,
                      benefícios e dúvidas frequentes.
                    </p>

                    <Link
                      to={post.relatedProcedure}
                      className="inline-flex mt-7 text-[11px] uppercase tracking-[0.22em] text-[#d3a05d]"
                    >
                      Ver procedimento →
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}