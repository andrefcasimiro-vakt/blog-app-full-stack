import gql from 'graphql-tag'
import { Query } from 'core/graphql/graphql.types'
import { User } from './user.types'
import {
	userMinimumDetailsFragment,
	userFullDetailsFragment,
} from './user.fragments'

export const getUserByUsername: Query<User> = {
	gql: gql`
		query getUserByUsername($username: String!) {
			getUserByUsername(username: $username) {
				...userFullDetailsFragment
			}
		}
		${userFullDetailsFragment}
	`,
	selector: ['getUserByUsername'],
}

export const getUserById: Query<User> = {
	gql: gql`
		query getUserById($id: Int!) {
			getUserById(id: $id) {
				...userFullDetailsFragment
			}
		}
		${userFullDetailsFragment}
	`,
	selector: ['getUserById'],
}

export const listUsers: Query<User[]> = {
	gql: gql`
		query listUsers {
			listUsers {
				...userMinimumDetailsFragment
			}
		}
		${userMinimumDetailsFragment}
	`,
	selector: ['listUsers'],
}
