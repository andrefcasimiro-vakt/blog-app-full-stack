import { ConflictException, NotFoundException, UseGuards } from '@nestjs/common'
import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { GqlAuthGuard } from 'src/modules/graphql/graphql.guard'
import { User } from 'src/modules/user/user.model'
import { UserProvider } from 'src/modules/user/user.provider'

import { checkPassword } from '../auth/auth.helpers'
import { AuthUser } from '../auth/auth.model'
import { hashString } from '../bcrypt/bcrypt.helpers'
import { CurrentUser } from '../graphql/decorators/current-user'
import { UserRole } from './user.enum'

@Resolver(of => User)
export class UserResolver {
  constructor(
    private readonly _userProvider: UserProvider,
  ) {
  }

  @Query(returns => User, { name: 'whoAmI' })
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: AuthUser) {
    return this._userProvider.findById(user.id)
  }

  @Query(returns => User, { name: 'getUserById' })
  async findById(
    @Args('id', { type: () => Int }) id: number
  ): Promise<User> {
    const user = await this._userProvider.findById(id)

    if (!user) {
      throw new NotFoundException(id)
    }

    return user
  }

  @Query(returns => User, { name: 'getUserByUsername' })
  async findByUsername(
    @Args('username') username: string
  ): Promise<User> {
    const user = await this._userProvider.findByUsername(username)

    if (!user) {
      throw new NotFoundException(username)
    }

    return user
  }

  @Query(returns => [User], { name: 'listUsers' })
  @UseGuards(GqlAuthGuard)
  async listUsers(): Promise<Partial<User[]>> {
    return this._userProvider.listUsers()
  }

  // Mutations

  // For admins
  @Mutation(returns => User, { name: 'createUser' })
  async createUser(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('role') role: UserRole,
    @Args('isActive') isActive: boolean,
    @Context() ctx,
  ): Promise<Partial<User>> {
    const user = await this._userProvider.findByUsername(username)

    if (user) {
      throw new ConflictException("Username is already registered")
    }

    checkPassword(password)

    const hashedPassword = await hashString(password)

    const createdUser = await this._userProvider.createUser(username, email, hashedPassword, role, isActive)
    return createdUser
  }

}

