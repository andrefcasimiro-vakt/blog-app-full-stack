import { Field, ID, ObjectType } from '@nestjs/graphql'
import { UserRole } from './user.enum';
import { Model } from '../graphql/graphql.model';

@ObjectType()
export class User extends Model {

  @Field()
  username: string
  
  @Field()
  email: string

  @Field()
  password: string

  @Field({ description: `Describes if user account is verified and allowed` })
  isActive: boolean

  @Field({ description: `Describes the group of permissions to which the user belongs `})
  role: UserRole

  @Field()
  lastLoginAt: Date
}
