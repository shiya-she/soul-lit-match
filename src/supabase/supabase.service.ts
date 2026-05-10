import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

@Injectable()
export class SupabaseService {
  private client: SupabaseClient | null = null

  constructor(private config: ConfigService) {}

  getClient(): SupabaseClient {
    if (!this.client) {
      const url = this.config.get<string>('SUPABASE_URL')
      const key = this.config.get<string>('SUPABASE_KEY')
      if (!url || !key) {
        throw new Error('SUPABASE_URL and SUPABASE_KEY must be set in .env')
      }
      this.client = createClient(url, key)
    }
    return this.client
  }
}
