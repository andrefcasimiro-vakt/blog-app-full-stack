import { join } from 'path'

import { Module } from '@nestjs/common'
import { GraphQLModule as NestjsGraphQLModule } from '@nestjs/graphql'

import { AuthProvider } from '../auth/auth.provider'

@Module({
  imports: [
    NestjsGraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req }),
      installSubscriptionHandlers: true,
    })
  ],
})
export class GraphQLModule { }
