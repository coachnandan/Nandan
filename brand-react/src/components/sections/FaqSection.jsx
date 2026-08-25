import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqSectionData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 lg:px-16 max-w-4xl mx-auto">
      <ScrollReveal direction="up" className="text-center space-y-6 mb-16">
        <SectionEyebrow text={faqSectionData.eyebrow} className="justify-center" />
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {faqSectionData.heading} <span className="italic text-forest">{faqSectionData.headingItalic}</span>
        </h2>
        <p className="text-lg text-charcoal/70">{faqSectionData.subtext}</p>
      </ScrollReveal>

      <div className="space-y-4">
        {faqSectionData.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <ScrollReveal direction="up" delay={index * 0.1} key={index}>
              <div 
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-sage/10 border-forest/30' : 'bg-white border-border hover:border-forest/30'}`}
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-serif text-lg text-charcoal pr-8">{item.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-forest shrink-0"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-text-muted leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
