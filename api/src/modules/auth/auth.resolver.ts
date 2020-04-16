import { UnauthorizedException, UseGuards, ConflictException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'apollo-server-express'
import { Auth } from './auth.model'
import { UserProvider } from 'src/modules/user/user.provider'
import { AuthProvider } from './auth.provider'
import { checkPassword } from './auth.helpers'
import { hashString } from '../bcrypt/bcrypt.helpers'

const pubSub = new PubSub()

@Resolver(of => Auth)
export class AuthResolver {
  constructor(
    private readonly authProvider: AuthProvider,
    private userProvider: UserProvider,
  ) {}

  @Mutation(returns => Auth)
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<Auth> {
    const user = await this.authProvider.validateUser(username, password)

    if (!user) {
      throw new UnauthorizedException()
    }

    const { access_token } = await this.authProvider.login(user)

    return {
      token: access_token
    }
  }

  @Mutation(returns => Auth)
  async register(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<any> {
    const user = await this.userProvider.findByUsername(username)
    
    if (user) {
      throw new ConflictException("Username is already registered")
    }

    checkPassword(password)

    const hashedPassword = await hashString(password)

    const createdUser = await this.userProvider.createUser(username, hashedPassword)

    const { access_token } = await this.authProvider.login(createdUser)

    return {
      token: access_token
    }
  }
}

