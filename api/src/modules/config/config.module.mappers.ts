import { AuthModule } from 'src/modules/auth/auth.module'
import { BlogModule } from 'src/modules/blog/blog.module'
import { ConfigModule } from 'src/modules/config/config.module'
import { DatabaseModule } from 'src/modules/database/database.module'
import { GraphQLModule } from 'src/modules/graphql/graphql.module'
import { UserModule } from '../user/user.module'
import { RefreshTokenModule } from '../refresh-token/refresh-token.module'

export const moduleMappers = {
  auth: AuthModule,
  blog: BlogModule,
  config: ConfigModule,
  database: DatabaseModule,
  graphql: GraphQLModule,
  refreshToken: RefreshTokenModule,
  user: UserModule,
}
