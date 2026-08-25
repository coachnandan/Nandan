// BookingWizard — Main container managing 5-step flow + success screen
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bookingWizardConfig, buildBookingPayload } from './bookingData';
import Step1Date from './Step1Date';
import Step2Time from './Step2Time';
import Step3Type from './Step3Type';
import Step4Details from './Step4Details';
import Step5Review from './Step5Review';
import BookingSuccess from './BookingSuccess';

const INITIAL_STATE = {
  date: null,
  dateObj: null,
  time: null,
  timeLabel: null,
  consultationType: null,
  consultationTypeLabel: null,
  details: {},
};

function generateRef() {
  return 'NKS-' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Progress Bar Component
function ProgressBar({ currentStep, steps }) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between relative">
        {/* Connector line */}
        <div className="absolute top-4 left-0 right-0 h-px bg-border z-0" />
        <motion.div
          className="absolute top-4 left-0 h-px bg-forest z-0 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: (currentStep - 1) / (steps.length - 1) }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ width: '100%' }}
        />

        {steps.map((step) => {
          const isDone = currentStep > step.id;
          const isActive = currentStep === step.id;
          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
              <motion.div
                animate={{
                  backgroundColor: isDone || isActive ? 'var(--color-forest)' : 'var(--color-ivory)',
                  borderColor: isDone || isActive ? 'var(--color-forest)' : 'var(--color-border)',
                  scale: isActive ? 1.15 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-medium shadow-sm"
                style={{ color: isDone || isActive ? '#FAF8F4' : '#6B6660' }}
              >
                {isDone ? '✓' : step.id}
              </motion.div>
              <span className={`text-[9px] uppercase tracking-widest hidden sm:block whitespace-nowrap transition-colors duration-300
                ${isActive ? 'text-forest font-medium' : 'text-text-muted'}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const stepVariants = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -40 : 40 }),
};

export default function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [bookingState, setBookingState] = useState(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateBooking = (patch) => {
    setBookingState(prev => ({ ...prev, ...patch }));
  };

  const goNext = () => {
    setDirection(1);
    setCurrentStep(s => Math.min(s + 1, bookingWizardConfig.steps.length));
  };
  const goPrev = () => {
    setDirection(-1);
    setCurrentStep(s => Math.max(s - 1, 1));
  };

  const handleConfirm = async () => {
    setIsSubmitting(true);
    const payload = buildBookingPayload(bookingState);
    console.log('[Supabase Ready] Booking Payload:', payload);
    // TODO: Replace with actual Supabase insert:
    // const { error } = await supabase.from('appointments').insert([payload]);
    await new Promise(res => setTimeout(res, 1200)); // simulate async
    const ref = generateRef();
    setBookingRef(ref);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleBookAnother = () => {
    setBookingState(INITIAL_STATE);
    setCurrentStep(1);
    setSubmitted(false);
    setBookingRef('');
  };

  if (submitted) {
    return (
      <section className="py-24 px-6 lg:px-16 max-w-5xl mx-auto">
        <BookingSuccess bookingRef={bookingRef} onBookAnother={handleBookAnother} />
      </section>
    );
  }

  const stepComponents = [
    <Step1Date key={1} bookingState={bookingState} updateBooking={updateBooking} onNext={goNext} />,
    <Step2Time key={2} bookingState={bookingState} updateBooking={updateBooking} onNext={goNext} onPrev={goPrev} />,
    <Step3Type key={3} bookingState={bookingState} updateBooking={updateBooking} onNext={goNext} onPrev={goPrev} />,
    <Step4Details key={4} bookingState={bookingState} updateBooking={updateBooking} onNext={goNext} onPrev={goPrev} />,
    <Step5Review key={5} bookingState={bookingState} onConfirm={handleConfirm} onPrev={goPrev} isSubmitting={isSubmitting} />,
  ];

  return (
    <section className="py-16 px-6 lg:px-16 max-w-5xl mx-auto">
      {/* Section Label */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-10 h-px bg-gold" />
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-gold">Booking Wizard</span>
          <span className="block w-10 h-px bg-gold" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-serif text-charcoal">
          Your Premium <span className="italic text-forest">Concierge Experience</span>
        </h2>
      </div>

      {/* Card */}
      <div className="bg-ivory border border-border rounded-[32px] shadow-xl overflow-hidden">
        <div className="p-8 lg:p-12">
          <ProgressBar currentStep={currentStep} steps={bookingWizardConfig.steps} />

          {/* Step Content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {stepComponents[currentStep - 1]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
