// Step1Date — Premium monthly calendar with state management
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../ui/Button';

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Mock some "booked" dates for demo
const MOCK_BOOKED_DATES = [3, 7, 14, 21, 25];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function Step1Date({ bookingState, updateBooking, onNext }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [direction, setDirection] = useState(1);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const goPrev = () => {
    setDirection(-1);
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const goNext = () => {
    setDirection(1);
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const selectDate = (day) => {
    const dateObj = new Date(viewYear, viewMonth, day);
    const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (isPast || MOCK_BOOKED_DATES.includes(day)) return;
    const dateStr = `${MONTHS[viewMonth]} ${day}, ${viewYear}`;
    updateBooking({ date: dateStr, dateObj: dateObj.toISOString() });
  };

  const getSelectedDay = () => {
    if (!bookingState.date) return null;
    const parsed = new Date(bookingState.dateObj);
    if (parsed.getFullYear() === viewYear && parsed.getMonth() === viewMonth) {
      return parsed.getDate();
    }
    return null;
  };

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const selectedDay = getSelectedDay();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl lg:text-4xl font-serif text-charcoal mb-2">Select Your Date</h2>
        <p className="text-text-muted">Choose your preferred consultation date.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-border overflow-hidden">
        {/* Month Nav */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-border">
          <motion.button
            onClick={goPrev}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-charcoal hover:bg-forest hover:text-ivory hover:border-forest transition-all duration-200"
          >
            ‹
          </motion.button>
          <AnimatePresence mode="wait">
            <motion.span
              key={`${viewMonth}-${viewYear}`}
              initial={{ opacity: 0, x: direction * 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -20 }}
              transition={{ duration: 0.2 }}
              className="font-serif text-xl text-charcoal font-medium"
            >
              {MONTHS[viewMonth]} {viewYear}
            </motion.span>
          </AnimatePresence>
          <motion.button
            onClick={goNext}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-charcoal hover:bg-forest hover:text-ivory hover:border-forest transition-all duration-200"
          >
            ›
          </motion.button>
        </div>

        {/* Day labels */}
        <div className="grid grid-cols-7 px-6 pt-4 pb-1">
          {DAYS.map(d => (
            <div key={d} className="text-center text-[10px] tracking-widest uppercase text-text-muted font-medium py-1">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${viewMonth}-${viewYear}`}
            initial={{ opacity: 0, x: direction * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -30 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-7 gap-1 px-6 pb-6"
          >
            {cells.map((day, i) => {
              if (!day) return <div key={`empty-${i}`} />;
              const dateObj = new Date(viewYear, viewMonth, day);
              const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
              const isBooked = MOCK_BOOKED_DATES.includes(day);
              const isSelected = day === selectedDay;
              const isToday = day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
              const isDisabled = isPast || isBooked;

              return (
                <motion.button
                  key={day}
                  onClick={() => selectDate(day)}
                  disabled={isDisabled}
                  whileHover={!isDisabled ? { scale: 1.1 } : {}}
                  whileTap={!isDisabled ? { scale: 0.95 } : {}}
                  className={`
                    relative aspect-square flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-200
                    ${isSelected ? 'bg-forest text-ivory shadow-lg' : ''}
                    ${!isSelected && !isDisabled ? 'hover:bg-sage text-charcoal cursor-pointer' : ''}
                    ${isBooked ? 'bg-sage/50 text-text-muted/50 cursor-not-allowed line-through' : ''}
                    ${isPast && !isBooked ? 'text-text-muted/30 cursor-not-allowed' : ''}
                    ${isToday && !isSelected ? 'ring-1 ring-gold text-gold' : ''}
                  `}
                >
                  {day}
                  {isBooked && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold/60" />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <div className="flex items-center gap-6 px-8 pb-5 text-[10px] uppercase tracking-widest text-text-muted">
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-md bg-forest inline-block" /> Selected</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-md bg-sage/50 inline-block" /> Booked</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-md ring-1 ring-gold inline-block" /> Today</span>
        </div>
      </div>

      {bookingState.date && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 bg-sage/40 border border-border rounded-2xl px-6 py-4"
        >
          <span className="text-forest text-xl">✓</span>
          <div>
            <p className="text-xs uppercase tracking-widest text-text-muted">Selected Date</p>
            <p className="font-serif text-lg text-charcoal">{bookingState.date}</p>
          </div>
        </motion.div>
      )}

      <div className="flex justify-end">
        <Button onClick={onNext} disabled={!bookingState.date}>
          Next: Select Time →
        </Button>
      </div>
    </div>
  );
}
