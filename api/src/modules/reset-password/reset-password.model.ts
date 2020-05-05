import { Field, ObjectType } from '@nestjs/graphql'

import { Model } from '../graphql/graphql.model'
import { User } from '../user/user.model'

@ObjectType()
export class ResetPasswordModel extends Model {
	@Field() code: string
}
