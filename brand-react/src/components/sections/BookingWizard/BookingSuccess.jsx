// BookingSuccess — Premium confirmation screen shown after booking
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Button from '../../ui/Button';
export default function BookingSuccess({ bookingRef, onBookAnother }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center py-16 px-6 max-w-2xl mx-auto space-y-8"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 220, damping: 18 }}
        className="flex items-center justify-center"
      >
        <div className="w-28 h-28 rounded-full bg-sage/40 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-forest/10 flex items-center justify-center">
            <CheckCircle size={48} className="text-forest" strokeWidth={1.5} />
          </div>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-3"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
          Booking Submitted
        </p>
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          Appointment Request <br />
          <span className="italic text-forest">Submitted</span>
        </h2>
        <p className="text-text-muted text-lg leading-relaxed max-w-lg mx-auto">
          Thank you for booking your consultation with{' '}
          <strong className="text-charcoal">Nandan Kumar Singh</strong>.
          Our team will review your request and contact you within 24 hours to confirm your appointment.
        </p>
      </motion.div>

      {/* Booking reference */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="inline-flex flex-col items-center gap-2 bg-white border border-border rounded-3xl px-10 py-6 shadow-sm"
      >
        <p className="text-[10px] uppercase tracking-widest text-text-muted">Booking Reference</p>
        <p className="font-serif text-2xl text-charcoal font-medium tracking-wide">{bookingRef}</p>
        <div className="w-full h-px bg-border" />
        <p className="text-[10px] uppercase tracking-widest text-text-muted">Expected Response</p>
        <p className="text-sm text-forest font-medium">Within 24 Hours</p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
      >
        <Button href="/">Back to Home</Button>
        <Button variant="ghost" onClick={onBookAnother}>Book Another Appointment</Button>
      </motion.div>
    </motion.div>
  );
}
