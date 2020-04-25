import { DynamicModule } from '@nestjs/common'
import { AuthModule } from 'src/modules/auth/auth.module'
import { BlogModule } from 'src/modules/blog/blog.module'
import { ConfigModule } from 'src/modules/config/config.module'
import { DatabaseModule } from 'src/modules/database/database.module'
import { GraphQLModule } from 'src/modules/graphql/graphql.module'

import { RefreshTokenModule } from '../refresh-token/refresh-token.module'
import { UserModule } from '../user/user.module'

export const moduleMappers = {
  auth: AuthModule,
  blog: BlogModule,
  config: ConfigModule,
  database: DatabaseModule,
  graphql: GraphQLModule,
  refreshToken: RefreshTokenModule,
  user: UserModule,
}

export type Modules = typeof AuthModule | typeof BlogModule | typeof ConfigModule | typeof DatabaseModule | typeof GraphQLModule | typeof RefreshTokenModule | typeof UserModule | DynamicModule
