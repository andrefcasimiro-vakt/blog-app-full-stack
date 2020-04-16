import * as crypto from 'crypto'
import * as bcrypt from 'bcrypt'
import config from 'src/modules/config/config.main'

const pepperify = (str: string): string => {
  return crypto
    .createHmac('sha1', config.auth.pepper)
    .update(str)
    .digest('hex')
}

export const hashString = (plainText: string): string =>
  bcrypt.hash(pepperify(plainText), config.auth.saltRounds)

export const compareHashed = (plainText, cipherText): boolean =>
  bcrypt.compare(pepperify(plainText), cipherText)


