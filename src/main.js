import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import apolloClient from "./ApolloClient";
import router from './router'

Vue.config.productionTip = false

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  el: '#app',
  router,
  apolloProvider,
  render: h => h(App),
});
