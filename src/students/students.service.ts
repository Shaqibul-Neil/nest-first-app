import { Injectable, NotFoundException } from '@nestjs/common';
import { TStudent } from './student';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  private students: TStudent[] = [
    { id: '1', name: 'Rahim', age: 20 },
    { id: '2', name: 'Karim', age: 21 },
    { id: '3', name: 'Jamal', age: 22 },
    { id: '4', name: 'Kamal', age: 23 },
  ];

  //GET Method
  getAllStudents(): TStudent[] {
    return this.students;
  }
  getStudentByID(id: string): TStudent {
    const student = this.students.find((s) => s.id === id);
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  //Post Method
  createStudent(data: CreateStudentDto): TStudent {
    const newStudent: TStudent = { id: Date.now().toString(), ...data };
    this.students.push(newStudent);
    return newStudent;
  }

  //Put Method (FULL REPLACE)
  updateStudent(id: string, data: CreateStudentDto) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student not found');
    const updated: TStudent = {
      id,
      ...data,
    };
    this.students[index] = updated;
    return updated;
  }

  //Patch Method (PARTIAL UPDATE)
  patchStudent(id: string, data: UpdateStudentDto) {
    const student = this.getStudentByID(id);
    if (!student) throw new NotFoundException('Student Not Found');
    //it only changes the updated portion after making a copy of the student : (target, source)
    Object.assign(student, data);
    return student;
  }

  //Delete Method
  deleteStudent(id: string) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student Not Found');
    const deleted = this.students.splice(index, 1);
    return { message: 'Student data deleted', student: deleted[0] };
  }
}
