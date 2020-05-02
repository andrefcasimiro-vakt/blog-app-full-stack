import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql/dist/decorators/input-type.decorator'
import { IsDefined, MinLength } from 'class-validator'

import config from '../config/config.main'

@InputType()
export class ILogin {
	@IsDefined()
	@Field()
	username: string

	@MinLength(config.auth.password.minimumLength)
	@Field()
	password: string
}
