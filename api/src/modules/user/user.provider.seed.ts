import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User as UserEntity } from "./user.entity";
import { User as UserModel } from "./user.model";
import { Repository } from "typeorm";

const users: Partial<UserModel>[] = [
  {
    username: 'admin',
    email: 'admin@app.com',
    password: '1234qwer',
  }
]

@Injectable()
export class UserProviderSeed {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserModel>
  ) {}

  create(): Array<Promise<UserModel>> {
    return users.map(async (user) => await this.userRepository
      .findOne({ email: user.email })
      .then(async userRecord => {
        // If user exists, do nothing
        if (userRecord) {
          return Promise.resolve(null)
        }

        return Promise.resolve(
          await this.userRepository.create(user)
        )
      })
      .catch(error => Promise.reject(error))
    )

  }
} 