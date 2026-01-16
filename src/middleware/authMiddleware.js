import { supabase } from '../lib/supabase'

export const checkAuth = async () => {
  const { data: { session }, error } = await supabase.auth.getSession()
  
  if (error || !session) {
    // Standard 2026 practice: Redirect or throw a specific error for UI handling
    throw new Error('UNAUTHORIZED_ACCESS')
  }
  
  return session.user
}
