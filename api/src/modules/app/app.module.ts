import { Module } from '@nestjs/common'
import { mapModules } from 'src/modules/config/config.helpers'
import config from 'src/modules/config/config.main'

@Module({
  imports: mapModules(config.modules),
})
export class AppModule { }
