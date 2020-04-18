import * as queries from './user.graphql'
import { User } from './user.model'
import { GraphqlResponse } from 'core/graphql/graphql.types'
import { useQuery } from 'core/graphql/graphql.hooks'

export function useGetUserByUsername(
  variables: { username: string }
): GraphqlResponse<User> {
  return useQuery(
    queries.getUserById,
    variables,
  )
}
