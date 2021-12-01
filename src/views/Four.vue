<template>
  <div class="four">
      <img class="icecream_four mt-4 rounded-circle" src="../assets/icecream.jpg" alt="">
      <h1 class="four_header display-1">404 page</h1>
      <p class="lead">We couldn't connect to the page you were lookin for. 
          Let's go back to the <router-link :to="{name:'Home'}">homepage</router-link>.</p>
  </div>
</template>

<script>
export default {
name:"Four"
}
</script>

<style>
.four{
    color:white;
}
.icecream_four{
width: 50%;    
}
</style>