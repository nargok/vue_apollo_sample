import Vue from 'vue'
import VueRouter from 'vue-router'

// import App from '../App';
import Apollo from '@/components/Apollo'
import CreateTag from '@/components/CreateTag';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Apollo
    },
    {
      path: '/create_tag',
      component: CreateTag

    },
  ]
})
