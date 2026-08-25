import { useState } from 'react';
import { bookingFormData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function BookingInquiry() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    eventType: '',
    preferredDate: '',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Supabase integration placeholder
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. Our team will contact you shortly.');
  };

  return (
    <section id="inquiry" className="py-24 px-6 lg:px-16 max-w-4xl mx-auto">
      <ScrollReveal direction="up" className="text-center space-y-6 mb-16">
        <SectionEyebrow text="GET IN TOUCH" className="justify-center" />
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {bookingFormData.heading}
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.2}>
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 rounded-[32px] border border-border shadow-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-charcoal uppercase tracking-wider">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-ivory/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-charcoal uppercase tracking-wider">Company / Organization</label>
              <input 
                type="text" 
                id="company" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-ivory/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-charcoal uppercase tracking-wider">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-ivory/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-charcoal uppercase tracking-wider">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-ivory/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="eventType" className="text-sm font-medium text-charcoal uppercase tracking-wider">Event Type</label>
              <select 
                id="eventType" 
                name="eventType"
                required
                value={formData.eventType}
                onChange={handleChange}
                className="w-full bg-ivory/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors text-charcoal appearance-none"
              >
                <option value="" disabled>Select event type</option>
                {bookingFormData.eventTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="preferredDate" className="text-sm font-medium text-charcoal uppercase tracking-wider">Preferred Date</label>
              <input 
                type="date" 
                id="preferredDate" 
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full bg-ivory/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors text-charcoal uppercase"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-medium text-charcoal uppercase tracking-wider">Location</label>
            <input 
              type="text" 
              id="location" 
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, Country or Virtual"
              className="w-full bg-ivory/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-charcoal uppercase tracking-wider">Message</label>
            <textarea 
              id="message" 
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your event..."
              className="w-full bg-ivory/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors resize-none"
            ></textarea>
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" className="w-full md:w-auto px-10 py-4">
              {bookingFormData.cta}
            </Button>
          </div>

        </form>
      </ScrollReveal>
    </section>
  );
}
