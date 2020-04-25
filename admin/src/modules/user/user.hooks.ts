import * as mutations from './user.mutations'
import * as queries from './user.queries'

import { useMutation, useQuery } from 'core/graphql/graphql.hooks'

import { GraphqlResponse } from 'core/graphql/graphql.types'
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
): MutationTuple<User, { input: ICreateUser }> {
	return useMutation(mutations.createUser, {
		onCompleted,
	})
}

type IUpdateUser = {
	id: number
	username: string
	email: string
	password: string
	role: UserRole
	isActive: boolean
}
export function useUpdateUser(
	onCompleted?: (result: Partial<User>) => unknown,
): MutationTuple<Partial<User>, { input: IUpdateUser }> {
	return useMutation(mutations.updateUser, {
		onCompleted,
	})
}
