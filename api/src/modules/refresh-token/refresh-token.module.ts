import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { RefreshToken } from './refresh-token.entity'
import { RefreshTokenProvider } from './refresh-token.provider'

@Module({
  imports: [
    TypeOrmModule.forFeature([RefreshToken]),
  ],
  exports: [
    RefreshTokenProvider,
  ],
  providers: [
    RefreshTokenProvider,
    RefreshTokenProvider,
  ],
  controllers: [

  ],
})
export class RefreshTokenModule { }
