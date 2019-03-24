<template>
  <div id="app">
    <Apollo />
  </div>
</template>

<script>
import Apollo from "./components/Apollo";

export default {
  name: 'app',
  components: {
    Apollo,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
