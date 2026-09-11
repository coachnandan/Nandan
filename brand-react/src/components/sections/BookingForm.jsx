import { useState } from 'react';
import { bookingFormData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import { supabase } from '../../lib/supabase';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    eventType: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const contactId = crypto.randomUUID();
      const bookingId = crypto.randomUUID();

      // 1. Insert or register contact
      const { error: contactError } = await supabase
        .from('contact')
        .insert([
          {
            id: contactId,
            full_name: formData.fullName,
            email: formData.email,
            service: formData.eventType,
            message: formData.message,
          }
        ]);

      if (contactError) throw contactError;

      // 2. Insert into booking table linked to contact_id
      const { error: bookingError } = await supabase
        .from('booking')
        .insert([
          {
            id: bookingId,
            contact_id: contactId,
            booking_type: formData.eventType || 'Event Booking',
            status: 'pending',
            message: formData.message,
          }
        ]);

      if (bookingError) throw bookingError;

      setStatus('success');
      setFormData({ fullName: '', email: '', eventType: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('Booking submission failed:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to submit booking.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 max-w-3xl mx-auto w-full">
      <ScrollReveal direction="up" className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-border">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-charcoal">{bookingFormData.heading}</h2>
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
