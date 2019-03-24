import gql  from 'graphql-tag';

const GET_ALL_TAGS = gql`
  query{
    allTags(first: 10) {
      id
      name
    }
  }
`;

export { GET_ALL_TAGS };