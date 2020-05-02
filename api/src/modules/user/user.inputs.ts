import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql/dist/decorators/input-type.decorator'
import { IsBoolean, IsDefined, IsEmail, IsEnum, IsOptional, Length, MinLength } from 'class-validator'

import config from '../config/config.main'
import { UserRole } from './user.enum'

@InputType()
export class ICreateUser {
	@IsOptional()
	@Length(3, 15)
	@Field({ nullable: true })
	username: string

	@IsOptional()
	@IsEmail()
	@Field({ nullable: true })
	email: string

	@MinLength(config.auth.password.minimumLength)
	@Field({ nullable: true })
	password: string

	@IsOptional()
	@IsEnum(UserRole)
	@Field({ nullable: true })
	role: UserRole

	@IsOptional()
	@IsBoolean()
	@Field({ nullable: true })
	isActive: boolean
}

@InputType()
export class IUpdateUser {
	@IsDefined()
	@Field()
	id: number

	@IsOptional()
	@Length(3, 15)
	@Field({ nullable: true })
	username: string

	@IsOptional()
	@IsEmail()
	@Field({ nullable: true })
	email: string

	@IsOptional()
	@MinLength(config.auth.password.minimumLength)
	@Field({ nullable: true })
	password: string

	@IsOptional()
	@IsEnum(UserRole)
	@Field({ nullable: true })
	role: UserRole

	@IsOptional()
	@IsBoolean()
	@Field({ nullable: true })
	isActive: boolean
}

@InputType()
export class IDeleteUser {
	@IsDefined()
	@Field()
	id: number
}
