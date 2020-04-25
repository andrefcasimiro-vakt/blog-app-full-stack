import * as mutations from './auth.mutations'

import { AuthResponse } from './auth.types'
import { MutationTuple } from '@apollo/react-hooks/lib/types'
import { useMutation } from 'core/graphql/graphql.hooks'

type UseLoginVariables = {
	username: string
	password: string
}
export function useLogin(
	onCompleted?: (result: AuthResponse) => unknown,
): MutationTuple<AuthResponse, { input: UseLoginVariables }> {
	return useMutation(mutations.login, {
		onCompleted,
	})
}
