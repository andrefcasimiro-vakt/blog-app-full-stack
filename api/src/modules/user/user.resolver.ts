import { ConflictException, NotFoundException, UseGuards } from '@nestjs/common'
import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { equals, isEmpty, reject } from 'ramda'
import { User } from 'src/modules/user/user.model'
import { UserProvider } from 'src/modules/user/user.provider'

import { checkPassword } from '../auth/auth.helpers'
import { AuthUser } from '../auth/auth.model'
import { hashString } from '../bcrypt/bcrypt.helpers'
import { CurrentUser } from '../graphql/graphql.decorator.current-user'
import { Roles } from '../roles/roles.decorator'
import { RolesGuard } from '../roles/roles.guard'
import { UserRole } from './user.enum'
import { ICreateUser, IDeleteUser, IUpdateUser } from './user.inputs'

@Resolver(of => User)
export class UserResolver {
  constructor(
    private readonly _userProvider: UserProvider,
  ) {
  }

  @Query(returns => User, { name: 'whoAmI' })
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
  @Roles(UserRole.ADMIN)
  @UseGuards(RolesGuard)
  async listUsers(@CurrentUser() user: User): Promise<Partial<User[]>> {
    return this._userProvider.listUsers()
  }

  // Mutations

  // For users
  @Mutation(returns => User, { name: 'updateUser' })
  @Roles(UserRole.ADMIN)
  @UseGuards(RolesGuard)
  async updateUser(
    @Args('input') input: IUpdateUser
  ): Promise<Partial<User>> {
    const user = await this._userProvider.findById(input.id)

    if (!user) {
      throw new ConflictException(`User with id: ${input.id} could not be found.`)
    }

    // Is updating password?
    if (input.password) {

      // TODO: Require previous password to continue operation

      const hashedPassword = await hashString(input.password)
      input.password = hashedPassword
    }

    // Filter null properties
    const filteredInput = reject(equals('') || isEmpty)(input)


    await this._userProvider.updateUser(filteredInput)

    return {
      id: user.id,
    }
  }

  @Mutation(returns => Boolean, { name: 'deleteUser' })
  async deleteUser(
    @Args('input') input: IDeleteUser,
    @Context() ctx,
  ): Promise<boolean> {
    // Delete posts, comments, profiles first
    await this._userProvider.deleteUser(input)

    return true
  }

  // For admins
  @Mutation(returns => User, { name: 'createUser' })
  async createUser(
    @Args('input') input: ICreateUser,
    @Context() ctx,
  ): Promise<Partial<User>> {
    const {
      username,
      email,
      password,
      role,
      isActive
    } = input

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

