import * as queries from './user.queries'
import * as mutations from './user.mutations'
import { GraphqlResponse } from 'core/graphql/graphql.types'
import { useQuery, useMutation } from 'core/graphql/graphql.hooks'
import { MutationTuple } from '@apollo/react-hooks/lib/types'
import { User } from './user.types'
import { UserRole } from './user.enums'

export function useGetUserByUserId(variables: {
	id: number
}): GraphqlResponse<User> {
	return useQuery(queries.getUserById, variables)
}

type ICreateUser = {
	username: string
	email: string
	password: string
	role: UserRole
	isActive: boolean
}
export function useCreateUser(
	onCompleted?: (result: User) => unknown,
): MutationTuple<User, ICreateUser> {
	return useMutation(mutations.createUser, {
		onCompleted,
	})
}
