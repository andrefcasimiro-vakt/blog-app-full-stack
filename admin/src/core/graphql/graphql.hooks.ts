import { useQuery as apolloUseQuery } from '@apollo/react-hooks';
import { GraphqlResponse } from 'core/graphql/graphql.types'
import { DocumentNode } from 'graphql';

export function useQuery<Variables, Data> (
  query: DocumentNode,
  variables: Variables,
): GraphqlResponse<Data> {  
  const { data, loading, error } = apolloUseQuery(query, {
    variables,
  })

  return {
    data,
    loading,
    error,
  }  
}

