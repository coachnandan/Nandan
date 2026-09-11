-- ============================================================================
-- COACH NANDAN — SUPABASE DATABASE SCHEMA
-- Tables: contact, booking, appointment
-- Relationships:
--   1. contact 1 : N booking      (A contact can have multiple event/package bookings)
--   2. contact 1 : N appointment  (A contact can have multiple scheduled appointments)
--   3. booking 1 : N appointment  (An appointment can optionally link to a booking)
-- ============================================================================

-- Enable UUID extension (enabled by default in Supabase)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================================
-- 1. TABLE: contact
-- Represents users, leads, and clients who submit inquiries or book sessions.
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.contact (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    city TEXT,
    profession TEXT,
    age INTEGER,
    service TEXT,                   -- Service of interest (e.g., 'Executive Leadership', 'Health Coaching')
    message TEXT,                   -- Initial message / inquiry text
    subscribe BOOLEAN DEFAULT false,-- Newsletter / updates subscription opt-in
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Comments for documentation
COMMENT ON TABLE public.contact IS 'Stores client details, lead profiles, and general contact inquiries';
COMMENT ON COLUMN public.contact.service IS 'Primary coaching or consulting service of interest';

-- ============================================================================
-- 2. TABLE: booking
-- Represents speaking engagements, corporate workshops, and consulting packages.
-- Links to: contact (via contact_id)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.booking (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contact_id UUID NOT NULL REFERENCES public.contact(id) ON DELETE CASCADE,
    booking_type TEXT NOT NULL,     -- e.g., 'Speaking Engagement', 'Corporate Consultation', 'Executive Coaching'
    status TEXT NOT NULL DEFAULT 'pending' 
        CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
    event_date DATE,
    event_time TEXT,
    attendees_count INTEGER,
    location TEXT,
    message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

COMMENT ON TABLE public.booking IS 'Stores speaking engagements, corporate workshops, and major booking contracts';
COMMENT ON COLUMN public.booking.contact_id IS 'Foreign key referencing contact.id (the person who made the booking)';

-- ============================================================================
-- 3. TABLE: appointment
-- Represents 1-on-1 scheduled sessions (dates & time slots) from the booking wizard.
-- Links to: contact (via contact_id) AND optionally booking (via booking_id)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.appointment (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contact_id UUID NOT NULL REFERENCES public.contact(id) ON DELETE CASCADE,
    booking_id UUID REFERENCES public.booking(id) ON DELETE SET NULL, -- Optional link to parent booking
    consultation_type TEXT NOT NULL,  -- e.g., 'health', 'business', 'executive', 'corporate', 'speaking', 'online'
    consultation_mode TEXT NOT NULL DEFAULT 'online' 
        CHECK (consultation_mode IN ('online', 'in-person')),
    appointment_date DATE NOT NULL,
    time_slot TEXT NOT NULL,          -- e.g., '09:00 AM', '10:30 AM', '02:30 PM'
    status TEXT NOT NULL DEFAULT 'pending' 
        CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
    agreed_to_terms BOOLEAN DEFAULT true,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

COMMENT ON TABLE public.appointment IS 'Stores individual consultation calendar appointments and time slots';
COMMENT ON COLUMN public.appointment.contact_id IS 'Foreign key referencing contact.id';
COMMENT ON COLUMN public.appointment.booking_id IS 'Optional foreign key referencing booking.id if part of an event/package';

-- ============================================================================
-- 4. PERFORMANCE INDEXES
-- Optimizes queries by contact, date, time slot, and status
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_contact_email ON public.contact(email);
CREATE INDEX IF NOT EXISTS idx_booking_contact_id ON public.booking(contact_id);
CREATE INDEX IF NOT EXISTS idx_booking_status ON public.booking(status);
CREATE INDEX IF NOT EXISTS idx_appointment_contact_id ON public.appointment(contact_id);
CREATE INDEX IF NOT EXISTS idx_appointment_booking_id ON public.appointment(booking_id);
CREATE INDEX IF NOT EXISTS idx_appointment_date_slot ON public.appointment(appointment_date, time_slot);
CREATE INDEX IF NOT EXISTS idx_appointment_status ON public.appointment(status);

-- ============================================================================
-- 5. AUTOMATIC updated_at TRIGGER FUNCTION
-- Automatically updates the updated_at timestamp when a row is modified
-- ============================================================================
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to each table
DROP TRIGGER IF EXISTS trigger_contact_updated_at ON public.contact;
CREATE TRIGGER trigger_contact_updated_at
    BEFORE UPDATE ON public.contact
    FOR EACH ROW
    EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS trigger_booking_updated_at ON public.booking;
CREATE TRIGGER trigger_booking_updated_at
    BEFORE UPDATE ON public.booking
    FOR EACH ROW
    EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS trigger_appointment_updated_at ON public.appointment;
CREATE TRIGGER trigger_appointment_updated_at
    BEFORE UPDATE ON public.appointment
    FOR EACH ROW
    EXECUTE FUNCTION public.set_updated_at();

-- ============================================================================
-- 6. ROW LEVEL SECURITY (RLS) POLICIES
-- Ensures public forms can submit data while keeping management secure
-- ============================================================================

-- Enable RLS on all 3 tables
ALTER TABLE public.contact ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointment ENABLE ROW LEVEL SECURITY;

-- Allow anonymous / website visitors to INSERT their contact requests
CREATE POLICY "Allow public insert on contact"
    ON public.contact
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow anonymous / website visitors to INSERT bookings
CREATE POLICY "Allow public insert on booking"
    ON public.booking
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow anonymous / website visitors to INSERT appointments
CREATE POLICY "Allow public insert on appointment"
    ON public.appointment
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow authenticated users (Admins / Coach Nandan) full access to read and manage
CREATE POLICY "Allow authenticated read and manage on contact"
    ON public.contact
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read and manage on booking"
    ON public.booking
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read and manage on appointment"
    ON public.appointment
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);
