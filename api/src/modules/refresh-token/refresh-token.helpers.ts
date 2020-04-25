import * as crypto from 'crypto'

import * as jwt from 'jsonwebtoken'

import { hashString } from '../bcrypt/bcrypt.helpers'
import config from '../config/config.main'
import { User } from '../user/user.model'
import { errors } from './refresh-token.errors'
import { GeneratedAccessToken, RefreshToken } from './refresh-token.types'

export const generateRefreshToken = async (): Promise<RefreshToken> => {
  const token = crypto
    .randomBytes(config.auth.refreshToken.length).toString('hex')

  const hashedToken = await hashString(token)

  return {
    refreshToken: token,
    refreshTokenHash: hashedToken,
    createdAt: new Date().toISOString(),
  }
}

export const generateAccessToken = (payload: Partial<User>) => {
  const { id, email, role } = payload

  if (!id || !email || !role) {
    throw new Error(errors.INVALID_PAYLOAD_INFORMATION)
  }

  const jwtPayload = { id, email, role }

  return jwt.sign(
    jwtPayload,
    config.jwt.secret,
    { expiresIn: config.jwt.expiresIn },
  )
}

export const generateAuthTokens = async (payload = {}): Promise<GeneratedAccessToken> => {
  const accessToken = await generateAccessToken(payload)
  const { expiresIn } = config.jwt

  return {
    accessToken,
    expiresIn,
  }
}
