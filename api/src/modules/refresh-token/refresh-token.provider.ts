import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { generateRefreshToken } from './refresh-token.helpers'
import config from '../config/config.main'
import { RefreshToken as RefreshTokenEntity } from './refresh-token.entity'
import { RefreshToken as RefreshTokenModel } from './refresh-token.model'
import { compareHashed } from '../bcrypt/bcrypt.helpers'
import { User } from '../user/user.model'

@Injectable()
export class RefreshTokenProvider {

  constructor(
    @InjectRepository(RefreshTokenEntity)
    private refreshTokenRepository: Repository<RefreshTokenModel>,
  ){}

  /**
   * Generates a new refresh token for the provided user and saves to the database
   * User is allowed to have a limited number of refresh tokens (set in config)
   * If limit is reached, the oldest refresh tokens are deleted from database
   */
  async createRefreshToken(user: User): Promise<string> {
    const newRefreshData = await generateRefreshToken()
    const { limit } = config.auth.refreshToken

    const refreshTokens = await this.refreshTokenRepository
      .find({
        where: [{ user }],
        order: { id: 'DESC' },
      })

    // Delete extra refresh tokens
    const extraRefreshTokens = refreshTokens.slice(limit - 1)
    if (extraRefreshTokens.length) {
      extraRefreshTokens.forEach(async (extraRefreshToken) => {
        await this.refreshTokenRepository
          .delete({
            id: extraRefreshToken.id,
          })
      })
    }

    const newRefreshToken = await this.refreshTokenRepository
      .save({
        hash: newRefreshData.refreshTokenHash,
        user,
      })

    const { separator } = config.auth.refreshToken
    return `${newRefreshToken.id}${separator}${newRefreshData.refreshToken}`
  }

  async isValidRefreshToken(
    userId: number,
    refreshTokenPayload: string,
  ): Promise<boolean> {
    const { separator } = config.auth.refreshToken
    if (refreshTokenPayload.indexOf(separator) === -1) {
      return false
    }

    const [refreshTokenId, refreshTokenHash] = refreshTokenPayload.split(separator)
    
    if (isNaN(refreshTokenId as any)) {
      return false
    }

    if (!Number.isInteger(parseFloat(refreshTokenId))) {
      return false
    }

    const refreshTokenInDatabase = await this.refreshTokenRepository
      .findOne({
        where: [
          { userId },
          { id: refreshTokenId },
        ],
      })

    if (!refreshTokenInDatabase) {
      return false
    }

    // Finally, compare hashes
    const isValidHash = await compareHashed(refreshTokenHash, refreshTokenInDatabase.hash)
    return isValidHash
  }
}
