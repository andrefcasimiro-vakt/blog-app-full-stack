import { ApolloError } from "apollo-client/errors/ApolloError";

export interface GraphqlResponse<T> {
  data: T,
  loading: boolean,
  error: ApolloError | unknown,
}
