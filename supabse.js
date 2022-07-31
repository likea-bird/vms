import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
export const supabase = createClient('https://aaqqzgvrfhfjjvxytniq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhcXF6Z3ZyZmhmamp2eHl0bmlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkyNzg0NDYsImV4cCI6MTk3NDg1NDQ0Nn0.LBx67Gw8IE9WWRG4mtAMCezKsWX2xELSR2RS_v2AYf8')