import * as mutations from './auth.mutations'

import { UseMutationReturn, useMutation } from 'core/graphql/graphql.hooks'

import { AuthResponse } from './auth.types'
import { MutationTuple } from '@apollo/react-hooks/lib/types'

type UseLoginVariables = {
	username: string
	password: string
}
export function useLogin(
	onCompleted?: (result: AuthResponse) => unknown,
): UseMutationReturn<AuthResponse, { input: UseLoginVariables }> {
	return useMutation(mutations.login, {
		onCompleted,
	})
}
