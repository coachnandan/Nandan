import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { navData } from '../../data/siteData';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and handle hash scrolling when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({
            top: el.offsetTop - 100, // Account for fixed header
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo border-b ${
        isScrolled 
          ? 'bg-ivory/80 backdrop-blur-xl py-4 border-border/50 shadow-sm' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="font-serif text-2xl tracking-tight text-forest leading-none hover:text-forest/80 transition-colors">
            {navData.logo.name}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mt-1">
            {navData.logo.subtitle}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-8">
            {navData.links.map((link) => (
              <li key={link.label}>
                <NavLink 
                  to={link.href}
                  className={({ isActive }) => 
                    `text-sm font-medium tracking-wide transition-all duration-300 px-4 py-2 rounded-full ${
                      isActive 
                        ? 'text-forest bg-sage' 
                        : 'text-charcoal/80 hover:text-forest hover:bg-sage/50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to={navData.cta.href}>
            <Button size="sm" variant="primary">
              {navData.cta.label}
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden z-50 text-charcoal hover:text-forest transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={24} strokeWidth={1.5} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={24} strokeWidth={1.5} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 top-[72px] bg-ivory/95 backdrop-blur-3xl z-40 lg:hidden border-t border-border/50"
          >
            <div className="px-6 py-12 flex flex-col gap-8 h-full">
              <ul className="flex flex-col gap-6">
                {navData.links.map((link) => (
                  <li key={link.label}>
                    <NavLink 
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => 
                        `text-2xl font-serif block transition-colors duration-300 ${
                          isActive ? 'text-forest' : 'text-charcoal hover:text-forest'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-border/50">
                <Link to={navData.cta.href} onClick={() => setIsMobileMenuOpen(false)} className="block w-full">
                  <Button className="w-full justify-center">
                    {navData.cta.label}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
