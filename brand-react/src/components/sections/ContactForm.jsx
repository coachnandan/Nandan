import { useState } from 'react';
import { contactFormData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import { supabase } from '../../lib/supabase';
import { trackLeadEvent } from '../../lib/metaPixel';

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
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const validate = () => {
    const errors = {};

    // Email validation: must end with @gmail.com
    const email = (formData.email || '').trim().toLowerCase();
    if (!email) {
      errors.email = 'Email address is required.';
    } else if (!email.endsWith('@gmail.com') || email === '@gmail.com') {
      errors.email = 'Email must end with @gmail.com (e.g. yourname@gmail.com).';
    } else {
      const username = email.slice(0, -10); // length of '@gmail.com' is 10
      if (!username || username.length < 2) {
        errors.email = 'Please enter a valid Gmail username.';
      }
    }

    // Phone validation: must be exactly 10 digits
    const digits = (formData.phone || '').replace(/\D/g, '');
    if (!digits) {
      errors.phone = 'Phone number is required.';
    } else if (digits.length !== 10) {
      errors.phone = `Phone number must be exactly 10 digits (currently ${digits.length}).`;
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (status === 'loading') return; // Prevent double submission
    setStatus('loading');
    setErrorMessage('');

    try {
      const contactId = crypto.randomUUID();
      const { error } = await supabase
        .from('contact')
        .insert([
          {
            id: contactId,
            full_name: formData.fullName,
            email: formData.email.trim().toLowerCase(),
            phone: formData.phone || null,
            service: formData.service || null,
            message: formData.message || null,
            subscribe: formData.subscribe,
          }
        ]);

      if (error) {
        console.error('[Supabase Error]:', error);
        throw error;
      }

      // Meta Pixel Lead Event (fired ONLY after confirmed backend success)
      trackLeadEvent(contactId, { content_name: 'Contact Inquiry Form' });

      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', service: '', message: '', subscribe: false });
      setFieldErrors({});
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('Submission failed:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to submit inquiry. Please check your Supabase setup.');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
      return;
    }

    if (name === 'phone') {
      let digits = value.replace(/\D/g, '');
      // Handle paste with country code (+91 or 0 prefix)
      if (digits.length === 12 && digits.startsWith('91')) {
        digits = digits.slice(2);
      } else if (digits.length === 11 && digits.startsWith('0')) {
        digits = digits.slice(1);
      }
      // Strictly prevent entering more than 10 digits
      digits = digits.slice(0, 10);

      setFormData(prev => ({ ...prev, phone: digits }));
      if (fieldErrors.phone) {
        if (digits.length === 10) {
          setFieldErrors(prev => ({ ...prev, phone: '' }));
        }
      }
      return;
    }

    if (name === 'email') {
      setFormData(prev => ({ ...prev, email: value }));
      if (fieldErrors.email && value.trim().toLowerCase().endsWith('@gmail.com')) {
        setFieldErrors(prev => ({ ...prev, email: '' }));
      }
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="inquiry" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-16 max-w-4xl mx-auto w-full">
      <ScrollReveal direction="up" className="bg-sage/20 rounded-[28px] sm:rounded-[40px] p-5 sm:p-8 lg:p-16 border border-border">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif text-charcoal">{contactFormData.heading}</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
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
                placeholder="Rahul Sharma"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="email" className="block text-xs font-medium uppercase tracking-widest text-text-muted">
                  Email Address
                </label>
                <span className="text-[11px] text-forest font-medium">Must be @gmail.com</span>
              </div>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full bg-white border rounded-xl px-4 py-4 text-charcoal focus:outline-none transition-all ${
                  fieldErrors.email 
                    ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20' 
                    : 'border-border focus:border-forest/50 focus:ring-1 focus:ring-forest/50'
                }`}
                placeholder="rahul.sharma@gmail.com"
              />
              {fieldErrors.email && (
                <p className="text-xs text-red-500 font-medium mt-1">{fieldErrors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-widest text-text-muted">
                  Phone Number
                </label>
                <span className={`text-[11px] font-medium ${formData.phone.length === 10 ? 'text-forest' : 'text-text-muted'}`}>
                  {formData.phone ? `${formData.phone.length}/10 digits` : '10 digits required'}
                </span>
              </div>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                required
                className={`w-full bg-white border rounded-xl px-4 py-4 text-charcoal focus:outline-none transition-all ${
                  fieldErrors.phone 
                    ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20' 
                    : 'border-border focus:border-forest/50 focus:ring-1 focus:ring-forest/50'
                }`}
                placeholder="9876543210"
              />
              {fieldErrors.phone && (
                <p className="text-xs text-red-500 font-medium mt-1">{fieldErrors.phone}</p>
              )}
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

          {status === 'error' && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm text-center">
              ⚠️ {errorMessage}
            </div>
          )}

          {status === 'success' && (
            <div className="p-4 rounded-xl bg-forest/10 border border-forest/30 text-forest text-sm text-center font-medium">
              ✓ Your inquiry has been successfully sent to the database!
            </div>
          )}

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
