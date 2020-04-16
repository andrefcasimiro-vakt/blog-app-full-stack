import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthProvider } from './auth.provider'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authProvider: AuthProvider) {
    super()
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authProvider.validateUser(username, password)

    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
}
