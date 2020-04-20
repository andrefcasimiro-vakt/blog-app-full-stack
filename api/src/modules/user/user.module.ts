import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/modules/user/user.entity'
import { UserResolver } from './user.resolver'
import { UserProvider } from './user.provider'
import { UserProviderSeed } from './user.provider.seed'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  exports: [
    UserProvider,
    UserProviderSeed,
  ],
  providers: [
    UserResolver,
    UserProvider,
    UserProviderSeed,
  ],
  controllers: [

  ],
})
export class UserModule{}
