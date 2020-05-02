import winston from 'winston'

import config from '../config/config.main'

const LOG_DIRECTORY = `logs`

const logger = winston.createLogger({
	level: config.logger.logLevel,

	format: winston.format.json(),
	transports: [
		new winston.transports.File({ filename: `${LOG_DIRECTORY}/error.log`, level: 'error' }),
		// - Write all logs with level `info` and below to `combined.log`
		new winston.transports.File({ filename: `${LOG_DIRECTORY}/combined-log.log` }),
	],
})

const alignedWithColorsAndTime = winston.format.combine(
	winston.format.colorize(),
	winston.format.timestamp(),
	winston.format.align(),
	winston.format.printf((info) => {
		const { timestamp, level, message, ...args } = info

		const ts = timestamp.slice(0, 19).replace('T', ' ')
		return `[${level}] ${ts}: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`
	}),
)

if (process.env.NODE_ENV !== 'production') {
	logger.add(
		new winston.transports.Console({
			format: alignedWithColorsAndTime,
		}),
	)
}

export default logger
