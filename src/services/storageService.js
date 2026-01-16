import { supabase } from '../lib/supabase'

export const storageService = {
  async uploadFile(bucketName, path, file) {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(path, file, { upsert: true })
    
    if (error) throw error
    return data
  },

  getPublicUrl(bucketName, path) {
    const { data } = supabase.storage.from(bucketName).getPublicUrl(path)
    return data.publicUrl
  }
}
