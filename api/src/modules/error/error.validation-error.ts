import ApiError from './error'
import { generic } from './error.constants'

class ValidationError extends ApiError {
	constructor(code = generic.VALIDATOR, message = `Validation did not pass`, info?: object) {
		super(code, message, 400, info)
	}
}

export default ValidationError
