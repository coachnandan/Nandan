import { upcomingEventsPageData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import { MapPin } from 'lucide-react';

export default function UpcomingEvents() {
  return (
    <section id="upcoming-events" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-sage/20 rounded-[40px] my-12">
      <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-6 mb-20">
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {upcomingEventsPageData.heading}
        </h2>
        <p className="text-lg text-charcoal/70">{upcomingEventsPageData.subtext}</p>
      </ScrollReveal>

      {upcomingEventsPageData.items && upcomingEventsPageData.items.length > 0 ? (
        <div className="space-y-6 max-w-5xl mx-auto">
          {upcomingEventsPageData.items.map((event, index) => (
            <ScrollReveal direction="up" delay={index * 0.15} key={index}>
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-border group flex flex-col md:flex-row md:items-center gap-8">
                
                {/* Date Column */}
                <div className="shrink-0 flex md:flex-col items-center md:justify-center md:w-32 gap-4 md:gap-2 md:border-r border-border md:pr-8">
                  <div className="text-forest font-mono text-xl lg:text-2xl uppercase tracking-widest text-center">
                    {event.dateStr.split(' ')[0]} <br className="hidden md:block" /> {event.dateStr.split(' ')[1]}
                  </div>
                </div>
                
                {/* Content Column */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <h3 className="text-2xl lg:text-3xl font-serif text-charcoal group-hover:text-forest transition-colors duration-300">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-gold font-mono text-sm tracking-wide bg-gold/10 px-4 py-1.5 rounded-full w-fit">
                      <MapPin size={16} className="mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <p className="text-text-muted leading-relaxed max-w-2xl">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center gap-6 pt-4">
                    <div className="text-charcoal font-serif tracking-wide">
                      {event.price}
                    </div>
                    <Button href={event.href} className="text-sm px-6 py-2">
                      Register
                    </Button>
                  </div>
                </div>
                
              </div>
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <ScrollReveal direction="up" className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-10 md:p-12 text-center border border-border shadow-sm">
            <h3 className="text-2xl font-serif text-charcoal mb-3">New Experience Schedule Announcing Soon</h3>
            <p className="text-text-muted text-base leading-relaxed mb-6 max-w-md mx-auto">
              We are curating the next season of masterclasses and summits. Inquire below to invite Nandan to your organization.
            </p>
            <Button href="#book">Invite Nandan to Your Event</Button>
          </div>
        </ScrollReveal>
      )}
    </section>
  );
}
