import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { FadeIn } from '../components/FadeIn';
import { blogPosts } from '../data/blogPosts';

export function BlogPage() {
  return (
    <>
      <SEOHead
        title="Blog de Estética em Curitiba"
        description="Conteúdos sobre Laser CO₂, Botox, harmonização facial, preenchimento labial e tratamentos estéticos em Curitiba."
        canonical="https://www.clinicaperfeita.com.br/blog"
        keywords="blog estética Curitiba, laser CO2 Curitiba, botox Curitiba, harmonização facial Curitiba"
      />
              <Link
          to="/"
          className="fixed top-5 left-5 z-[80] inline-flex items-center gap-3 rounded-full border border-[#d5bb93]/45 bg-white/80 backdrop-blur-md px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-[#9f7743] shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:bg-white transition"
        >
          <span className="text-base leading-none">←</span>
          Home
        </Link>

      <main className="min-h-screen bg-[#fbf8f4] text-[#2f2822]">
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[52rem] h-[26rem] rounded-full bg-[#d9b98d]/20 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>

          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center">
                <span className="uppercase tracking-[0.28em] text-xs text-[#b88f57] font-medium">
                  Blog Clínica Perfeita
                </span>

                <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-tight text-[#2f2822]">
                  Conteúdos sobre estética,
                  <span className="block italic text-[#c79d62]">
                    pele e naturalidade.
                  </span>
                </h1>

                <p className="mt-8 text-[#6d6258] text-lg md:text-xl font-light leading-relaxed">
                  Informações para quem busca tratamentos estéticos em Curitiba
                  com mais segurança, clareza e sofisticação.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="pb-28 md:pb-40">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 max-w-7xl mx-auto">
              {blogPosts.map((post, index) => (
                <FadeIn key={post.slug} delay={index * 0.06}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block h-full"
                  >
                    <article className="h-full rounded-[2rem] border border-[#dcc6a7]/35 bg-white/70 overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)] transition-all duration-500">
                      <div className="relative aspect-[4/3] overflow-hidden bg-[#efe7dd]">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(47,40,34,0.28),transparent_58%)]" />

                        <span className="absolute left-5 bottom-5 rounded-full bg-white/80 backdrop-blur-md border border-white/40 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[#9f7743]">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-7">
                        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#b88f57] mb-4">
                          <span>{post.readTime}</span>
                          <span>•</span>
                          <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-serif leading-tight text-[#2f2822] group-hover:text-[#c79d62] transition-colors">
                          {post.title}
                        </h2>

                        <p className="mt-4 text-[#6d6258] font-light leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#9f7743]">
                          Ler artigo
                          <span className="text-base">→</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}