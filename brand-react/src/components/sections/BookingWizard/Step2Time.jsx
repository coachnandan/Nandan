// Step2Time — Premium time slot selection
import { motion } from 'framer-motion';
import { availableTimeSlots } from './bookingData';
import Button from '../../ui/Button';

export default function Step2Time({ bookingState, updateBooking, onNext, onPrev }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl lg:text-4xl font-serif text-charcoal mb-2">Choose Your Preferred Time</h2>
        <p className="text-text-muted">
          Available slots for <span className="text-forest font-medium">{bookingState.date}</span>
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {availableTimeSlots.map((slot, i) => {
          const isSelected = bookingState.time === slot.id;
          return (
            <motion.button
              key={slot.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
              disabled={slot.booked}
              onClick={() => updateBooking({ time: slot.id, timeLabel: slot.time })}
              whileHover={!slot.booked ? { y: -4, shadow: '0 8px 24px rgba(24,53,47,0.12)' } : {}}
              whileTap={!slot.booked ? { scale: 0.97 } : {}}
              className={`
                relative flex flex-col items-center justify-center rounded-2xl p-6 border transition-all duration-300
                ${isSelected
                  ? 'bg-forest text-ivory border-forest shadow-lg shadow-forest/20'
                  : slot.booked
                    ? 'bg-sage/20 border-border text-text-muted/40 cursor-not-allowed'
                    : 'bg-white border-border text-charcoal hover:border-forest/40 hover:bg-sage/20 cursor-pointer'
                }
              `}
            >
              <span className={`font-serif text-2xl font-light mb-1 ${isSelected ? 'text-ivory' : slot.booked ? 'text-text-muted/40' : 'text-charcoal'}`}>
                {slot.time.split(' ')[0]}
              </span>
              <span className={`text-xs tracking-widest uppercase ${isSelected ? 'text-ivory/70' : slot.booked ? 'text-text-muted/40' : 'text-text-muted'}`}>
                {slot.time.split(' ')[1]}
              </span>
              {slot.booked && (
                <span className="absolute top-2 right-3 text-[9px] tracking-widest uppercase text-gold/60">Booked</span>
              )}
              {isSelected && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-3 w-2 h-2 rounded-full bg-gold"
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {bookingState.timeLabel && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 bg-sage/40 border border-border rounded-2xl px-6 py-4"
        >
          <span className="text-forest text-xl">✓</span>
          <div>
            <p className="text-xs uppercase tracking-widest text-text-muted">Selected Time</p>
            <p className="font-serif text-lg text-charcoal">{bookingState.timeLabel}</p>
          </div>
        </motion.div>
      )}

      <div className="flex justify-between pt-2">
        <Button variant="ghost" onClick={onPrev}>← Previous</Button>
        <Button onClick={onNext} disabled={!bookingState.time}>Next →</Button>
      </div>
    </div>
  );
}
