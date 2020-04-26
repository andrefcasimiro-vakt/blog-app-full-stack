import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core/constants'
import { mapModules } from 'src/modules/config/config.helpers'
import config from 'src/modules/config/config.main'

import { RolesGuard } from '../roles/roles.guard'

@Module({
  imports: mapModules(config.modules),
  providers: [
  ]
})
export class AppModule { }
