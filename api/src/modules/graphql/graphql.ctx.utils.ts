import { AuthResponse } from "../auth/auth.model";
import config from "../config/config.main";

const exposeHeader = (ctx, key: string) =>
  ctx.req.res.set({
    'Access-Control-Expose-Headers': key,
  })

export const setAuthHeaders = (ctx, authResponse: Partial<AuthResponse>) => {
  const { accessToken, refreshToken } = authResponse

  const accessTokenHeaderName = config.http.customHeaders.accessToken
  const refreshTokenHeaderName = config.http.customHeaders.refreshToken

  if (accessToken) {
    ctx.req.res.set(accessTokenHeaderName, accessToken)
  }

  if (refreshToken) {
    ctx.req.res.set(refreshTokenHeaderName, refreshToken)
  }

  // Expose access and refresh token in Access Control Expose Headers
  exposeHeader(ctx, `${accessTokenHeaderName}, ${refreshTokenHeaderName}`)
}



