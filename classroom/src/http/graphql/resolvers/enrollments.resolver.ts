import { UseGuards } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from '../../auth/authorization.guard';

import { EnrollmentsService } from '../../../services/enrollments.service';
import { StudentsService } from '../../../services/students.service';
import { CoursesService } from '../../../services/courses.service';

import { Enrollment } from '../models/enrollment';

@Resolver(() => Enrollment)
export class EnrollmentsResolver {
  constructor(
    private enrollmentsService: EnrollmentsService,
    private studentsService: StudentsService,
    private coursesServices: CoursesService,
  ) {}

  @Query(() => [Enrollment])
  @UseGuards(AuthorizationGuard)
  enrollments() {
    return this.enrollmentsService.listAllEnrollments();
  }

  @ResolveField()
  student(@Parent() enrollment: Enrollment) {
    return this.studentsService.getStudentById(enrollment.studentId);
  }

  @ResolveField()
  course(@Parent() enrollment: Enrollment) {
    return this.coursesServices.getCourseById(enrollment.courseId);
  }
}
