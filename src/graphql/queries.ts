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
