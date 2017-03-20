import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Tree from '../views/Tree'
import Networking from '../views/Networking'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
    	path:'/tree',
    	component: Tree
    },
    {
    	path:'/network',
    	component: Networking
    }
  ]
})
