import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vahegyzkpxlqycdmhedd.supabase.co';
// Use provided anon key or a safe placeholder JWT to prevent createClient initialization crashes
const dummyAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1bW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2MDAwMDAwMDAsImV4cCI6MjAwMDAwMDAwMH0.dummy';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || dummyAnonKey;

if (!import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn('[Supabase] Missing VITE_SUPABASE_ANON_KEY environment variable. Form submissions will operate in fallback mode.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
