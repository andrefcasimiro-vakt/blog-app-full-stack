import { Injectable } from '@nestjs/common'
import { UserProvider } from 'src/modules/user/user.provider'
import { User } from 'src/modules/user/user.model'
import { JwtService } from '@nestjs/jwt'
import { compareHashed } from '../bcrypt/bcrypt.helpers'
import { RefreshTokenProvider } from '../refresh-token/refresh-token.provider'
import { AuthResponse } from './auth.types'

@Injectable()
export class AuthProvider {
  constructor(
    private userProvider: UserProvider,
    private jwtProvider: JwtService,
    private refreshTokenProvider: RefreshTokenProvider,
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

  async login(user: User): Promise<AuthResponse> {
    const payload = { username: user.username, id: user.id }

    const accessToken = this.jwtProvider.sign(payload)
    
    // Generate refresh token
    const refreshToken = await this.refreshTokenProvider
      .createRefreshToken(user.id)

    // Update last login
    await this.userProvider.updateLastLoginAt(user.id)

    return {
      user,
      accessToken,
      refreshToken,
    }
  }
}
