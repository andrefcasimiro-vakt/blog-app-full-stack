import { DynamicModule } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { BlogModule } from 'src/modules/blog/blog.module';
import { ConfigModule } from 'src/modules/config/config.module';
import { DatabaseModule } from 'src/modules/database/database.module';
import { GraphQLModule } from 'src/modules/graphql/graphql.module';
import { RefreshTokenModule } from '../refresh-token/refresh-token.module';
import { UserModule } from '../user/user.module';
export declare const moduleMappers: {
    auth: typeof AuthModule;
    blog: typeof BlogModule;
    config: typeof ConfigModule;
    database: typeof DatabaseModule;
    graphql: typeof GraphQLModule;
    refreshToken: typeof RefreshTokenModule;
    user: typeof UserModule;
};
export declare type Modules = typeof AuthModule | typeof BlogModule | typeof ConfigModule | typeof DatabaseModule | typeof GraphQLModule | typeof RefreshTokenModule | typeof UserModule | DynamicModule;
