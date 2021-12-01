import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state: {
    allReservations:[],
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
    reservations:[],
    logged:false,
    manager:false,
    employee:false
  },
  mutations: {
    logoutUser(state){
      state.logged = false;
      state.manager=false;
      state.employee=false;
    },
    setDeleteReservation(state, payload){
      let id = parseInt(payload)
      console.log(id)
      state.allReservations = state.allReservations.filter(res=>{ 
        return res.resID != id
    })
    },
    setAllReservations(state, payload){
      state.allReservations = payload;

    },
    Loading(state, payload){
      state.loading = payload;
    },
    setUser(state, payload){
      state.logged = true;
      state.user.guestID = payload[0][0].guestID
      state.user.fullName = payload[0][0].fullName
      state.user.phoneNumber = payload[0][0].phoneNumber
      state.user.email = payload[0][0].email
      if(payload[0][0].employee == 1){
        state.employee = true;
      }
      if(payload[0][0].manager == 1){
        state.manager = true;
      }
      state.user.employee = payload[0][0].employee
      state.user.manager = payload[0][0].manager 
    },
    setReservations(state, payload){
      state.reservations = payload
    }
  },
  actions: {
    dispatchReservations({commit}, payload){
      console.log(payload)
      axios.get(`/api/reservation/user/${payload}`)
      .then(response=>{
        commit('setReservations', response.data)
        console.log(response.data)
      })
    },
    submitReservation({commit}, payload){
      axios.post(`/api/reservation/create/`, {
        id:payload.id,
        resTime:payload.reservationTime,
        resSize:payload.resSize
      })
      .then(()=>{
        console.log("Reservation Created")
      })
    },
    dispatchDeleteReservation({commit}, payload){
      console.log("deleted: ", payload)
      axios.delete(`/api/reservation/delete/${payload}`)
        .then(()=>{
          console.log("reservation deleted")
        })
        commit("setDeleteReservation", payload)
    },
    
    dispatchAllReservations({commit}){
      axios.get("/api/reservation/")
      .then(response=>{
        commit('setAllReservations', response.data)
        console.log(response.data)
      })
    },
    dispatchLogin({commit}, payload){
      console.log(payload.email)
      axios.get(`/api/login/${payload.email}`)
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
      axios.get(`/api/login/accept/${payload}`)
      .then(response=>{
        commit('setUser', response.data)
        console.log(response.data)
      })
    }
  },
  modules: {
  }
})
