import { Mutation } from 'core/graphql/graphql.types'
import { User } from './user.types'
import gql from 'graphql-tag'

export const createUser: Mutation<User> = {
	gql: gql`
		mutation createUser($input: ICreateUser!) {
			createUser(input: $input) {
				id
				username
				email
				role
				isActive
			}
		}
	`,
	selector: ['createUser'],
}

export const updateUser: Mutation<Partial<User>> = {
	gql: gql`
		mutation updateUser($input: IUpdateUser!) {
			updateUser(input: $input) {
				id
			}
		}
	`,
	selector: ['updateUser'],
}

export const deleteUser: Mutation<{ id: number }> = {
	gql: gql`
		mutation deleteUser($input: IDeleteUser!) {
			deleteUser(input: $input)
		}
	`,
	selector: ['deleteUser'],
}
