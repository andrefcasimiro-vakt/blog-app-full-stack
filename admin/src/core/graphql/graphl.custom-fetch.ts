import {
  getEmailFromAccessToken,
  getRefreshToken,
  purgeAccessToken,
  setAccessToken,
} from 'core/crypto/crypto.utils'
import { errors } from './graphql.errors'
import { mutate } from './graphql.utils'
import { getRefreshTokenMutation } from 'modules/auth/graphql/auth.mutations'

const customFetch = (
  uri: RequestInfo,
  options: RequestInit,
) => fetch(uri, options).then(response => {
  if (response.status !== 401) {
    // If is not an authorization error
    return response
  }

  const email = getEmailFromAccessToken()
  const refreshToken = getRefreshToken()

  if (!email || !refreshToken) {
    throw new Error(errors.AUTHORIZATION_ERROR)
  }

  purgeAccessToken()

  return mutate(getRefreshTokenMutation, {
    email,
    refreshToken,
  }).then(({ accessToken }) => {
    setAccessToken(accessToken)

    // Set authorization header
    // @ts-ignore
    options.headers.authorization = `Bearer ${accessToken}`

    return fetch(uri, options)
  })
})

export default customFetch
