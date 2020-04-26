import { GraphqlResponse, Mutation, Query } from 'core/graphql/graphql.types'
import {
	MutationHookOptions,
	MutationTuple,
	useMutation as apolloUseMutation,
	useQuery as apolloUseQuery,
} from '@apollo/react-hooks'

import { ApolloError } from 'apollo-client/errors/ApolloError'
import { MutationFunctionOptions } from '@apollo/react-common'
import { path } from 'ramda'

export function useQuery<Variables, Data>(
	query: Query<Data>,
	variables: Variables,
): GraphqlResponse<Data> {
	const { gql, fetchPolicy, selector, transform } = query

	let { data, loading, error } = apolloUseQuery(gql, {
		variables,
		fetchPolicy: fetchPolicy || 'cache-and-network',
	})

	if (transform) {
		data = transform(data)
	} else if (selector) {
		data = path(selector)(data)
	}

	return {
		data,
		loading,
		error,
	}
}

export interface UseMutationReturn<Variables, Data> {
	mutate: (
		options?: MutationFunctionOptions<any, Record<string, any>> | undefined,
	) => Promise<any>
	data: any
	loading: boolean
	error: ApolloError | undefined
}

/**
 * We need to perform selector extraction twice because the data in the return and the one received on onCompleted are parallel to each other
 */
export function useMutation<Variables, Data>(
	mutation: Mutation<Data>,
	options: MutationHookOptions = {},
): UseMutationReturn<Variables, Data> {
	const { selector } = mutation

	const [mutate, { data, loading, error }] = apolloUseMutation(mutation.gql, {
		...options,
		onCompleted: (data: Data) => {
			data = transform<Data>(data, selector)

			if (options.onCompleted) {
				options.onCompleted(data)
			}
		},
	})

	return {
		mutate,
		data: transform<Data>(data, selector),
		loading,
		error,
	}
}

function transform<Data>(data: Data, selector?: string[]): Data {
	return (selector ? path(selector)(data) : data) as Data
}
