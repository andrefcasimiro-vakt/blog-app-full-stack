import { from } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http/lib/httpLink'
import ApolloClient from 'apollo-client/ApolloClient'
import { InMemoryCache } from 'apollo-cache-inmemory/lib/inMemoryCache'
import customFetch from './graphl.custom-fetch'
import linkSetHeaders from './graphql.link.set-headers'
import linkExtractTokens from './graphql.link.extract-tokens'
import linkErrors from './graphql.link.errors'
import { config } from 'modules/app/app.config'

const httpLink = createHttpLink({
	uri: config.graphql.uri,
	fetch: customFetch,
})

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: from([linkErrors, linkSetHeaders, linkExtractTokens, httpLink]),
})
