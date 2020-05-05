import { DynamicModule } from '@nestjs/common'
import { AuthModule } from 'src/modules/auth/auth.module'
import { BlogModule } from 'src/modules/blog/blog.module'
import { ConfigModule } from 'src/modules/config/config.module'
import { DatabaseModule } from 'src/modules/database/database.module'
import { GraphQLModule } from 'src/modules/graphql/graphql.module'

import { AclModule } from '../acl/acl.module'
import { EmailModule } from '../email/email.module'
import { QueueModule } from '../queue/queue.module'
import { RefreshTokenModule } from '../refresh-token/refresh-token.module'
import { ResetPasswordModule } from '../reset-password/reset-password.module'
import { UserModule } from '../user/user.module'
import { WorkerModule } from '../worker/worker.module'

export const moduleMappers = {
	acl: AclModule,
	auth: AuthModule,
	blog: BlogModule,
	config: ConfigModule,
	database: DatabaseModule,
	email: EmailModule,
	graphql: GraphQLModule,
	refreshToken: RefreshTokenModule,
	queue: QueueModule,
	user: UserModule,
	resetPassword: ResetPasswordModule,
	worker: WorkerModule,
}

export type Modules =
	| typeof AclModule
	| typeof AuthModule
	| typeof BlogModule
	| typeof ConfigModule
	| typeof DatabaseModule
	| typeof EmailModule
	| typeof GraphQLModule
	| typeof RefreshTokenModule
	| typeof QueueModule
	| typeof UserModule
	| typeof ResetPasswordModule
	| typeof WorkerModule
	| DynamicModule
