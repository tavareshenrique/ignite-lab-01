import { UseGuards } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { AuthorizationGuard } from '../../auth/authorization.guard';

import { StudentsService } from '../../../services/students.service';
import { EnrollmentsService } from '../../../services/enrollments.service';

import { CurrentUser, IAuthUser } from '../../auth/current-user';

import { Student } from '../models/student';

@Resolver(() => Student)
export class StudentsResolver {
  constructor(
    private studentsService: StudentsService,
    private enrollmentsService: EnrollmentsService,
  ) {}

  // @Query(() => Student)
  // @UseGuards(AuthorizationGuard)
  // me(@CurrentUser() user: IAuthUser) {
  //   return this.studentsService.getStudentByAuthUserId(user.sub);
  // }

  @Query(() => [Student])
  @UseGuards(AuthorizationGuard)
  students() {
    return this.studentsService.listAllStudents();
  }

  @ResolveField()
  enrollments(@Parent() student: Student) {
    return this.enrollmentsService.getEnrollmentsByStudent(student.id);
  }
}
