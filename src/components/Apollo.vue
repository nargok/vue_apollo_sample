<template>
    <div>My Apollo Component</div>
</template>

<script>
  import gql from 'graphql-tag';

  export default {
    apollo: {
      // Simple query that will update the 'hello' vue property
      allTask: gql`
      {
        allTags(first: 10) {
        id
        name
        }
      }`,
    },
  }
</script>

<style scoped>

</style>