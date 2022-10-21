import { gql } from '@apollo/client'

export const CREATE_PROFILE = gql`
  mutation createProfile($object: profile_insert_input!) {
    insert_profile_one(object: $object) {
      id
      title
      description
    }
  }
`
