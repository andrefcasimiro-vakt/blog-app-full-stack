import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User as UserEntity } from 'src/modules/user/user.entity'
import { User as UserModel } from 'src/modules/user/user.model'
import { InjectRepository } from '@nestjs/typeorm'
import { CONTEXT } from '@nestjs/graphql'
import { UserRole } from './user.enum'

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

  async createUser(username: string, hashedPassword: string) {
    const userObject: Partial<UserEntity> = {
      username,
      password: hashedPassword,
      role: UserRole.USER,
    }

    return this.usersRepository.save(userObject)
  }
}
