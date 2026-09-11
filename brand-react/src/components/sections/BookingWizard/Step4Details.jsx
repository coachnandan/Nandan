// Step4Details — Personal details form with validation
import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalDetailsFields } from './bookingData';
import Button from '../../ui/Button';

const inputClass = `
  w-full bg-white border border-border rounded-2xl px-5 py-4
  text-charcoal placeholder-text-muted/50 text-sm
  focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest
  transition-all duration-200
`;

export default function Step4Details({ bookingState, updateBooking, onNext, onPrev }) {
  const [errors, setErrors] = useState({});

  const details = bookingState.details || {};

  const handleChange = (id, value) => {
    updateBooking({ details: { ...details, [id]: value } });
    if (errors[id]) setErrors(prev => ({ ...prev, [id]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    personalDetailsFields.forEach(f => {
      if (f.required && !details[f.id]?.trim()) {
        newErrors[f.id] = `${f.label} is required`;
      }
    });
    if (!details.agreedToTerms) newErrors.agreedToTerms = 'Please agree to the Terms & Privacy Policy';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) onNext();
  };

  // Split fields into pairs for 2-column layout, message is full width
  const mainFields = personalDetailsFields;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl lg:text-4xl font-serif text-charcoal mb-2">Tell Us About Yourself</h2>
        <p className="text-text-muted">Your details help us tailor the session to your needs.</p>
      </div>

      <div className="bg-white rounded-3xl border border-border p-5 sm:p-8 space-y-6">
        {/* Main fields in 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {mainFields.map((field, i) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="space-y-2"
            >
              <label className="text-xs uppercase tracking-widest text-text-muted font-medium">
                {field.label} {field.required && <span className="text-gold">*</span>}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={details[field.id] || ''}
                onChange={e => handleChange(field.id, e.target.value)}
                className={`${inputClass} ${errors[field.id] ? 'border-red-400 focus:ring-red-300' : ''}`}
              />
              {errors[field.id] && (
                <p className="text-xs text-red-500">{errors[field.id]}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Message textarea — full width */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <label className="text-xs uppercase tracking-widest text-text-muted font-medium">
            Message / Goals
          </label>
          <textarea
            rows={4}
            placeholder="Briefly describe your goals or anything you'd like Nandan to know before your session..."
            value={details.message || ''}
            onChange={e => handleChange('message', e.target.value)}
            className={`${inputClass} resize-none`}
          />
        </motion.div>

        {/* Terms checkbox */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="space-y-1"
        >
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5">
              <input
                type="checkbox"
                checked={details.agreedToTerms || false}
                onChange={e => handleChange('agreedToTerms', e.target.checked)}
                className="sr-only"
              />
              <div
                onClick={() => handleChange('agreedToTerms', !details.agreedToTerms)}
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 cursor-pointer
                  ${details.agreedToTerms ? 'bg-forest border-forest' : 'border-border group-hover:border-forest/50'}`}
              >
                {details.agreedToTerms && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-ivory text-xs font-bold"
                  >✓</motion.span>
                )}
              </div>
            </div>
            <span className="text-xs sm:text-sm text-text-muted leading-relaxed">
              I agree to the{' '}
              <a href="/terms-of-service" className="text-forest underline underline-offset-2 hover:text-gold transition-colors">
                Terms of Service
              </a>{' '}
              &{' '}
              <a href="/privacy-policy" className="text-forest underline underline-offset-2 hover:text-gold transition-colors">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.agreedToTerms && (
            <p className="text-xs text-red-500 pl-8">{errors.agreedToTerms}</p>
          )}
        </motion.div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-between pt-2">
        <Button variant="ghost" onClick={onPrev} className="w-full sm:w-auto text-center justify-center">← Previous</Button>
        <Button onClick={handleNext} className="w-full sm:w-auto text-center justify-center">Review Booking →</Button>
      </div>
    </div>
  );
}
