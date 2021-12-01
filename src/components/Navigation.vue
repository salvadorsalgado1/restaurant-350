<template>
  <div class="restaurant-nav">
      <nav class="navbar navbar-expand-lg "  style="background-color:rgb(235, 141, 134)">
  <div class="container-fluid">
     <router-link class="navbar-brand" :to="{name:'Landing'}">Landing</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <span v-if="!this.$store.state.logged" class="navbar-text">
        <router-link :to="{name:'Signin'}">Sign In</router-link> | 
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
.navbar-text a{
  color:white;
}
.navbar-brand{
  color:white;
}
</style>