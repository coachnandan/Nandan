// Step3Type — Premium consultation type selection cards
import { motion } from 'framer-motion';
import { consultationTypes } from './bookingData';
import Button from '../../ui/Button';
import {
  Heart, Briefcase, Award, Building2, Mic2, Video,
} from 'lucide-react';

const ICON_MAP = { Heart, Briefcase, Award, Building2, Mic2, Video };

export default function Step3Type({ bookingState, updateBooking, onNext, onPrev }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl lg:text-4xl font-serif text-charcoal mb-2">Choose Consultation Type</h2>
        <p className="text-text-muted">Select the focus area that best describes your needs.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {consultationTypes.map((type, i) => {
          const Icon = ICON_MAP[type.icon];
          const isSelected = bookingState.consultationType === type.id;
          return (
            <motion.button
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={() => updateBooking({ consultationType: type.id, consultationTypeLabel: type.title })}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              className={`
                relative text-left p-6 rounded-3xl border transition-all duration-300 group
                ${isSelected
                  ? 'bg-forest text-ivory border-forest shadow-xl shadow-forest/20'
                  : 'bg-white border-border text-charcoal hover:border-forest/30 hover:shadow-lg hover:shadow-forest/5'
                }
              `}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300
                ${isSelected ? 'bg-white/15' : 'bg-sage/40 group-hover:bg-sage'}`}
              >
                {Icon && (
                  <Icon size={22} className={isSelected ? 'text-gold' : 'text-forest'} strokeWidth={1.5} />
                )}
              </div>

              <h3 className={`font-serif text-xl mb-2 ${isSelected ? 'text-ivory' : 'text-charcoal'}`}>
                {type.title}
              </h3>
              <p className={`text-sm leading-relaxed ${isSelected ? 'text-ivory/70' : 'text-text-muted'}`}>
                {type.description}
              </p>

              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gold flex items-center justify-center"
                >
                  <span className="text-white text-xs">✓</span>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      {bookingState.consultationTypeLabel && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 bg-sage/40 border border-border rounded-2xl px-6 py-4"
        >
          <span className="text-forest text-xl">✓</span>
          <div>
            <p className="text-xs uppercase tracking-widest text-text-muted">Selected Type</p>
            <p className="font-serif text-lg text-charcoal">{bookingState.consultationTypeLabel}</p>
          </div>
        </motion.div>
      )}

      <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-between pt-2">
        <Button variant="ghost" onClick={onPrev} className="w-full sm:w-auto text-center justify-center">← Previous</Button>
        <Button onClick={onNext} disabled={!bookingState.consultationType} className="w-full sm:w-auto text-center justify-center">Next: Enter Details →</Button>
      </div>
    </div>
  );
}
