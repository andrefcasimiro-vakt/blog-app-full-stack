import { Module } from "@nestjs/common";

import { AclProvider } from "./acl.provider";

@Module({
  imports: [
  ],
  providers: [
    AclProvider,
  ],
  exports: [
    AclProvider,
  ]
})
export class AclModule { }
