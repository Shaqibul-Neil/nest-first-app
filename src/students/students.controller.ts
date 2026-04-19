import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  //GET Method
  @Get()
  findAll() {
    return this.studentsService.getAllStudents();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.getStudentByID(id);
  }

  //Post Method
  @Post()
  create(@Body() body: CreateStudentDto) {
    console.log(body);
    return this.studentsService.createStudent(body);
  }

  //Put Method
  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreateStudentDto) {
    return this.studentsService.updateStudent(id, body);
  }

  //Patch Method
  @Patch(':id')
  patch(@Param('id') id: string, @Body() body: UpdateStudentDto) {
    return this.studentsService.patchStudent(id, body);
  }

  //Delete Method
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.studentsService.deleteStudent(id);
  }
}
