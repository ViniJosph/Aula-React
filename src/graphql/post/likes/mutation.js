import { gql } from '@apollo/client';

export const ADD_LIKE = gql `
mutation like($id: uuid!, $likes: Int!) {
    update_post(where: {id: {_eq: $id}}, _set: {likes: $likes}) {
      affected_rows
    }
  }
`
