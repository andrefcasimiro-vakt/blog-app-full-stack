import { useMutation } from 'core/graphql/graphql.hooks'
import { MutationTuple } from '@apollo/react-hooks/lib/types'
import * as mutations from './auth.mutations'
import { AuthResponse } from './auth.types'

type UseLoginVariables = {
	username: string
	password: string
}
export function useLogin(
	onCompleted?: (result: AuthResponse) => unknown,
): MutationTuple<AuthResponse, UseLoginVariables> {
	return useMutation(mutations.login, {
		onCompleted,
	})
}
