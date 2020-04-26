import { Inject, Injectable } from '@nestjs/common'
import { CONTEXT } from '@nestjs/graphql'
import { InjectRepository } from '@nestjs/typeorm'
import moment from 'moment'
import { User as UserEntity } from 'src/modules/user/user.entity'
import { User as UserModel } from 'src/modules/user/user.model'
import { DeleteResult, Repository, UpdateResult, getConnection } from 'typeorm'

import { UserRole } from './user.enum'
import { IDeleteUser, IUpdateUser } from './user.inputs'

@Injectable()
export class UserProvider {
  constructor(
    @InjectRepository(UserEntity) private readonly _usersRepository: Repository<UserModel>,
    @Inject(CONTEXT) private readonly _context, // Unused for now
  ) { }

  async findById(id: number) {
    return this._usersRepository.findOne({ where: { id } })
  }

  async findByUsername(username: string) {
    return this._usersRepository.findOne({ where: { username } })
  }

  async findByEmail(email: string) {
    return this._usersRepository.findOne({ where: { email } })
  }

  async listUsers() {
    return this._usersRepository.find()
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

    return this._usersRepository.save(userObject)
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

  /**
   * Updates the user with the provided id
   * with any properties specified in the payload object
  */
  async updateUser(input: IUpdateUser): Promise<UpdateResult> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(UserEntity)
      .set({ ...input })
      .where('id = :id', { id: input.id })
      .execute()

    return result
  }

  /**
   * Updates the user with the provided id
   * with any properties specified in the payload object
  */
  async deleteUser(input: IDeleteUser): Promise<DeleteResult> {
    const result = await getConnection()
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id: input.id })
      .execute()

    return result
  }
}
