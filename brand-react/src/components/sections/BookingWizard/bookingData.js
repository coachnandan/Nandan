// Booking Wizard Data — Single source of truth
// Ready for future Supabase integration

export const bookingWizardConfig = {
  steps: [
    { id: 1, label: 'Select Date' },
    { id: 2, label: 'Choose Time' },
    { id: 3, label: 'Consultation Type' },
    { id: 4, label: 'Personal Details' },
    { id: 5, label: 'Review & Confirm' },
  ],
};

export const consultationTypes = [
  {
    id: 'health',
    title: 'Health Coaching',
    icon: 'Heart',
    description: 'Personalized nutrition plans, weight management, and holistic wellness strategies.',
  },
  {
    id: 'business',
    title: 'Business Coaching',
    icon: 'Briefcase',
    description: 'Scalable strategies, financial growth roadmaps, and entrepreneurial mentorship.',
  },
  {
    id: 'executive',
    title: 'Executive Leadership',
    icon: 'Award',
    description: 'High-performance leadership habits, team dynamics, and decision-making frameworks.',
  },
  {
    id: 'corporate',
    title: 'Corporate Consultation',
    icon: 'Building2',
    description: 'Organization-level wellness and performance strategy for teams and companies.',
  },
  {
    id: 'speaking',
    title: 'Speaking Engagement',
    icon: 'Mic2',
    description: 'Book Nandan for a keynote, seminar, panel, or corporate event.',
  },
  {
    id: 'online',
    title: 'Online Consultation',
    icon: 'Video',
    description: 'Flexible virtual sessions from anywhere in the world via video call.',
  },
];

export const availableTimeSlots = [
  { id: 't1', time: '09:00 AM', booked: false },
  { id: 't2', time: '10:30 AM', booked: false },
  { id: 't3', time: '12:00 PM', booked: true },
  { id: 't4', time: '02:30 PM', booked: false },
  { id: 't5', time: '04:00 PM', booked: false },
  { id: 't6', time: '06:00 PM', booked: false },
];

export const personalDetailsFields = [
  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', required: true },
  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 00000 00000', required: true },
  { id: 'city', label: 'City', type: 'text', placeholder: 'Your city', required: true },
  { id: 'profession', label: 'Profession', type: 'text', placeholder: 'Your profession or role', required: true },
  { id: 'age', label: 'Age', type: 'number', placeholder: 'Your age', required: true },
];

// Booking status constants for Supabase integration
export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
};

// Supabase table mapping (for future integration)
export const SUPABASE_TABLE = 'appointments';

// Helper: Build a Supabase-ready payload from booking state
export function buildBookingPayload(bookingState) {
  return {
    selected_date: bookingState.date,
    selected_time: bookingState.time,
    consultation_type: bookingState.consultationType,
    name: bookingState.details.name,
    email: bookingState.details.email,
    phone: bookingState.details.phone,
    city: bookingState.details.city,
    profession: bookingState.details.profession,
    age: bookingState.details.age,
    message: bookingState.details.message,
    agreed_to_terms: bookingState.details.agreedToTerms,
    status: BOOKING_STATUS.PENDING,
    created_at: new Date().toISOString(),
  };
}
