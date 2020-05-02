import { LoggerService } from '@nestjs/common'

import logger from './logger.winston'

export class Logger implements LoggerService {
	log(message: string) {
		logger.info(message)
	}

	info(message: string) {
		logger.info(message)
	}

	error(message: string) {
		logger.error(message)
	}

	warn(message: string) {
		logger.warn(message)
	}

	debug(message: string) {
		logger.debug(message)
	}

	verbose(message: string) {
		logger.verbose(message)
	}
}
