<template>
  <div class="landing">
        <h1>Landing Page</h1>
        <p><router-link :to="{name:'Reservation'}">Make a Reservation</router-link></p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Landing',
    data(){
        return{
            
        }
    },
    mounted(){
         this.$store.dispatch('getUsersTest')
    }
    
}
</script>

<style>

</style>