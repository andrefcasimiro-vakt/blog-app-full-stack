import { AuthResponse } from "../auth/auth.model";
import config from "../config/config.main";

const exposeHeader = (ctx, key: string) =>
  ctx.req.res.set({
    'Access-Control-Expose-Headers': key,
  })

export const setAuthHeaders = (ctx, authResponse: Partial<AuthResponse>) => {
  const { accessToken, refreshToken } = authResponse
  
  if (accessToken) {
    const accessTokenHeaderName = config.http.customHeaders.accessToken
    
    ctx.req.res.set(accessTokenHeaderName, accessToken)
    exposeHeader(ctx, accessTokenHeaderName)
  }

  if (refreshToken) {
    const refreshTokenHeaderName = config.http.customHeaders.refreshToken
    
    ctx.req.res.set(refreshTokenHeaderName, refreshToken)
    exposeHeader(ctx, refreshTokenHeaderName)
  }
}
