<template>
    <div class="reservation container mt-4">
      <div class="card shadow p-3 mb-5 bg-body rounded">
      <div class="card-body">
        <form @submit.prevent="submitLogin(email, password)">
          <div class="row mb-4">
            <div class="col-md-6">
                <img class="signin-image" src="../assets/material.jpg" alt=""/>
            </div>
              <div class="col-md-6"> 
              <div class="col-md-12">
                <h1 class="heading-h1-reservations mb-4">Sign In</h1>
                <div>
                <label class="form-label">Email</label>
                <input type="email" class="form-control" id="email" aria-describedby="" v-model="email">
              </div>
            </div>
            <div class="col-md-12">
              <div>
                <label class="form-label">Password</label>
                <input type="password" class="form-control" id="password" aria-describedby="" v-model="password">
              </div>
               <button class="btn btn-primary mt-4">Submit</button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  </div> 
</template>

<script>
 export default {
   name:'SignIn',
  data(){
    return{
      password:'',
      email:''
    }
  },
  methods:{
    submitLogin(email, password){
      this.$store.dispatch('dispatchLogin', {email: email, password: password})
      this.$router.push({name:'Customer'})
    }
  }
    
}
</script>

<style>
.signin-image{
 width:60%;
}
</style>