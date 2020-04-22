import { Field, ObjectType } from '@nestjs/graphql'
import { UserRole } from '../user/user.enum'

@ObjectType()
export class AuthUser {
  @Field()
  id: number

  @Field()
  username: string

  @Field()
  email: string

  @Field()
  role: UserRole
}

@ObjectType()
export class AuthResponse {
  @Field()
  user: AuthUser

  @Field()
  accessToken: string

  @Field()
  refreshToken: string
}
