import gql from 'graphql-tag'

export const userMinimumDetailsFragment = gql`
	fragment userMinimumDetailsFragment on User {
		id
		username
		email
		role
		lastLoginAt
	}
`

export const userFullDetailsFragment = gql`
	fragment userFullDetailsFragment on User {
		id
		username
		email
		role
		isActive
		lastLoginAt
	}
`
