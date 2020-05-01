import ApiError from './error'
import { generic } from './error.constants';

class RateLimitError extends ApiError {
  constructor(
    code = generic.RATE_LIMIT,
    message = `Rate limit`,
    info?: object
  ) {
    super(code, message, 429, info)
  }
}

export default RateLimitError
