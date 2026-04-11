import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Work', href: '/#work' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="sticky top-[3px] z-[9998] bg-bg/80 backdrop-blur-xl border-b border-border h-16">
      <div className="max-w-[1200px] mx-auto px-gutter h-full flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-text-primary font-bold tracking-widest text-[1.1rem]"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          AM
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-[0.9rem] text-text-muted hover:text-text-primary transition-colors duration-180"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="mailto:kumarabhishekbuild@gmail.com?subject=Discovery Call Request"
            className="bg-accent text-black px-[1.1rem] py-[0.5rem] text-[0.875rem] font-semibold hover:bg-accent-dim transition-all duration-180 hover:scale-[1.02]"
          >
            Book a call →
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-16 bg-bg z-[9997] md:hidden flex flex-col p-gutter"
          >
            <div className="flex flex-col gap-8 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-[1.5rem] text-text-muted hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto mb-12">
              <a
                href="mailto:kumarabhishekbuild@gmail.com?subject=Discovery Call Request"
                className="block w-full bg-accent text-black text-center py-4 text-[1.1rem] font-semibold"
              >
                Book a call →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
