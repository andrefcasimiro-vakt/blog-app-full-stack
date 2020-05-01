import ApiError from './error'
import { generic } from './error.constants';

class ConflictError extends ApiError {
  constructor(
    code = generic.CONFLICT,
    message = `Conflict record exists`,
    info?: object
  ) {
    super(code, message, 409, info)
  }
}

export default ConflictError
