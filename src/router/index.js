import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'
import Reservation from '../views/Reservation.vue'
import SignIn from '../views/SignIn.vue'
import Customer from '../views/Customer.vue'
import Four from '../views/Four.vue'
import Manager from '../views/Manager.vue'
import store from '../store/index'


Vue.use(VueRouter)
 
const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    
  },
  {
    path:'/customer',
    name:'Customer',
    component:Customer,
     
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SignIn
  },
  {
    path: '/:catchall(.*)',
    name: 'Four',
    component: Four
  },
  {
    path: '/manager',
    name: 'Manager',
    component: Manager,
    meta:{manager:true}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.meta.manager && !store.state.manager){
    next('/customer')
  }else{
    next();
  }

  if(to.meta.employee && !store.state.employee){
    next('/customer')
  }else{
    next();
  }
})

export default router
