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
        <div>
          <input type="number" class="per_page" v-model="input_per_page"/>
          <button @click="changeDisplayNumberOfItems">表示</button>
        </div>
        <hr>
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
        query: GET_ALL_TAGS,
        tag_per_page: 15,
        input_per_page: 0,
      };
    },
    methods: {
      changeDisplayNumberOfItems() {
        this.tag_per_page = parseInt(this.input_per_page);
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