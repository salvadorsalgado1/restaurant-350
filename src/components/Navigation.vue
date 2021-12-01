<template>
  <div class="restaurant-nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
     <router-link class="navbar-brand" :to="{name:'Landing'}">Landing</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
         <router-link class="nav-link active" :to="{name:'Home'}">Home</router-link>
        <router-link class="nav-link" :to="{name:'About'}">About</router-link>
      </div>
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