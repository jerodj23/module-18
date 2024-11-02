import { gql } from '@apollo/client';

export const QUERY_GET_ALL_USERS = gql`
    query userInfo {
        Users {
                _id
                username
                email
                bookCount
                savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const GET_ME = gql`
    query ME {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                authors
                title
                bookId
            }
        }
    }
`;
