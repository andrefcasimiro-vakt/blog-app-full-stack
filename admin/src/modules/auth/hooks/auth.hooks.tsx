
import { useMutation } from 'core/graphql/graphql.hooks'
import { AuthResponse } from '../types/auth.types'
import { MutationTuple } from '@apollo/react-hooks/lib/types'
import * as mutations from '../graphql/auth.mutations'

type UseLoginVariables = {
  username: string,
  password: string,
}
export function useLogin(): MutationTuple<AuthResponse, UseLoginVariables> {
  return useMutation(mutations.login)
}
