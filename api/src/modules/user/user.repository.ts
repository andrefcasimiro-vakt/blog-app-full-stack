import { Repository } from 'typeorm'

import { User } from './user.entity'

const userRepository = new Repository<User>()

/** A static repository, useful for operating outside nestjs
 * E. g. e-mail actions
 */
export default userRepository
