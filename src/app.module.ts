import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { AppController } from './app.controller'
import { QuizModule } from './quiz/quiz.module'
import { SupabaseModule } from './supabase/supabase.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    SupabaseModule,
    QuizModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
