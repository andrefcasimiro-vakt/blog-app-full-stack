import { NotFoundException, UseGuards } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'
import { GqlAuthGuard } from 'src/modules/graphql/graphql.guard'
import { UserProvider } from 'src/modules/user/user.provider'

import { errors } from './refresh-token.errors'
import { generateAuthTokens } from './refresh-token.helpers'
import { RefreshToken } from './refresh-token.model'
import { RefreshTokenProvider } from './refresh-token.provider'
import { IAuthRefreshToken } from './refresh-token.types'

@Resolver(of => RefreshToken)
export class RefreshTokenResolver {
  constructor(
    private readonly _userProvider: UserProvider,
    private readonly _refreshTokenProvider: RefreshTokenProvider,
  ) { }


  @Query(returns => RefreshToken, { name: 'authenticateRefreshToken' })
  @UseGuards(GqlAuthGuard)
  async authenticateRefreshToken(payload: IAuthRefreshToken) {
    const { email, refreshToken } = payload

    const user = await this._userProvider
      .findByEmail(email)

    if (!user) {
      throw new NotFoundException(errors.EMAIL_NOT_FOUND)
    }

    const isMatchBetweenTokens = await this._refreshTokenProvider
      .isValidRefreshToken(user.id, refreshToken)

    if (!isMatchBetweenTokens) {
      throw new NotFoundException(errors.INVALID_REFRESH_TOKEN)
    }

    return await generateAuthTokens(user)
  }

}

