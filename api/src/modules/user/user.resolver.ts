import { NotFoundException, UseGuards, ConflictException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { User } from 'src/modules/user/user.model'
import { UserProvider } from 'src/modules/user/user.provider'
import { GqlAuthGuard } from 'src/modules/graphql/graphql.guard'
import { CurrentUser } from '../graphql/decorators/current-user'
import { AuthUser } from '../auth/auth.model'

@Resolver(of => User)
export class UserResolver {
  constructor(
    private readonly userProvider: UserProvider,
  ) {
  }

  @Query(returns => User, { name: 'whoAmI' })
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: AuthUser) {
    return this.userProvider.findById(user.id)
  }

  @Query(returns => User, { name: 'getUserById' })
  async findById(
    @Args('id') id: number
  ): Promise<User> {
    const user = await this.userProvider.findById(id)

    if (!user) {
      throw new NotFoundException(id)
    }

    return user
  }

  @Query(returns => User, { name: 'getUserByUsername' })
  async findByUsername(
    @Args('username') username: string
  ): Promise<User> {
    const user = await this.userProvider.findByUsername(username)

    if (!user) {
      throw new NotFoundException(username)
    }

    return user
  }

  @Query(returns => [User], { name: 'listUsers' })
  @UseGuards(GqlAuthGuard)
  async listUsers(): Promise<User[]> {
    return this.userProvider.listUsers()
  }

}

