import * as crypto from 'crypto'

import { compare, hash } from 'bcrypt'
import config from 'src/modules/config/config.main'

const pepperify = (str: string): string => crypto
  .createHmac('sha1', config.auth.pepper)
  .update(str)
  .digest('hex')

export const hashString = async (plainText: string): Promise<string> =>
  await hash(pepperify(plainText), config.auth.saltRounds)

export const compareHashed = async (plainText: string, cipherText: string): Promise<boolean> =>
  await compare(pepperify(plainText), cipherText)


