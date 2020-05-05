import { NestFactory } from '@nestjs/core'

import { AppModule } from './modules/app/app.module'
import config from './modules/config/config.main'
import { Logger } from './modules/logger/logger.provider'
import logger from './modules/logger/logger.winston'

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		// cors: true,
		logger: new Logger(),
	})
	await app.listen(config.app.port)
}
bootstrap()
