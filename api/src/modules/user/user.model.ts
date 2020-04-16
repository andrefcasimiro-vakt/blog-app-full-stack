import { Field, ID, ObjectType } from '@nestjs/graphql'
import { UserRole } from './user.enum';

@ObjectType()
export class User {
  @Field(type => ID)
  id: number

  @Field()
  username: string

  @Field()
  password: string

  @Field()
  isActive: boolean

  @Field()
  role: UserRole
}
