import { useState } from 'react';
import { contactFormData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    subscribe: false
  });
  
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate Supabase/API submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', service: '', message: '', subscribe: false });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <section id="inquiry" className="py-24 px-6 lg:px-16 max-w-4xl mx-auto w-full">
      <ScrollReveal direction="up" className="bg-sage/20 rounded-[40px] p-8 lg:p-16 border border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-serif text-charcoal">{contactFormData.heading}</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-xs font-medium uppercase tracking-widest text-text-muted">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full bg-white border border-border rounded-xl px-4 py-4 text-charcoal focus:outline-none focus:border-forest/50 focus:ring-1 focus:ring-forest/50 transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-medium uppercase tracking-widest text-text-muted">Corporate Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white border border-border rounded-xl px-4 py-4 text-charcoal focus:outline-none focus:border-forest/50 focus:ring-1 focus:ring-forest/50 transition-all"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-widest text-text-muted">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white border border-border rounded-xl px-4 py-4 text-charcoal focus:outline-none focus:border-forest/50 focus:ring-1 focus:ring-forest/50 transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="block text-xs font-medium uppercase tracking-widest text-text-muted">Service of Interest</label>
              <select 
                id="service" 
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-white border border-border rounded-xl px-4 py-4 text-charcoal focus:outline-none focus:border-forest/50 focus:ring-1 focus:ring-forest/50 transition-all appearance-none"
              >
                <option value="" disabled>Select an option...</option>
                {contactFormData.services.map((service, i) => (
                  <option key={i} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs font-medium uppercase tracking-widest text-text-muted">Message</label>
            <textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-white border border-border rounded-xl px-4 py-4 text-charcoal focus:outline-none focus:border-forest/50 focus:ring-1 focus:ring-forest/50 transition-all resize-none"
              placeholder="Briefly describe your objectives..."
            ></textarea>
          </div>

          <div className="flex items-center gap-3">
            <input 
              type="checkbox" 
              id="subscribe"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="w-5 h-5 rounded border-border text-forest focus:ring-forest accent-forest"
            />
            <label htmlFor="subscribe" className="text-sm text-text-muted">
              Sign up for monthly performance insights.
            </label>
          </div>

          <div className="pt-6 flex justify-center">
            <Button 
              type="submit" 
              size="lg"
              disabled={status === 'loading' || status === 'success'}
              className="w-full md:w-auto min-w-[200px]"
            >
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Inquiry Sent!' : contactFormData.cta}
            </Button>
          </div>
        </form>
      </ScrollReveal>
    </section>
  );
}
