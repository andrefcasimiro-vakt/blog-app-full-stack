import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { UserModule } from "../user/user.module";
import { SeederProvider } from "./seeder.provider";

@Module({
  imports: [
    DatabaseModule,
    UserModule,
  ],
  providers: [
    SeederProvider,
  ]
})
export class SeederModule { }
