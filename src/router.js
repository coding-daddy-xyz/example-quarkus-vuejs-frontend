import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/UserList'
import UserCreate from '@/components/UserCreate'
import UserDetails from '@/components/UserDetails'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: UserList },
    { path: '/user', component: UserCreate },
    { path: '/user/:id', component: UserDetails, },
  ]
})