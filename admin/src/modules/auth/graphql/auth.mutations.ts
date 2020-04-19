import gql from 'graphql-tag'
import { Mutation } from 'core/graphql/graphql.types'
import { AuthToken } from '../types/auth.types'

export const login: Mutation<AuthToken> = {
  gql: gql`
    mutation login(
      $username: String!,
      $password: String!,
    ) {
      login(username: $username, password: $password) {
        token
      }
    }
  `
}


