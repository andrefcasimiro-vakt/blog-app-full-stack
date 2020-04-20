export type AuthUser = {
  id: number,
  username: string,
  email: string,
}

export type AuthResponse = {
  user: AuthUser,
  accessToken: string,
  refreshToken: string,
}

export type RefreshAccessToken = {
  accessToken: string,
  expiresIn: number,
}
