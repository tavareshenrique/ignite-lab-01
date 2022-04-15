import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Student } from './student';
import { Course } from './course';

@ObjectType()
export class Enrollment {
  @Field(() => ID)
  id: string;

  @Field(() => Student)
  student: Student;
  studentId: string;

  @Field(() => Course)
  course: Course;
  courseId: string;

  @Field(() => Date, { nullable: true })
  canceledAt: Date;

  @Field(() => Date)
  createdAt: Date;
}
