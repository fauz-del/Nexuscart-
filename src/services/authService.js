import { supabase } from '../lib/supabase';

export const authService = {
  // Sign Up
  signUp: async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data;
  },

  // Sign In
  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  },

  // Sign Out
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }
};
