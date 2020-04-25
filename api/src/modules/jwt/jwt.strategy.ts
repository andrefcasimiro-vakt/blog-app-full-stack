import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import config from 'src/modules/config/config.main'

import { AuthUser } from '../auth/auth.model'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.jwt.secret,
    })
  }

  async validate(user: Partial<AuthUser>): Promise<Partial<AuthUser>> {
    return await {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    }
  }
}