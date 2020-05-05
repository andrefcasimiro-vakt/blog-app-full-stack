import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql/dist/decorators/input-type.decorator'
import { IsDefined, IsEmail } from 'class-validator'

@InputType()
export class ICreateResetPasswordCode {
	@IsDefined()
	@IsEmail()
	@Field({ nullable: false })
	email: string
}
