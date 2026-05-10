import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common'
import { QuizService } from './quiz.service'

@Controller('api')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('questions')
  getQuestions() {
    return this.quizService.getQuestions()
  }

  @Post('match')
  async match(@Body() body: { answers: Record<number, 'A' | 'B'> }) {
    if (!body?.answers || typeof body.answers !== 'object') {
      throw new HttpException('请提供答题记录', HttpStatus.BAD_REQUEST)
    }
    try {
      return await this.quizService.computeMatch(body.answers)
    } catch (e: any) {
      throw new HttpException(e.message || '匹配失败', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
