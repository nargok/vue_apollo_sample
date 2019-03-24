import gql  from 'graphql-tag';

const GET_ALL_TAGS = gql`
  query getTags($page: Int = 10) {
    allTags(first: $page) {
      id
      name
    }
}
`;

export { GET_ALL_TAGS };