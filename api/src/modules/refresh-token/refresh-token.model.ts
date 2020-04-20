import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Model } from '../graphql/graphql.model';

@ObjectType()
export class RefreshToken extends Model {

  @Field({ description: `The user who owns this refresh token` })
  userId: number

  @Field()
  hash: string

}
