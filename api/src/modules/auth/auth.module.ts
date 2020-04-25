import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import config from 'src/modules/config/config.main'
import { JwtStrategy } from 'src/modules/jwt/jwt.strategy'
import { RefreshTokenModule } from 'src/modules/refresh-token/refresh-token.module'
import { UserModule } from 'src/modules/user/user.module'

import { AuthProvider } from './auth.provider'
import { AuthResolver } from './auth.resolver'
import { LocalStrategy } from './auth.strategy'

@Module({
  imports: [
    RefreshTokenModule,
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: config.jwt.secret,
      signOptions: {
        expiresIn: `${config.jwt.expiresIn}h`,
      },
    }),
  ],
  providers: [AuthResolver, AuthProvider, LocalStrategy, JwtStrategy],
})
export class AuthModule { }
