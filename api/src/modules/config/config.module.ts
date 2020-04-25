import { Module } from '@nestjs/common'
import { ConfigModule as NestjsConfigModule } from '@nestjs/config'

@Module({
  imports: [NestjsConfigModule.forRoot({
    envFilePath: ['.env']
  })]
})
export class ConfigModule { }
