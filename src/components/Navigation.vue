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
          <router-link class="nav-link" :to="{name:'About'}">About</router-link>
         </li>
        
      </ul>
      <span v-if="!this.$store.state.logged" class="navbar-text">
        <router-link :to="{name:'SignIn'}">Sign In</router-link> | 
        <router-link :to="{name:'Registration'}">Sign Up</router-link>  
      </span>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>