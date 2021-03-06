const generic = {
	INTERNAL: 'E_INTERNAL_SERVER_ERROR',
	VALIDATOR: 'E_VALIDATION',
	CONFLICT: 'E_CONFLICT',
	NOT_FOUND: 'E_NOT_FOUND',
	AUTHORIZATION: 'E_AUTHORIZATION',
	RATE_LIMIT: 'E_RATE_LIMIT',
}

const refreshToken = {
	EMAIL_NOT_FOUND: 'EMAIL_NOT_FOUND',
	INVALID_REFRESH_TOKEN: 'INVALID_REFRESH_TOKEN',
	INVALID_PAYLOAD_INFORMATION: 'INVALID_PAYLOAD_INFORMATION',
}

const queue = {
	QUEUE_INVALID_TASK: 'QUEUE_INVALID_TASK',
}

export { generic, refreshToken, queue }
