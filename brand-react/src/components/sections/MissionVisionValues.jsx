import { missionVisionData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';

export default function MissionVisionValues() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {missionVisionData.items.map((item, i) => (
          <ScrollReveal direction="up" delay={i * 0.15} key={i}>
            <div className="bg-forest p-10 rounded-3xl h-full flex flex-col text-ivory shadow-xl border border-forest/80 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150"></div>
              
              <h3 className="text-sm font-mono text-gold tracking-widest uppercase mb-8 relative z-10">{item.title}</h3>
              
              {item.description ? (
                <p className="text-xl font-serif leading-relaxed relative z-10">{item.description}</p>
              ) : (
                <ul className="space-y-4 relative z-10">
                  {item.items.map((val, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                      <span className="text-xl font-serif">{val}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
