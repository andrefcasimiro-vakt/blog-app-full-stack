import { NotFoundException, UseGuards, ConflictException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { User } from 'src/modules/user/user.model'
import { UserProvider } from 'src/modules/user/user.provider'
import { GqlAuthGuard } from 'src/modules/graphql/graphql.guard'
import { CurrentUser } from '../graphql/decorators/current-user'
import { AuthUser } from '../auth/auth.model'
import { RefreshToken } from './refresh-token.model'
import { RefreshTokenProvider } from './refresh-token.provider'
import { IAuthRefreshToken } from './refresh-token.types'
import { errors } from './refresh-token.errors'
import { generateAuthTokens } from './refresh-token.helpers'

@Resolver(of => RefreshToken)
export class RefreshTokenResolver {
  constructor(
    private readonly userProvider: UserProvider,
    private readonly refreshTokenProvider: RefreshTokenProvider,
  ) {}


  @Query(returns => RefreshToken, { name: 'authenticateRefreshToken' })
  @UseGuards(GqlAuthGuard)
  async authenticateRefreshToken(payload: IAuthRefreshToken) {
    const { email, refreshToken } = payload

    const user = await this.userProvider
      .findByEmail(email)

    if (!user) {
      throw new NotFoundException(errors.EMAIL_NOT_FOUND)
    }

    const tokensMatch = await this.refreshTokenProvider
      .isValidRefreshToken(user.id, refreshToken)

    if (!tokensMatch) {
      throw new NotFoundException(errors.INVALID_REFRESH_TOKEN)
    }

    return await generateAuthTokens(user)
  }

}

