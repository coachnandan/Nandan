import { motion } from 'framer-motion';
import { eventGalleryData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';

export default function MomentsOfImpact() {
  return (
    <section className="py-32 px-6 lg:px-16 max-w-7xl mx-auto overflow-hidden">
      <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-6 mb-24">
        <SectionEyebrow text="GALLERY" className="justify-center" />
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {eventGalleryData.heading}
        </h2>
      </ScrollReveal>

      <div className="space-y-32 md:space-y-48">
        {eventGalleryData.items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'md:flex-row-reverse'}`}
            >
              {/* Image Section */}
              <div className="w-full md:w-3/5 lg:w-2/3">
                <ScrollReveal direction={isEven ? "right" : "left"} className="w-full h-full relative group">
                  <div className="overflow-hidden rounded-[40px] aspect-[4/3] md:aspect-[16/10] bg-sage/30 relative">
                    {/* Parallax & Hover Effect */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                      />
                    </motion.div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Caption Section */}
              <div className="w-full md:w-2/5 lg:w-1/3">
                <ScrollReveal direction="up" delay={0.2} className="relative">
                  <div className={`hidden md:block absolute top-0 ${isEven ? '-left-12' : '-right-12'} w-8 h-[1px] bg-gold/50`}></div>
                  <h3 className="text-3xl lg:text-4xl font-serif text-charcoal leading-snug">
                    {item.title}
                  </h3>
                  <div className="w-12 h-1 bg-forest mt-8 mb-6"></div>
                  <p className="text-text-muted text-lg font-light leading-relaxed">
                    A transformative moment capturing the essence of elite performance and community connection.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
