import { omit } from 'ramda'

import { User } from './user.entity'

/**
 * Returns a user object without its password
 */
export const omitPassword = (u: User | Partial<User>): Omit<User | Partial<User>, 'password'> => omit([ 'password' ], u)
