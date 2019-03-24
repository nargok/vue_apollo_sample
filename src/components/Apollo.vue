<template>
  <ApolloQuery :query="query">
    <template slot-scope="{ result: { loading, error, data }}">
      <span v-if="loading">Loading...</span>
      <span v-else-if="error">An error occured</span>
      <section v-else-if="data">
        <div>My Apollo Component</div>
        <ul v-for="item in data.allTags" class="tag-list">
          <li class="tag-item">{{item.name}}</li>
        </ul>
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

<style>
.tag-list {
  text-align: left;
  font-size: 16pt;
}
.tag-item {
  background-color: aliceblue;
  padding: 10px;

}
</style>