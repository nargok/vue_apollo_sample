<template>
  <ApolloQuery :query="query">
    <template slot-scope="{ result: { loading, error, data }}">
      <span v-if="loading">Loading...</span>
      <span v-else-if="error">An error occured</span>
      <section v-else-if="data">
        <div>My Apollo Component</div>
        <div>{{data.allTags}}</div>

      </section>
      <span v-else>No result</span>
    </template>
  </ApolloQuery>
</template>

<script>
  import { GET_ALL_TAGS } from '../query';

  export default {
    name: "Apollo",
    data() {
      return {
       query: GET_ALL_TAGS
      };
    },
  }
</script>

<style scoped>

</style>