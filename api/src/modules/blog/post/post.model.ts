import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Model } from 'src/modules/graphql/graphql.model';

@ObjectType()
export class Post extends Model {
  @Field()
  title: string

  @Field(type => Int, { nullable: true, description: `The amount of votes given by other users` })
  likes?: number
}
