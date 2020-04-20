import { UnauthorizedException, UseGuards, ConflictException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription, Context } from '@nestjs/graphql'
import { AuthResponse } from './auth.model'
import { UserProvider } from 'src/modules/user/user.provider'
import { AuthProvider } from './auth.provider'
import { checkPassword } from './auth.helpers'
import { hashString } from '../bcrypt/bcrypt.helpers'
import { setAuthHeaders } from '../graphql/graphql.ctx.utils'
import { GqlAuthGuard } from '../graphql/graphql.guard'

@Resolver(of => AuthResponse)
export class AuthResolver {
  constructor(
    private readonly authProvider: AuthProvider,
    private userProvider: UserProvider,
  ) {}

  @Mutation(returns => AuthResponse, { name: 'login' })
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
    @Context() ctx,
  ): Promise<AuthResponse> {
    const user = await this.authProvider.validateUser(username, password)

    if (!user) {
      throw new UnauthorizedException()
    }

    const { accessToken, refreshToken } = await this.authProvider.login(user)

    // Set auth headers
    setAuthHeaders(ctx, { accessToken, refreshToken })
    
    return {
      user,
      accessToken,
      refreshToken,
    }
  }

  @Mutation(returns => AuthResponse, { name: 'createAccount'})
  async createAccount(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<AuthResponse> {
    const user = await this.userProvider.findByUsername(username)
    
    if (user) {
      throw new ConflictException("Username is already registered")
    }

    checkPassword(password)

    const hashedPassword = await hashString(password)

    const createdUser = await this.userProvider.createUser(username, email, hashedPassword)

    const { accessToken, refreshToken } = await this.authProvider.login(createdUser)

    return {
      user,
      accessToken,
      refreshToken,
    }
  }
}
