import ApiError from './error'
import { generic } from './error.constants'

class NotFoundError extends ApiError {
	constructor(code = generic.NOT_FOUND, message = `Resource not found`, info?: object) {
		super(code, message, 404, info)
	}
}

export default NotFoundError
