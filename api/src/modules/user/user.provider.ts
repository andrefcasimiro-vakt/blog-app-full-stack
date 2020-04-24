import { Injectable, Inject } from '@nestjs/common'
import { Repository, getConnection } from 'typeorm'
import { User as UserEntity } from 'src/modules/user/user.entity'
import { User as UserModel } from 'src/modules/user/user.model'
import { InjectRepository } from '@nestjs/typeorm'
import { CONTEXT } from '@nestjs/graphql'
import { UserRole } from './user.enum'
import moment from 'moment'

@Injectable()
export class UserProvider {
  constructor(
    @InjectRepository(UserEntity) private usersRepository: Repository<UserModel>,
    @Inject(CONTEXT) private context,
  ){}

  async findById(id: number) {
    console.log('received context: ', this.context)

    return this.usersRepository.findOne( { where: { id } })
  }

  async findByUsername(username: string) {
    return this.usersRepository.findOne( { where: { username } } )
  }

  async findByEmail(email: string) {
    return this.usersRepository.findOne( { where: { email } } )
  }

  async listUsers() {
    return this.usersRepository.find()
  }

  async createUser(
    username: string,
    email: string,
    hashedPassword: string,
    role: UserRole = UserRole.USER,
    isActive = false,
  ) {
    const userObject: Partial<UserModel> = {
      username,
      email,
      password: hashedPassword,
      role,
      isActive,
    }

    return this.usersRepository.save(userObject)
  }

  async updateLastLoginAt(userId: number) {
    const result = await getConnection()
      .createQueryBuilder()
      .update(UserEntity)
      .set({ lastLoginAt: moment.utc().toISOString() })
      .where('id = :userId', { userId })
      .execute()

    return result
  }
}
