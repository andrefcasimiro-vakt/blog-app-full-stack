import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User as UserEntity } from "./user.entity";
import { UserRole } from "./user.enum";
import { User as UserModel } from "./user.model";

const users: Partial<UserModel>[] = [
  {
    username: 'admin',
    email: 'admin@app.com',
    password: '$2b$10$tbRa37rfDDFM7DZ1uNJA6ODgk30gXHVsZZ/rBJmgQ0O1O1MXrG3RS', // 1234qwer
    role: UserRole.ADMIN,
  }
]

@Injectable()
export class UserProviderSeed {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _userRepository: Repository<UserModel>
  ) { }

  create(): Promise<UserModel | null>[] {
    return users.map(async (user) => await this._userRepository
      .findOne({ email: user.email })
      .then(async userRecord => {
        // If user exists, do nothing
        if (userRecord) {
          Promise.resolve(null)
        }

        return Promise.resolve(
          await this._userRepository.save(user)
        )
      })
      .catch(error => Promise.reject(error))
    )

  }
}
