<template>
  <div class="landing">
    <div class="container">
     <div class="card mt-4">
      <div class="card-body">
        <h1>Welcome to our Spa!</h1>
        <p>You can either sign in to view your reservations, or you can create an account.</p>
          <div class="d-grid gap-2 col-4 mx-auto">
            <router-link class="btn btn-primary btn-controls btn-controls-1" :to="{name:'Signin'}">Sign In</router-link>
            <router-link class="btn btn-primary btn-controls" :to="{name:'Reservation'}">Register</router-link>
         </div>
      </div>
    </div> 
    </div>
  </div>
</template>
<script>
 export default {
    name:'Landing',
    data(){
        return{
            
        }
    },
}
</script>

<style>
 
 
</style>