import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/modules/user/user.model'
import { UserProvider } from 'src/modules/user/user.provider'

import { compareHashed } from '../bcrypt/bcrypt.helpers'
import { RefreshTokenProvider } from '../refresh-token/refresh-token.provider'
import { AuthResponse } from './auth.types'

@Injectable()
export class AuthProvider {
	constructor(
		private readonly _userProvider: UserProvider,
		private readonly _jwtProvider: JwtService,
		private readonly _refreshTokenProvider: RefreshTokenProvider,
	) { }

	async validateUser(username: string, pwd: string): Promise<User> {
		const user = await this._userProvider.findByUsername(username)

		if (!user) {
			return null
		}

		const isMatchBetweenPasswords = await compareHashed(pwd, user.password)

		if (!isMatchBetweenPasswords) {
			return null
		}

		const { password, ...result } = user
		return user
	}

	async login(user: User): Promise<AuthResponse> {
		const payload = { username: user.username, id: user.id }

		const accessToken = this._jwtProvider.sign(payload)

		// Generate refresh token
		const refreshToken = await this._refreshTokenProvider.createRefreshToken(user)

		// Update last login
		await this._userProvider.updateLastLoginAt(user.id)

		return {
			user,
			accessToken,
			refreshToken,
		}
	}
}
