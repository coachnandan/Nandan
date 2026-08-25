import Button from '../ui/Button';
import SectionEyebrow from '../ui/SectionEyebrow';
import AnimatedNumber from '../ui/AnimatedNumber';

export default function Hero({ data }) {
  if (!data) return null;

  return (
    <section id="home" className="relative pt-32 pb-32 px-6 lg:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-screen">
      <div className={`flex-1 space-y-8 relative z-10 ${!data.image ? 'text-center flex flex-col items-center max-w-4xl mx-auto' : ''}`}>
        <SectionEyebrow text={data.eyebrow} className={!data.image ? 'justify-center' : ''} />
        
        <h1 className="text-5xl lg:text-7xl font-serif leading-[1.05] text-charcoal tracking-tight">
          {data.heading[0]} <br />
          <span className="italic text-forest">{data.heading[1]}</span> {data.heading[2]} <br />
          <span className="italic">{data.heading[3]}</span>
        </h1>
        
        <p className={`text-lg text-text-muted leading-relaxed ${!data.image ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {data.description}
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 pt-4 mb-16 ${!data.image ? 'justify-center w-full' : ''}`}>
          <Button href={data.primaryCTA.href} size="lg">
            {data.primaryCTA.label}
          </Button>
          {data.secondaryCTA && (
            <Button href={data.secondaryCTA.href} variant="ghost" size="lg">
              {data.secondaryCTA.label}
            </Button>
          )}
        </div>

        {data.stats && data.stats.length > 0 && (
          <div className={`pt-10 border-t border-border flex flex-wrap gap-8 lg:gap-12 bg-white/60 backdrop-blur-md p-8 rounded-3xl w-fit shadow-sm ${!data.image ? 'mx-auto justify-center' : ''}`}>
            {data.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center border-r border-border last:border-0 pr-8 last:pr-0">
                <div className="text-3xl font-serif text-forest flex items-baseline gap-1">
                  <AnimatedNumber value={stat.number} />
                  <span className="text-gold">{stat.suffix}</span>
                </div>
                <p className="text-[10px] tracking-widest uppercase text-text-muted mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {data.image && (
        <div className="flex-1 relative w-full max-w-md mx-auto lg:ml-auto z-10">
          <div className="relative w-full aspect-[2/3] rounded-[32px] overflow-hidden shadow-2xl bg-gradient-to-b from-sage/30 to-sage/10">
            <img 
              src={data.image} 
              alt={data.imageAlt} 
              className="w-full h-full object-contain object-center hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-border flex items-center justify-center"><span class="text-charcoal/40 text-lg">Image Placeholder</span></div>';
              }}
            />
            {/* Optional image caption overlay */}
            {data.imageCaption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent px-6 py-6">
                <p className="text-ivory font-serif text-lg leading-tight">{data.imageCaption}</p>
                {data.imageCaptionSubtitle && (
                  <p className="text-ivory/70 text-xs tracking-widest uppercase mt-1">{data.imageCaptionSubtitle}</p>
                )}
              </div>
            )}
          </div>

          {/* Floating animated badge */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-ivory/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full animate-[spin-slow_20s_linear_infinite]" viewBox="0 0 100 100">
              <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text className="text-[9.5px] uppercase tracking-[0.16em] font-medium fill-forest">
                <textPath href="#textPath" startOffset="0%">
                  Wellness · Leadership · Excellence ·
                </textPath>
              </text>
            </svg>
          </div>
          
          {/* Tag on the left */}
          <div className="absolute top-1/2 -left-6 -translate-y-1/2 bg-forest text-white py-3 px-5 rounded-full text-xs tracking-widest uppercase font-medium shadow-lg whitespace-nowrap flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            ICF Certified
          </div>
        </div>
      )}

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-br from-sage to-sage/30 rounded-bl-[40px] -z-10"></div>
    </section>
  );
}
