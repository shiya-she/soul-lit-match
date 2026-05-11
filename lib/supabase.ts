import { createClient } from '@supabase/supabase-js'

let client: ReturnType<typeof createClient> | null = null

export function getSupabase() {
  if (!client) {
    const url = process.env.SUPABASE_URL
    const key = process.env.SUPABASE_KEY
    if (!url || !key) throw new Error('SUPABASE_URL and SUPABASE_KEY required')
    client = createClient(url, key)
  }
  return client
}
