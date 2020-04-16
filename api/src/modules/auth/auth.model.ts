import { Field, ID, ObjectType } from '@nestjs/graphql'
import { User } from '../user/user.model';

@ObjectType()
export class Auth {
  @Field()
  token: string
}

@ObjectType()
export class AuthUser {
  @Field()
  id: number

  @Field()
  username: string
}

