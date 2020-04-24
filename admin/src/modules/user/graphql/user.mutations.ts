import gql from 'graphql-tag'
import { Mutation } from 'core/graphql/graphql.types'
import { User } from '../types/user.types'

export const createUser: Mutation<User> = {
	gql: gql`
		mutation createUser(
			$username: String!
			$email: String!
			$password: String!
			$role: String!
			$isActive: Boolean!
		) {
			createUser(
				username: $username
				email: $email
				password: $password
				role: $role
				isActive: $isActive
			) {
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
