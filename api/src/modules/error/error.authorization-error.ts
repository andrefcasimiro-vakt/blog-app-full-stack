import ApiError from './error'
import { generic } from './error.constants'

class AuthorizationError extends ApiError {
	constructor(code = generic.AUTHORIZATION, message = `No permission to access`, info?: object) {
		super(code, message, 403, info)
	}
}

export default AuthorizationError
