import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';
import { blogPosts } from '../data/blogPosts';

export function BlogSection() {
  const posts = blogPosts.slice(0, 3); // mostra só 3 na home

  return (
    <section className="relative py-24 md:py-32 bg-[#fbf8f4] overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[52rem] h-[26rem] rounded-full bg-[#d9b98d]/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">

        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            
            <span className="uppercase tracking-[0.28em] text-xs text-[#b88f57] font-medium">
              Blog Clínica Perfeita
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-serif text-[#2f2822] leading-tight">
              Conteúdos sobre estética,
              <span className="block italic text-[#c79d62]">
                pele e naturalidade.
              </span>
            </h2>

            <p className="mt-6 text-[#6d6258] font-light text-lg leading-relaxed">
              Informações pensadas para quem busca procedimentos estéticos em Curitiba com mais clareza, segurança e sofisticação.
            </p>

          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.08}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="rounded-[2rem] border border-[#dcc6a7]/35 bg-white/70 overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)] transition-all duration-500">

                  {/* Image */}
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

                  {/* Content */}
                  <div className="p-6">
                    
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#b88f57] mb-4">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif text-[#2f2822] leading-tight group-hover:text-[#c79d62] transition-colors">
                      {post.title}
                    </h3>

                    <p className="mt-4 text-[#6d6258] font-light leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#9f7743]">
                      Ler artigo
                      <span className="text-base">→</span>
                    </div>

                  </div>

                </article>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-16 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#d3a05d] text-white uppercase tracking-[0.18em] text-xs hover:bg-[#b88f57] transition"
            >
              Ver todos os artigos
              <span className="text-base">→</span>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}