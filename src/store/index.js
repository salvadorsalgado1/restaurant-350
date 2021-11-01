import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state: {
    loading:false,
    month:[
    'January','February','March','April','May','June',
    'July','August','September','October','November', 'December'],
    user:{  
      guestID: '', 
      fullName:'', 
      phoneNumber:'', 
      email:'', 
      employee: 0, 
      manager: 0,
      reservations:[]
    },
    test:[]
  },
  mutations: {
    Loading(state, payload){
      state.loading = payload;
    },
    setUser(state, payload){
      
      state.user.guestID = payload[0][0].guestID
      state.user.fullName = payload[0][0].fullName
      state.user.phoneNumber = payload[0][0].phoneNumber
      state.user.email = payload[0][0].email
      state.user.employee = payload[0][0].employee
      state.user.manager = payload[0][0].manager
      state.user.reservations = payload[1]
      
    }
  },
  actions: {
   
    dispatchLogin({commit}, payload){
      console.log(payload.email)
      axios.get(`http://localhost:5000/api/login/${payload.email}`)
      .then(response=>{
        let password = response.data[0].userPassword
        let id = response.data[0].guestID
        console.log(response.data);
        if(password == payload.password){
          this.dispatch('dispatchUser', id)
          
          
        }else{
          console.log("not accepted")
        }
      })
    },
    dispatchUser({commit}, payload){
      axios.get(`http://localhost:5000/api/login/accept/${payload}`)
      .then(response=>{
        commit('setUser', response.data)
        console.log(response.data)
      })
    }
  },
  modules: {
  }
})
