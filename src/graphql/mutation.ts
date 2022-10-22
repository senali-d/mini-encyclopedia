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

export const UPDATE_PROFILE = gql`
  mutation updateProfile($id: uuid!, $profile_set_input: profile_set_input!) {
    update_profile(where: { id: { _eq: $id } }, _set: $profile_set_input) {
      returning {
        id
        title
        description
        image
      }
    }
  }
`