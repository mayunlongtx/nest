// students.controller.ts
import { Controller, Get, Post, Query } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('who-are-you')
  //   @Post('who-are-you')
  whoAreYou(@Query('name') name: string) {
    return this.studentsService.ImStudent(name);
  }
}
