import { useState } from 'react';
import { bookingFormData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    eventType: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate Supabase/API submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ fullName: '', email: '', eventType: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-12 px-6 lg:px-16 max-w-3xl mx-auto w-full">
      <ScrollReveal direction="up" className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-border">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-serif text-charcoal">{bookingFormData.heading}</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-xs font-medium uppercase tracking-widest text-text-muted">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full bg-sage/20 border border-border rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-forest/50 focus:ring-1 focus:ring-forest/50 transition-all"
              placeholder="Your Name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-xs font-medium uppercase tracking-widest text-text-muted">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-sage/20 border border-border rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-forest/50 focus:ring-1 focus:ring-forest/50 transition-all"
              placeholder="you@company.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="eventType" className="block text-xs font-medium uppercase tracking-widest text-text-muted">Event Type</label>
            <select 
              id="eventType" 
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="w-full bg-sage/20 border border-border rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-forest/50 focus:ring-1 focus:ring-forest/50 transition-all appearance-none"
            >
              <option value="" disabled>Select event type...</option>
              {bookingFormData.eventTypes.map((type, i) => (
                <option key={i} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs font-medium uppercase tracking-widest text-text-muted">Message</label>
            <textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-sage/20 border border-border rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-forest/50 focus:ring-1 focus:ring-forest/50 transition-all resize-none"
              placeholder="Tell us about your event..."
            ></textarea>
          </div>

          <div className="pt-4">
            <Button 
              type="submit" 
              fullWidth 
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Request Sent!' : bookingFormData.cta}
            </Button>
          </div>
        </form>
      </ScrollReveal>
    </section>
  );
}
