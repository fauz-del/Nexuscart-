import { supabase } from '../lib/supabase'

export const databaseService = {
  // Example: Fetch all items from a table
  async getAll(tableName) {
    const { data, error } = await supabase.from(tableName).select('*')
    if (error) throw error
    return data
  },

  // Example: Insert a new row
  async create(tableName, payload) {
    const { data, error } = await supabase.from(tableName).insert([payload]).select()
    if (error) throw error
    return data
  }
}
