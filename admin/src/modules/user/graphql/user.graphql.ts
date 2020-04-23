import gql from 'graphql-tag'
import { Query } from 'core/graphql/graphql.types'
import { User } from '../types/user.types'

export const getUserById: Query<User> = {
	gql: gql`
		query getUserByUsername($username: String!) {
			getUserByUsername(username: $username) {
				id
				username
				role
			}
		}
	`,
	selector: ['getUserByUsername'],
}

export const listUsers: Query<User[]> = {
	gql: gql`
		query listUsers {
			listUsers {
				id
				username
				email
				role
				lastLoginAt
			}
		}
	`,
	selector: ['listUsers'],
}
