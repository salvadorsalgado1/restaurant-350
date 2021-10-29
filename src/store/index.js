import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getUsersTest(){
      axios.get('http://localhost:5000/api/test/users')
      .then(response=>{
        console.log(response.data)
      })
    },
    getUsers(){
      
    }
  },
  modules: {
  }
})
