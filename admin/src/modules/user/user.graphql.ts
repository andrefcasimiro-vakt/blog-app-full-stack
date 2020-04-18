import gql from 'graphql-tag'

export const getUserById = gql`
  query findByUsername($username: String!) {
    findByUsername(username: $username) {
      id
      username
      role
    }
  }
`


