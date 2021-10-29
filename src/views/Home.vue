<template>
   <div class="home container">
     <h2>Home</h2>
      <Reservations/>
   </div>
</template>
<script>
// @ is an alias to /src
import Reservations from '../components/Reservations'
 export default {
  name: 'Home',
  components: {
     Reservations
  }
}
</script>

 