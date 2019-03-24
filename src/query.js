import gql  from 'graphql-tag';

const GET_ALL_TAGS = gql`
  query getTags($page: Int = 10) {
    allTags(first: $page) {
      id
      name
    }
}
`;

const CREATE_TAG = gql`
  mutation createTag($isPublished: Boolean, $name: String) {
    createTag(isPublished: $isPublished, name: $name) {
      id
      name
      createdAt
    }
  }
`;

export { GET_ALL_TAGS, CREATE_TAG };