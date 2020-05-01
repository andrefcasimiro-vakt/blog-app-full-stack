import ApiError from './error'
import { generic } from './error.constants';

class InternalError extends ApiError {
  constructor(
    code = generic.INTERNAL,
    message = `Something went wrong`,
    info?: object
  ) {
    super(code, message, 500, info)
  }
}

export default InternalError
