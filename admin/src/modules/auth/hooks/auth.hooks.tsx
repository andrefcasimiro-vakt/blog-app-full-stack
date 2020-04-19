
import { GraphqlResponse } from 'core/graphql/graphql.types'
import { useMutation } from 'core/graphql/graphql.hooks'
import { AuthToken } from '../types/auth.types'
import { MutationTuple } from '@apollo/react-hooks/lib/types'
import * as mutations from '../graphql/auth.mutations'

type UseLoginVariables = {
  username: string,
  password: string,
}
export function useLogin(): MutationTuple<AuthToken, UseLoginVariables> {
  return useMutation(mutations.login)
}
