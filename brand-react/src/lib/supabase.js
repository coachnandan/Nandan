import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vahegyzkpxlqycdmhedd.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseAnonKey) {
  console.warn('[Supabase] Missing VITE_SUPABASE_ANON_KEY in environment variables. Database operations will fail until configured.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
