import { ApolloError } from "apollo-client/errors/ApolloError";
import { DocumentNode } from "graphql";
import { FetchPolicy } from "apollo-client";

export interface GraphqlResponse<T> {
  data: T,
  loading: boolean,
  error: ApolloError | any,
}

interface Base<Data> {
  gql: DocumentNode,
  /** The path used to extract the graphql data */
  selector?: string[],
}

export interface Query<Data> extends Base<Data> {
  gql: DocumentNode,
  selector?: string[],
  fetchPolicy?: FetchPolicy,
  /** If set, will act as a callback to modify the received data before returning it */
  transform?: (data: Data) => any,
}

export interface Mutation<Data> extends Base<Data> {
  /** If set, will refetch the given query immediately after the mutation response is returned */
  refetchQueries?: Query<Data>[],
}

