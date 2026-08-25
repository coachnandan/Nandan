import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { corePillarsData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function CorePillars() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <section id="about" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-forest rounded-[40px] text-ivory my-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 bg-cover bg-center"></div>
        
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-6 mb-20 relative z-10">
          <div className="flex justify-center mb-6">
             <span className="text-gold font-mono text-sm uppercase tracking-widest">{corePillarsData.eyebrow}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-ivory leading-tight">
            {corePillarsData.heading} <span className="italic text-gold">{corePillarsData.headingItalic}</span>
          </h2>
          <p className="text-lg text-ivory/70">{corePillarsData.subtext}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {corePillarsData.items.map((item, i) => (
            <ScrollReveal direction="up" delay={i * 0.15} key={item.id}>
              <div className="bg-ivory/5 border border-ivory/10 hover:bg-ivory/10 transition-colors duration-500 rounded-3xl p-10 h-full flex flex-col backdrop-blur-sm">
                <div className="text-gold font-mono text-sm mb-6 uppercase tracking-widest">{item.title}</div>
                <h3 className="text-3xl font-serif text-ivory mb-6">{item.heading}</h3>
                <p className="text-ivory/70 leading-relaxed flex-1 mb-8">{item.description}</p>
                {item.href ? (
                  <Link to={item.href} onClick={() => window.scrollTo(0, 0)}>
                    <Button variant="champagne" size="sm" className="w-fit">
                      {item.cta}
                    </Button>
                  </Link>
                ) : (
                  <Button onClick={() => setSelectedItem(item)} variant="champagne" size="sm" className="w-fit">
                    {item.cta}
                  </Button>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedItem(null)} 
              className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }} 
              className="relative w-full max-w-2xl bg-ivory rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden z-10"
            >
              <button 
                onClick={() => setSelectedItem(null)} 
                className="absolute top-6 right-6 text-charcoal/50 hover:text-charcoal transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-gold font-mono text-sm mb-4 uppercase tracking-widest">{selectedItem.title}</div>
              <h3 className="text-3xl font-serif text-charcoal mb-6">{selectedItem.heading}</h3>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                {selectedItem.description}
                <br /><br />
                Take the next step in your journey with this specialized pathway. We provide customized strategies and tools designed specifically for your personal and professional evolution. Dive deeper into our comprehensive systems designed for lasting success.
              </p>
              
              <Button href="#contact" variant="primary" size="md">
                Get Started
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
