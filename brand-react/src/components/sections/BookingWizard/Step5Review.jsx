// Step5Review — Booking summary for final review before confirm
import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import { Calendar, Clock, Layers, User, Mail, Phone, MapPin, Briefcase, Hash, MessageSquare } from 'lucide-react';

const Row = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-4 py-4 border-b border-border last:border-0">
    <div className="w-8 h-8 rounded-xl bg-sage/50 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Icon size={15} className="text-forest" strokeWidth={1.5} />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-[10px] uppercase tracking-widest text-text-muted mb-0.5">{label}</p>
      <p className="text-charcoal font-medium text-sm">{value || '—'}</p>
    </div>
  </div>
);

export default function Step5Review({ bookingState, onConfirm, onPrev, isSubmitting }) {
  const d = bookingState.details || {};
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl lg:text-4xl font-serif text-charcoal mb-2">Review & Confirm</h2>
        <p className="text-text-muted">Please review your booking details before confirming.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Appointment Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-white rounded-3xl border border-border p-6"
        >
          <h3 className="text-xs uppercase tracking-widest text-gold font-medium mb-4 flex items-center gap-2">
            <span className="block w-6 h-px bg-gold" /> Appointment Details
          </h3>
          <div className="space-y-0">
            <Row icon={User} label="Coach" value="Nandan Kumar Singh" />
            <Row icon={Calendar} label="Date" value={bookingState.date} />
            <Row icon={Clock} label="Time" value={bookingState.timeLabel} />
            <Row icon={Layers} label="Consultation Type" value={bookingState.consultationTypeLabel} />
          </div>
        </motion.div>

        {/* Personal Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl border border-border p-6"
        >
          <h3 className="text-xs uppercase tracking-widest text-gold font-medium mb-4 flex items-center gap-2">
            <span className="block w-6 h-px bg-gold" /> Personal Details
          </h3>
          <div className="space-y-0">
            <Row icon={User} label="Full Name" value={d.name} />
            <Row icon={Mail} label="Email" value={d.email} />
            <Row icon={Phone} label="Phone" value={d.phone} />
            <Row icon={MapPin} label="City" value={d.city} />
            <Row icon={Briefcase} label="Profession" value={d.profession} />
            <Row icon={Hash} label="Age" value={d.age} />
          </div>
        </motion.div>
      </div>

      {/* Message */}
      {d.message && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-3xl border border-border p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-sage/50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MessageSquare size={15} className="text-forest" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">Your Message / Goals</p>
              <p className="text-charcoal text-sm leading-relaxed">{d.message}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Note */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-sage/30 border border-border rounded-2xl px-6 py-4 text-sm text-text-muted"
      >
        Our team will review your request and contact you within <strong className="text-charcoal">24 hours</strong> to confirm your appointment.
      </motion.div>

      <div className="flex justify-between pt-2">
        <Button variant="ghost" onClick={onPrev}>← Edit Details</Button>
        <Button onClick={onConfirm} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting…' : 'Confirm Appointment ✓'}
        </Button>
      </div>
    </div>
  );
}
