import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);
  const navLinks = [
  {
    label: 'Sobre',
    href: '#about'
  },
  {
    label: 'Tratamentos',
    href: '#services'
  },
  {
    label: 'Galeria',
    href: '#gallery'
  },
  {
    label: 'Contato',
    href: '#contact'
  }];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      initial={{
        backgroundColor: 'rgba(250, 249, 246, 0)'
      }}
      animate={{
        backgroundColor: isScrolled ?
        'rgba(250, 249, 246, 0.8)' :
        'rgba(250, 249, 246, 0)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)'
      }}>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Brand Monogram */}
          <a href="#" className="flex flex-col items-start group">
            <span className="text-2xl font-serif font-medium text-dark tracking-wider">
              CP
            </span>
            <div className="w-8 h-[1px] bg-gold transition-all duration-300 group-hover:w-12"></div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-dark/70 hover:text-dark transition-colors duration-300 font-light tracking-wide">
              
                {link.label}
              </a>
            )}
            <a
              href="https://wa.me/5541999999999"
              className="px-6 py-2 border border-gold text-gold text-sm tracking-wide hover:bg-gold hover:text-dark transition-all duration-300 rounded-full">
              
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
            aria-label="Menu">
            
            <span
              className={`w-full h-[1.5px] bg-dark transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}>
            </span>
            <span
              className={`w-full h-[1.5px] bg-dark transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}>
            </span>
            <span
              className={`w-full h-[1.5px] bg-dark transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{
          height: 0,
          opacity: 0
        }}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{
          duration: 0.3
        }}
        className="md:hidden overflow-hidden bg-offwhite/95 backdrop-blur-lg border-t border-sage/20">
        
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base text-dark/70 hover:text-dark transition-colors duration-300 py-2">
            
              {link.label}
            </a>
          )}
          <a
            href="https://wa.me/5541999999999"
            className="mt-2 px-6 py-3 border border-gold text-gold text-sm text-center tracking-wide hover:bg-gold hover:text-dark transition-all duration-300 rounded-full">
            
            Agendar Consulta
          </a>
        </div>
      </motion.div>
    </motion.nav>);

}