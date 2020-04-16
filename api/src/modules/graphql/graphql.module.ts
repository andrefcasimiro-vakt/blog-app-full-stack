import { Module } from '@nestjs/common'
import { GraphQLModule as NestjsGraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

@Module({
  imports: [
    NestjsGraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req }),
      installSubscriptionHandlers: true,
    })
  ]
})
export class GraphQLModule {}
