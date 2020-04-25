import { Field, ObjectType } from '@nestjs/graphql'

import { Model } from '../graphql/graphql.model'
import { UserRole } from '../user/user.enum'

@ObjectType()
export class AuthUser extends Model {
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
