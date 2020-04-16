import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/modules/user/user.entity'
import { UserResolver } from './user.resolver'
import { UserProvider } from './user.provider'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  exports: [
    UserProvider,
  ],
  providers: [
    UserResolver,
    UserProvider,
  ],
  controllers: [

  ],
})
export class UserModule{}
