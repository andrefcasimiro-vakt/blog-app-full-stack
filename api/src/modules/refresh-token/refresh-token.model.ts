import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Model } from '../graphql/graphql.model';
import { User } from '../user/user.model';

@ObjectType()
export class RefreshToken extends Model {

  @Field({ description: `The user who owns this refresh token` })
  user: Partial<User>

  @Field()
  hash: string

}
