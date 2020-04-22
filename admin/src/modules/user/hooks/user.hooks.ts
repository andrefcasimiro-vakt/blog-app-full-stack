import * as queries from '../graphql/user.graphql'
import { User } from '../types/user.types'
import { GraphqlResponse } from 'core/graphql/graphql.types'
import { useQuery } from 'core/graphql/graphql.hooks'

export function useGetUserByUsername(variables: {
	username: string
}): GraphqlResponse<User> {
	return useQuery(queries.getUserById, variables)
}
