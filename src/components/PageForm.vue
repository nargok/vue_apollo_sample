<template>
  <div>
    <p>現在の表示数: {{numberOfItem}}</p>
    <input type="number" class="per_page" v-model="inputPerPage"/>
    <button @click="changeDisplayNumberOfItems" class="display_button">表示</button>
  </div>
</template>

<script>
  export default {
    name: "PageForm",
    props: {
      numberOfItem: {
        type: Number
      }
    },
    data: function () {
      return {
        inputPerPage: 0,
      }
    },
    methods: {
      changeDisplayNumberOfItems() {
        this.$emit('changePageOfItem', parseInt(this.inputPerPage));
      },
    }
  }
</script>

<style scoped>
.per_page {
  font-size: 14pt;
  margin: 5px;
  padding: 5px;
}
.display_button {
  font-size: 14pt;
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>