import { Injectable } from '@nestjs/common'
import { UserProvider } from 'src/modules/user/user.provider'
import { User } from 'src/modules/user/user.model'
import { JwtService } from '@nestjs/jwt'
import { compareHashed } from '../bcrypt/bcrypt.helpers'

@Injectable()
export class AuthProvider {
  constructor(
    private userProvider: UserProvider,
    private jwtProvider: JwtService,
  ) {}

  async validateUser(username: string, pwd: string): Promise<User> {
    const user = await this.userProvider.findByUsername(username)

    if (!user) {
      return null
    }

    const passwordsMatch = compareHashed(pwd, user.password)

    if (!passwordsMatch) {
      return null
    }

    const { password, ...result} = user
    return user
  }

  async login(user: User) {
    const payload = { username: user.username, id: user.id }

    return {
      access_token: this.jwtProvider.sign(payload)
    }
  }
}
