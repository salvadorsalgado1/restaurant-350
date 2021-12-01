import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'
import MakeReservation from '../views/MakeReservation.vue'
import SignIn from '../views/SignIn.vue'
import Customer from '../views/Customer.vue'
import Four from '../views/Four.vue'
import Manager from '../views/Manager.vue'
import store from '../store/index'
import Reservation from '../views/Reservation.vue'
import Sign from '../views/Sign.vue'
import Registration from '../views/Registration.vue'
 Vue.use(VueRouter)
 
const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/register',
    name: 'Registration',
    component: Registration
  },
  
  {
    path: '/get-started',
    name: 'Sign',
    component: Sign
  },
  {
    path: '/make-reservation',
    name: 'MakeReservation',
    component: MakeReservation
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
    path: '/reservation',
    name: 'Reservation',
    component: Reservation,
    meta:{employee:true}
  },
  {
    path: '/manager',
    name: 'Manager',
    component: Manager,
    meta:{manager:true}
  },
  {
    path: '/:catchall(.*)',
    name: 'Four',
    component: Four
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
 
router.beforeEach((to, from, next) => {
  if (to.meta.manager == false && !store.state.manager) next({ name: 'Landing' })
  else next()
})
  
      
 

export default router
