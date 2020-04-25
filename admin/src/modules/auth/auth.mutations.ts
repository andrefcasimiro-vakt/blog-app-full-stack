import { AuthResponse } from './auth.types'
import { Mutation } from 'core/graphql/graphql.types'
import gql from 'graphql-tag'

export const login: Mutation<AuthResponse> = {
	gql: gql`
		mutation login($input: ILogin!) {
			login(input: $input) {
				user {
					id
					username
					email
					role
				}
			}
		}
	`,
	selector: ['login'],
}

export const getRefreshTokenMutation: Mutation<{
	accessToken: string
}> = {
	gql: gql`
		mutation getAccessToken($email: String!, $refreshToken: String!) {
			getAccessToken(email: $email, refreshToken: $refreshToken) {
				accessToken
			}
		}
	`,
	selector: ['getAccessToken'],
}
