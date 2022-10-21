import { gql } from '@apollo/client'

export const GET_PROFILE = gql`
  query Profile {
    profile(order_by: { createdAt: asc }) {
      id
      title
      description
      image
    }
  }
`

export const GET_PROFILE_WITH_FACTS = gql`
  query ProfileByPk($id: uuid!) {
    profile_by_pk(id: $id) {
      id
      title
      description
      image
      facts {
        id
        fact
      }
    }
  }
`