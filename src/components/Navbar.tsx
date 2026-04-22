import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 40);
    });
  }, [scrollY]);

  const navLinks = [
    { label: 'Sobre', href: '/sobre' },
    { label: 'Tratamentos', href: '#services' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{
        backgroundColor: 'rgba(250, 249, 246, 0)',
      }}
      animate={{
        backgroundColor: isScrolled
          ? 'rgba(250, 249, 246, 0.72)'
          : 'rgba(250, 249, 246, 0)',
        backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
        boxShadow: isScrolled
          ? '0 10px 40px rgba(0,0,0,0.04)'
          : '0 0px 0px rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'h-[78px]' : 'h-[92px]'
          }`}
        >
          {/* Brand */}
          <a
            href="#"
            className="group flex flex-col items-start justify-center leading-none"
          >
            <span className="text-[1.35rem] md:text-[1.55rem] font-serif text-dark tracking-[0.08em]">
              Clínica Perfeita
            </span>

            <div className="mt-2 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-gold/70 transition-all duration-500 group-hover:w-12" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-dark/45">
                Estética avançada
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <div className="flex items-center gap-7 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-[0.95rem] text-dark/70 hover:text-dark transition-colors duration-300 font-light tracking-[0.04em] after:absolute after:left-0 after:-bottom-1.5 after:h-[1px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/5541999999999"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-gold/70 text-gold text-sm tracking-[0.12em] hover:bg-gold hover:text-dark transition-all duration-500 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
            >
              Agendar
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative flex items-center justify-center w-11 h-11 rounded-full border border-gold/20 bg-white/60 backdrop-blur-md"
            aria-label="Menu"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute left-0 top-[4px] w-full h-[1.5px] bg-dark transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-[9px]' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] w-full h-[1.5px] bg-dark transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] w-full h-[1.5px] bg-dark transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-[9px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden px-6 pb-6"
          >
            <div className="rounded-[1.75rem] border border-[#d9c6a8]/30 bg-[rgba(250,249,246,0.92)] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="px-6 pt-6 pb-3">
                <span className="text-[10px] uppercase tracking-[0.28em] text-dark/45">
                  Navegação
                </span>
              </div>

              <div className="flex flex-col px-6 pb-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, delay: index * 0.05 }}
                    className="py-4 border-b border-dark/6 text-dark/75 hover:text-dark transition-colors duration-300 text-[1rem] font-light"
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.a
                  href="https://wa.me/5541999999999"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.18 }}
                  className="mt-5 inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-gold text-gold text-sm tracking-[0.14em] hover:bg-gold hover:text-dark transition-all duration-500"
                >
                  Agendar Consulta
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}