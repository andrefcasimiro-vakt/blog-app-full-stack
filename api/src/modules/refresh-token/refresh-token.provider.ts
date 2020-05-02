import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { compareHashed } from '../bcrypt/bcrypt.helpers'
import config from '../config/config.main'
import { User } from '../user/user.model'
import { RefreshToken as RefreshTokenEntity } from './refresh-token.entity'
import { generateRefreshToken } from './refresh-token.helpers'
import { RefreshToken as RefreshTokenModel } from './refresh-token.model'

@Injectable()
export class RefreshTokenProvider {
	constructor(
		@InjectRepository(RefreshTokenEntity) private readonly _refreshTokenRepository: Repository<RefreshTokenModel>,
	) {}

	/**
   * Generates a new refresh token for the provided user and saves to the database
   * User is allowed to have a limited number of refresh tokens (set in config)
   * If limit is reached, the oldest refresh tokens are deleted from database
   */
	async createRefreshToken(user: User): Promise<string> {
		const newRefreshData = await generateRefreshToken()
		const { limit } = config.auth.refreshToken

		const refreshTokens = await this._refreshTokenRepository.find({
			where: [ { user } ],
			order: { id: 'DESC' },
		})

		// Delete extra refresh tokens
		const extraRefreshTokens = refreshTokens.slice(limit - 1)
		if (extraRefreshTokens.length) {
			extraRefreshTokens.forEach(async (extraRefreshToken) => {
				await this._refreshTokenRepository.delete({
					id: extraRefreshToken.id,
				})
			})
		}

		const newRefreshToken = await this._refreshTokenRepository.save({
			hash: newRefreshData.refreshTokenHash,
			user,
		})

		const { separator } = config.auth.refreshToken
		return `${newRefreshToken.id}${separator}${newRefreshData.refreshToken}`
	}

	async isValidRefreshToken(userId: number, refreshTokenPayload: string): Promise<boolean> {
		const { separator } = config.auth.refreshToken
		if (refreshTokenPayload.indexOf(separator) === -1) {
			return false
		}

		const [ refreshTokenId, refreshTokenHash ] = refreshTokenPayload.split(separator)

		if (isNaN(refreshTokenId as any)) {
			return false
		}

		if (!Number.isInteger(parseFloat(refreshTokenId))) {
			return false
		}

		const refreshTokenInDatabase = await this._refreshTokenRepository.findOne({
			where: [ { userId }, { id: refreshTokenId } ],
		})

		if (!refreshTokenInDatabase) {
			return false
		}

		// Finally, compare hashes
		const isValidHash = await compareHashed(refreshTokenHash, refreshTokenInDatabase.hash)
		return isValidHash
	}
}
