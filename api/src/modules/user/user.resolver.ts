import { NotFoundException, UseGuards, ConflictException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription, Context, Int } from '@nestjs/graphql'
import { User } from 'src/modules/user/user.model'
import { UserProvider } from 'src/modules/user/user.provider'
import { GqlAuthGuard } from 'src/modules/graphql/graphql.guard'
import { CurrentUser } from '../graphql/decorators/current-user'
import { AuthUser } from '../auth/auth.model'
import { checkPassword } from '../auth/auth.helpers'
import { hashString } from '../bcrypt/bcrypt.helpers'
import { UserRole } from './user.enum'

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
    @Args('id', { type: () => Int }) id: number
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
  async listUsers(): Promise<Partial<User[]>> {
    return this.userProvider.listUsers()
  }



  // Mutations

   // For admins
   @Mutation(returns => User, { name: 'createUser'})
   async createUser(
     @Args('username') username: string,
     @Args('email') email: string,
     @Args('password') password: string,
     @Args('role') role: UserRole,
     @Args('isActive') isActive: boolean,
     @Context() ctx,
   ): Promise<Partial<User>> {
     const user = await this.userProvider.findByUsername(username)
     
     if (user) {
       throw new ConflictException("Username is already registered")
     }
 
     checkPassword(password)
 
     const hashedPassword = await hashString(password)
 
     const createdUser = await this.userProvider.createUser(username, email, hashedPassword, role, isActive)
 
     return createdUser
   }

}

