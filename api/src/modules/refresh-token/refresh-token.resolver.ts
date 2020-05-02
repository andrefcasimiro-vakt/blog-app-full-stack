import { NotFoundException, UseGuards } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'
import * as ErrorTypes from 'src/modules/error/error.constants'
import { UserProvider } from 'src/modules/user/user.provider'

import { GqlAuthGuard } from '../graphql/graphql.guard'
import { generateAuthTokens } from './refresh-token.helpers'
import { RefreshToken } from './refresh-token.model'
import { RefreshTokenProvider } from './refresh-token.provider'
import { IAuthRefreshToken } from './refresh-token.types'

@Resolver((of) => RefreshToken)
export class RefreshTokenResolver {
	constructor(
		private readonly _userProvider: UserProvider,
		private readonly _refreshTokenProvider: RefreshTokenProvider,
	) {}

	@UseGuards(GqlAuthGuard)
	@Query((returns) => RefreshToken, { name: 'authenticateRefreshToken' })
	async authenticateRefreshToken(payload: IAuthRefreshToken) {
		const { email, refreshToken } = payload

		const user = await this._userProvider.findByEmail(email)

		if (!user) {
			throw new NotFoundException(ErrorTypes.refreshToken.EMAIL_NOT_FOUND)
		}

		const isMatchBetweenTokens = await this._refreshTokenProvider.isValidRefreshToken(user.id, refreshToken)

		if (!isMatchBetweenTokens) {
			throw new NotFoundException(ErrorTypes.refreshToken.INVALID_REFRESH_TOKEN)
		}

		return await generateAuthTokens(user)
	}
}
