import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
  query {
    characters{
      results{
        id,
        name,
        status,
        species,
        image
      }
    }
  }
`

export const GET_CHARACTER_BY_ID = gql`
  query($id: ID!) {
    character(id: $id) {
      id,
      name,
      status,
      species,
      image
    }
  }
`