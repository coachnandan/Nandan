import { useState } from 'react';
import { bookingFormData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import { supabase } from '../../lib/supabase';
import { trackLeadEvent } from '../../lib/metaPixel';

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

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setErrorMessage('');

    try {
      const contactId = crypto.randomUUID();
      const bookingId = crypto.randomUUID();

      // 1. Insert contact
      const { error: contactError } = await supabase
        .from('contact')
        .insert([
          {
            id: contactId,
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone || null,
            city: formData.location || null,
            profession: formData.company || null,
            service: formData.eventType || 'Workshop / Event',
            message: formData.message || null,
          }
        ]);

      if (contactError) throw contactError;

      // 2. Insert booking
      const { error: bookingError } = await supabase
        .from('booking')
        .insert([
          {
            id: bookingId,
            contact_id: contactId,
            booking_type: formData.eventType || 'Workshop / Event',
            location: formData.location || null,
            event_date: formData.preferredDate || null,
            status: 'pending',
            message: formData.message || null,
          }
        ]);

      if (bookingError) throw bookingError;

      // Meta Pixel Lead Event (fired ONLY after confirmed backend success)
      trackLeadEvent(bookingId, { content_name: 'Workshop & Event Inquiry Form' });

      setStatus('success');
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        eventType: '',
        preferredDate: '',
        location: '',
        message: ''
      });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('Inquiry submission failed:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to submit inquiry.');
    }
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

          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}

          {status === 'success' && (
            <div className="p-4 bg-forest/10 border border-forest/20 rounded-xl text-forest text-center text-sm font-medium">
              Thank you! Your inquiry has been submitted successfully. We will be in touch shortly.
            </div>
          )}

          <div className="pt-4 flex justify-end">
            <Button 
              type="submit" 
              disabled={status === 'loading'} 
              className="w-full md:w-auto px-10 py-4"
            >
              {status === 'loading' ? 'Submitting...' : status === 'success' ? 'Inquiry Sent ✓' : bookingFormData.cta}
            </Button>
          </div>

        </form>
      </ScrollReveal>
    </section>
  );
}
