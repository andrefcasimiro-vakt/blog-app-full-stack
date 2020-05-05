import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { ICreateResetPasswordCode } from './reset-password.input'
import { ResetPasswordModel } from './reset-password.model'
import { ResetPasswordProvider } from './reset-password.provider'

@Resolver((of) => ResetPasswordModel)
export class ResetPasswordResolver {
	constructor(private readonly _resetPasswordProvider: ResetPasswordProvider) {}

	@Mutation((returns) => ResetPasswordModel, { name: 'createResetPasswordCode' })
	async createResetPasswordCode(@Args('input') input: ICreateResetPasswordCode): Promise<Partial<ResetPasswordModel>> {
		const { email } = input

		const result = await this._resetPasswordProvider.resetPasswordCode({ email })

		return result
	}
}
