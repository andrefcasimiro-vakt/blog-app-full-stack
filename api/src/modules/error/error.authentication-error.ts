import ApiError from './error'
import { generic } from './error.constants'

class AuthenticationError extends ApiError {
	constructor(code = generic.AUTHORIZATION, message = `Authentication process failed`, info?: object) {
		super(code, message, 401, info)
	}
}

export default AuthenticationError
