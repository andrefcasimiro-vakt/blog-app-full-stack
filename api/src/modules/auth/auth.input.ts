import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql/dist/decorators/input-type.decorator';
import { IsBoolean, IsDefined, IsEmail, IsEnum, IsOptional, Length, MinLength } from 'class-validator';

import config from '../config/config.main';
import { UserRole } from '../user/user.enum';

@InputType()
export class ILogin {

  @IsDefined()
  @Field()
  username: string;

  @MinLength(config.auth.password.minimumLength)
  @Field()
  password: string;

}
