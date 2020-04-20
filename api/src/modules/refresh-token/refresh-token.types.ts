export type RefreshToken = {
  refreshToken: string,
  refreshTokenHash: string,
  createdAt: string,
}

export type GeneratedAccessToken = {
  accessToken: string,
  expiresIn: number,
}

export interface IAuthRefreshToken {
  email: string
  refreshToken: string
}
