import {
	useQuery as apolloUseQuery,
	useMutation as apolloUseMutation,
	MutationTuple,
	MutationHookOptions,
} from '@apollo/react-hooks'
import { GraphqlResponse, Query, Mutation } from 'core/graphql/graphql.types'
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

export function useMutation<Variables, Data>(
	mutation: Mutation<Data>,
	options: MutationHookOptions = {},
): MutationTuple<Data, Variables> {
	return apolloUseMutation(mutation.gql, {
		...options,
		onCompleted: (data: Data) => {
			if (mutation.selector) {
				// @ts-ignore
				data = path(mutation.selector)(data)
			}

			// If we pass an onCompleted callback, execute it after data is extracted
			if (options.onCompleted) options.onCompleted(data)
		},
	})
}
