import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AuthUser {
  @Field()
  id: number

  @Field()
  username: string

  @Field()
  email: string
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
