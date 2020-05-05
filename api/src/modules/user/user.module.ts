import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/modules/user/user.entity'

import { AclModule } from '../acl/acl.module'
import { WorkerModule } from '../worker/worker.module'
import { UserProvider } from './user.provider'
import { UserProviderSeed } from './user.provider.seed'
import { UserResolver } from './user.resolver'

@Module({
	imports: [ AclModule, WorkerModule, TypeOrmModule.forFeature([ User ]) ],
	exports: [ UserProvider, UserProviderSeed ],
	providers: [ UserResolver, UserProvider, UserProviderSeed ],
	controllers: [],
})
export class UserModule {}
