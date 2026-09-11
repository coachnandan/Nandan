import { useState } from 'react';
import { appointmentFormData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import { supabase } from '../../lib/supabase';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    profession: '',
    age: '',
    consultationType: '',
    consultationMode: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    agree: false
  });
  
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const contactId = crypto.randomUUID();
      const appointmentId = crypto.randomUUID();

      // 1. Insert contact
      const { error: contactError } = await supabase
        .from('contact')
        .insert([
          {
            id: contactId,
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone || null,
            city: formData.city || null,
            profession: formData.profession || null,
            age: formData.age ? parseInt(formData.age, 10) : null,
            service: formData.consultationType || null,
            message: formData.message || null,
          }
        ]);

      if (contactError) throw contactError;

      // 2. Insert appointment linked to contact_id
      const { error: appointmentError } = await supabase
        .from('appointment')
        .insert([
          {
            id: appointmentId,
            contact_id: contactId,
            consultation_type: formData.consultationType || 'General Consultation',
            consultation_mode: formData.consultationMode === 'In-Person (Bengaluru)' ? 'in-person' : 'online',
            appointment_date: formData.preferredDate || new Date().toISOString().split('T')[0],
            time_slot: formData.preferredTime || '10:00 AM',
            status: 'pending',
            agreed_to_terms: formData.agree,
            notes: formData.message || null,
          }
        ]);

      if (appointmentError) throw appointmentError;

      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', city: '', profession: '', age: '', consultationType: '', consultationMode: '', preferredDate: '', preferredTime: '', message: '', agree: false });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('Appointment submission failed:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to submit appointment.');
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <section id="schedule" className="py-24 px-6 lg:px-16 max-w-5xl mx-auto w-full">
      <ScrollReveal direction="up" className="bg-white rounded-[40px] p-8 lg:p-16 border border-border shadow-sm relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sage/30 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal">{appointmentFormData.heading}</h2>
          <p className="text-lg text-text-muted mt-4 max-w-xl mx-auto">{appointmentFormData.description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          {/* Section 1: Personal Info */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold border-b border-border pb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-text-muted">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full bg-sage/10 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-text-muted">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-sage/10 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-text-muted">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-sage/10 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-text-muted">City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full bg-sage/10 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-text-muted">Profession</label>
                <input type="text" name="profession" value={formData.profession} onChange={handleChange} required className="w-full bg-sage/10 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-text-muted">Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required min="18" max="100" className="w-full bg-sage/10 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest/50 transition-all" />
              </div>
            </div>
          </div>

          {/* Section 2: Consultation Details */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold border-b border-border pb-2">Consultation Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-text-muted">Consultation Type</label>
                <select name="consultationType" value={formData.consultationType} onChange={handleChange} required className="w-full bg-sage/10 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest/50 transition-all appearance-none">
                  <option value="" disabled>Select type...</option>
                  {appointmentFormData.types.map((t, i) => <option key={i} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-text-muted">Consultation Mode</label>
                <select name="consultationMode" value={formData.consultationMode} onChange={handleChange} required className="w-full bg-sage/10 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest/50 transition-all appearance-none">
                  <option value="" disabled>Select mode...</option>
                  {appointmentFormData.modes.map((m, i) => <option key={i} value={m}>{m}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-text-muted">Preferred Date</label>
                <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required className="w-full bg-sage/10 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-text-muted">Preferred Time</label>
                <input type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} required className="w-full bg-sage/10 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest/50 transition-all" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-medium uppercase tracking-widest text-text-muted">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full bg-sage/10 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-forest/50 transition-all resize-none" placeholder="Tell us about your goals or what you'd like to discuss..."></textarea>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" id="agree" name="agree" checked={formData.agree} onChange={handleChange} required className="w-5 h-5 rounded border-border text-forest focus:ring-forest accent-forest" />
            <label htmlFor="agree" className="text-sm text-text-muted">I agree to be contacted regarding my appointment request.</label>
          </div>

          <div className="pt-6 flex justify-center">
            <Button type="submit" size="lg" disabled={status === 'loading' || status === 'success'} className="w-full md:w-auto min-w-[240px]">
              {status === 'loading' ? 'Processing...' : status === 'success' ? 'Request Submitted!' : appointmentFormData.cta}
            </Button>
          </div>
        </form>
      </ScrollReveal>
    </section>
  );
}
