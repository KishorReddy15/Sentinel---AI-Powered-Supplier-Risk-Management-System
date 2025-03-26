
import { createClient } from '@supabase/supabase-js';

// Default values for development (replace these with your actual test project values)
const FALLBACK_URL = 'https://your-test-project.supabase.co';
const FALLBACK_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdXItdGVzdC1wcm9qZWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2MTYxNjQwMDAsImV4cCI6MTYxNjE2NDAwMH0.example_key';

// Get Supabase URL and anon key from environment variables or use fallbacks for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || FALLBACK_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || FALLBACK_KEY;

// Create a mock Supabase client for development when real credentials aren't available
const isMockClient = !import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY;

if (isMockClient) {
  console.warn('Using mock Supabase client. For full functionality, please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export flag to check if we're using a mock client
export const usingMockSupabase = isMockClient;
