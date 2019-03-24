<template>
  <ApolloQuery
    :query="query"
    :variables="{page: tag_per_page}"
  >
    <template slot-scope="{ result: { loading, error, data }}">
      <span v-if="loading">Loading...</span>
      <span v-else-if="error">An error occured {{error.message}}}</span>
      <section v-else-if="data">
        <h2>表示数を変更する</h2>
        <PageForm
          v-bind:numberOfItem="tag_per_page"
          v-on:changePageOfItem="changeDisplayNumberOfItems"
        />
        <ul v-for="item in data.allTags" class="tag-list">
          <li class="tag-item">{{item.name}}</li>
        </ul>
      </section>
      <span v-else>No result</span>
    </template>
  </ApolloQuery>
</template>

<script>
  import PageForm from './PageForm';
  import { GET_ALL_TAGS } from '../query';

  export default {
    name: "Apollo",
    components: {PageForm},
    data() {
      return {
        query: GET_ALL_TAGS,
        tag_per_page: 15,
      };
    },
    methods: {
      changeDisplayNumberOfItems(inputPerPage) {
        this.tag_per_page = inputPerPage;
      },
    }
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