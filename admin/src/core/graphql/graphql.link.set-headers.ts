import { ApolloLink } from 'apollo-link'
import { getAccessToken } from 'core/crypto/crypto.utils'

// Adds access token header
const linkSetHeaders = new ApolloLink((operation, forward) => {
	const token = getAccessToken()

	operation.setContext(({ headers = {} }) => ({
		headers: {
			...headers,
			...(token ? { authorization: `Bearer ${token}` } : {}),
		},
	}))

	return forward(operation)
})

export default linkSetHeaders
