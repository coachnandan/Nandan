import { footerData } from '../../data/siteData';
import { Camera, Briefcase, Video, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const icons = { 
  Instagram: Camera, 
  LinkedIn: Briefcase, 
  YouTube: Video 
};

export default function Footer() {

  const handleNavClick = (e, href) => {
    // Smooth scroll for hash links if on same page
    if (href.startsWith('#') && href.length > 1) {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-charcoal text-ivory py-24 px-6 lg:px-16 mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Brand & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20 pb-16 border-b border-ivory/10">
          <div className="max-w-md">
            <h3 className="font-serif text-3xl lg:text-4xl text-ivory mb-6">{footerData.brand}</h3>
            <p className="text-ivory/60 text-base leading-relaxed whitespace-pre-line">{footerData.description}</p>
          </div>
          <div className="shrink-0">
            <Button href={footerData.cta.href} variant="outline" className="text-ivory border-ivory hover:bg-gold hover:border-gold hover:text-charcoal transition-all">
              {footerData.cta.label}
            </Button>
          </div>
        </div>

        {/* Middle Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Coaching */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-ivory/40 mb-8 font-medium">{footerData.columns[0].heading}</h4>
            <ul className="space-y-8">
              {footerData.columns[0].links.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group block"
                  >
                    <div className="text-ivory/90 group-hover:text-gold transition-colors text-base mb-1.5">{link.label}</div>
                    {link.subtitle && <div className="text-ivory/50 text-xs tracking-wide">{link.subtitle}</div>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-ivory/40 mb-8 font-medium">{footerData.columns[1].heading}</h4>
            <ul className="space-y-4">
              {footerData.columns[1].links.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-ivory/80 hover:text-gold transition-colors text-sm inline-block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-ivory/40 mb-8 font-medium">{footerData.columns[2].heading}</h4>
            <ul className="space-y-4">
              {footerData.columns[2].links.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-ivory/80 hover:text-gold transition-colors text-sm inline-block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-ivory/40 mb-8 font-medium">{footerData.columns[3].heading}</h4>
            <ul className="space-y-4">
              {footerData.columns[3].social.map((social, i) => {
                const IconComponent = icons[social.label] || ArrowUpRight;
                return (
                  <li key={i}>
                    <a href={social.href} className="group flex items-center gap-4 text-ivory/80 hover:text-gold transition-colors text-sm">
                      <div className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                        <IconComponent size={16} />
                      </div>
                      <span className="font-medium tracking-wide">{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
        
        {/* Bottom Section: Copyright & Tagline */}
        <div className="pt-10 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-ivory/40 font-medium tracking-wide">
          <p>{footerData.copyright}</p>
          <p className="uppercase tracking-[0.2em]">{footerData.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
