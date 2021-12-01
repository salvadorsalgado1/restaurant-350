<template>
  <div class="restaurant-nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
     <router-link class="navbar-brand" :to="{name:'Landing'}">Landing</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Home'}">Home</router-link>
         </li>
         <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Customer'}">Your Reservations</router-link>
         </li>
         <li class="nav-item">
          <router-link class="nav-link" :to="{name:'MakeReservation'}">Create Reservation</router-link>
         </li>
      </ul> 
        
        <div v-if="this.$store.state.employee">
          <router-link class="nav-link active" :to="{name:'Reservation'}">Reservations</router-link>
        </div>
        <div v-if="this.$store.state.manager">
           <router-link class="nav-link" :to="{name:'Manager'}">Manager</router-link>
        </div>
        <span v-if="this.$store.state.logged" class="navbar-text">
        <button @click="loggout" class="btn btn-primary log-out text-white">Logout</button> 
      </span>
   
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
methods:{
  loggout(){
    this.$store.commit('logoutUser');
      this.$router.push({name:'Landing'})
  }
}
}
</script>

<style>
.log-out{
  margin-left:20px;
  background-color:rgb(34, 177, 221);
  border-color:rgb(34, 177, 221);
}
</style>