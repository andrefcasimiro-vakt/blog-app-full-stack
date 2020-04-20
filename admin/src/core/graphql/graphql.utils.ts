import { client } from './graphql.apollo-client'
import { Mutation } from './graphql.types';
import { path } from 'ramda';
import { purgeTokens } from 'core/crypto/crypto.utils';
import { purgePersistor } from 'core/redux/redux.persistor.utils';

/**
 * Helper for accessing apolloClient's mutate method 
 */
export function mutate<Response, Variables>(
  { gql, selector }: Mutation<Response>,
  variables: Variables,  
): Promise<Response> {
  // @ts-ignore
  return client
    .mutate({
      mutation: gql,
      variables,
    })
    .then((data: Response) => selector ? path(selector)(data) : data)
}

export const purgeEverything =  ({
  resetStore = false,
}: {
  resetStore: boolean
}): Promise<void> => {
  purgeTokens()
  purgePersistor()

  // Reset analytics

  if (resetStore) {
    client.resetStore()
  }

  return Promise.resolve()
}


