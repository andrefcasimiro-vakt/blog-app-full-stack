import { UnauthorizedException } from '@nestjs/common'
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { UserProvider } from 'src/modules/user/user.provider'

import { setAuthHeaders } from '../graphql/graphql.ctx.utils'
import { AuthResponse } from './auth.model'
import { AuthProvider } from './auth.provider'

@Resolver((of) => AuthResponse)
export class AuthResolver {
	constructor(
		private readonly _authProvider: AuthProvider,
		private readonly _userProvider: UserProvider,
	) { }

	@Mutation((returns) => AuthResponse, { name: 'login' })
	async login(
		@Args('username') username: string,
		@Args('password') password: string,
		@Context() ctx,
	): Promise<AuthResponse> {
		const user = await this._authProvider.validateUser(username, password)

		if (!user) {
			throw new UnauthorizedException()
		}

		const { accessToken, refreshToken } = await this._authProvider.login(user)

		// Set auth headers
		setAuthHeaders(ctx, { accessToken, refreshToken })

		return {
			user,
			accessToken,
			refreshToken,
		}
	}
}
