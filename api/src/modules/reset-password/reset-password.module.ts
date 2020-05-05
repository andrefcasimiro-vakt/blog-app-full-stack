import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module'

import { UserModule } from '../user/user.module'
import { WorkerModule } from '../worker/worker.module'
import { ResetPassword } from './reset-password.entity'
import { ResetPasswordProvider } from './reset-password.provider'
import { ResetPasswordResolver } from './reset-password.resolver'

@Module({
	imports: [ TypeOrmModule.forFeature([ ResetPassword ]), WorkerModule, UserModule ],
	exports: [ ResetPasswordProvider, ResetPasswordResolver ],
	providers: [ ResetPasswordProvider, ResetPasswordResolver ],
})
export class ResetPasswordModule {}
