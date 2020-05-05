import * as crypto from 'crypto'

import config from '../config/config.main'

/**
 * Generates the reset password code
 */
export const generateResetPasswordCode = () =>
	crypto.randomBytes(config.auth.password.resetPasswordMinimumLength).toString('hex')
