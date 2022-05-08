import { gql } from '@apollo/client';

export const EDIT_USER = gql`mutation editar($image: String!, $name: String!, $userId: uuid!) {
    update_user(where: {id: {_eq: $userId}}, _set: {image: $image, name: $name}) {
      affected_rows
    }
  }
`;