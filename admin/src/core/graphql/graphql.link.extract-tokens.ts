import { ApolloLink } from 'apollo-link'
import { path } from 'ramda'
import { setAccessToken, setRefreshToken } from 'core/crypto/crypto.utils'
import { config } from 'modules/app/app.config'

/**
 * When the backend responds, the headers should include:

  Access-Control-Expose-Headers: * // or the name of your refreshToken field

  https://stackoverflow.com/questions/47443858/apollo-link-response-headers/58986484#58986484
 */

// Saves tokens to local storage if they come in response headers
const linkExtractTokens = new ApolloLink((operation, forward) =>
	forward(operation).map((response) => {
		const ctx = operation.getContext()
		const headers: Headers | undefined = path(['response', 'headers'], ctx)

		if (headers) {
			console.log(
				'(config.http.customHeaders.accessToken: ',
				config.http.customHeaders.accessToken,
			)
			const accessToken = headers.get(config.http.customHeaders.accessToken)
			const refreshToken = headers.get(config.http.customHeaders.refreshToken)

			if (accessToken) setAccessToken(accessToken)
			if (refreshToken) setRefreshToken(refreshToken)
		}

		return response
	}),
)

export default linkExtractTokens
