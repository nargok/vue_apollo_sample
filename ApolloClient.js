import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache} from "apollo-cache-inmemory";

const httpLink = new HttpLink({
  uri: 'https://api.graphcms.com/simple/v1/awesomeTalksClone',
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export default apolloClient;